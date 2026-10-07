'use client';

export default function HomePage() {
  return (
    <div className="p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-sm border border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          MicroApp Engine Dashboard
        </h1>
        <p className="text-slate-600 mb-6">
          Your boilerplate shell is connected and running inside Shopify Admin.
        </p>

        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-800 text-sm font-medium">
          Status: Operational & Connected
        </div>
      </div>
    </div>
  );
}