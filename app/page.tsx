'use client';

import React from 'react';

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col font-sans text-gray-700 bg-gray-50 overflow-x-hidden">

      {/* Watercolor Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="watercolor-bg blob-1"></div>
        <div className="watercolor-bg blob-2"></div>
        <div className="watercolor-bg blob-3"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-10 w-full px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo/dobeon 1.svg" alt="Dobeon Consulting & Advisory" className="h-12 w-auto" />
        </div>
        <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-500">
          <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
          <a href="#contact" className="hover:text-blue-500 transition-colors">Contact Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 w-full px-6 py-12 md:py-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
            Discreet. <br />
            <span className="text-blue-300 italic">Strategic.</span> <br />
            Execution-Centric.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-md font-light">
            Dobeon Consulting & Advisory is a boutique advisory firm focused exclusively on complex healthcare and life sciences mandates.
          </p>
          <div className="pt-4">
            <a href="#contact" className="inline-block px-8 py-3 border border-gray-300 rounded-full text-gray-600 hover:bg-blue-50 hover:border-blue-200 transition-all text-sm uppercase tracking-wider">
              Engage With Us
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex justify-center items-center">
          <div className="relative w-full aspect-square max-w-md">
            <div className="absolute inset-0 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/hero.jpg"
              alt="Healthcare Strategy Meeting"
              className="relative z-10 w-full h-full object-cover organic-mask opacity-90 mix-blend-multiply filter contrast-110 brightness-110"
            />
          </div>
        </div>
      </section>

      {/* Introduction / About */}
      <section id="about" className="relative z-10 w-full px-6 py-20 bg-white/40 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-serif text-gray-700 italic">&quot;Translating global ambition into operational reality.&quot;</h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            We operate at the intersection of strategy, systems, and execution. We understand how global institutions think—and how local systems actually function.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 w-full px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What We Do</h2>
          <div className="w-24 h-1 bg-blue-200 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1: Partnerships */}
          <div className="service-card rounded-2xl overflow-hidden flex flex-col h-full bg-white/80 border border-white/60">
            <div className="h-48 w-full relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/partnerships.jpg"
                alt="Global Partnerships"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
            </div>
            <div className="p-8 pt-4 flex-1 flex flex-col relative">
              <div className="absolute -top-10 left-8 w-14 h-14 bg-blue-50 rounded-full flex items-center justify-center text-blue-400 text-xl font-serif italic shadow-sm border border-white">
                I
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 mt-2">Global Partnerships & Capital Strategy</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                We structure cross-border collaborations among governments, pharmaceutical & life science manufacturers, healthcare systems, donors, investors, and multilateral institutions—designed for durability, not ceremony.
              </p>
              <p className="text-gray-500 text-xs italic mt-auto pt-4 border-t border-gray-100">
                Aligning capital architecture with long-term institutional objectives.
              </p>
            </div>
          </div>

          {/* Service 2: Execution */}
          <div className="service-card rounded-2xl overflow-hidden flex flex-col h-full bg-white/80 border border-white/60">
            <div className="h-48 w-full relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/execution.jpg"
                alt="Complex Execution"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
            </div>
            <div className="p-8 pt-4 flex-1 flex flex-col relative">
              <div className="absolute -top-10 left-8 w-14 h-14 bg-orange-50 rounded-full flex items-center justify-center text-orange-300 text-xl font-serif italic shadow-sm border border-white">
                II
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 mt-2">Complex Healthcare Execution</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                We advise on the localization of pharmaceuticals, biotech, vaccines, and medical devices through integrated governance design, regulatory alignment, and capability transfer.
              </p>
              <p className="text-gray-800 font-medium text-xs mt-auto pt-4 border-t border-gray-100">
                Execution is not a secondary activity. It is the mandate.
              </p>
            </div>
          </div>

          {/* Service 3: Digital */}
          <div className="service-card rounded-2xl overflow-hidden flex flex-col h-full bg-white/80 border border-white/60">
            <div className="h-48 w-full relative overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/digital.jpg"
                alt="Digital Modernization"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-90"></div>
            </div>
            <div className="p-8 pt-4 flex-1 flex flex-col relative">
              <div className="absolute -top-10 left-8 w-14 h-14 bg-purple-50 rounded-full flex items-center justify-center text-purple-300 text-xl font-serif italic shadow-sm border border-white">
                III
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 mt-2">Digital & System Modernization</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                We redesign healthcare and life sciences operations through structured digital transformation aligned with international standards.
              </p>
              <p className="text-gray-500 text-xs italic mt-auto pt-4 border-t border-gray-100">
                Ensuring technology strengthens performance rather than adding complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative z-10 w-full px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Professional Experience</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {/* Using pill badges for list */}
            {[
              "University of Pittsburgh", "Boston Children’s Hospital", "UnitedHealth Group",
              "Novo Nordisk", "PT Biofarma", "UNICEF", "International Vaccine Institute",
              "Alvarez & Marsal", "PATH", "IQVIA", "World Health Organization",
              "Google", "ADB", "The World Bank", "GAVI"
            ].map((org, index) => (
              <span key={index} className="px-6 py-3 bg-white border border-gray-100 rounded-full text-gray-600 text-sm shadow-sm hover:shadow-md transition-shadow cursor-default select-none">
                {org}
              </span>
            ))}
          </div>

          <p className="text-center mt-10 text-gray-500 text-sm italic max-w-2xl mx-auto">
            We operate comfortably within global organizations, ministerial offices, manufacturing facilities, hospital systems, capital environments, and customer-facing ecosystems.
          </p>
        </div>
      </section>

      {/* Philosophy Section (Different background) */}
      <section className="relative z-10 w-full px-6 py-24 bg-blue-900 text-white overflow-hidden">
        {/* Abstract Decoration */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full mix-blend-screen filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full mix-blend-overlay filter blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-serif mb-12">Philosophy</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-6 border-l-2 border-blue-400 bg-blue-800/30 rounded-r-lg hover:bg-blue-800/50 transition-colors">
              <h4 className="font-bold text-lg mb-2">Strategy must withstand execution.</h4>
              <p className="text-blue-100 text-sm font-light">Plans that cannot be operationalized are merely suggestions.</p>
            </div>
            <div className="p-6 border-l-2 border-blue-400 bg-blue-800/30 rounded-r-lg hover:bg-blue-800/50 transition-colors">
              <h4 className="font-bold text-lg mb-2">Governance precedes scale.</h4>
              <p className="text-blue-100 text-sm font-light">Structure creates the stability required for growth.</p>
            </div>
            <div className="p-6 border-l-2 border-blue-400 bg-blue-800/30 rounded-r-lg hover:bg-blue-800/50 transition-colors">
              <h4 className="font-bold text-lg mb-2">Capability transfer defines sovereignty.</h4>
              <p className="text-blue-100 text-sm font-light">We aim to leave capabilities behind, not dependency.</p>
            </div>
            <div className="p-6 border-l-2 border-blue-400 bg-blue-800/30 rounded-r-lg hover:bg-blue-800/50 transition-colors">
              <h4 className="font-bold text-lg mb-2">Digital transformation must improve performance.</h4>
              <p className="text-blue-100 text-sm font-light">If it adds complexity without improving optics, it is noise.</p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-blue-800">
            <p className="font-serif italic text-xl">&quot;Financial discipline anchors credibility.&quot;</p>
          </div>
        </div>
      </section>

      {/* Contact / Footer */}
      <section id="contact" className="relative z-10 w-full px-6 py-24 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Engagement</h2>
        <p className="text-gray-600 mb-12">We accept a limited number of mandates each year to ensure focused execution.</p>

        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 transform rotate-1 hover:rotate-0 transition-transform duration-300 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
          <div className="flex items-center justify-center mb-6">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo/dobeon 1.svg" alt="Dobeon Consulting & Advisory" className="h-16 w-auto" />
          </div>
          <p className="text-gray-500 uppercase tracking-widest text-xs mb-8">Jakarta | Global Mandates</p>

          <a href="mailto:info@dobeon.com" className="text-xl text-blue-600 hover:text-blue-800 border-b-2 border-blue-100 hover:border-blue-300 pb-1 transition-all">
            info@dobeon.com
          </a>

          <p className="mt-8 text-xs text-gray-400">Confidential discussions available upon request.</p>
        </div>
      </section>

      <footer className="relative z-10 py-8 text-center text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} Dobeon Consulting & Advisory. All rights reserved.
      </footer>

    </div>
  );
}
