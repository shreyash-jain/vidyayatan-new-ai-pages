# Supabase Setup Instructions

## 1. Database Setup

1. Go to your Supabase dashboard: https://app.supabase.com/projects
2. Select your project: `tajeaokjxtieuwmrqkxf`
3. Navigate to the "SQL Editor" tab
4. Copy and paste the contents of `supabase-setup.sql` into the editor
5. Click "Run" to execute the SQL commands

This will create:
- A `bookings` table with the following columns:
  - `id` (UUID, Primary Key)
  - `name` (Text, Required)
  - `email` (Text, Required)
  - `phone` (Text, Required)
  - `created_at` (Timestamp)
  - `updated_at` (Timestamp)
- Indexes for better performance
- Row Level Security (RLS) policies
- Auto-updating timestamp triggers

## 2. Environment Variables

The following environment variables have been set in `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://tajeaokjxtieuwmrqkxf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## 3. Form Integration

The `BookingDialog` component has been updated to:
- ✅ Handle form state with React hooks
- ✅ Validate form inputs (required fields, email format)
- ✅ Submit data to Supabase
- ✅ Show loading states during submission
- ✅ Display success/error messages
- ✅ Reset form after successful submission

## 4. Features Implemented

### Form Validation
- All fields are required
- Email format validation
- Real-time error clearing when user starts typing

### User Experience
- Loading spinner during submission
- Success confirmation with checkmark icon
- Error handling with user-friendly messages
- Form resets after successful submission
- Dialog auto-closes after success (2 seconds)

### Database Integration
- Automatic timestamp management
- UUID primary keys
- Secure data insertion via Supabase client
- Row Level Security for data protection

## 5. Testing the Integration

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open the website and click any "Book Demo" or "Talk to Sales" button
3. Fill out the form with:
   - Name: Your name
   - Email: Valid email address
   - Phone: Your phone number
4. Click "Submit"
5. You should see a success message and the form will close automatically

## 6. Viewing Submitted Data

To view the submitted bookings in Supabase:
1. Go to your Supabase dashboard
2. Navigate to "Table Editor"
3. Select the "bookings" table
4. You'll see all submitted form data with timestamps

## 7. Security Notes

- The anonymous key allows public form submissions
- Row Level Security is enabled to protect data access
- Only inserts are allowed for anonymous users
- Reading data requires authentication (you can adjust this in RLS policies)

## 8. Optional Enhancements

You can further enhance this integration by:
- Adding email notifications via Supabase Edge functions
- Creating an admin dashboard to view submissions
- Adding more form fields (company, message, preferred time, etc.)
- Setting up email confirmations for form submitters
- Adding analytics and form conversion tracking 