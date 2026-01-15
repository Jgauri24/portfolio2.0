import express from 'express';
import Project from '../models/Project.model.js';

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const { category } = req.query;
    
    let query = {};
    if (category && category !== 'all') {
      query.category = category;
    }

    const projects = await Project.find(query).sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    console.error('Get projects error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (err) {
    console.error('Get project error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
