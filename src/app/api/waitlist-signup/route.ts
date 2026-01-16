import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { Resend } from 'resend';

export const runtime = 'edge';

// Resend init moved to handler

function createWaitlistNotificationEmail(email: string) {
  return `
    <html>
      <body style="font-family: sans-serif; color: #222;">
        <h2>New AI Course Creator Waitlist Signup</h2>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <p>Time: ${new Date().toLocaleString()}</p>
      </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from('ai_course_creator_waitlist')
      .select('id')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      console.error('Error checking existing user:', checkError);
      return NextResponse.json(
        { error: 'Database error' },
        { status: 500 }
      );
    }

    if (existingUser) {
      return NextResponse.json(
        { message: 'Email already registered for waitlist' },
        { status: 200 }
      );
    }

    // Add email to waitlist
    const { error: insertError } = await supabase
      .from('ai_course_creator_waitlist')
      .insert([
        {
          email,
          created_at: new Date().toISOString(),
          source: 'website',
          status: 'pending'
        }
      ]);

    if (insertError) {
      console.error('Error inserting email:', insertError);
      return NextResponse.json(
        { error: 'Failed to join waitlist' },
        { status: 500 }
      );
    }

    // Send notification email to shreyash@vidyayatan.com
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        await resend.emails.send({
          from: 'Vacademy AI <onboarding@resend.dev>',
          to: 'shreyash@vidyayatan.com',
          subject: 'New AI Course Creator Waitlist Signup',
          html: createWaitlistNotificationEmail(email),
        });
      } catch (mailErr) {
        console.error('Error sending waitlist notification email:', mailErr);
      }
    } else {
      console.warn('RESEND_API_KEY not set, skipping waitlist notification email.');
    }

    return NextResponse.json(
      { message: 'Successfully joined waitlist!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Waitlist signup error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 