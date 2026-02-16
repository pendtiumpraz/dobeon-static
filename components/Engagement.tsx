import React from 'react';

export default function Engagement() {
    return (
        <section id="contact" className="relative z-10 w-full px-6 py-24 max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Engagement</h2>
            <p className="text-gray-600 mb-12 text-lg">We accept a limited number of mandates each year to ensure focused execution.</p>

            <div className="bg-white/60 backdrop-blur-md p-12 rounded-3xl shadow-xl border border-white/50 relative overflow-hidden">

                <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 transform hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group max-w-2xl mx-auto">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200"></div>
                    <div className="flex items-center justify-center mb-8">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/logo/dobeon 1.svg" alt="Dobeon Consulting & Advisory" className="h-14 w-auto" />
                    </div>

                    <a href="/contact" className="inline-block px-10 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:shadow-lg mb-10">
                        Contact Us
                    </a>

                    <div className="text-sm text-gray-500 space-y-1 mb-8 border-t border-gray-100 pt-8">
                        <p className="font-bold text-gray-800 uppercase tracking-widest text-xs mb-3">Headquarters</p>
                        <p>Sovereign Plaza, 12th Floor</p>
                        <p>Jl. TB Simatupang No.36, Cilandak</p>
                        <p>South Jakarta, DKI Jakarta 12430</p>
                    </div>

                    <div className="text-xs text-gray-400 border-t border-gray-100 pt-4 flex flex-col gap-2">
                        <p>Confidential discussions available upon request.</p>
                        <p>&copy; {new Date().getFullYear()} Dobeon Consulting & Advisory.</p>
                    </div>
                </div>

            </div>
        </section>
    );
}
