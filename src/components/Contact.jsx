import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: 'Digital Marketing', budget: 'Under ₹2L', message: '' });
  const [status, setStatus] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus({ ok: false, msg: 'Please fill your name, email, and a short message.' });
      return;
    }
    const subject = encodeURIComponent('Bridger Project Requirement');
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nService: ${form.type}\nBudget: ${form.budget}\nMessage: ${form.message}`
    );
    window.location.href = `mailto:info@bridger.in?subject=${subject}&body=${body}`;
    setStatus({ ok: true, msg: 'Opening your email client… If it did not open, email us at info@bridger.in' });
  }

  return (
    <section id="contact" className="bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Start your matching — It’s free</h2>
          <p className="mt-2 text-slate-600">Tell us what you need and get curated agency matches within 24–48 hours.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-5">
          <form onSubmit={onSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:col-span-3">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-medium text-slate-700">Your Name</label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="Jane Doe"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Service</label>
                <select
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                >
                  {[
                    'Digital Marketing',
                    'Web Development',
                    'Branding & Design',
                    'SEO & Performance',
                    'App Development',
                    'Video Production',
                  ].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700">Budget</label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                >
                  {['Under ₹2L', '₹2L–₹5L', '₹5L–₹15L', '₹15L+'].map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="mt-4">
              <label className="text-sm font-medium text-slate-700">Brief</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100"
                placeholder="Share goals, timeline, and any must-haves."
                required
              />
            </div>
            {status && (
              <div className={`mt-3 rounded-md px-3 py-2 text-sm ${status.ok ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                {status.msg}
              </div>
            )}
            <div className="mt-6">
              <button type="submit" className="w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-blue-700 sm:w-auto">Submit Requirements</button>
            </div>
          </form>
          <div className="md:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">Need quick help?</p>
              <p className="mt-2 text-slate-700">Email us and we’ll respond within 24 hours.</p>
              <div className="mt-4 grid gap-3 text-sm">
                <a href="mailto:info@bridger.in" className="inline-flex items-center gap-2 text-blue-700 hover:underline"><Mail className="h-4 w-4" /> info@bridger.in</a>
                <a href="#contact" className="inline-flex items-center gap-2 text-slate-600"><Phone className="h-4 w-4" /> Request a callback</a>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 p-6">
              <p className="font-medium text-blue-900">Why Bridger?</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-blue-900/90">
                <li>100% free for businesses</li>
                <li>Verified, quality-first agency network</li>
                <li>Tailored matches based on goals and budget</li>
                <li>End-to-end support from requirement to onboarding</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
