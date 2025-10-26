import React from 'react';

export default function About() {
  return (
    <section id="about" className="bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">About Bridger</h2>
            <p className="mt-3 text-slate-700">
              Bridger is an Indian B2B platform that helps startups, small, and mid-sized businesses find and connect with the most suitable and verified digital service agencies. We bridge the gap between business needs and agency capabilities.
            </p>
            <div className="mt-6 grid gap-4">
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">Mission</p>
                <p className="mt-1 text-slate-700">Building trust in the digital service ecosystem.</p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">Vision</p>
                <p className="mt-1 text-slate-700">Making business–agency matchmaking simple, transparent, and result-driven.</p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Core Values</h3>
            <div className="mt-3 grid grid-cols-2 gap-4">
              {[
                { t: 'Trust', d: 'Verified partners and honest guidance.' },
                { t: 'Quality', d: 'Curation over quantity.' },
                { t: 'Transparency', d: 'Clear expectations and pricing.' },
                { t: 'Growth', d: 'Outcomes that move the needle.' },
              ].map((v) => (
                <div key={v.t} className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
                  <p className="font-medium text-slate-900">{v.t}</p>
                  <p className="text-sm text-slate-600">{v.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
