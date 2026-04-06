const Hero = () => {
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace('#', '');
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            window.history.pushState(null, '', href);
        }
    };

    return (
        <section className="min-h-svh flex items-center justify-center max-w-7xl mx-auto px-5 sm:px-12 pt-24 sm:pt-28 md:pt-40 pb-12 relative">
            <div className="flex flex-col items-center text-center z-10 w-full">
                <div className="space-y-6 max-w-4xl mx-auto">
                    <h1 className="text-teal-600 dark:text-cyan font-mono text-base sm:text-lg mb-4 tracking-wider">Hi, my name is</h1>

                    <div className="space-y-2">
                        <h2 className="text-navy dark:text-lightest-slate text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9]">
                            Ahmed Amine
                        </h2>
                        <h2 className="text-slate-500 dark:text-slate text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter opacity-80">
                            Nammat.
                        </h2>
                    </div>

                    <div className="mt-8 max-w-2xl mx-auto">
                        <p className="text-secondary dark:text-slate text-lg sm:text-xl leading-relaxed">
                            I build pixel-perfect, performant web experiences. Currently exploring the intersection of design and engineering.
                        </p>
                    </div>

                    <div className="pt-8 flex justify-center">
                        <a
                            href="#work"
                            onClick={(e) => handleSmoothScroll(e, '#work')}
                            className="group inline-flex items-center gap-4 text-teal-600 dark:text-cyan text-xl font-mono hover:underline underline-offset-8 transition-all cursor-pointer"
                        >
                            Check out my work
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 transform group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Decorative Background Blob - Centered */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-600/10 to-transparent dark:from-cyan/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        </section>
    );
};

export default Hero;
