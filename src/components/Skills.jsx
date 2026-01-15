import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const row1 = [
        "React", "Next.js", "Node.js", "TypeScript", "TailwindCSS",
        "MongoDB", "Express", "Python", "Git", "Figma", "Redux", "GraphQL"
    ];

    const row2 = [
        "PostgreSQL", "MySQL", "Vite", "Docker", "AWS", "Firebase",
        "Postman", "Pandas", "NumPy", "JavaScript", "HTML", "CSS"
    ];

    
    const MarqueeRow = ({ items, direction = 1, speed = 20 }) => {

        const duplicatedItems = [...items, ...items, ...items];

        return (
            <div className="marquee-row">
                <motion.div
                    animate={{
                        x: direction > 0 ? [0, -1000] : [-1000, 0]
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: speed,
                            ease: "linear",
                        },
                    }}
                    style={{ display: 'flex' }}
                >
                    {duplicatedItems.map((skill, index) => (
                        <div key={index} className="brutal-tag">
                            {skill}
                        </div>
                    ))}
                </motion.div>
            </div>
        );
    };

    return (
        <section className="section" id="skills" style={{ overflow: 'hidden' }}>
            <div className="container" style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}>
                <div className="tech-badge">Technical Arsenal</div>
                <h2 className="heading-md">
                    Skills <span className="title-gradient">& Frameworks</span>
                </h2>
            </div>

            <div className="marquee-wrapper">
                <MarqueeRow items={row1} direction={1} speed={25} />
                <MarqueeRow items={row2} direction={-1} speed={30} />
            </div>
        </section>
    );
};

export default Skills;
