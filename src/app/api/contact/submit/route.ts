import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

// Create transporter for email
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

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      subject,
      service,
      message,
      preferredContact,
      urgency
    } = body;

    // Validate required fields
    if (!name || !email || !phone || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields'
        },
        { status: 400 }
      );
    }

    // Check if email configuration is available
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.log('Email configuration not available, logging form submission:');
      console.log({ name, email, phone, subject, service, message, preferredContact, urgency });
      
      return NextResponse.json({
        success: true,
        message: 'Form submitted successfully (logged to console)'
      });
    }

    const transporter = createTransporter();

    // Send confirmation email to user
    const userEmailOptions = {
      from: `${process.env.FROM_NAME || 'AusbildungVisa'} <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
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
      from: `${process.env.FROM_NAME || 'AusbildungVisa'} <${process.env.FROM_EMAIL || process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
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

    // Send emails
    await Promise.all([
      transporter.sendMail(userEmailOptions),
      transporter.sendMail(adminEmailOptions)
    ]);

    return NextResponse.json({
      success: true,
      message: 'Contact form submitted successfully! Check your email for confirmation.'
    });

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to send message. Please try again later.'
      },
      { status: 500 }
    );
  }
}