const Contact = () => {
    return (
        <section id="contact" className="py-20 md:py-32 max-w-3xl mx-auto px-6 text-center">
            <span className="text-teal-600 dark:text-cyan font-mono text-lg mb-4 block">04. What's Next?</span>
            <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-lightest-slate mb-6">
                Get In Touch
            </h2>
            <p className="text-secondary dark:text-slate text-lg leading-relaxed mb-12 max-w-xl mx-auto">
                I'm currently looking for new opportunities, my inbox is always open.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <a
                href="mailto:ahmedaminenammat021105@gmail.com"
                className="inline-block px-8 py-4 text-sm font-mono text-teal-600 dark:text-cyan border border-teal-600 dark:border-cyan rounded-md hover:bg-teal-600/10 dark:hover:bg-cyan/10 transition-colors"
            >
                Say Hello
            </a>
            <div className="mt-20 flex justify-center gap-8">
                <a
                    href="https://github.com/AmineNT25/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-cyan transition-colors"
                    aria-label="GitHub"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github w-6 h-6"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a
                    href="https://www.linkedin.com/in/ahmed-amine-nammat-473083280"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate hover:text-cyan transition-colors"
                    aria-label="LinkedIn"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin w-6 h-6"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
            </div>

            <p className="mt-8 text-slate text-xs font-mono">
                Designed & Built by Ahmed Amine Nammat
            </p>
        </section>
    );
};

export default Contact;
