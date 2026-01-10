const About = () => {
    const skills = ["JavaScript (ES6+)", "React", "Node.js", "Express", "MongoDB", "MySQL", "Git", "Tailwind CSS"];

    return (
        <section id="about" className="py-32 max-w-7xl mx-auto px-6 sm:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* Content Column */}
                <div>
                    <div className="flex items-center mb-8">
                        <span className="text-teal-600 dark:text-cyan font-mono text-xl mr-4">01.</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-navy dark:text-lightest-slate">About Me</h2>
                    </div>

                    <div className="text-secondary dark:text-slate text-lg leading-relaxed space-y-6">
                        <p>
                            Web Development Trainee at OFPPT (CMC Souss Massa), with strong knowledge in frontend and backend development.
                        </p>
                        <p>
                            Capable of designing modern, dynamic, and responsive web applications. Motivated, autonomous, and eager to strengthen my technical skills through an internship or a first position in web development.
                        </p>
                    </div>
                </div>

                {/* Tech Stack Column (Bento-style visualization) */}
                <div className="relative">
                    <h3 className="text-xl font-bold text-navy dark:text-lightest-slate mb-6">Tech Stack</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        {skills.map((skill) => (
                            <div key={skill} className="flex items-center justify-center p-4 bg-white dark:bg-light-navy border border-gray-100 dark:border-lightest-navy rounded-lg shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                                <span className="text-sm font-mono text-teal-600 dark:text-cyan group-hover:text-navy dark:group-hover:text-white transition-colors text-center">{skill}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
