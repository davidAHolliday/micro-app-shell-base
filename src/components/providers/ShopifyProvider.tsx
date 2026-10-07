'use client';

import React, { useEffect } from 'react';

export function ShopifyProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Read search parameters passed in by Shopify Admin iframe
    const urlParams = new URLSearchParams(window.location.search);
    const host = urlParams.get('host');
    
    if (host) {
      // Store host token for client-side API requests back to Next.js backends
      sessionStorage.setItem('shopify_host', host);
    }
  }, []);

  return (
    <div className="shopify-app-container min-h-screen">
      {children}
    </div>
  );
}