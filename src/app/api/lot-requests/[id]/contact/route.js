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

    // Use transaction to ensure data consistency
    const result = await prisma.$transaction(async (tx) => {
      // Get the lot request details first
      const lotRequest = await tx.lotRequest.findUnique({
        where: { id: id }
      });

      if (!lotRequest) {
        throw new Error('Request not found');
      }

      // Update the lot request to mark as contacted
      const updatedRequest = await tx.lotRequest.update({
        where: { id: id },
        data: {
          status: 'CONTACTED',
          adminNotes,
          adminContacted: true,
          contactDate: new Date(),
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
    console.error('Error in contact API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
