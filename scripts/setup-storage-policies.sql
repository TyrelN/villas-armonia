-- Storage Policies for user-documents bucket
-- Run this in your Supabase SQL Editor

-- Enable RLS on storage.objects
ALTER TABLE storage.objects ENABLE ROW LEVEL SECURITY;

-- Policy 1: Allow authenticated users to upload files
CREATE POLICY "Allow authenticated uploads to user-documents" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'user-documents' 
  AND auth.role() = 'authenticated'
);

-- Policy 2: Allow authenticated users to view files
CREATE POLICY "Allow authenticated users to view user-documents" ON storage.objects
FOR SELECT USING (
  bucket_id = 'user-documents' 
  AND auth.role() = 'authenticated'
);

-- Policy 3: Allow authenticated users to update their own files
CREATE POLICY "Allow authenticated users to update user-documents" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'user-documents' 
  AND auth.role() = 'authenticated'
);

-- Policy 4: Allow authenticated users to delete their own files
CREATE POLICY "Allow authenticated users to delete user-documents" ON storage.objects
FOR DELETE USING (
  bucket_id = 'user-documents' 
  AND auth.role() = 'authenticated'
);

-- Alternative: If you want to allow public access (less secure)
-- CREATE POLICY "Allow public access to user-documents" ON storage.objects
-- FOR ALL USING (bucket_id = 'user-documents');
