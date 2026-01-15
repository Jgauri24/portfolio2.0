import express from 'express';
import Contact from '../models/Contact.model.js';
import { sendEmail } from '../services/email.service.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;


    if (!name || !email || !subject || !message) {
      return res.status(400).json({ 
        error: 'All fields are required' 
      });
    }
    let contact;
    if (Contact.db.readyState === 1) {
      contact = new Contact({ name, email, subject, message });
      await contact.save();
    }
    try {
      await sendEmail({
        to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com',
        subject: `Portfolio Contact: ${subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message}</p>
        `
      });
    } catch (emailError) {
      console.error('Email send failed:', emailError);
    }

    res.status(201).json({ 
      message: 'Message sent successfully',
      id: contact?._id 
    });
  } catch (err) {
    console.error('Contact route error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

export default router;
