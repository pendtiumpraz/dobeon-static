'use client';

import React from 'react';


export default function Contact() {
    return (
        <div className="relative min-h-screen flex flex-col font-sans text-gray-700 bg-gray-50 overflow-x-hidden">
            {/* Navigation (Simplified for consistency) */}
            <nav className="relative z-10 w-full px-6 py-8 flex justify-between items-center max-w-7xl mx-auto">
                <div className="flex items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/logo/dobeon 1.svg" alt="Dobeon Consulting & Advisory" className="h-12 w-auto" />
                </div>
                <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-gray-500">
                    <a href="/" className="hover:text-blue-500 transition-colors">Home</a>
                    <a href="/contact" className="text-blue-500 transition-colors">Contact Us</a>
                </div>
            </nav>

            <section className="relative z-10 w-full px-6 py-12 flex-grow flex items-center justify-center">
                <div className="w-full max-w-3xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
                        <p className="text-gray-600">We respond to inquiries within 24 hours.</p>
                    </div>

                    <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="john@example.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Project Inquiry" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all" placeholder="Tell us about your project..."></textarea>
                            </div>
                            <button type="submit" className="w-full py-4 bg-gray-900 text-white rounded-lg font-bold hover:bg-gray-800 transition-all hover:shadow-lg">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </section>


        </div>
    );
}
