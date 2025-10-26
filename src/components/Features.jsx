import React from 'react';
import { Building2, Users, Shield, Wallet, Globe, Star, ArrowRight } from 'lucide-react';

const services = [
  { name: 'Digital Marketing Agencies', desc: 'Performance marketing, social, and growth campaigns.', icon: Globe },
  { name: 'Web Development Agencies', desc: 'Web apps, eCommerce, and corporate websites.', icon: Building2 },
  { name: 'Branding & Design Agencies', desc: 'Identity, brand systems, and creative design.', icon: Star },
  { name: 'SEO & Performance Marketing', desc: 'Technical SEO, content, and paid search.', icon: Wallet },
  { name: 'App Development Agencies', desc: 'Native, cross-platform, and product squads.', icon: Users },
  { name: 'Video & Creative Agencies', desc: 'Video production, editing, and motion graphics.', icon: Star },
];

export default function Features() {
  return (
    <section id="for-businesses" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-10 grid gap-6 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">For Businesses</h2>
            <p className="mt-2 max-w-xl text-slate-600">
              Get curated intros to verified agencies that match your scope, budget, and timeline. It’s free and takes minutes.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-slate-700">
              <li className="flex items-center gap-2"><Shield className="h-4 w-4 text-blue-600" /> Only verified partners</li>
              <li className="flex items-center gap-2"><Wallet className="h-4 w-4 text-blue-600" /> Fit your budget and goals</li>
              <li className="flex items-center gap-2"><Users className="h-4 w-4 text-blue-600" /> Human-reviewed matches</li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700">Find My Agency <ArrowRight className="ml-2 h-4 w-4" /></a>
              <a href="#how-it-works" className="inline-flex items-center justify-center rounded-lg border border-slate-300 bg-white px-5 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">See how it works</a>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6">
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-600">Core Services</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((s) => (
                <div key={s.name} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                  <div className="mt-1 rounded-lg bg-blue-600/10 p-2 text-blue-700"><s.icon className="h-5 w-5" /></div>
                  <div>
                    <p className="font-medium text-slate-900">{s.name}</p>
                    <p className="text-sm text-slate-600">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div id="for-agencies" className="mt-16 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-8 text-white">
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">For Agencies</h2>
              <p className="mt-2 max-w-xl text-blue-100">Get pre-qualified leads from businesses ready to start. 3 free leads on signup — pay per client after.</p>
              <ul className="mt-4 grid gap-2 text-sm text-blue-50">
                <li className="flex items-center gap-2"><Shield className="h-4 w-4" /> Verified business requirements</li>
                <li className="flex items-center gap-2"><Users className="h-4 w-4" /> No bidding wars — curated matches</li>
                <li className="flex items-center gap-2"><Wallet className="h-4 w-4" /> Pay only when you win clients</li>
              </ul>
              <div className="mt-6">
                <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-white px-5 py-3 text-sm font-medium text-blue-700 shadow-sm hover:bg-blue-50">Join as an Agency <ArrowRight className="ml-2 h-4 w-4" /></a>
              </div>
            </div>
            <div className="rounded-xl bg-white/10 p-6">
              <p className="text-sm font-semibold uppercase tracking-wider text-blue-100">Highlights</p>
              <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {[
                  { t: '3 Free Leads on Signup', d: 'Test the pipeline before you commit.' },
                  { t: 'Quality over Volume', d: 'We match by budget, goals, and capabilities.' },
                  { t: 'Streamlined Intros', d: 'Warm connections, not cold emails.' },
                  { t: 'Support on Onboarding', d: 'We assist from intro to kickoff.' },
                ].map((x) => (
                  <div key={x.t} className="rounded-lg bg-white/20 p-4">
                    <p className="font-medium">{x.t}</p>
                    <p className="text-sm text-blue-100">{x.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
