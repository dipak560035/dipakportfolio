-- ====================================================================
-- SUPABASE DATABASE SETUP FOR DIPAK SAH PORTFOLIO
-- ====================================================================
-- Copy and paste this script into the Supabase SQL Editor to set up
-- the contact message database table and security policies.

-- 1. Create contact_messages Table
CREATE TABLE IF NOT EXISTS public.contact_messages (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read')),
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. Create Index on created_at for fast message sorting
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at 
ON public.contact_messages (created_at DESC);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 4. Policy: Allow Anyone (Public / Anonymous) to Submit Contact Messages
CREATE POLICY "Allow public insert to contact_messages" 
ON public.contact_messages 
FOR INSERT 
WITH CHECK (true);

-- 5. Policy: Only Authenticated Admins Can Read Messages
CREATE POLICY "Allow authenticated admin to view contact_messages" 
ON public.contact_messages 
FOR SELECT 
TO authenticated 
USING (true);

-- 6. Policy: Only Authenticated Admins Can Update Message Status (e.g. read/unread)
CREATE POLICY "Allow authenticated admin to update contact_messages" 
ON public.contact_messages 
FOR UPDATE 
TO authenticated 
USING (true);

-- 7. Policy: Only Authenticated Admins Can Delete Messages
CREATE POLICY "Allow authenticated admin to delete contact_messages" 
ON public.contact_messages 
FOR DELETE 
TO authenticated 
USING (true);

-- ====================================================================
-- SETUP INSTRUCTIONS:
-- 1. Create a Supabase Project at https://supabase.com
-- 2. Run this SQL in the SQL Editor.
-- 3. In Supabase Dashboard -> Project Settings -> API, copy:
--    - Project URL -> VITE_SUPABASE_URL
--    - anon / public API key -> VITE_SUPABASE_ANON_KEY
-- 4. Add these variables to your environment or .env.local file:
--    VITE_SUPABASE_URL=https://your-project.supabase.co
--    VITE_SUPABASE_ANON_KEY=your-anon-key
-- 5. Create an Admin user in Supabase Authentication -> Users.
-- ====================================================================
