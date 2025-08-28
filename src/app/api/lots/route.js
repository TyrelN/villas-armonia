import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { convertPrismaStatusToLotMapStatus } from '@/utils/lotAvailabilityService';

export async function GET() {
  try {
    // Fetch all lots from the database
    const lots = await prisma.lot.findMany({
      orderBy: {
        id: 'asc'
      }
    });

    // Convert to the format expected by LotMap component
    // LotMap expects: { "1": "available", "2": "sold", etc. }
    const lotAvailability = {};
    
    lots.forEach(lot => {
      // Extract lot number from lot ID (e.g., "lot-4" -> "4")
      const lotNumber = lot.id.replace('lot-', '');
      
      // Convert Prisma status to LotMap status using utility function
      const status = convertPrismaStatusToLotMapStatus(lot.status);
      
      lotAvailability[lotNumber] = status;
    });

    return NextResponse.json(lotAvailability);
  } catch (error) {
    console.error('Error fetching lots:', error);
    
    // Check if it's a database connection error
    if (error.code === 'P1001' || error.code === 'P1002') {
      return NextResponse.json({ 
        error: 'Database connection failed',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }, { status: 503 });
    }
    
    // Check if it's a Prisma client error
    if (error.code && error.code.startsWith('P')) {
      return NextResponse.json({ 
        error: 'Database error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      }, { status: 500 });
    }
    
    return NextResponse.json({ 
      error: 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    }, { status: 500 });
  }
}
