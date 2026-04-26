import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ArrowUpRight } from 'lucide-react';

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [activeCategory, setActiveCategory] = useState('Full-Stack');

    const categories = ['Full-Stack', 'GenAI'];

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

    const filteredProjects = projects.filter(p => p.category === activeCategory);

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
                    style={{ marginBottom: 'var(--space-xl)', textAlign: 'center' }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="heading-md" style={{ marginBottom: 'var(--space-lg)' }}>
                        Featured <span className="title-gradient">Projects</span>
                    </h2>

                    {/* Category Tabs */}
                    <div className="project-tabs">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                className={`project-tab ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {cat === 'Full-Stack' && '⚡'}
                                {cat === 'GenAI' && '🤖'}
                                <span>{cat}</span>
                                {activeCategory === cat && (
                                    <motion.div
                                        className="tab-active-bar"
                                        layoutId="activeTab"
                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                    />
                                )}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        className="projects-container"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        {filteredProjects.map((project, index) => (
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
                                    <div className="project-category-badge">
                                        {project.category === 'GenAI' ? '🤖' : '⚡'} {project.category}
                                    </div>
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

                        {filteredProjects.length === 0 && (
                            <motion.div
                                className="no-projects-msg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                            >
                                <p>Projects loading...</p>
                            </motion.div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Projects;
