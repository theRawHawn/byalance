import { Check, X, TrendingDown, ArrowRight, Scale } from "lucide-react";
import { useLanguage, type Language } from "../../context/LanguageContext";

/**
 * LANDED-COST BREAKDOWN & COMPARISON
 * ---------------------------------------------------------------
 * Shows the same import order priced two ways: through a traditional
 * Indian trading company / reseller vs. through Byalance's transparent
 * direct import & doorstep delivery model.
 */

const UNITS = 500;

interface TeardownRow {
  label: string;
  value: string;
  note?: string;
}

interface TeardownI18n {
  badge: string;
  title: string;
  desc: string;
  traderTitle: string;
  traderRows: TeardownRow[];
  traderLandedLabel: string;
  traderSummary: string;
  byalanceTitle: string;
  byalanceRows: TeardownRow[];
  byalanceLandedLabel: string;
  byalanceSummary: string;
  savingsUnit: string;
  savingsPct: string;
  savingsTotal: string;
  quoteButton: string;
  disclaimer: string;
}

const teardownI18n: Record<Language, TeardownI18n> = {
  en: {
    badge: "Landed Cost Breakdown",
    title: "Same order. Priced twice.",
    desc: "One overseas factory, one 500-unit batch of CNC-machined aluminium enclosures. See how middleman markups inflate your customs duty versus transparent direct procurement.",
    traderTitle: "Through a Traditional Trader / Reseller",
    traderRows: [
      { label: "Factory Price (FOB)", value: "₹735", note: "Original $8.50 invoice hidden from you" },
      { label: "Trader markup, baked in (+22%)", value: "₹897" },
      { label: "Forex & conversion spread (+1.5%)", value: "₹910" },
      { label: "Customs: BCD 7.5% + SWS + IGST 18%", value: "+₹252", note: "Duty charged on marked-up price" },
    ],
    traderLandedLabel: "Landed cost / unit",
    traderSummary: "500 units · ₹5,81,000 total. You pay customs duty on their margin, and the original supplier invoice is withheld.",
    byalanceTitle: "Byalance · Transparent Direct Import",
    byalanceRows: [
      { label: "Factory Price (FOB)", value: "₹735", note: "Original factory invoice passed through" },
      { label: "Customs: BCD 7.5% + SWS + IGST 18%", value: "+₹204", note: "Assessed on actual ₹735 factory value" },
      { label: "International freight, customs clearance, GST billing & fee", value: "+₹135", note: "Transparent line item, no hidden charges" },
    ],
    byalanceLandedLabel: "Doorstep delivered / unit",
    byalanceSummary: "500 units · ₹5,37,000 total. Single Indian PO, 100% GST Tax Invoice (claim ITC), customs duty paid on actual factory price.",
    savingsUnit: "₹88/unit",
    savingsPct: "8%",
    savingsTotal: "₹44,000 saved",
    quoteButton: "Get Landed Cost Quote",
    disclaimer: "Illustrative comparison for Indian businesses. Customs duty shown as Basic Customs Duty (BCD 7.5%) + Social Welfare Surcharge (SWS) + IGST 18%, computed per Indian Customs & CBIC rules. Exact landed cost depends on your 8-digit HSN code and origin."
  },
  hi: {
    badge: "लैंडेड कॉस्ट विश्लेषण",
    title: "एक ही ऑर्डर। दो अलग कीमतें।",
    desc: "एक विदेशी फ़ैक्टरी, CNC-मशीन्ड एल्यूमीनियम एनक्लोज़र का 500-यूनिट बैच। देखें कि बिचौलियों का मार्जिन आपके सीमा शुल्क (Customs Duty) को कैसे बढ़ाता है, जबकि Byalance पारदर्शी सीधी खरीद प्रदान करता है।",
    traderTitle: "पारंपरिक ट्रेडर / पुनर्विक्रेता के माध्यम से",
    traderRows: [
      { label: "फ़ैक्टरी मूल्य (FOB)", value: "₹735", note: "मूल $8.50 का इनवॉइस आपसे छुपाया गया" },
      { label: "ट्रेडर का मार्जिन (+22%)", value: "₹897" },
      { label: "फॉरेक्स और रूपांतरण स्प्रेड (+1.5%)", value: "₹910" },
      { label: "सीमा शुल्क: BCD 7.5% + SWS + IGST 18%", value: "+₹252", note: "बढ़े हुए मूल्य पर ड्यूटी लगाई गई" },
    ],
    traderLandedLabel: "लैंडेड लागत / यूनिट",
    traderSummary: "500 यूनिट्स · कुल ₹5,81,000। आप ट्रेडर के मुनाफ़े पर भी सीमा शुल्क देते हैं और मूल सप्लायर इनवॉइस नहीं देख पाते।",
    byalanceTitle: "Byalance · पारदर्शी प्रत्यक्ष आयात",
    byalanceRows: [
      { label: "फ़ैक्टरी मूल्य (FOB)", value: "₹735", note: "वास्तविक फ़ैक्टरी इनवॉइस आपके सामने" },
      { label: "सीमा शुल्क: BCD 7.5% + SWS + IGST 18%", value: "+₹204", note: "मूल ₹735 फ़ैक्टरी मूल्य पर ही ड्यूटी की गणना" },
      { label: "अंतर्राष्ट्रीय माल ढुलाई, कस्टम्स निकासी, जीएसटी बिलिंग व शुल्क", value: "+₹135", note: "पारदर्शी लाइन आइटम, कोई छिपा शुल्क नहीं" },
    ],
    byalanceLandedLabel: "घर तक डिलीवरी / यूनिट",
    byalanceSummary: "500 यूनिट्स · कुल ₹5,37,000। एकल भारतीय PO, 100% जीएसटी टैक्स इनवॉइस (ITC क्लेम करें), वास्तविक फ़ैक्टरी मूल्य पर टैक्स।",
    savingsUnit: "₹88/यूनिट",
    savingsPct: "8%",
    savingsTotal: "₹44,000 की बचत",
    quoteButton: "लैंडेड कॉस्ट कोटेशन प्राप्त करें",
    disclaimer: "भारतीय व्यवसायों के लिए उदाहरणात्मक तुलना। सीमा शुल्क की गणना भारतीय सीमा शुल्क एवं CBIC नियमों के अनुसार BCD (7.5%) + SWS + IGST (18%) के आधार पर की गई है। सटीक लागत 8-अंकीय HSN कोड पर निर्भर करती है।"
  },
  kn: {
    badge: "ಲ್ಯಾಂಡೆಡ್ ವೆಚ್ಚದ ವಿಶ್ಲೇಷಣೆ",
    title: "ಒಂದೇ ಆರ್ಡರ್. ಎರಡು ವಿಭಿನ್ನ ಬೆಲೆಗಳು.",
    desc: "ಒಂದೇ ವಿದೇಶಿ ಕಾರ್ಖಾನೆ, CNC-ಮೆಷಿನ್ಡ್ ಅಲ್ಯೂಮಿನಿಯಂ ಎನ್‌ಕ್ಲೋಸರ್‌ಗಳ 500-ಯೂನಿಟ್ ಬ್ಯಾಚ್. ಮಧ್ಯವರ್ತಿಗಳ ಮಾರ್ಜಿನ್ ನಿಮ್ಮ ಕಸ್ಟಮ್ಸ್ ಸುಂಕವನ್ನು ಹೇಗೆ ಹೆಚ್ಚಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ನೋಡಿ.",
    traderTitle: "ಸಾಂಪ್ರದಾಯಿಕ ವ್ಯಾಪಾರಿ / ಮರುಮಾರಾಟಗಾರರ ಮೂಲಕ",
    traderRows: [
      { label: "ಕಾರ್ಖಾನೆಯ ಬೆಲೆ (FOB)", value: "₹735", note: "ಮೂಲ $8.50 ಇನ್‌ವಾಯ್ಸ್ ನಿಮ್ಮಿಂದ ಮುಚ್ಚಿಡಲಾಗಿದೆ" },
      { label: "ವ್ಯಾಪಾರಿಯ ಲಾಭಾಂಶ (+22%)", value: "₹897" },
      { label: "ಫಾರೆಕ್ಸ್ ಮತ್ತು ಕರೆನ್ಸಿ ಶುಲ್ಕ (+1.5%)", value: "₹910" },
      { label: "ಕಸ್ಟಮ್ಸ್: BCD 7.5% + SWS + IGST 18%", value: "+₹252", note: "ಹೆಚ್ಚಿಸಲಾದ ಬೆಲೆಯ ಮೇಲೆ ಕಸ್ಟಮ್ಸ್ ಸುಂಕ" },
    ],
    traderLandedLabel: "ಲ್ಯಾಂಡೆಡ್ ವೆಚ್ಚ / ಯೂನಿಟ್‌ಗೆ",
    traderSummary: "500 ಯೂನಿಟ್‌ಗಳು · ಒಟ್ಟು ₹5,81,000. ನೀವು ಅವರ ಲಾಭಾಂಶದ ಮೇಲೂ ಸುಂಕ ಪಾವತಿಸುತ್ತೀರಿ ಮತ್ತು ಮೂಲ ಇನ್‌ವಾಯ್ಸ್ ಸಿಗುವುದಿಲ್ಲ.",
    byalanceTitle: "Byalance · ಪಾರದರ್ಶಕ ನೇರ ಆಮದು",
    byalanceRows: [
      { label: "ಕಾರ್ಖಾನೆಯ ಬೆಲೆ (FOB)", value: "₹735", note: "ಅಸಲಿ ಕಾರ್ಖಾನೆ ಇನ್‌ವಾಯ್ಸ್ ನೇರ ವರ್ಗಾವಣೆ" },
      { label: "ಕಸ್ಟಮ್ಸ್: BCD 7.5% + SWS + IGST 18%", value: "+₹204", note: "ಅಸಲಿ ₹735 ಕಾರ್ಖಾನೆ ಮೌಲ್ಯದ ಮೇಲೆ ಸುಂಕ ಲೆಕ್ಕಾಚಾರ" },
      { label: "ಅಂತರರಾಷ್ಟ್ರೀಯ ಸರಕು ಸಾಗಣೆ, ಕಸ್ಟಮ್ಸ್ ಕ್ಲಿಯರೆನ್ಸ್, ಜಿಎಸ್‌ಟಿ ಶುಲ್ಕ", value: "+₹135", note: "ಸ್ಪಷ್ಟ ಶುಲ್ಕ, ಯಾವುದೇ ಗುಪ್ತ ವೆಚ್ಚಗಳಿಲ್ಲ" },
    ],
    byalanceLandedLabel: "ಮನೆಬಾಗಿಲಿಗೆ ತಲುಪಿಸಿದ ವೆಚ್ಚ / ಯೂನಿಟ್‌ಗೆ",
    byalanceSummary: "500 ಯೂನಿಟ್‌ಗಳು · ಒಟ್ಟು ₹5,37,000. ಒಂದೇ ಭಾರತೀಯ PO, 100% ಜಿಎಸ್‌ಟಿ ತೆರಿಗೆ ಇನ್‌ವಾಯ್ಸ್ (ITC ಪಡೆಯಿರಿ), ನೈಜ ಬೆಲೆಯ ಮೇಲೆ ಸುಂಕ.",
    savingsUnit: "₹88/ಯೂನಿಟ್",
    savingsPct: "8%",
    savingsTotal: "₹44,000 ಉಳಿತಾಯ",
    quoteButton: "ಲ್ಯಾಂಡೆಡ್ ವೆಚ್ಚದ ಕೋಟ್ ಪಡೆಯಿರಿ",
    disclaimer: "ಭಾರತೀಯ ವ್ಯವಹಾರಗಳಿಗಾಗಿ ವಿವರಣಾತ್ಮಕ ಹೋಲಿಕೆ. ಕಸ್ಟಮ್ಸ್ ಸುಂಕವನ್ನು BCD (7.5%) + SWS + IGST (18%) ಅಡಿಯಲ್ಲಿ CBIC ನಿಯಮಗಳಂತೆ ಲೆಕ್ಕಹಾಕಲಾಗಿದೆ. ನಿಖರವಾದ ವೆಚ್ಚವು 8-ಅಂಕಿಯ HSN ಕೋಡ್ ಅನ್ನು ಅವಲಂಬಿಸಿರುತ್ತದೆ."
  },
  te: {
    badge: "ల్యాండెడ్ కాస్ట్ విశ్లేషణ",
    title: "ఒకే ఆర్డర్. రెండు వేర్వేరు ధరలు.",
    desc: "ఒకే విదేశీ ఫ్యాక్టరీ, CNC-మెషిన్డ్ అల్యూమినియం ఎన్‌క్లోజర్‌ల 500-యూనిట్ల బ్యాచ్. మధ్యవర్తులు మీ కస్టమ్స్ డ్యూటీని ఎలా పెంచుతారో చూడండి.",
    traderTitle: "సాంప్రదాయ వ్యాపారి / పునఃవిక్రేత ద్వారా",
    traderRows: [
      { label: "ఫ్యాక్టరీ ధర (FOB)", value: "₹735", note: "అసలు $8.50 ఇన్వాయిస్ మీ నుండి దాచబడింది" },
      { label: "ట్రేడర్ మార్జిన్ (+22%)", value: "₹897" },
      { label: "ఫారెక్స్ & కరెన్సీ ఛార్జీ (+1.5%)", value: "₹910" },
      { label: "కస్టమ్స్: BCD 7.5% + SWS + IGST 18%", value: "+₹252", note: "పెంచిన ధరపై కస్టమ్స్ డ్యూటీ విధించబడింది" },
    ],
    traderLandedLabel: "ల్యాండెడ్ ఖర్చు / యూనిట్",
    traderSummary: "500 యూనిట్లు · మొత్తం ₹5,81,000. మీరు వారి లాభంపై కూడా సుంకం చెల్లిస్తారు మరియు అసలు ఇన్వాయిస్ చూడలేరు.",
    byalanceTitle: "Byalance · పారదర్శక ప్రత్యక్ష దిగుమతి",
    byalanceRows: [
      { label: "ఫ్యాక్టరీ ధర (FOB)", value: "₹735", note: "వాస్తవ ఫ్యాక్టరీ ఇన్వాయిస్ మీకు నేరుగా అందుతుంది" },
      { label: "కస్టమ్స్: BCD 7.5% + SWS + IGST 18%", value: "+₹204", note: "నిజమైన ₹735 ఫ్యాక్టరీ విలువపై మాత్రమే డ్యూటీ లెక్కింపు" },
      { label: "అంతర్జాతీయ రవాణా, కస్టమ్స్ క్లియరెన్స్, జీఎస్టీ బిల్లింగ్ & ఫీజు", value: "+₹135", note: "పారదర్శక అంశాలు, ఎటువంటి దాచిన ఛార్జీలు లేవు" },
    ],
    byalanceLandedLabel: "డోర్‌స్టెప్ డెలివరీ / యూనిట్",
    byalanceSummary: "500 యూనిట్లు · మొత్తం ₹5,37,000. ఒకే భారతీయ PO, 100% జీఎస్టీ టాక్స్ ఇన్వాయిస్ (ITC క్లెయిమ్ చేయండి), నిజమైన ధరపై పన్ను.",
    savingsUnit: "₹88/యూనిట్",
    savingsPct: "8%",
    savingsTotal: "₹44,000 ఆదా",
    quoteButton: "ల్యాండెడ్ కాస్ట్ కొటేషన్ పొందండి",
    disclaimer: "భారతీయ వ్యాపారాల కోసం ఉదాహరణ పోలిక. కస్టమ్స్ డ్యూటీ BCD (7.5%) + SWS + IGST (18%) తో CBIC నిబంధనల ప్రకారం లెక్కించబడింది. ఖచ్చితమైన ఖర్చు 8-అంకెల HSN కోడ్‌పై ఆధారపడి ఉంటుంది."
  },
  mr: {
    badge: "लँडेड कॉस्ट विश्लेषण",
    title: "एकच ऑर्डर. दोन वेगवेगळ्या किमती.",
    desc: "एकच विदेशी फॅक्टरी, CNC-मशीन्ड ॲल्युमिनियम एनक्लोजरची 500-युनिट बॅच. मध्यस्थांचे कमिशन तुमच्या कस्टम्स ड्युटीवर कसा भार टाकते ते पहा.",
    traderTitle: "पारंपारिक ट्रेडर / पुनर्विक्रेत्यामार्फत",
    traderRows: [
      { label: "फॅक्टरी किंमत (FOB)", value: "₹735", note: "मूळ $8.50 इनव्हॉइस तुमच्यापासून लपवले जाते" },
      { label: "ट्रेडरचे मार्जिन (+22%)", value: "₹897" },
      { label: "फॉरेक्स आणि चलन रूपांतरण (+1.5%)", value: "₹910" },
      { label: "कस्टम्स: BCD 7.5% + SWS + IGST 18%", value: "+₹252", note: "वाढवलेल्या किमतीवर कस्टम्स ड्युटी आकारली जाते" },
    ],
    traderLandedLabel: "लँडेड खर्च / युनिट",
    traderSummary: "500 युनिट्स · एकूण ₹5,81,000. तुम्ही त्यांच्या नफ्यावरही सीमाशुल्क भरता आणि मूळ सप्लायर इनव्हॉइस मिळत नाही.",
    byalanceTitle: "Byalance · पारदर्शक थेट आयात",
    byalanceRows: [
      { label: "फॅक्टरी किंमत (FOB)", value: "₹735", note: "मूळ फॅक्टरी इनव्हॉइस थेट तुमच्यासाठी" },
      { label: "कस्टम्स: BCD 7.5% + SWS + IGST 18%", value: "+₹204", note: "वास्तविक ₹735 फॅक्टरी किमतीवरच ड्युटीची गणना" },
      { label: "आंतरराष्ट्रीय मालवाहतूक, कस्टम्स क्लिअरन्स, जीएसटी बिलिंग आणि फी", value: "+₹135", note: "पारदर्शक दर, कोणतेही छुपे शुल्क नाही" },
    ],
    byalanceLandedLabel: "थेट घरपोच डिलिव्हरी / युनिट",
    byalanceSummary: "500 युनिट्स · एकूण ₹5,37,000. एकच भारतीय PO, 100% जीएसटी टॅक्स इनव्हॉइस (ITC क्लेम करा), योग्य मूल्यावर ड्युटी.",
    savingsUnit: "₹88/युनिट",
    savingsPct: "8%",
    savingsTotal: "₹44,000 ची बचत",
    quoteButton: "लँडेड कॉस्ट कोट मिळवा",
    disclaimer: "भारतीय व्यवसायांसाठी मार्गदर्शक तुलना. सीमाशुल्क भारतीय सीमाशुल्क आणि CBIC नियमांनुसार BCD (7.5%) + SWS + IGST (18%) नुसार मोजले आहे. अचूक खर्च 8-अंकी HSN कोडवर अवलंबून असतो."
  },
  ta: {
    badge: "இறக்குமதி செலவு விவரம்",
    title: "ஒரே ஆர்டர். இரண்டு விதமான விலைகள்.",
    desc: "ஒரே வெளிநாட்டு தொழிற்சாலை, CNC-மெஷின்டு அலுமினியம் உறைகளின் 500-யூனிட் தொகுதி. இடைத்தரகர்கள் உங்கள் சுங்க வரியை எவ்வாறு அதிகரிக்கிறார்கள் என்பதைப் பாருங்கள்.",
    traderTitle: "பாரம்பரிய வர்த்தகர் / மறுவிற்பனையாளர் மூலம்",
    traderRows: [
      { label: "தொழிற்சாலை விலை (FOB)", value: "₹735", note: "அசல் $8.50 இன்வாய்ஸ் உங்களிடமிருந்து மறைக்கப்பட்டது" },
      { label: "வர்த்தகரின் கூடுதல் லாபம் (+22%)", value: "₹897" },
      { label: "அந்நிய செலாவணி கட்டணம் (+1.5%)", value: "₹910" },
      { label: "சுங்க வரி: BCD 7.5% + SWS + IGST 18%", value: "+₹252", note: "கூடுதல் விலையின் மீது சுங்க வரி விதிக்கப்படுகிறது" },
    ],
    traderLandedLabel: "இறக்குமதி செலவு / யூனிட்",
    traderSummary: "500 யூனிட்கள் · மொத்தம் ₹5,81,000. நீங்கள் அவர்களின் லாபத்திற்கும் வரி செலுத்துகிறீர்கள், அசல் இன்வாய்ஸ் மறைக்கப்படுகிறது.",
    byalanceTitle: "Byalance · வெளிப்படையான நேரடி இறக்குமதி",
    byalanceRows: [
      { label: "தொழிற்சாலை விலை (FOB)", value: "₹735", note: "அசல் தொழிற்சாலை இன்வாய்ஸ் நேரடியாகக் காட்டப்படுகிறது" },
      { label: "சுங்க வரி: BCD 7.5% + SWS + IGST 18%", value: "+₹204", note: "உண்மையான ₹735 தொழிற்சாலை விலையில் சுங்க வரி கணக்கீடு" },
      { label: "சர்வதேச சரக்கு, சுங்க அனுமதி, ஜிஎஸ்டி பில்லிங் & கட்டணம்", value: "+₹135", note: "வெளிப்படையான கட்டணம், மறைமுக செலவுகள் இல்லை" },
    ],
    byalanceLandedLabel: "வீட்டு வாசலில் விநியோகம் / யூனிட்",
    byalanceSummary: "500 யூனிட்கள் · மொத்தம் ₹5,37,000. ஒரே இந்திய PO, 100% ஜிஎஸ்டி வரி இன்வாய்ஸ் (ITC பெறலாம்), உண்மையான விலைக்கு மட்டுமே வரி.",
    savingsUnit: "₹88/யூனிட்",
    savingsPct: "8%",
    savingsTotal: "₹44,000 சேமிப்பு",
    quoteButton: "இறக்குமதி விலை விவரம் பெறவும்",
    disclaimer: "இந்திய வணிகங்களுக்கான மாதிரி ஒப்பீடு. சுங்க வரி BCD (7.5%) + SWS + IGST (18%) ஆகியவற்றுடன் இந்திய சுங்க விதிமுறைகளின்படி கணக்கிடப்பட்டுள்ளது. சரியான செலவு 8-இலக்க HSN குறியீட்டைப் பொறுத்தது."
  }
};

