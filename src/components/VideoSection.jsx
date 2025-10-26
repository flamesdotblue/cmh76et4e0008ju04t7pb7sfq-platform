import React from 'react';
import { Play } from 'lucide-react';

export default function VideoSection() {
  return (
    <section id="video" className="bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">See Bridger in Action</h2>
            <p className="mt-1 max-w-2xl text-slate-600">A quick overview of how we bridge credibility and capability for your next project.</p>
          </div>
          <div className="hidden items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-700 md:inline-flex">
            <Play className="h-4 w-4 text-blue-600" /> 2:10 intro
          </div>
        </div>
        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Bridger Intro"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
