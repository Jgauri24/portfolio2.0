import { Resend } from 'resend';

export const sendEmail = async ({ to, subject, html }) => {
  if (!process.env.RESEND_API_KEY) {
    console.log('Mock Email Sent (No API Key):', { to, subject });
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>', // Resend default for unverified domains
      to,
      subject,
      html
    });
    
    return data;
  } catch (error) {
    console.error('Resend error:', error);
    throw error;
  }
};
