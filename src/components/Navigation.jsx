import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['home', 'about', 'skills', 'work', 'contact'];
            const current = sections.find(section => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'work' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <div className="nav-wrapper flex-center">
            <motion.nav
                className="nav-pill"
                style={{ transform: scrolled ? 'scale(0.95)' : 'scale(1)' }}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            >
                <div className="avatar">
                    <div style={{ width: '100%', height: '100%', background: 'var(--accent-gradient)' }}></div>
                </div>

                <div className="flex-center" style={{ gap: 'var(--space-xs)' }}>
                    {navItems.map((item) => (
                        <a
                            key={item.id}
                            href={`#${item.id}`}
                            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                            style={{ position: 'relative' }}
                        >
                            {item.name}
                            {activeSection === item.id && (
                                <motion.div
                                    layoutId="nav-active"
                                    style={{
                                        position: 'absolute',
                                        bottom: '6px',
                                        left: '50%',
                                        x: '-50%',
                                        width: '4px',
                                        height: '4px',
                                        borderRadius: '50%',
                                        backgroundColor: 'var(--accent-main)',
                                        boxShadow: '0 0 10px var(--accent-main)'
                                    }}
                                />
                            )}
                        </a>
                    ))}
                </div>
            </motion.nav>
        </div>
    );
};

export default Navigation;
