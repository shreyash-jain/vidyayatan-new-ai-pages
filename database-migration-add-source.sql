-- Database Migration: Add source field to bookings table
-- Run this script in your Supabase SQL Editor after running the main database-setup.sql

-- Add source column to existing bookings table
ALTER TABLE bookings 
ADD COLUMN source TEXT DEFAULT 'vidyayatan';

-- Add index on source column for faster filtering
CREATE INDEX idx_bookings_source ON bookings(source);

-- Update the bookings view to include source
DROP VIEW IF EXISTS bookings_view;
CREATE VIEW bookings_view AS
SELECT 
    id,
    name,
    email,
    phone,
    source,
    created_at,
    updated_at,
    DATE(created_at) as booking_date,
    TO_CHAR(created_at, 'YYYY-MM-DD HH24:MI:SS') as formatted_created_at
FROM bookings
ORDER BY created_at DESC;

-- Optional: Add a comment to document the source field
COMMENT ON COLUMN bookings.source IS 'Source of the booking: "vidyayatan" for AI solutions, "yoga" for wellness platform';