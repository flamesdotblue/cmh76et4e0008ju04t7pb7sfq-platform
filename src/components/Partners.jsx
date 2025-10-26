import React from 'react';

function Badge({ label }) {
  return (
    <div className="flex items-center justify-center rounded-lg border border-slate-200 bg-white px-4 py-3 text-slate-600 shadow-sm">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="mr-2 text-blue-600"><path d="M12 2l3 7h7l-5.5 4 2.5 7L12 16l-7 4 2.5-7L2 9h7l3-7z" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
      <span className="text-sm">{label}</span>
    </div>
  );
}

export default function Partners() {
  return (
    <section className="bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <p className="mb-5 text-center text-xs uppercase tracking-wider text-slate-500">Trusted by growing Indian businesses and verified agencies</p>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
          <Badge label="ISO-Verified Partners" />
          <Badge label="Nasscom Network" />
          <Badge label="Startup India" />
          <Badge label="Google Premier" />
          <Badge label="Meta Partners" />
          <Badge label="AWS Activate" />
        </div>
      </div>
    </section>
  );
}
