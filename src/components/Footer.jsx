import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
        <div className="grid grid-cols-2 gap-6 text-sm text-slate-600 sm:grid-cols-4">
          <div>
            <p className="font-semibold text-slate-900">Bridger</p>
            <p className="mt-2 text-slate-600">Where Credibility Meets Capability.</p>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Company</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#about" className="hover:text-slate-900">About</a></li>
              <li><a href="#blog" className="hover:text-slate-900">Blog</a></li>
              <li><a href="#contact" className="hover:text-slate-900">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">For You</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#for-businesses" className="hover:text-slate-900">For Businesses</a></li>
              <li><a href="#for-agencies" className="hover:text-slate-900">For Agencies</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-900">Contact</p>
            <ul className="mt-2 space-y-1">
              <li><a href="mailto:info@bridger.in" className="hover:text-slate-900">info@bridger.in</a></li>
              <li><a href="#" className="hover:text-slate-900">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Bridger. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