const traderLanded = "₹1,162";
const traderTotal = `₹${(1162 * UNITS).toLocaleString("en-IN")}`;
const byalanceLanded = "₹1,074";
const byalanceTotal = `₹${(1074 * UNITS).toLocaleString("en-IN")}`;
const perUnitSaving = 1162 - 1074;
const totalSaving = `₹${(perUnitSaving * UNITS).toLocaleString("en-IN")}`;

export default function LandedCostTeardown() {
  const { language } = useLanguage();
  const currentLang = (language as Language) in teardownI18n ? (language as Language) : 'en';
  const t = teardownI18n[currentLang];

  return (
    <section className="py-16 md:py-24 bg-white border-y border-slate-100" id="landed-cost-teardown">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-800 border border-amber-200 mb-3">
            <Scale className="w-3.5 h-3.5" /> {t.badge}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight mb-4">
            {t.title}
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            {t.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* THROUGH A TRADITIONAL TRADER */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 flex flex-col">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                <X className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">{t.traderTitle}</span>
            </div>

            <ul className="space-y-3 mb-6 flex-1">
              {t.traderRows.map((row, idx) => (
                <li key={idx} className="border-b border-slate-200 pb-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{row.label}</span>
                    <span className="font-bold text-slate-900">{row.value}</span>
                  </div>
                  {row.note && <p className="text-xs text-slate-400 mt-0.5">{row.note}</p>}
                </li>
              ))}
            </ul>

            <div className="bg-white border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
              <span className="text-sm font-bold text-slate-700">{t.traderLandedLabel}</span>
              <span className="text-2xl font-display font-black text-slate-900">{traderLanded}</span>
            </div>
            <p className="text-xs text-slate-400 mt-3">
              {UNITS} units · {traderTotal} total. {t.traderSummary}
            </p>
          </div>

          {/* BYALANCE DIRECT IMPORT */}
          <div className="bg-slate-900 border border-amber-800/40 rounded-3xl p-6 sm:p-8 flex flex-col relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex items-center gap-2 mb-6 relative z-10">
              <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                <Check className="w-4 h-4" strokeWidth={3} />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400">{t.byalanceTitle}</span>
            </div>

            <ul className="space-y-3 mb-6 flex-1 relative z-10">
              {t.byalanceRows.map((row, idx) => (
                <li key={idx} className="border-b border-slate-800 pb-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-300">{row.label}</span>
                    <span className="font-bold text-white">{row.value}</span>
                  </div>
                  {row.note && <p className="text-xs text-slate-500 mt-0.5">{row.note}</p>}
                </li>
              ))}
            </ul>

            <div className="bg-slate-950/80 border border-amber-700/40 rounded-2xl p-4 flex items-center justify-between relative z-10">
              <span className="text-sm font-bold text-slate-200">{t.byalanceLandedLabel}</span>
              <span className="text-2xl font-display font-black text-amber-400">{byalanceLanded}</span>
            </div>
            <p className="text-xs text-slate-400 mt-3 relative z-10">
              {UNITS} units · {byalanceTotal} total. {t.byalanceSummary}
            </p>
          </div>
        </div>

        {/* SAVINGS STRIP */}
        <div className="mt-6 md:mt-8 bg-emerald-50 border border-emerald-200 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <TrendingDown className="w-5 h-5" strokeWidth={2.5} />
            </div>
            <p className="text-sm sm:text-base font-semibold text-emerald-900">
              You save <span className="font-black">{t.savingsUnit} · {t.savingsPct}</span> — <span className="font-black">{totalSaving} ({t.savingsTotal})</span> on this batch.
            </p>
          </div>
          <a
            href="https://wa.me/917406296116?text=Hi%20Byalance%2C%20I%20want%20a%20landed-cost%20estimate%20for%20importing%20components%20to%20India."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider px-5 py-3 rounded-xl shadow transition-all shrink-0 whitespace-nowrap"
          >
            {t.quoteButton} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">
          {t.disclaimer}
        </p>
      </div>
    </section>
  );
}
