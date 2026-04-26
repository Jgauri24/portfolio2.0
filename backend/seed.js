import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.model.js';

dotenv.config();

const projects = [
    {
        title: 'Happenix',
        category: 'Full-Stack',
        description: 'A full-stack event discovery and management platform that enables users to discover nearby events, book tickets, and engage through gamified experiences with real-time location tracking and QR-based validation.',
        tags: [
            'React', 'Vite', 'Tailwind CSS', 'Node.js',
            'Express.js', 'MongoDB', 'JWT', 'Leaflet',
            'Google Distance Matrix API'
        ],
        github: 'https://github.com/Jgauri24/happenix',
        live: 'https://happenix.vercel.app',
        imageColor: '#87A96B'
    },
    {
        title: 'Vantage',
        category: 'Full-Stack',
        description: 'Vantage is a premium full-stack service marketplace that facilitates professional engagements with secure, milestone-based payments, real-time collaboration, and an intelligent AI-powered chatbot for instant platform support and smart recommendations.',
        tags: [
            'React', 'Vite', 'Tailwind CSS', 'Node.js',
            'Express.js', 'MongoDB', 'JWT', 'Socket.io',
            'Google OAuth 2.0', 'AI Chatbot'
        ],
        github: 'https://github.com/Jgauri24/Vantage',
        live: 'https://vantage-beryl.vercel.app',
        imageColor: '#406db5ff'
    },
  
    {
        title: 'Vehicle Maintenance AI',
        category: 'GenAI',
        description: 'An agentic AI-powered vehicle maintenance system using LangGraph with conditional routing, human-in-the-loop workflows, and ReAct tool-calling patterns for intelligent fleet management and predictive maintenance.',
        tags: [
            'Python', 'LangGraph', 'Streamlit', 'GenAI',
            'Agentic AI', 'ReAct', 'Human-in-the-Loop'
        ],
        github: 'https://github.com/viruchafale/VEHICLE-MAINTENACE-AI',
        live: 'https://vehicle-maintenace-ai-b4wxe3uazchmkkxfzq2azo.streamlit.app/',
        imageColor: '#9b59b6'
    }
];

const seedDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('MongoDB connected for seeding');
        
        await Project.deleteMany({});
        console.log('Cleared existing projects');
        
        await Project.insertMany(projects);
        console.log('Seeded projects successfully');
        
        process.exit(0);
    } catch (error) {
        console.error('Seeding error:', error);
        process.exit(1);
    }
};

seedDB();
