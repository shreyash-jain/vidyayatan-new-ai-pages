import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'edge';

// Resend client initialized in handler

export interface BookingEmailData {
  name: string;
  email: string;
  phone: string;
  source?: 'vidyayatan' | 'yoga';
}

// Email template for booking confirmation
const createBookingConfirmationEmail = (data: BookingEmailData) => {
  const isYoga = data.source === 'yoga';
  const brandName = isYoga ? 'Vacademy' : 'Vidyayatan AI';
  const brandSubtitle = isYoga ? 'Wellness Platform Solutions' : 'Intelligent Business Automation';
  const headerGradient = isYoga ? 'linear-gradient(135deg, #ED7424 0%, #F19146 100%)' : 'linear-gradient(135deg, #a0a3e8 0%, #888ae0 100%)';
  const buttonGradient = isYoga ? 'linear-gradient(135deg, #ED7424 0%, #F19146 100%)' : 'linear-gradient(135deg, #a0a3e8 0%, #888ae0 100%)';
  const accentColor = isYoga ? '#ED7424' : '#a0a3e8';
  const websiteUrl = isYoga ? 'https://lms.vacademy.io' : 'https://ai.vidyayatan.com';
  const solutionType = isYoga ? 'wellness platform' : 'AI solutions';
  const meetingType = isYoga ? 'demo' : 'consultation';
  const expertType = isYoga ? 'wellness platform specialist' : 'AI solutions expert';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Confirmation - ${brandName}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: ${headerGradient}; color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
        .footer { text-align: center; margin-top: 20px; color: #666; font-size: 14px; }
        .button { display: inline-block; padding: 12px 24px; background: ${buttonGradient}; color: white; text-decoration: none; border-radius: 6px; font-weight: 500; }
        .details { background: white; padding: 20px; border-radius: 6px; margin: 20px 0; border-left: 4px solid ${accentColor}; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 style="margin: 0; font-size: 28px;">Thank You for Your Interest!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">${brandName} - ${brandSubtitle}</p>
        </div>
        
        <div class="content">
          <h2 style="color: #495057; margin-top: 0;">Booking Confirmation</h2>
          
          <p>Hi <strong>${data.name}</strong>,</p>
          
          <p>We have successfully received your ${meetingType} request for ${brandName} ${solutionType}. Our team will contact you within 24 hours to schedule your personalized ${meetingType}.</p>
          
          <div class="details">
            <h3 style="margin-top: 0; color: #495057;">Your Details:</h3>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Source:</strong> ${isYoga ? 'Wellness Platform' : 'AI Solutions'}</p>
            <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
          </div>
          
          <h3 style="color: #495057;">What's Next?</h3>
          <ul>
            <li>Our ${expertType} will contact you within 24 hours</li>
            <li>We'll schedule a personalized ${meetingType} based on your availability</li>
            <li>Discover how ${brandName} can ${isYoga ? 'scale your wellness business' : 'accelerate your business operations'}</li>
          </ul>
          
          <p>In the meantime, feel free to explore our <a href="${websiteUrl}" style="color: ${accentColor};">${solutionType}</a> and learn more about how we're helping businesses ${isYoga ? 'build thriving online wellness communities' : 'automate and scale with intelligent AI employees'}.</p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="${websiteUrl}" class="button">Explore Our Solutions</a>
          </div>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} ${brandName}. All rights reserved.</p>
          <p>${isYoga ? 'Empowering wellness trainers worldwide' : 'Building the future of intelligent business automation'}</p>
        </div>
      </div>
    </body>
    </html>
  `;
};

// Email template for internal notification
const createInternalNotificationEmail = (data: BookingEmailData) => {
  const isYoga = data.source === 'yoga';
  const brandName = isYoga ? 'Vacademy' : 'Vidyayatan AI';
  const websiteType = isYoga ? 'wellness platform' : 'AI';
  const meetingType = isYoga ? 'demo' : 'consultation';
  const accentColor = isYoga ? '#ED7424' : '#a0a3e8';
  const alertBg = isYoga ? '#fef5e7' : '#e8f4f8';

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Booking Request - ${brandName}</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .alert { background: ${alertBg}; border-left: 4px solid ${accentColor}; padding: 20px; margin: 20px 0; }
        .details { background: #f9f9f9; padding: 20px; border-radius: 6px; margin: 20px 0; }
        .source-tag { display: inline-block; background: ${accentColor}; color: white; padding: 4px 12px; border-radius: 12px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 style="color: #495057;">🚀 New Booking Request <span class="source-tag">${isYoga ? 'Yoga/Wellness' : 'AI Solutions'}</span></h1>
        
        <div class="alert">
          <h2 style="margin-top: 0;">Action Required: New ${meetingType.charAt(0).toUpperCase() + meetingType.slice(1)} Request</h2>
          <p>A potential client has requested a ${meetingType} through the ${brandName} ${websiteType} website.</p>
        </div>
        
        <div class="details">
          <h3>Contact Details:</h3>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
          <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
          <p><strong>Source:</strong> ${isYoga ? 'Wellness Platform (Yoga/Fitness)' : 'AI Solutions Platform'}</p>
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
        
        <h3>Next Steps:</h3>
        <ul>
          <li>Contact the client within 24 hours</li>
          <li>Schedule a personalized ${meetingType}</li>
          <li>Prepare relevant ${isYoga ? 'wellness platform features and success stories' : 'use cases for their industry'}</li>
          ${isYoga ? '<li>Focus on scaling online wellness communities and automation</li>' : '<li>Demonstrate AI employee capabilities</li>'}
        </ul>
      </div>
    </body>
    </html>
  `;
};

export async function POST(request: NextRequest) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: 'Resend API key not configured' },
        { status: 500 }
      );
    }
    
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, phone, source } = body as BookingEmailData;

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone' },
        { status: 400 }
      );
    }

    const teamEmails = ['shreyash@vidyayatan.com', 'namita@vidyayatan.com'];

    console.log(`Sending confirmation email to customer: ${email}`);
    console.log(`Sending notification emails to team: ${teamEmails.join(', ')}`);

    const isYoga = source === 'yoga';
    const brandName = isYoga ? 'Vacademy' : 'Vidyayatan AI';
    const meetingType = isYoga ? 'Demo' : 'Demo';
    const fromName = isYoga ? 'Vacademy' : 'Vidyayatan AI';

    // Send both emails concurrently
    const [confirmationResult, notificationResult] = await Promise.allSettled([
      // Customer confirmation email
      resend.emails.send({
        from: `${fromName} <onboarding@resend.dev>`,
        replyTo: 'shreyash@vidyayatan.com',
        to: email,
        subject: `Booking Confirmation - ${brandName} ${meetingType} Request`,
        html: createBookingConfirmationEmail({ name, email, phone, source }),
      }),
      // Team notification email
      resend.emails.send({
        from: `${fromName} Bookings <onboarding@resend.dev>`,
        replyTo: 'shreyash@vidyayatan.com',
        to: teamEmails,
        subject: `🚀 New ${meetingType} Request from ${name} (${isYoga ? 'Wellness' : 'AI Solutions'})`,
        html: createInternalNotificationEmail({ name, email, phone, source }),
      }),
    ]);

    const confirmationSuccess = confirmationResult.status === 'fulfilled' && !confirmationResult.value.error;
    const notificationSuccess = notificationResult.status === 'fulfilled' && !notificationResult.value.error;

    // Enhanced error logging
    if (confirmationResult.status === 'rejected') {
      console.error('Customer confirmation email rejected:', confirmationResult.reason);
    } else if (confirmationResult.status === 'fulfilled' && confirmationResult.value.error) {
      console.error('Customer confirmation email error:', confirmationResult.value.error);
    }

    if (notificationResult.status === 'rejected') {
      console.error('Team notification email rejected:', notificationResult.reason);
    } else if (notificationResult.status === 'fulfilled' && notificationResult.value.error) {
      console.error('Team notification email error:', notificationResult.value.error);
    }

    return NextResponse.json({
      success: confirmationSuccess || notificationSuccess,
      confirmation: {
        success: confirmationSuccess,
        data: confirmationResult.status === 'fulfilled' ? confirmationResult.value.data : null,
        error: confirmationResult.status === 'rejected' ? confirmationResult.reason.message : 
               (confirmationResult.status === 'fulfilled' && confirmationResult.value.error ? confirmationResult.value.error.message : null)
      },
      notification: {
        success: notificationSuccess,
        data: notificationResult.status === 'fulfilled' ? notificationResult.value.data : null,
        error: notificationResult.status === 'rejected' ? notificationResult.reason.message :
               (notificationResult.status === 'fulfilled' && notificationResult.value.error ? notificationResult.value.error.message : null)
      }
    });

  } catch (error) {
    console.error('Error in send-booking-email API:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 