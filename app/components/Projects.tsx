import Link from 'next/link';
import Image from 'next/image';

const Projects = () => {
    return (
        <section id="work" className="py-32 max-w-7xl mx-auto px-6 sm:px-12">
            <div className="flex items-center mb-20">
                <span className="text-teal-600 dark:text-cyan font-mono text-xl mr-4">03.</span>
                <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-lightest-slate">Some Things I've Built</h2>
            </div>

            <div className="space-y-32">
                {/* Project 1: Featured (Left Aligned Visual, Right Content) */}
                <div className="relative grid grid-cols-1 md:grid-cols-12 gap-8 items-center group">
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

                    {/* Project Content Area */}
                    <div className="md:col-span-5 md:text-right relative z-10 md:-ml-12">
                        <p className="font-mono text-teal-600 dark:text-cyan text-sm mb-2">Featured Project</p>
                        <h3 className="text-3xl font-bold text-navy dark:text-lightest-slate mb-6">Healthy Recipe Finder</h3>

                        <div className="bg-white dark:bg-light-navy p-6 rounded-lg shadow-xl text-secondary dark:text-light-slate text-sm leading-relaxed mb-6">
                            A web application designed to help users discover quick, whole-food recipes. It focuses on healthy eating with minimal fuss, avoiding processed junk and guesswork.
                        </div>

                        <ul className="flex flex-wrap gap-4 justify-end text-sm font-mono text-slate-500 dark:text-light-slate mb-8">
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>Netlify</li>
                        </ul>

                        <div className="flex justify-end gap-6 items-center">
                            <a href="https://nammathealth.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-lightest-slate hover:text-teal-600 dark:hover:text-cyan transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* More Projects Placeholder */}
                <div className="text-center py-12">
                    <h3 className="text-2xl font-bold text-navy dark:text-lightest-slate mb-4">Other Noteworthy Projects</h3>
                    <p className="text-secondary dark:text-slate">Coming soon...</p>
                </div>
            </div>
        </section>
    );
};

export default Projects;
