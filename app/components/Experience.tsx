const Experience = () => {
    return (
        <section id="experience" className="py-32 max-w-7xl mx-auto px-6 sm:px-12">
            <div className="flex items-center mb-16">
                <span className="text-teal-600 dark:text-cyan font-mono text-xl mr-4">02.</span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-lightest-slate">Experience & Education</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Modern Card 1: Education */}
                <div className="group relative bg-white dark:bg-light-navy/50 p-8 rounded-2xl border border-gray-100 dark:border-lightest-navy transition-all duration-300 hover:border-teal-600 dark:hover:border-cyan hover:shadow-xl">
                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-teal-600 dark:text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                    </div>

                    <span className="inline-block px-3 py-1 mb-4 text-xs font-mono text-teal-600 dark:text-cyan border border-teal-600 dark:border-cyan rounded-full">
                        2023 - Present
                    </span>

                    <h3 className="text-2xl font-bold text-navy dark:text-white mb-1">Web Development Technician</h3>
                    <p className="text-slate-500 dark:text-light-slate mb-6 font-mono text-sm">OFPPT – CMC Souss Massa Agadir, Morocco</p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <a href="https://udemy.com/certificate/UC-2c6749df-3fd6-4f8b-885e-9a5d27629e49/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 dark:text-cyan font-medium hover:underline">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                View Udemy Certificate
                            </a>
                        </div>
                    </div>
                </div>

                {/* Modern Card 2: Competences */}
                <div className="bg-navy dark:bg-lightest-navy p-8 rounded-2xl text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600/20 to-transparent pointer-events-none"></div>

                    <h3 className="text-2xl font-bold mb-6 relative z-10">Core Competencies</h3>

                    <div className="space-y-6 relative z-10">
                        <div>
                            <h4 className="text-teal-400 font-mono text-sm mb-2">Technical</h4>
                            <p className="text-slate-300 leading-relaxed">
                                HTML5, CSS3, JavaScript, React, Node.js, Express, MongoDB, MySQL, Git, Antigravity.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-teal-400 font-mono text-sm mb-2">Professional</h4>
                            <p className="text-slate-300 leading-relaxed">
                                REST APIs, CRUD Operations, Responsive Design, MVC Architecture, Agile Methodology.
                            </p>
                        </div>
                        <div>
                            <h4 className="text-teal-400 font-mono text-sm mb-2">Languages</h4>
                            <p className="text-slate-300">
                                Arabe (Native), French (Fluent), English (Fluent)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
