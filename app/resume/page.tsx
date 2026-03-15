"use client";

import React from 'react';
import Navbar from '../components/Navbar';
import FadeIn from '../components/FadeIn';

export default function Resume() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen pt-24 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center justify-center">
                <FadeIn>
                    <div className="w-full text-center mb-8">
                        <h1 className="text-3xl md:text-5xl font-bold text-navy dark:text-lightest-slate mb-4">Resume</h1>
                        <p className="text-slate-600 dark:text-slate mb-8">Choose your preferred language to download my resume.</p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <a
                                href="/englishResume.pdf"
                                download="Ahmed_Amine_Nammat_Resume_EN.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors font-mono font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                English Resume
                            </a>
                            <a
                                href="/frenchResume.pdf"
                                download="Ahmed_Amine_Nammat_Resume_FR.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 bg-cyan-600 dark:bg-cyan-600 text-white px-8 py-3 rounded-lg hover:bg-cyan-700 dark:hover:bg-cyan-500 transition-colors font-mono font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                </svg>
                                French Resume
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </main>
        </>
    );
}
