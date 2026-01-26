import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.model.js';

dotenv.config();

const projects = [
    {
        title: 'Happenix',
        category: 'Full-Stack Web Application',
        description: 'A full-stack event discovery and management platform that enables users to discover nearby events, book tickets, and engage through gamified experiences with real-time location tracking and QR-based validation.',
        tags: [
            'React', 'Vite', 'Tailwind CSS', 'Node.js',
            'Express.js', 'MongoDB', 'JWT', 'Leaflet',
            'Google Distance Matrix API'
        ],
        github: 'https://github.com/Jgauri24/happenix',
        live: 'https://happenix.vercel.app',
        imageColor: '#87A96B'
    },{
  title: 'Vantage',
  category: 'Full-Stack Web Application',
  description:
    'Vantage is a premium full-stack service marketplace that facilitates professional engagements with secure, milestone-based payments and real-time collaboration.',
  tags: [
    'React',
    'Vite',
    'Tailwind CSS',
    'Node.js',
    'Express.js',
    'MongoDB',
    'JWT',
    'Socket.io',
    'Google OAuth 2.0'
  ],
  github: 'https://github.com/Jgauri24/Vantage',
  live: "https://vantage-beryl.vercel.app",
  imageColor: '#406db5ff'
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
