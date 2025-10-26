import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, Search, BadgeCheck, MessagesSquare } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    title: 'Share your requirements',
    desc: 'Tell us the service, budget, location, and timeline. Takes under 2 minutes.',
  },
  {
    icon: Search,
    title: 'We curate matches',
    desc: 'Our team reviews and pairs you with pre-vetted, high-quality agencies.',
  },
  {
    icon: BadgeCheck,
    title: 'You choose and connect',
    desc: 'Pick from the shortlist and connect directly — free of charge.',
  },
  {
    icon: MessagesSquare,
    title: 'Agencies pay later',
    desc: 'Agencies get 3 free leads. They pay per client thereafter.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">How Bridger Works</h2>
          <p className="mx-auto mt-2 max-w-2xl text-slate-600">A transparent, curated process to match you with the right partner. No spam. No guesswork.</p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <div className="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600/10 text-blue-700">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
