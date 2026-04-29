import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
    return (
        <section id="work" className="py-20 sm:py-24 md:py-32 max-w-7xl mx-auto px-5 sm:px-12">
            <div className="flex items-center mb-20">
                <span className="text-teal-600 dark:text-cyan font-mono text-xl mr-4">03.</span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy dark:text-lightest-slate">Some Things I've Built</h2>
            </div>

            <div className="space-y-32">
                {/* Project 1: Healthy Recipe Finder (Left Content, Right Visual) */}
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
                    {/* Project Content Area */}
                    <div className="md:col-span-5 relative z-10 md:-mr-12">
                        <p className="font-mono text-teal-600 dark:text-cyan text-sm mb-2">Featured Project</p>
                        <h3 className="text-3xl font-bold text-navy dark:text-lightest-slate mb-6">Healthy Recipe Finder</h3>

                        <div className="bg-white dark:bg-light-navy p-6 rounded-lg shadow-xl text-secondary dark:text-light-slate text-sm leading-relaxed mb-6">
                            A web application designed to help users discover quick, whole-food recipes. It focuses on healthy eating with minimal fuss, avoiding processed junk and guesswork.
                        </div>

                        <ul className="flex flex-wrap gap-4 text-sm font-mono text-slate-500 dark:text-light-slate mb-8">
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>Firebase</li>
                            <li>Netlify</li>
                        </ul>

                        <div className="flex gap-6 items-center">
                            <a href="https://github.com/AmineNT25/Healthy-Recipes-Finder.git" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-lightest-slate hover:text-teal-600 dark:hover:text-cyan transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.628-5.479 5.922.429.369.81 1.096.81 2.21 0 1.595-.014 2.881-.014 3.273 0 .32.216.694.825.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </a>
                            <a href="https://nammathealth.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-lightest-slate hover:text-teal-600 dark:hover:text-cyan transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Project Visual Area */}
                    <div className="group/image md:col-span-7 relative rounded-xl overflow-hidden shadow-2xl bg-teal-600/10 dark:bg-navy aspect-video group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="absolute inset-0">
                            <Image
                                src="/project-healthy-recipe.png"
                                alt="Healthy Recipe Finder Interface"
                                fill
                                className="object-cover object-top blur-[3px] group-hover/image:blur-0 transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                        </div>
                        <div className="absolute inset-0 bg-teal-600/10 dark:bg-navy/10 mix-blend-multiply group-hover/image:mix-blend-normal transition-all duration-300"></div>
                    </div>
                </div>

                {/* Project 2: Bookshelf (Left Content, Right Visual) */}
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
                    {/* Project Content Area */}
                    <div className="md:col-span-5 relative z-10 md:-mr-12">
                        <p className="font-mono text-teal-600 dark:text-cyan text-sm mb-2">Featured Project</p>
                        <h3 className="text-3xl font-bold text-navy dark:text-lightest-slate mb-6">Bookshelf</h3>

                        <div className="bg-white dark:bg-light-navy p-6 rounded-lg shadow-xl text-secondary dark:text-light-slate text-sm leading-relaxed mb-6">
                            A personal library management app to track reading progress across custom shelves — All Books, Currently Reading, Want to Read, Favorites, and more. Integrates with Open Library to search and discover new books, with yearly reading goal tracking.
                        </div>

                        <ul className="flex flex-wrap gap-4 text-sm font-mono text-slate-500 dark:text-light-slate mb-8">
                            <li>NextJS</li>
                            <li>TypeScript</li>
                            <li>Tailwind</li>
                            <li>Supabase</li>
                        </ul>

                        <div className="flex gap-6 items-center">
                            <a href="https://github.com/AmineNT25/bookshelf" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-lightest-slate hover:text-teal-600 dark:hover:text-cyan transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.3-5.467-1.332-5.467-5.931 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.234 1.911 1.234 3.221 0 4.61-2.807 5.628-5.479 5.922.429.369.81 1.096.81 2.21 0 1.595-.014 2.881-.014 3.273 0 .32.216.694.825.576C20.565 22.092 24 17.593 24 12.297c0-6.627-5.373-12-12-12"/>
                                </svg>
                            </a>
                            <a href="https://bookshelf-nammat.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-lightest-slate hover:text-teal-600 dark:hover:text-cyan transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Project Visual Area */}
                    <div className="group/image md:col-span-7 relative rounded-xl overflow-hidden shadow-2xl bg-teal-600/10 dark:bg-navy aspect-video group-hover:scale-[1.02] transition-transform duration-500">
                        <div className="absolute inset-0">
                            <Image
                                src="/bookshelf-project.png"
                                alt="Bookshelf App Interface"
                                fill
                                className="object-cover object-top blur-[3px] group-hover/image:blur-0 transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                        </div>
                        <div className="absolute inset-0 bg-teal-600/10 dark:bg-navy/10 mix-blend-multiply group-hover/image:mix-blend-normal transition-all duration-300"></div>
                    </div>
                </div>

                {/* Project 3: LocaMat (Right Aligned Visual, Left Content) */}
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
                    {/* Project Content Area */}
                    <div className="md:col-span-5 relative z-10 md:-mr-12">
                        <p className="font-mono text-teal-600 dark:text-cyan text-sm mb-2">Featured Project</p>
                        <h3 className="text-3xl font-bold text-navy dark:text-lightest-slate mb-6">LocaMat</h3>

                        <div className="bg-white dark:bg-light-navy p-6 rounded-lg shadow-xl text-secondary dark:text-light-slate text-sm leading-relaxed mb-6">
                            A Moroccan material rental platform where professionals can find, compare, and rent construction and project equipment across Morocco. This project is currently in progress.
                        </div>

                        <ul className="flex flex-wrap gap-4 text-sm font-mono text-slate-500 dark:text-light-slate mb-8">
                            <li>Next.js</li>
                            <li>TypeScript</li>
                            <li>Tailwind</li>
                            <li>Node.js</li>
                        </ul>

                        <div className="flex gap-6 items-center">
                            <Link href="/projects/locamat" className="text-slate-600 dark:text-lightest-slate hover:text-teal-600 dark:hover:text-cyan transition-colors" aria-label="Open LocaMat project status page">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Project Visual Area */}
                    <Link href="/projects/locamat" className="group/image md:col-span-7 relative rounded-xl overflow-hidden shadow-2xl bg-teal-600/10 dark:bg-navy aspect-video group-hover:scale-[1.02] transition-transform duration-500 block" aria-label="Open LocaMat project status page">
                        <div className="absolute inset-0">
                            <Image
                                src="/project-locamat-preview.svg"
                                alt="LocaMat interface preview"
                                fill
                                className="object-cover object-center blur-[1px] group-hover/image:blur-0 transition-all duration-500"
                                sizes="(max-width: 768px) 100vw, 60vw"
                            />
                        </div>
                        <div className="absolute inset-0 bg-teal-600/10 dark:bg-navy/10 mix-blend-multiply group-hover/image:mix-blend-normal transition-all duration-300"></div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Projects;
