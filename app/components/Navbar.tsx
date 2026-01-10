"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Work', href: '#work' },
        { name: 'Contact', href: '#contact' },
    ];

    const logoSrc = mounted && resolvedTheme === 'light'
        ? '/logo-light-mode.png'
        : '/logo-dark-mode.png';

    const toggleTheme = () => {
        setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    };

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);

        if (pathname !== '/') {
            router.push(`/${href}`);
            return;
        }

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
        <>
            <nav className={`fixed z-50 transition-all duration-300 w-full md:w-auto md:left-1/2 md:-translate-x-1/2 md:top-6 ${scrolled ? 'top-0 md:top-6' : 'top-0 md:top-6'}`}>
                <div className={`
                    backdrop-blur-xl border border-white/10 dark:border-white/5 
                    bg-white/70 dark:bg-navy/80 
                    shadow-lg
                    px-6 py-3
                    md:rounded-full
                    w-full md:min-w-[700px]
                    flex items-center justify-between
                    transition-all duration-300
                `}>
                    {/* Logo (Mobile Only) - On desktop it can be part of the pill or hidden if we want ultra-minimal */}
                    <div className="flex-shrink-0 md:hidden">
                        <Link href="/" className="block relative w-10 h-10">
                            {mounted && (
                                <Image
                                    src={logoSrc}
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            )}
                        </Link>
                    </div>

                    {/* Desktop Menu - Centered in Pill */}
                    <div className="hidden md:flex items-center justify-between w-full space-x-8">
                        {/* Logo for Desktop inside Pill */}
                        <Link href="/" className="block relative w-8 h-8 hover:scale-110 transition-transform">
                            {mounted && (
                                <Image
                                    src={logoSrc}
                                    alt="Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            )}
                        </Link>

                        <div className="flex items-center space-x-8">
                            {navLinks.map((link, index) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleSmoothScroll(e, link.href)}
                                    className="font-display text-sm font-medium text-secondary dark:text-light-slate hover:text-teal-600 dark:hover:text-cyan transition-colors relative group cursor-pointer"
                                >
                                    <span className="text-teal-600 dark:text-cyan text-xs mr-1 font-mono group-hover:translate-x-1 transition-transform inline-block">0{index + 1}.</span>
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        <div className="flex items-center space-x-4">
                            {/* Theme Toggle Button */}
                            <button
                                onClick={toggleTheme}
                                className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {mounted && resolvedTheme === 'dark' ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                    </svg>
                                )}
                            </button>

                            <Link
                                href="/resume"
                                className="px-5 py-2 text-sm font-display font-medium text-teal-600 dark:text-cyan border border-teal-600 dark:border-cyan rounded-full hover:bg-teal-600/10 dark:hover:bg-cyan/10 transition-colors"
                            >
                                Resume
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Button - Right Aligned */}
                    <div className="flex md:hidden items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                        >
                            {mounted && resolvedTheme === 'dark' ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                                </svg>
                            )}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-teal-600 dark:text-cyan hover:bg-light-navy focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div className={`
                    absolute top-full left-0 right-0 mt-2 mx-4 
                    bg-white/95 dark:bg-light-navy/95 backdrop-blur-xl
                    rounded-2xl border border-gray-100 dark:border-lightest-navy shadow-xl
                    overflow-hidden transition-all duration-300 origin-top
                    md:hidden
                    ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'}
                `}>
                    <div className="px-5 pt-4 pb-6 space-y-2">
                        {navLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleSmoothScroll(e, link.href)}
                                className="block px-3 py-3 rounded-lg text-base font-medium text-navy dark:text-slate hover:bg-teal-50 dark:hover:bg-navy hover:text-teal-600 dark:hover:text-cyan transition-colors"
                            >
                                <span className="text-teal-600 dark:text-cyan text-xs font-mono mr-2">0{index + 1}.</span>
                                {link.name}
                            </a>
                        ))}
                        <Link
                            href="/resume"
                            className="block w-full text-center mt-4 px-5 py-3 text-base font-medium text-white bg-teal-600 dark:bg-cyan/10 dark:text-cyan border border-transparent dark:border-cyan rounded-lg hover:bg-teal-700 dark:hover:bg-cyan/20 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            Resume
                        </Link>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
