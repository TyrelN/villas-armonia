import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import { prisma } from '@/lib/prisma';
import { updateLotStatusIfNeeded } from '@/lib/lotStatusManager';

export async function PATCH(request, { params }) {
  try {
    const supabase = await createClient();
    const { id } = await params;
    const { adminNotes } = await request.json();
    
    // Get the current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin using Prisma
    const userProfile = await prisma.user.findUnique({
      where: { supabaseId: user.id },
      select: { role: true }
    });

    if (!userProfile || userProfile.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Get the lot request details using Prisma
    const lotRequest = await prisma.lotRequest.findUnique({
      where: { id: id }
    });

    if (!lotRequest) {
      return NextResponse.json({ error: 'Request not found' }, { status: 404 });
    }

    // Use transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx) => {
      // Update the lot request to mark as rejected
      const updatedRequest = await tx.lotRequest.update({
        where: { id: id },
        data: {
          status: 'REJECTED',
          adminNotes,
          updatedAt: new Date()
        }
      });

      // Update lot status if needed (will only update if no pending requests remain)
      const lotStatusUpdated = await updateLotStatusIfNeeded(tx, lotRequest.lotId);

      return { updatedRequest, lotStatusUpdated };
    });

    return NextResponse.json({
      ...result.updatedRequest,
      lotStatusUpdated: result.lotStatusUpdated
    });
  } catch (error) {
    console.error('Error in reject API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
