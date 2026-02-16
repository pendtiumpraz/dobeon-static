'use client';

import React from 'react';

export default function Contact() {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name || '']: e.target.value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed to send message');

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                                    placeholder="Project Inquiry"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows={4}
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === 'sending' || status === 'success'}
                                className={`w-full py-4 rounded-lg font-bold transition-all hover:shadow-lg ${status === 'success' ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-900 hover:bg-gray-800 text-white'
                                    } disabled:opacity-70 disabled:cursor-not-allowed`}
                            >
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                            </button>

                            {status === 'success' && (
                                <p className="text-green-600 text-sm text-center mt-4">
                                    Thank you! We will get back to you shortly.
                                </p>
                            )}
                            {status === 'error' && (
                                <p className="text-red-600 text-sm text-center mt-4">
                                    Failed to send message. Please try again later.
                                </p>
                            )}

                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
