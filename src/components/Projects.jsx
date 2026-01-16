import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const apiUrl = "https://portfolio2-0-fz2l.onrender.com"
            try {
                const response = await fetch(`${apiUrl}/api/projects`);
                const data = await response.json();
                setProjects(data);
            } catch (error) {
                console.error('Error fetching projects:', error);
            }
        };

        fetchProjects();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] }
        }
    };

    return (
        <section className="section" id="work">
            <div className="container">
                <motion.div
                    className="flex-col flex-center"
                    style={{ marginBottom: 'var(--space-2xl)', textAlign: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="heading-md" style={{ marginBottom: 0 }}>
                        Featured <span className="title-gradient">Projects</span>
                    </h2>
                </motion.div>

                <div className="projects-container">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id}
                            className="project-row"
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
                        >
                            <div className="project-preview-card flex-center" style={{ background: '#0a0a0a' }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: `linear-gradient(135deg, ${project.imageColor} 0%, rgba(0,0,0,0) 100%)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'relative'
                                }}>
                                    <div style={{
                                        padding: '24px',
                                        background: 'rgba(255, 255, 255, 0.03)',
                                        border: '1px solid rgba(255, 255, 255, 0.08)',
                                        borderRadius: '16px',
                                        textAlign: 'center',
                                        width: '60%',
                                        backdropFilter: 'blur(10px)',
                                        boxShadow: '0 20px 50px rgba(0,0,0,0.3)'
                                    }}>
                                        <p style={{ color: 'var(--accent-main)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>
                                            {project.title}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="project-content">
                                <h3 className="project-title-new">{project.title}</h3>
                                <p className="project-desc-new">{project.description}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: 'var(--space-md)' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className="tag-pill">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-actions">
                                    <a href={project.live} className="btn-demo">
                                        Live Demo <ArrowUpRight size={18} />
                                    </a>
                                    <a href={project.github} className="btn-code">
                                        <Github size={18} /> Code
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
