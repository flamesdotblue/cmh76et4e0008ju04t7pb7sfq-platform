import React, { useState } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const navItems = [
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#for-businesses', label: 'For Businesses' },
  { href: '#for-agencies', label: 'For Agencies' },
  { href: '#about', label: 'About' },
  { href: '#blog', label: 'Blog' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-white">
            <Rocket size={18} />
          </div>
          <div>
            <p className="font-semibold tracking-tight text-slate-900">Bridger</p>
            <p className="text-xs text-slate-500">Where Credibility Meets Capability</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((n) => (
            <a key={n.href} href={n.href} className="text-sm text-slate-600 transition-colors hover:text-slate-900">
              {n.label}
            </a>
          ))}
          <a href="#for-businesses" className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700">
            Get Started for Free
          </a>
        </nav>
        <button aria-label="Toggle Menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <nav className="mx-auto grid max-w-7xl gap-1 px-4 py-3 md:px-6">
            {navItems.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-sm text-slate-700 hover:bg-slate-50"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#for-businesses"
              onClick={() => setOpen(false)}
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white"
            >
              Get Started for Free
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
