import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send, Lightbulb, Github, Linkedin, Twitter, Instagram, Code } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('idle'); 

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

            const apiUrl = "https://portfolio2-0-fz2l.onrender.com"

        try {
            const response = await fetch(`${apiUrl}/api/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to send message');
            }

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 5000);
        } catch (error) {
            console.error('Contact error:', error);
            setStatus('error');
            setTimeout(() => setStatus('idle'), 5000);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="section container" id="contact">
            <motion.div
                style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="heading-md" style={{ marginBottom: 'var(--space-sm)', display: 'inline-block' }}>
                    <span className="title-gradient">Get In Touch</span>
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                    Have a project in mind or want to collaborate? Feel free to reach out!
                </p>
            </motion.div>

            <div className="contact-grid">
                {/* Left Side: Info and Socials */}
                <motion.div
                    style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-lg)' }}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {/* Contact Info Card */}
                    <motion.div className="contact-card" variants={itemVariants}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-lg)', fontWeight: '700' }}>Contact Information</h3>
                        <div className="contact-info-list" style={{ gap: 'var(--space-md)' }}>
                            <div className="contact-info-item">
                                <div className="contact-icon-wrapper" style={{ background: 'var(--accent-dim)', color: 'var(--accent-main)' }}>
                                    <Mail size={20} />
                                </div>
                                <div className="info-content">
                                    <h4>Email</h4>
                                    <p>jindalgauri244@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-icon-wrapper" style={{ background: 'var(--accent-dim)', color: 'var(--accent-main)' }}>
                                    <MapPin size={20} />
                                </div>
                                <div className="info-content">
                                    <h4>Location</h4>
                                    <p>Gaziabad, India</p>
                                </div>
                            </div>
                            <div className="contact-info-item">
                                <div className="contact-icon-wrapper" style={{ background: 'var(--accent-dim)', color: 'var(--accent-main)' }}>
                                    <Clock size={20} />
                                </div>
                                <div className="info-content">
                                    <h4>Availability</h4>
                                    <p>Open for work</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Socials Card */}
                    <motion.div className="contact-card" variants={itemVariants}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-lg)', fontWeight: '700' }}>Connect With Me</h3>
                        <div className="social-links-grid" style={{ gap: 'var(--space-sm)' }}>
                            {[
                                { icon: <Github size={20} />, href: "https://github.com/Jgauri24" },
                                { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/gauri-jindal-b0403a324/" },
                                { icon: <Code size={20} />, href: "https://leetcode.com/u/gauri_jindal1/" },

                            ].map((social, idx) => (
                                <motion.a
                                    key={idx}
                                    href={social.href}
                                    className="social-icon-btn"
                                    whileHover={{ scale: 1.1, backgroundColor: 'var(--accent-main)', color: 'white' }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Side: Form Card */}
                <motion.div
                    className="contact-card"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-lg)' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>Send Me a Message</h3>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="form-row" style={{ gap: 'var(--space-md)' }}>
                            <div className="form-group" style={{ marginBottom: 'var(--space-md)' }}>
                                <label style={{ marginBottom: 'var(--space-xs)' }}>Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="John Doe"
                                    className="form-input-styled"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group" style={{ marginBottom: 'var(--space-md)' }}>
                                <label style={{ marginBottom: 'var(--space-xs)' }}>Your Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    className="form-input-styled"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: 'var(--space-md)' }}>
                            <label style={{ marginBottom: 'var(--space-xs)' }}>Subject</label>
                            <input
                                type="text"
                                name="subject"
                                placeholder="Project Inquiry"
                                className="form-input-styled"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group" style={{ marginBottom: 'var(--space-lg)' }}>
                            <label style={{ marginBottom: 'var(--space-xs)' }}>Message</label>
                            <textarea
                                name="message"
                                placeholder="Tell me about your project..."
                                className="form-input-styled"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                style={{ resize: 'none' }}
                                required
                            />
                        </div>

                        <motion.button
                            type="submit"
                            className="submit-btn-gradient"
                            style={{ width: '100%', marginTop: '0' }}
                            disabled={status === 'sending'}
                            whileHover={{ scale: status === 'sending' ? 1 : 1.02 }}
                            whileTap={{ scale: status === 'sending' ? 1 : 0.98 }}
                        >
                            <span>
                                {status === 'idle' && 'Send Message'}
                                {status === 'sending' && 'Sending...'}
                                {status === 'success' && 'Message Sent!'}
                                {status === 'error' && 'Error Occurred'}
                            </span>
                            <Send size={18} style={{ display: status === 'sending' ? 'none' : 'block' }} />
                        </motion.button>

                        {status === 'success' && (
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                style={{ color: 'var(--accent-main)', fontSize: '0.9rem', textAlign: 'center', marginTop: '1rem', fontWeight: 600 }}
                            >
                                Thank you! I'll get back to you shortly.
                            </motion.p>
                        )}
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
