import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import { createAdminClient } from '@/lib/supabase-server';
import { prisma } from '@/lib/prisma';

export async function POST(request, { params }) {
  try {
    const supabase = await createClient();
    const { id: lotId } = await params;

    // Get the current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();

    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }


    // Parse form data
    const formData = await request.formData();

    // Extract user information from form data
    const userData = {
      fullName: formData.get('fullName'),
      email: formData.get('email'),
      cellPhone: formData.get('cellPhone'),
      occupation: formData.get('occupation'),
      placeOfBirth: formData.get('placeOfBirth'),
      dateOfBirth: formData.get('dateOfBirth') ? new Date(formData.get('dateOfBirth')) : null,
      marriageStatus: formData.get('marriageStatus'),
      curp: formData.get('curp'),
    };

    // Validate required fields
    const requiredFields = ['fullName', 'email', 'cellPhone', 'placeOfBirth', 'dateOfBirth'];
    for (const field of requiredFields) {
      if (!userData[field]) {
        return NextResponse.json({ error: `Missing required field: ${field}` }, { status: 400 });
      }
    }

    // Handle file uploads
    const copyOfIdFile = formData.get('copyOfId');
    const proofOfResidencyFile = formData.get('proofOfResidency');

    if (!copyOfIdFile || !proofOfResidencyFile) {
      return NextResponse.json({ error: 'Missing required documents' }, { status: 400 });
    }

    // Upload files to Supabase Storage using admin client to bypass RLS
    const adminSupabase = createAdminClient();
    const copyOfIdUrl = await uploadFile(adminSupabase, copyOfIdFile, 'user-documents');
    const proofOfResidencyUrl = await uploadFile(adminSupabase, proofOfResidencyFile, 'user-documents');

    // Get or create user profile using Prisma
    let userProfile = await prisma.user.findUnique({
      where: { supabaseId: user.id }
    });

    if (!userProfile) {
      // Create new user profile if it doesn't exist
      userProfile = await prisma.user.create({
        data: {
          supabaseId: user.id,
          ...userData,
          copyOfIdUrl,
          proofOfResidencyUrl,
          role: 'BUYER'
        }
      });
    } else {
      // Update existing user profile
      userProfile = await prisma.user.update({
        where: { id: userProfile.id },
        data: {
          ...userData,
          copyOfIdUrl,
          proofOfResidencyUrl,
          updatedAt: new Date()
        }
      });
    }

    // Check if the lot exists and is available using Prisma
    const lot = await prisma.lot.findUnique({
      where: { id: lotId }
    });

    if (!lot) {
      return NextResponse.json({ error: 'Lot not found' }, { status: 404 });
    }

    if (lot.status !== 'AVAILABLE') {
      return NextResponse.json({ error: 'Lot is not available for purchase' }, { status: 400 });
    }

    // Check if user already has a pending request for this lot
    const existingRequest = await prisma.lotRequest.findFirst({
      where: {
        lotId: lotId,
        userId: userProfile.id,
        status: 'PENDING'
      }
    });

    if (existingRequest) {
      return NextResponse.json({ error: 'You already have a pending request for this lot' }, { status: 400 });
    }

    // Create a new lot request using Prisma
    const newRequest = await prisma.lotRequest.create({
      data: {
        lotId,
        userId: userProfile.id,
        status: 'PENDING'
      }
    });

    // Update lot status to pending approval
    await prisma.lot.update({
      where: { id: lotId },
      data: {
        status: 'PENDING_APPROVAL',
        updatedAt: new Date()
      }
    });

    return NextResponse.json({
      message: 'Lot purchase request submitted successfully',
      request: newRequest
    });
  } catch (error) {
    console.error('Error in purchase API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Helper function to upload files to Supabase Storage
async function uploadFile(supabase, file, bucket) {
  try {

    // Validate file type and size
    const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf'];
    const maxSize = 3 * 1024 * 1024; // 3MB

    if (!allowedTypes.includes(file.type)) {
      throw new Error('Invalid file type');
    }
    if (file.size > maxSize) {
      throw new Error('File too large');
    }

    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
    const filePath = `${bucket}/${fileName}`;
    // First, try to upload the file
    const { error: uploadError } = await supabase.storage
      .from(bucket)
      .upload(filePath, file);

    if (uploadError) {
      // If bucket doesn't exist, create it first
      if (uploadError.message.includes('bucket') || uploadError.message.includes('not found')) {

        // Note: This might require admin privileges
        // For now, we'll throw a more helpful error
        throw new Error(`Storage bucket '${bucket}' does not exist. Please create it in your Supabase dashboard under Storage.`);
      }
      throw uploadError;
    }

    // Get public URL
    const { data } = supabase.storage
      .from(bucket)
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (error) {
    console.error('Error uploading file:', error);
    throw new Error(`Failed to upload file: ${error.message}`);
  }
}


