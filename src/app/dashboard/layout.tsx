import { ShopifyProvider } from '@/components/providers/ShopifyProvider';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <ShopifyProvider>
      {/* Container matches Shopify's native surface background & padding */}
      <div className="min-h-screen bg-[var(--p-color-bg-surface-secondary,#f1f2f4)] text-slate-900 font-sans p-4 md:p-8">
        
        {/* Horizontal Navigation Header (No Sidebar) */}
        <header className="max-w-5xl mx-auto mb-6 flex items-center justify-between border-b pb-4 border-slate-200">
          <div className="flex items-center space-x-3">
            <span className="font-bold text-lg text-slate-900">MicroApp Engine</span>
            <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono">v1.0</span>
          </div>

          <nav className="flex space-x-6">
            <a href="/dashboard" className="text-sm font-medium text-slate-800 hover:text-indigo-600 transition">
              Overview
            </a>
            <a href="/dashboard/settings" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition">
              Settings
            </a>
            <a href="/dashboard/billing" className="text-sm font-medium text-slate-500 hover:text-indigo-600 transition">
              Billing
            </a>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="max-w-5xl mx-auto">
          {children}
        </main>
      </div>
    </ShopifyProvider>
  );
}
}