import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Ananya Gupta',
    role: 'Founder, D2C Brand',
    quote:
      'Bridger matched us with a performance agency that doubled our ROAS in 6 weeks. The process was quick and transparent.',
  },
  {
    name: 'Rohit Sharma',
    role: 'CTO, SaaS Startup',
    quote:
      'We found a reliable web dev partner who understood our roadmap. Loved the curated shortlist and zero spam.',
  },
  {
    name: 'Meera Iyer',
    role: 'Marketing Head, SMB',
    quote:
      'The verification gave us confidence. Their support from requirements to onboarding was top-notch.',
  },
];

function Stars() {
  return (
    <div className="flex items-center gap-1 text-yellow-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Loved by founders and teams</h2>
          <p className="mt-2 text-slate-600">Real outcomes. Real partnerships. That’s the Bridger difference.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <Stars />
              <p className="mt-3 text-slate-700">“{t.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="text-sm text-slate-600">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
