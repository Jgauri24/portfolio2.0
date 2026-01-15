import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    const journey = [

        { role: "Pursuing B.Tech in CS & DSE", date: "2025 - Current" },


    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="container" id="about">
            <div className="grid-2" style={{ gap: 'var(--space-xl)', alignItems: 'flex-start' }}>

                {/* Left Side: Journey */}
                <motion.div
                    style={{ textAlign: 'left' }}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="tech-badge" style={{ marginBottom: 'var(--space-md)' }}>My Journey</div>
                    <motion.div
                        className="journey-timeline"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <div className="journey-line" style={{ background: 'var(--accent-dim)' }}></div>
                        {journey.map((item, index) => (
                            <motion.div
                                key={index}
                                className={`journey-item ${index === journey.length - 1 ? 'active' : ''}`}
                                variants={itemVariants}
                            >
                                <div className="journey-dot" style={{ borderColor: 'var(--accent-main)' }}></div>
                                <h3 className="journey-role" style={{ fontSize: '1.25rem' }}>{item.role}</h3>
                                <span className="journey-date">{item.date}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Side: Bio */}
                <motion.div
                    style={{ textAlign: 'left' }}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="tech-badge" style={{ marginBottom: 'var(--space-md)' }}>My Story</div>
                    <h2 className="heading-md" style={{ marginBottom: 'var(--space-lg)' }}>
                        Blending <span className="title-gradient">Logic</span> with <br /> Intuitive Design
                    </h2>

                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-md)' }}>
                        I’m Gauri Jindal, a full-stack developer with a strong foundation in the MERN stack and a passion for building scalable, production-ready web applications. Over the past 2+ years of coding, I’ve solved 200+ DSA problems and worked across 10+ technologies, which has shaped the way I think about systems, performance, and product impact.
                    </p>

                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.7', marginBottom: 'var(--space-md)' }}>
                        My engineering mindset starts with a simple principle — understand the problem deeply before writing the first line of code. Whether I’m optimizing backend logic, designing intuitive user experiences, or experimenting with AI/ML, I focus on writing clean, maintainable code that grows with the product.
                    </p>

                    <p style={{ fontSize: '1rem', color: 'var(--text-dim)', lineHeight: '1.7', marginBottom: 'var(--space-lg)' }}>
                        I love challenges that force me to think algorithmically, collaborate like an engineer, and deliver like an owner. Currently, I’m specializing in high-performance applications and intelligent systems.
                    </p>

                    <motion.p
                        style={{ fontSize: '1.1rem', color: 'var(--accent-main)', fontWeight: 600 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 }}
                    >
                        If it scales, performs well, and actually solves a real problem, I’m all in.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
