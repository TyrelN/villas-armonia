import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';
import { prisma } from '@/lib/prisma';

// src/app/api/lot-requests/route.js
export async function GET(request) {
  try {
    const supabase = await createClient();
    const { data: { user }, error: authError } = await supabase.auth.getUser();
    
    if (authError || !user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Single optimized query with all needed data
    const requests = await prisma.lotRequest.findMany({
      where: {
        // Add any filters here
      },
      include: {
        user: {
          select: {
            id: true,
            fullName: true,
            email: true,
            cellPhone: true,
            dateOfBirth: true,
            placeOfBirth: true,
            marriageStatus: true,
            occupation: true,
            curp: true,
            copyOfIdUrl: true,
            proofOfResidencyUrl: true,
            role: true // Include role to check admin status
          }
        },
        lot: {
          select: {
            id: true,
            price: true,
            status: true,
            width: true,
            length: true,
            amenities: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    // Check admin status from the first request's user data
    const isAdmin = requests.length > 0 && requests[0].user.role === 'ADMIN';
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    return NextResponse.json(requests);
  } catch (error) {
    console.error('Error in lot requests API:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}