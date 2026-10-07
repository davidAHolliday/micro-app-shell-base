export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <aside className="w-64 border-r bg-white p-6">
        <div className="font-bold text-lg mb-8">MicroApp Engine</div>
        <nav className="space-y-2">
          <a href="/dashboard" className="block p-2 rounded hover:bg-slate-100 font-medium">Dashboard</a>
          <a href="/dashboard/settings" className="block p-2 rounded hover:bg-slate-100 text-slate-600">Settings</a>
          <a href="/dashboard/billing" className="block p-2 rounded hover:bg-slate-100 text-slate-600">Billing</a>
        </nav>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}