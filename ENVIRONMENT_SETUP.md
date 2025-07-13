# Environment Variables Setup

## Required Environment Variables

You need to create a `.env.local` file in your project root with the following variables:

```bash
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://tajeaokjxtieuwmrqkxf.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhamVhb2tqeHRpZXV3bXJxa3hmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM5MjY1ODMsImV4cCI6MjA0OTUwMjU4M30.qvgJN3FKrKfSzAQGbGKMEWJEZkFzQb_fzqQmPeULXqg
```

## Steps to Fix the Error:

1. **Create the `.env.local` file** in your project root directory
2. **Copy and paste** the environment variables above
3. **Restart your development server** (`npm run dev`)

## Database Setup (if not already done):

1. Go to your Supabase dashboard: https://app.supabase.com/projects
2. Select your project: `tajeaokjxtieuwmrqkxf`
3. Navigate to the "SQL Editor" tab
4. Copy and paste the contents of `database-setup.sql` into the editor
5. Click "Run" to execute the SQL commands

This will create the `ai_course_creator_waitlist` table needed for the waitlist functionality.

## Testing:

Once you've created the `.env.local` file and restarted the server, you should be able to:
- Visit `/ai-course-creator` without errors
- Submit email addresses to the waitlist
- See success/error messages

## Security Note:

The `.env.local` file is automatically ignored by Git, so your environment variables won't be committed to the repository. 