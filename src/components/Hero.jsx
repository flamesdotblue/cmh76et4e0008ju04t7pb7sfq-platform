import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Shield, BadgeCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-20 text-center md:px-6 md:py-28">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl"
        >
          Find the Right Digital Agency for Your Business
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl text-lg leading-relaxed text-slate-600"
        >
          We connect you with verified digital service providers that fit your goals and budget. Simple, transparent, and result-driven.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href="#for-businesses"
            className="group inline-flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700"
          >
            Get Started for Free
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a href="#video" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
            Watch Intro
          </a>
        </motion.div>
        <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
          <div className="inline-flex items-center gap-2"><Shield className="h-4 w-4 text-blue-600" /> Only verified agencies</div>
          <div className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-blue-600" /> Tailored matches</div>
          <div className="inline-flex items-center gap-2">100% free for businesses</div>
        </div>
      </div>
      <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 hidden h-80 w-80 rounded-full bg-sky-100 blur-3xl md:block" />
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-indigo-100 blur-3xl md:block" />
    </section>
  );
}
