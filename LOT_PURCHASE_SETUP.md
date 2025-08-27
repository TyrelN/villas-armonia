# Lot Purchase Setup Guide

This guide explains how to set up the lot purchase functionality with file uploads to Supabase storage.

## Prerequisites

1. **Supabase Project**: Make sure you have a Supabase project set up
2. **Environment Variables**: Ensure your `.env` file has the required variables
3. **Database**: Prisma schema should be synced with your database

## Required Environment Variables

Add these to your `.env` file:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Database
DATABASE_URL=your_database_url
```

## Setup Steps

### 1. Create Supabase Storage Bucket

You have two options:

#### Option A: Manual Setup (Recommended)
1. Go to your Supabase dashboard
2. Navigate to **Storage**
3. Click **Create a new bucket**
4. Name it `user-documents`
5. Set it as **Public**
6. Configure policies as needed

#### Option B: Automated Setup
Run the setup script (requires service role key):

```bash
node scripts/setup-storage.js
```

### 2. Configure Storage Policies

In your Supabase dashboard, go to **Storage > Policies** and add these policies for the `user-documents` bucket:

#### Policy 1: Allow authenticated users to upload
```sql
CREATE POLICY "Allow authenticated uploads" ON storage.objects
FOR INSERT WITH CHECK (auth.role() = 'authenticated');
```

#### Policy 2: Allow users to view their own documents
```sql
CREATE POLICY "Allow users to view own documents" ON storage.objects
FOR SELECT USING (auth.role() = 'authenticated');
```

#### Policy 3: Allow users to update their own documents
```sql
CREATE POLICY "Allow users to update own documents" ON storage.objects
FOR UPDATE USING (auth.role() = 'authenticated');
```

### 3. Sync Database Schema

```bash
npx prisma db push
npx prisma generate
```

## How It Works

### 1. User Flow
1. User selects a lot on the lot map
2. Clicks "Request Purchase" button
3. Fills out the purchase form with personal information
4. Uploads required documents (ID copy and proof of residency)
5. Submits the request

### 2. Backend Process
1. **Authentication**: Verifies user is signed in
2. **File Upload**: Uploads documents to Supabase storage
3. **User Profile**: Creates or updates user profile in Prisma database
4. **Lot Request**: Creates a new lot request record
5. **Lot Status**: Updates lot status to "PENDING_APPROVAL"

### 3. API Endpoint
- **Route**: `/api/lots/[id]/purchase`
- **Method**: POST
- **Content-Type**: `multipart/form-data`
- **Authentication**: Required

### 4. File Storage
- **Bucket**: `user-documents`
- **File Types**: Images (jpg, png, etc.) and PDFs
- **Naming**: Timestamped with random suffix for security
- **Access**: Public URLs for admin review

## Database Schema

The system uses these Prisma models:

### User Model
```prisma
model User {
  id               String         @id @default(uuid())
  fullName         String
  email            String         @unique
  supabaseId       String         @unique
  // Optional profile fields
  marriageStatus   MarriageStatus?
  occupation       String?
  placeOfBirth     String?
  dateOfBirth      DateTime?
  cellPhone        String?
  copyOfIdUrl      String?
  curp             String?
  proofOfResidencyUrl String?
  role             UserRole       @default(BUYER)
  // Relations
  lots             Lot[]
  lotRequests      LotRequest[]
  createdAt        DateTime       @default(now())
  updatedAt        DateTime       @updatedAt
}
```

### LotRequest Model
```prisma
model LotRequest {
  id                String        @id @default(cuid())
  lotId             String
  lot               Lot           @relation(fields: [lotId], references: [id])
  userId            String
  user              User          @relation(fields: [userId], references: [id])
  status            RequestStatus @default(PENDING)
  adminNotes        String?
  adminContacted    Boolean       @default(false)
  contactDate       DateTime?
  approvedAt        DateTime?
  approvedBy        String?
  createdAt         DateTime      @default(now())
  updatedAt         DateTime      @updatedAt
}
```

## Error Handling

The system handles various error scenarios:

1. **Unauthorized**: User not signed in
2. **Missing Fields**: Required form fields not filled
3. **Missing Documents**: Required files not uploaded
4. **Storage Errors**: File upload failures
5. **Database Errors**: User profile or lot request creation failures
6. **Duplicate Requests**: User already has a pending request for the lot

## Testing

To test the functionality:

1. Sign in as a user
2. Navigate to the lot map
3. Select an available lot
4. Fill out the purchase form
5. Upload test documents
6. Submit the request
7. Check the database for the created records
8. Verify files are uploaded to Supabase storage

## Troubleshooting

### Common Issues

1. **"Storage bucket does not exist"**
   - Create the `user-documents` bucket in Supabase dashboard
   - Ensure bucket is public

2. **"Unauthorized" errors**
   - Check that user is properly authenticated
   - Verify Supabase configuration

3. **File upload failures**
   - Check file size limits
   - Verify file types are allowed
   - Ensure storage policies are configured

4. **Database errors**
   - Run `npx prisma db push` to sync schema
   - Check database connection

### Debug Mode

Enable debug logging by adding to your `.env`:

```env
DEBUG=prisma:*
```

## Security Considerations

1. **File Validation**: Only allow specific file types and sizes
2. **Authentication**: Require user authentication for all operations
3. **Authorization**: Users can only access their own documents
4. **Input Validation**: Validate all form inputs
5. **Rate Limiting**: Consider implementing rate limiting for file uploads
