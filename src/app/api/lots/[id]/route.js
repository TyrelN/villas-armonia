import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function GET(request, { params }) {
  try {
    const { id } = await params;
    
    // Convert simple ID to lot- prefixed ID
    const lotId = id.startsWith('lot-') ? id : `lot-${id}`;
    
    // Fetch lot from Prisma database
    const lot = await prisma.lot.findUnique({
      where: { id: lotId }
    });
    
    if (!lot) {
      return NextResponse.json({ error: 'Lot not found' }, { status: 404 });
    }
    
    // Convert Prisma lot to API response format
    const lotData = {
      id: lot.id,
      title: `Lot ${lot.id.replace('lot-', '')}`,
      description: `Beautiful residential lot in Villa Armonia. This premium lot offers stunning views and excellent location within the community. Perfect for building your dream home.`,
      image: "/images/Baaxal_pool.webp",
      availability: lot.status.toLowerCase(),
      price: lot.price,
      currency: "USD",
      size: `${lot.width * lot.length} sqm`,
      features: lot.amenities || [
        'Water connection available',
        'Electricity connection available',
        'Road access',
        'Beautiful mountain views',
        'Close to community amenities'
      ],
      location: "Villa Armonia, Costa Rica",
      coordinates: {
        lat: 9.9281,
        lng: -84.0907
      }
    };
    
    return NextResponse.json(lotData);
  } catch (error) {
    console.error('Error fetching lot:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT method to update lot availability
export async function PUT(request, { params }) {
  try {
    const { id } = await params;
    const body = await request.json();
    
    // Convert simple ID to lot- prefixed ID
    const lotId = id.startsWith('lot-') ? id : `lot-${id}`;
    
    // Update lot in Prisma database
    const updatedLot = await prisma.lot.update({
      where: { id: lotId },
      data: {
        status: body.availability?.toUpperCase() || undefined,
        price: body.price || undefined,
        updatedAt: new Date()
      }
    });
    
    return NextResponse.json(updatedLot);
    
  } catch (error) {
    console.error('Error updating lot data:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
