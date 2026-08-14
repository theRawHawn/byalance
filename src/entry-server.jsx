import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';

export async function render(url) {
  // SSR disabled for dashboard, admin, or authenticated routes
  if (url.startsWith('/dashboard') || url.startsWith('/admin') || url.startsWith('/auth')) {
    return { html: '', ssrDisabled: true, helmet: null };
  }

  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );

  return { html, ssrDisabled: false, helmet: helmetContext.helmet };
}
