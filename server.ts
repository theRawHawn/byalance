import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { onRequestPost } from "./api/contact";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Middleware to parse JSON bodies
  app.use(express.json());

  // Contact API Route handled server-side to secure credentials
  app.post("/api/contact", async (req, res) => {
    try {
      const request = new Request(`http://${req.headers.host}${req.url}`, {
        method: req.method,
        headers: {
          'content-type': 'application/json',
          'x-real-ip': (req.headers['x-real-ip'] as string) || req.ip || '',
        },
        body: JSON.stringify(req.body),
      });

      const env = {
        GOOGLE_CLIENT_EMAIL: process.env.GOOGLE_CLIENT_EMAIL || '',
        GOOGLE_PRIVATE_KEY: process.env.GOOGLE_PRIVATE_KEY || '',
        GOOGLE_SHEET_ID: process.env.GOOGLE_SHEET_ID || '',
      };

      const response = await onRequestPost({ request, env });
      const responseData = await response.json();
      res.status(response.status).json(responseData);
    } catch (error: any) {
      console.error('Error in secure contact submission:', error);
      res.status(500).json({ 
        message: 'Internal server error processing submission.', 
        error: error.message 
      });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');

    // 301 Redirect trailing slash to non-trailing slash (except root '/')
    app.use((req, res, next) => {
      if (req.path.length > 1 && req.path.endsWith('/')) {
        const query = req.url.slice(req.path.length);
        const safePath = req.path.slice(0, -1);
        return res.redirect(301, safePath + query);
      }
      next();
    });

    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
