import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import { prisma } from '@/lib/prisma';

export async function GET(request) {
  try {
    const supabase = await createClient();
    
    // Get the current user
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Get user profile using Prisma
    const userProfile = await prisma.user.findUnique({
      where: { supabaseId: user.id },
      select: { id: true }
    });

    if (!userProfile) {
      return NextResponse.json({ error: 'User profile not found' }, { status: 404 });
    }

    // Fetch user's lot requests with lot details using Prisma
    const requests = await prisma.lotRequest.findMany({
      where: { userId: userProfile.id },
      include: {
        lot: {
          select: {
            id: true,
            price: true,
            status: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json(requests);
  } catch (error) {
    console.error('Error in my-requests API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
