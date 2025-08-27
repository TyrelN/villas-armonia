import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import { prisma } from '@/lib/prisma';

export async function PATCH(request, { params }) {
  try {
    const supabase = await createClient();
    const { id } = await params;
    
    // Get the current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin using Prisma
    const userProfile = await prisma.user.findUnique({
      where: { supabaseId: user.id },
      select: { id: true, role: true }
    });

    if (!userProfile || userProfile.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Get the lot request details using Prisma
    const request = await prisma.lotRequest.findUnique({
      where: { id: id }
    });

    if (!request) {
      return NextResponse.json({ error: 'Request not found' }, { status: 404 });
    }

    // Check if the lot is still available
    const lot = await prisma.lot.findUnique({
      where: { id: request.lotId }
    });

    if (!lot) {
      return NextResponse.json({ error: 'Lot not found' }, { status: 404 });
    }

    if (lot.status !== 'AVAILABLE' && lot.status !== 'PENDING_APPROVAL') {
      return NextResponse.json({ error: 'Lot is not available for purchase' }, { status: 400 });
    }

    // Use Prisma transaction to update both the request and the lot
    const result = await prisma.$transaction(async (tx) => {
      // Update the lot request
      const updatedRequest = await tx.lotRequest.update({
        where: { id: id },
        data: {
          status: 'APPROVED',
          approvedAt: new Date(),
          approvedBy: userProfile.id,
          updatedAt: new Date()
        }
      });

      // Update the lot to transfer ownership
      const updatedLot = await tx.lot.update({
        where: { id: request.lotId },
        data: {
          status: 'SOLD',
          ownerId: request.userId,
          updatedAt: new Date()
        }
      });

      return { request: updatedRequest, lot: updatedLot };
    });

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in approve API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
