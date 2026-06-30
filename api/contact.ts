import { google } from 'googleapis';

// IP Rate limiting memory store to prevent API spamming
const rateLimits = new Map<string, { count: number; resetTime: number }>();

// Escapes Sheets formula characters (=, +, -, @) to prevent formula injects
function sanitizeForFormulaInjection(val: any): string {
  if (typeof val !== 'string') return val ?? '';
  const trimmed = val.trim();
  if (trimmed.startsWith('=') || trimmed.startsWith('+') || trimmed.startsWith('-') || trimmed.startsWith('@')) {
    return `'${trimmed}`;
  }
  return trimmed;
}

export async function onRequestPost({ request, env }: { 
  request: Request; 
  env: { 
    GOOGLE_CLIENT_EMAIL: string; 
    GOOGLE_PRIVATE_KEY: string; 
    GOOGLE_SHEET_ID: string; 
  } 
}) {
  try {
    // 0. Simple IP rate-limiting to prevent API spamming
    const clientIp = request.headers.get('CF-Connecting-IP') || 
                     request.headers.get('x-real-ip') || 
                     'unknown-ip';
    
    if (clientIp !== 'unknown-ip') {
      const now = Date.now();
      const limitWindowMs = 10 * 60 * 1000; // 10 minutes
      const maxRequests = 5; // allow up to 5 requests per 10 mins
      
      let rateData = rateLimits.get(clientIp);
      if (!rateData || now > rateData.resetTime) {
        rateData = { count: 0, resetTime: now + limitWindowMs };
      }
      
      rateData.count++;
      rateLimits.set(clientIp, rateData);
      
      if (rateData.count > maxRequests) {
        return new Response(
          JSON.stringify({ 
            message: 'Too many requests. Please try again after some time.',
            detail: 'Submission limit reached'
          }),
          { status: 429, headers: { 'Content-Type': 'application/json' } }
        );
      }
    }

    const body = await request.json();
    const { name, mobile, email, businessType, message, message_subject } = body;

    // Honeypot detection: If honeypot is filled, return success silently to fool the spam bot
    if (message_subject) {
      console.warn('[Byalance] Honeypot triggered in dev handler. Silent redirect.');
      return new Response(
        JSON.stringify({ message: 'Success' }), 
        { status: 200, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Sanitize user inputs to protect the spreadsheet against Google Sheets / Excel Formula Injection
    const secureName = sanitizeForFormulaInjection(name);
    const secureMobile = sanitizeForFormulaInjection(mobile);
    const secureEmail = sanitizeForFormulaInjection(email);
    const secureBusinessType = sanitizeForFormulaInjection(businessType);
    const secureMessage = sanitizeForFormulaInjection(message);

    let clientEmail = (env.GOOGLE_CLIENT_EMAIL ?? '').trim();
    let privateKey = (env.GOOGLE_PRIVATE_KEY ?? '').trim();
    let sheetId = (env.GOOGLE_SHEET_ID ?? '').trim();

    // Clean wrapping quotes that could be introduced during copy-paste
    clientEmail = clientEmail.replace(/^["']|["']$/g, '').trim();
    privateKey = privateKey.replace(/^["']|["']$/g, '').trim();
    sheetId = sheetId.replace(/^["']|["']$/g, '').trim();

    if (!clientEmail || !privateKey || !sheetId) {
      return new Response(
        JSON.stringify({ 
          message: 'Google Sheets sync is not fully configured. Please set GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, and GOOGLE_SHEET_ID in your hosting environment variables.' 
        }), 
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Dynamically retrieve the first sheet name to prevent "Unable to parse range" on renamed/localized sheets
    let targetSheetName = 'Sheet1';
    try {
      const spreadsheetInfo = await sheets.spreadsheets.get({
        spreadsheetId: sheetId,
        fields: 'sheets.properties.title'
      });
      if (spreadsheetInfo.data?.sheets && spreadsheetInfo.data.sheets.length > 0 && spreadsheetInfo.data.sheets[0].properties?.title) {
        targetSheetName = spreadsheetInfo.data.sheets[0].properties.title;
      }
    } catch (metaErr: any) {
      console.warn('[Byalance] Could not retrieve spreadsheet sheet title dynamically, using fallback Sheet1:', metaErr.message);
    }

    const range = `'${targetSheetName}'`;
    const valueInputOption = 'RAW';

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    const requestBody = {
      values: [[
        timestamp, 
        secureName ?? '', 
        secureMobile ?? '', 
        secureEmail ?? '', 
        secureBusinessType ?? '', 
        secureMessage ?? ''
      ]],
    };

    await sheets.spreadsheets.values.append({
      spreadsheetId: sheetId,
      range,
      valueInputOption,
      insertDataOption: 'OVERWRITE',
      requestBody,
    });

    return new Response(
      JSON.stringify({ message: 'Success' }), 
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error: any) {
    console.error('Error in /api/contact:', error);
    return new Response(
      JSON.stringify({ 
        message: 'Error submitting form.', 
        error: error.message,
        detail: error.response?.data || error 
      }), 
      { 
        status: 500, 
        headers: { 'Content-Type': 'application/json' } 
      }
    );
  }
}
