-- Supabase Database Setup for Vidyayatan AI Bookings
-- Run this script in your Supabase SQL Editor

-- Create the bookings table
CREATE TABLE bookings (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Create an index on email for faster lookups
CREATE INDEX idx_bookings_email ON bookings(email);

-- Create an index on created_at for faster date range queries
CREATE INDEX idx_bookings_created_at ON bookings(created_at);

-- Enable Row Level Security (RLS)
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting for all users (since we're using anon key)
CREATE POLICY "Enable insert for all users" ON bookings
    FOR INSERT WITH CHECK (true);

-- Create a policy that allows selecting for authenticated users only
-- You may want to adjust this based on your needs
CREATE POLICY "Enable read access for authenticated users only" ON bookings
    FOR SELECT USING (auth.role() = 'authenticated');

-- Create a function to automatically update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update updated_at when a row is modified
CREATE TRIGGER update_bookings_updated_at 
    BEFORE UPDATE ON bookings 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Optional: Create a view for easier querying with formatted dates
CREATE VIEW bookings_view AS
SELECT 
    id,
    name,
    email,
    phone,
    created_at,
    updated_at,
    DATE(created_at) as booking_date,
    TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI:SS') as formatted_created_at
FROM bookings
ORDER BY created_at DESC; 