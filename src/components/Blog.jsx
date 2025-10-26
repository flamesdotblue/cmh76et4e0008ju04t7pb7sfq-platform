import React from 'react';

const posts = [
  {
    title: 'How to Choose the Right Digital Agency in India',
    desc: 'A framework for evaluating expertise, process, and fit — without getting lost in pitches.',
    tag: 'Agency Selection',
    read: '6 min read',
  },
  {
    title: 'SEO vs. Performance Marketing: What Drives Growth When',
    desc: 'Understand channels, timelines, and budgets for better ROI decisions.',
    tag: 'Growth',
    read: '5 min read',
  },
  {
    title: 'Scoping Web Projects: A Practical Checklist',
    desc: 'Avoid scope creep with clear requirements and success metrics.',
    tag: 'Web Development',
    read: '8 min read',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="mb-8 md:flex md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Insights and Guides</h2>
            <p className="mt-2 max-w-2xl text-slate-600">SEO-focused educational articles on marketing, agency selection, and growth.</p>
          </div>
          <a href="#contact" className="mt-4 inline-flex rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 md:mt-0">Request Topics</a>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {posts.map((p) => (
            <article key={p.title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <p className="text-xs font-medium uppercase tracking-wider text-blue-700">{p.tag}</p>
              <h3 className="mt-2 text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 text-sm text-slate-500">{p.read}</div>
              <div className="mt-3 text-sm text-blue-700 opacity-0 transition group-hover:opacity-100">Read more →</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
