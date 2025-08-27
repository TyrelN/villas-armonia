# Lot Request Workflow Setup Guide

## Overview
This system implements a complete lot purchase workflow where:
1. Buyers submit purchase requests instead of direct purchases
2. Admins (landowners) review requests and contact buyers directly
3. Admins can approve/reject requests and transfer lot ownership
4. The system tracks the entire process with proper status management

## Database Schema Changes

### New Tables
- **LotRequest**: Tracks purchase requests with status, admin notes, and approval workflow
- **User Role**: Added role field to distinguish between admins and buyers

### Updated Enums
- **LotStatus**: Updated to include `AVAILABLE`, `RESERVED`, `SOLD`, `PENDING_APPROVAL`
- **RequestStatus**: New enum for `PENDING`, `CONTACTED`, `APPROVED`, `REJECTED`
- **UserRole**: `ADMIN` and `BUYER` roles

## Setup Instructions

### 1. Database Setup
```bash
# Make sure your PostgreSQL database is running
# Update your .env file with the correct DATABASE_URL

# Push the schema changes
npx prisma db push

# Generate Prisma client
npx prisma generate
```

### 2. Create Admin User
You'll need to manually update a user's role to ADMIN in your database:

```sql
-- Find your user ID first, then update the role
UPDATE users SET role = 'ADMIN' WHERE email = 'your-admin-email@example.com';
```

### 3. Update Lot Statuses
Update existing lots to use the new status system:

```sql
-- Update existing lots to AVAILABLE status
UPDATE lots SET status = 'AVAILABLE' WHERE status = 'PURCHASED';
```

## New Features

### 1. Admin Lot Requests Page (`/lot-requests`)
- **Access**: Only visible to admin users in the navbar
- **Features**:
  - View all purchase requests in a table
  - Contact buyers with notes
  - Approve requests (transfers lot ownership)
  - Reject requests with reasons
  - Track request status and history

### 2. Updated Purchase Flow
- **Buyers**: Submit requests instead of direct purchases
- **System**: Creates lot requests and updates lot status to `PENDING_APPROVAL`
- **Admins**: Review and manage requests through the admin interface

### 3. API Endpoints

#### GET `/api/lot-requests`
- Fetches all lot requests for admin review
- Requires admin authentication

#### PATCH `/api/lot-requests/[id]/contact`
- Marks a request as contacted by admin
- Allows admin to add notes about the contact

#### PATCH `/api/lot-requests/[id]/approve`
- Approves a request and transfers lot ownership
- Updates lot status to `SOLD`
- Updates request status to `APPROVED`

#### PATCH `/api/lot-requests/[id]/reject`
- Rejects a request with optional notes
- Updates request status to `REJECTED`

#### POST `/api/lots/[id]/purchase`
- Creates a new lot purchase request
- Updated to create requests instead of direct purchases

## Workflow Process

### For Buyers:
1. Browse available lots on the lot map
2. Click on an available lot to submit a purchase request
3. System creates a `PENDING` request
4. Wait for admin contact and approval

### For Admins:
1. Access "Lot Requests" from the navbar (admin only)
2. Review pending requests with buyer details
3. Contact buyers directly using provided information
4. Mark requests as "Contacted" with notes
5. Approve or reject requests based on discussions
6. System automatically transfers lot ownership upon approval

## Security Features
- Admin-only access to lot requests page
- Role-based authentication for all API endpoints
- Proper validation of lot availability before requests
- Prevention of duplicate requests from same user

## UI Components
- **LotPurchaseModal**: Updated purchase flow for buyers
- **LotRequestsPage**: Admin interface for managing requests
- **Navbar**: Conditional "Lot Requests" link for admins
- **Status badges**: Visual indicators for request status

## Testing the System

### 1. Create Test Data
```sql
-- Insert test lots
INSERT INTO lots (id, status, price, amenities, width, length, height) 
VALUES ('test-lot-1', 'AVAILABLE', 50000, ARRAY['POOL', 'GYM'], 20, 30, 0);

-- Insert test users (if needed)
INSERT INTO users (id, fullName, email, role, supabaseId) 
VALUES ('test-user-1', 'Test Buyer', 'buyer@test.com', 'BUYER', 'test-supabase-id');
```

### 2. Test Workflow
1. Sign in as a buyer and submit a lot purchase request
2. Sign in as an admin and check the lot requests page
3. Contact the buyer and update the request status
4. Approve or reject the request
5. Verify lot ownership transfer (if approved)

## Troubleshooting

### Common Issues:
1. **Database connection errors**: Ensure PostgreSQL is running and DATABASE_URL is correct
2. **Admin access denied**: Verify user role is set to 'ADMIN' in database
3. **Lot status issues**: Ensure lots are using the new status enum values
4. **API errors**: Check browser console and server logs for detailed error messages

### Debug Commands:
```bash
# Check database connection
npx prisma db pull

# Reset database (WARNING: This will delete all data)
npx prisma db push --force-reset

# View database in Prisma Studio
npx prisma studio
```

## Next Steps
- Implement email notifications for request status changes
- Add more detailed buyer documentation uploads
- Create buyer dashboard to view their request status
- Add payment processing integration
- Implement request expiration and cleanup
