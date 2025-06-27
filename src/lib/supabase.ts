import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Type for booking form data
export interface BookingFormData {
  id?: string
  name: string
  email: string
  phone: string
  created_at?: string
  updated_at?: string
}

// Function to send emails via API route
async function sendBookingEmails(data: { name: string; email: string; phone: string }) {
  try {
    const response = await fetch('/api/send-booking-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error calling email API:', error);
    throw error;
  }
}

// Function to submit booking form data and send emails
export async function submitBookingForm(data: Omit<BookingFormData, 'id' | 'created_at' | 'updated_at'>) {
  try {
    // First, save to database
    const { data: result, error } = await supabase
      .from('bookings')
      .insert([
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
        }
      ])
      .select()

    if (error) {
      throw error
    }

    // Then send emails (don't let email failures break the form submission)
    try {
      const emailResults = await sendBookingEmails({
        name: data.name,
        email: data.email,
        phone: data.phone,
      });

      console.log('Email results:', emailResults);
      
      return { 
        success: true, 
        data: result,
        emailSent: emailResults.success,
        emailResults: emailResults
      }
    } catch (emailError) {
      console.error('Email sending failed, but booking was saved:', emailError);
      
      // Return success for database operation even if emails fail
      return { 
        success: true, 
        data: result,
        emailSent: false,
        emailError: emailError instanceof Error ? emailError.message : 'Email sending failed'
      }
    }

  } catch (error) {
    console.error('Error submitting booking form:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'An unknown error occurred' 
    }
  }
} 