import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, FileText } from 'lucide-react';

const Hero = () => {
    return (
        <section className="hero-section flex-center" id="home">
            <div className="container flex-col flex-center" style={{ position: 'relative', zIndex: 2 }}>

                <motion.div
                    className="tech-badge"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    Full Stack Developer • AI Specialist
                </motion.div>

                <div className="hero-header-container">
                    <motion.h1
                        className="bg-portfolio-text"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        Portfolio
                    </motion.h1>
                    <motion.span
                        className="fg-name-text"
                        initial={{ opacity: 0, y: "-25%", x: "-50%" }}
                        animate={{ opacity: 1, y: "-40%", x: "-50%" }}
                        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                    >
                        Gauri Jindal
                    </motion.span>
                </div>

                <motion.p
                    className="hero-subtitle-new"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    Building experiences that scale. <br />
                    Design-driven engineer specializing in high-performance <br />
                    MERN applications and intelligent systems.
                </motion.p>

                <motion.div
                    className="hero-social-links"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                >
                    <motion.a
                        href="https://github.com/Jgauri24"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-circle"
                        title="GitHub"
                        whileHover={{ scale: 1.1, backgroundColor: 'white', color: 'black' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Github size={22} />
                    </motion.a>
                    <motion.a
                        href="https://www.linkedin.com/in/gauri-jindal-b0403a324/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-circle"
                        title="LinkedIn"
                        whileHover={{ scale: 1.1, backgroundColor: 'white', color: 'black' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Linkedin size={22} />
                    </motion.a>
                    <motion.a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-circle"
                        title="Resume"
                        whileHover={{ scale: 1.1, backgroundColor: 'white', color: 'black' }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <FileText size={22} />
                    </motion.a>
                </motion.div>

                <motion.div
                    className="scroll-indicator flex-col flex-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <span className="scroll-text">
                        SCROLL TO DISCOVER
                    </span>
                    <motion.div
                        className="scroll-dot-circle"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
