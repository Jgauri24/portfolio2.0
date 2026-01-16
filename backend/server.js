import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import contactRoutes from './routes/contact.routes.js';
import projectRoutes from './routes/projects.routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware

app.use(cors());
app.use(express.json());

app.use('/api/contact', contactRoutes);
app.use('/api/projects', projectRoutes);

const startServer = async () => {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (mongoUri) {
      console.log('Connecting to MongoDB...');
      // Log part of the URI to confirm if it's Atlas or local (safe masked log)
      const maskedUri = mongoUri.replace(/\/\/.*@/, '//****:****@');
      console.log(`Using URI: ${maskedUri.substring(0, 30)}...`);
      
      await mongoose.connect(mongoUri);
      console.log('MongoDB connected');
    } else {
      console.warn('MONGODB_URI is not defined in environment variables');
    }
    
    app.listen(PORT, '0.0.0.0', () => {
      console.log(`Server running on port ${PORT} and binding to 0.0.0.0`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    // On Render, we want to exit if the DB fails so the service doesn't stay in a broken state
    process.exit(1);
  }
};

startServer();
