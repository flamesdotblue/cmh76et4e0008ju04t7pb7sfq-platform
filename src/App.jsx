import React, { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import HowItWorks from './components/HowItWorks.jsx';
import Partners from './components/Partners.jsx';
import Features from './components/Features.jsx';
import VideoSection from './components/VideoSection.jsx';
import Testimonials from './components/Testimonials.jsx';
import About from './components/About.jsx';
import Blog from './components/Blog.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    document.title = 'Bridger — Where Credibility Meets Capability';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', 'Bridger connects Indian businesses with verified digital agencies for web, marketing, SEO, branding, apps, and video. Free for businesses. Tailored, transparent, and quality-first.');
    } else {
      const m = document.createElement('meta');
      m.setAttribute('name', 'description');
      m.setAttribute('content', 'Bridger connects Indian businesses with verified digital agencies for web, marketing, SEO, branding, apps, and video. Free for businesses. Tailored, transparent, and quality-first.');
      document.head.appendChild(m);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Partners />
        <Features />
        <VideoSection />
        <Testimonials />
        <About />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
