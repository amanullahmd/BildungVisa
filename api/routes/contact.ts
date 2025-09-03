/**
 * Contact form API route with Hostinger email integration
 * Handles contact form submissions and appointment scheduling
 */
import { Router, type Request, type Response } from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = Router();

// Create transporter for Hostinger SMTP
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.hostinger.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

// Email templates
const getContactConfirmationTemplate = (data: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Contact Confirmation - AusbildungVisa</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #1e40af, #3b82f6); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
        .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #3b82f6; }
        .footer { text-align: center; margin-top: 30px; color: #666; }
        .btn { display: inline-block; background: #3b82f6; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You for Contacting Us!</h1>
          <p>Your inquiry has been received successfully</p>
        </div>
        <div class="content">
          <p>Dear ${data.name},</p>
          <p>Thank you for reaching out to AusbildungVisa. We have received your inquiry and our team will review it carefully.</p>
          
          <div class="info-box">
            <h3>Your Submission Details:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Service:</strong> ${data.service || 'General Inquiry'}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Message:</strong> ${data.message}</p>
            <p><strong>Preferred Contact:</strong> ${data.preferredContact}</p>
          </div>
          
          <div class="info-box">
            <h3>What Happens Next?</h3>
            <p>📅 <strong>Appointment Scheduling:</strong> Our team will contact you within 24-48 hours to schedule a consultation appointment that fits your schedule.</p>
            <p>📧 <strong>Email Follow-up:</strong> You will receive a detailed email with appointment options and next steps.</p>
            <p>📱 <strong>WhatsApp Contact:</strong> For urgent matters, you can also reach us on WhatsApp at ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</p>
          </div>
          
          <p>Our experienced consultants are ready to help you achieve your German visa goals. We specialize in Ausbildung programs, study visas, and work permits.</p>
          
          <div class="footer">
            <p>Best regards,<br><strong>AusbildungVisa Team</strong></p>
            <p>Your German Dream Partner</p>
            <a href="https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace('+', '')}" class="btn">Contact us on WhatsApp</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

const getAdminNotificationTemplate = (data: any) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #dc2626; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f8fafc; padding: 30px; border-radius: 0 0 10px 10px; }
        .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #dc2626; }
        .urgent { background: #fef2f2; border-left-color: #dc2626; }
        .normal { background: #f0f9ff; border-left-color: #3b82f6; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚨 New Contact Form Submission</h1>
          <p>Priority: ${data.urgency?.toUpperCase() || 'NORMAL'}</p>
        </div>
        <div class="content">
          <div class="info-box ${data.urgency === 'urgent' ? 'urgent' : 'normal'}">
            <h3>Contact Information:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
            <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
            <p><strong>WhatsApp:</strong> <a href="https://wa.me/${data.phone?.replace(/[^0-9]/g, '')}">Contact on WhatsApp</a></p>
          </div>
          
          <div class="info-box">
            <h3>Inquiry Details:</h3>
            <p><strong>Service:</strong> ${data.service || 'General Inquiry'}</p>
            <p><strong>Subject:</strong> ${data.subject}</p>
            <p><strong>Preferred Contact:</strong> ${data.preferredContact}</p>
            <p><strong>Urgency:</strong> ${data.urgency || 'normal'}</p>
            <p><strong>Submission Time:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <div class="info-box">
            <h3>Message:</h3>
            <p>${data.message}</p>
          </div>
          
          <div class="info-box">
            <h3>Action Required:</h3>
            <p>✅ Send appointment scheduling email to client</p>
            <p>✅ Add to CRM system</p>
            <p>✅ Schedule follow-up within 24-48 hours</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
};

/**
 * Submit Contact Form
 * POST /api/contact/submit
 */
router.post('/submit', async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      service,
      message,
      preferredContact,
      urgency
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
      return;
    }

    const transporter = createTransporter();

    // Send confirmation email to user
    const userEmailOptions = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: 'Contact Confirmation - AusbildungVisa | Appointment Scheduling',
      html: getContactConfirmationTemplate({
        name,
        email,
        phone,
        subject,
        service,
        message,
        preferredContact
      })
    };

    // Send notification email to admin
    const adminEmailOptions = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🚨 New Contact Form: ${subject} - ${urgency?.toUpperCase() || 'NORMAL'} Priority`,
      html: getAdminNotificationTemplate({
        name,
        email,
        phone,
        subject,
        service,
        message,
        preferredContact,
        urgency
      })
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(userEmailOptions),
      transporter.sendMail(adminEmailOptions)
    ]);

    res.status(200).json({
      success: true,
      message: 'Contact form submitted successfully. You will receive a confirmation email shortly.',
      data: {
        appointmentScheduling: true,
        whatsappContact: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
        expectedResponse: '24-48 hours'
      }
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit contact form. Please try again or contact us directly.'
    });
  }
});

/**
 * Submit Consultation Form
 * POST /api/contact/consultation
 */
router.post('/consultation', async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      name,
      email,
      phone,
      visaType,
      preferredDate,
      preferredTime,
      message
    } = req.body;

    // Validate required fields
    if (!name || !email || !phone || !visaType) {
      res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
      return;
    }

    const transporter = createTransporter();

    // Send consultation confirmation email to user
    const userEmailOptions = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: email,
      subject: 'Consultation Request Confirmed - AusbildungVisa',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Consultation Confirmation</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #059669, #10b981); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f0fdf4; padding: 30px; border-radius: 0 0 10px 10px; }
            .info-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #10b981; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 Consultation Request Received!</h1>
              <p>We're excited to help you with your ${visaType} journey</p>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              <p>Thank you for requesting a consultation with AusbildungVisa. We have received your request and will schedule your appointment soon.</p>
              
              <div class="info-box">
                <h3>Your Consultation Details:</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Visa Type:</strong> ${visaType}</p>
                <p><strong>Preferred Date:</strong> ${preferredDate || 'Flexible'}</p>
                <p><strong>Preferred Time:</strong> ${preferredTime || 'Flexible'}</p>
                ${message ? `<p><strong>Additional Notes:</strong> ${message}</p>` : ''}
              </div>
              
              <div class="info-box">
                <h3>📅 Next Steps:</h3>
                <p>1. Our consultation coordinator will contact you within 24 hours</p>
                <p>2. We'll confirm your appointment date and time</p>
                <p>3. You'll receive a calendar invitation with meeting details</p>
                <p>4. We'll send you a preparation checklist before the meeting</p>
              </div>
              
              <p>For immediate assistance, contact us on WhatsApp: ${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</p>
              
              <div style="text-align: center; margin-top: 30px;">
                <p>Best regards,<br><strong>AusbildungVisa Consultation Team</strong></p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `
    };

    // Send notification to admin
    const adminEmailOptions = {
      from: `${process.env.FROM_NAME} <${process.env.FROM_EMAIL}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `📅 New Consultation Request: ${visaType} - ${name}`,
      html: `
        <h2>New Consultation Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Visa Type:</strong> ${visaType}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || 'Flexible'}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime || 'Flexible'}</p>
        <p><strong>Message:</strong> ${message || 'No additional message'}</p>
        <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        
        <h3>Action Required:</h3>
        <ul>
          <li>Schedule consultation appointment</li>
          <li>Send calendar invitation</li>
          <li>Prepare consultation materials</li>
        </ul>
      `
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(userEmailOptions),
      transporter.sendMail(adminEmailOptions)
    ]);

    res.status(200).json({
      success: true,
      message: 'Consultation request submitted successfully. We will contact you within 24 hours to schedule your appointment.',
      data: {
        consultationType: visaType,
        appointmentScheduling: true,
        expectedResponse: '24 hours'
      }
    });

  } catch (error) {
    console.error('Consultation form submission error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to submit consultation request. Please try again or contact us directly.'
    });
  }
});

export default router;