import { NextResponse } from 'next/server';

// Mock database - replace with your actual database connection
const mockLotsDatabase = {
  "1": {
    id: "1",
    title: "Premium Lot 1",
    description: "Exclusive corner lot with panoramic mountain views. This premium location offers the perfect blend of privacy and accessibility. Features include direct road access, utilities ready, and stunning sunset views.",
    image: "/images/Baaxal_pool.webp",
    availability: "available",
    price: 95000,
    currency: "USD",
    size: "650 sqm",
    features: [
      "Panoramic mountain views",
      "Direct road access",
      "Water connection available",
      "Electricity connection available",
      "Internet ready",
      "Privacy from neighbors",
      "Perfect for custom home"
    ],
    location: "Villa Armonia, Costa Rica",
    coordinates: {
      lat: 9.9281,
      lng: -84.0907
    }
  },
  "2": {
    id: "2",
    title: "Mountain View Lot 2",
    description: "Spectacular mountain view lot with gentle slope. This lot offers breathtaking views of the Central Valley and is perfect for those seeking a peaceful retreat with modern conveniences.",
    image: "/images/Baaxal_pool.webp",
    availability: "reserved",
    price: 88000,
    currency: "USD",
    size: "580 sqm",
    features: [
      "Breathtaking mountain views",
      "Gentle slope for easy building",
      "Water connection available",
      "Electricity connection available",
      "Close to community center",
      "Walking distance to amenities"
    ],
    location: "Villa Armonia, Costa Rica",
    coordinates: {
      lat: 9.9281,
      lng: -84.0907
    }
  },
  "3": {
    id: "3",
    title: "Garden Lot 3",
    description: "Beautiful garden lot with mature trees and natural landscaping. This lot provides a perfect setting for those who appreciate nature and want to build in harmony with the environment.",
    image: "/images/Baaxal_pool.webp",
    availability: "sold",
    price: 92000,
    currency: "USD",
    size: "720 sqm",
    features: [
      "Mature trees and landscaping",
      "Natural privacy",
      "Water connection available",
      "Electricity connection available",
      "Large building area",
      "Perfect for garden home"
    ],
    location: "Villa Armonia, Costa Rica",
    coordinates: {
      lat: 9.9281,
      lng: -84.0907
    }
  }
};

// Generate mock data for lots 4-58
for (let i = 4; i <= 58; i++) {
  const basePrice = 75000 + (Math.random() * 30000);
  const availabilityOptions = ['available', 'unavailable', 'reserved', 'sold'];
  const availability = availabilityOptions[Math.floor(Math.random() * availabilityOptions.length)];
  
  mockLotsDatabase[i.toString()] = {
    id: i.toString(),
    title: `Lot ${i}`,
    description: `Beautiful residential lot ${i} in Villa Armonia. This premium lot offers stunning views and excellent location within the community. Perfect for building your dream home with modern amenities and natural beauty.`,
    image: `/images/Baaxal_pool.webp`,
    availability: availability,
    price: Math.round(basePrice),
    currency: "USD",
    size: `${500 + Math.floor(Math.random() * 300)} sqm`,
    features: [
      'Water connection available',
      'Electricity connection available',
      'Road access',
      'Beautiful mountain views',
      'Close to community amenities',
      'Internet ready',
      'Perfect for custom home'
    ],
    location: 'Villa Armonia, Costa Rica',
    coordinates: {
      lat: 9.9281,
      lng: -84.0907
    }
  };
}

export async function GET(request, { params }) {
  try {
    const { id } = params;
    
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Check if lot exists
    if (!mockLotsDatabase[id]) {
      return NextResponse.json(
        { error: 'Lot not found' },
        { status: 404 }
      );
    }
    
    // Return lot data
    return NextResponse.json(mockLotsDatabase[id]);
    
  } catch (error) {
    console.error('Error fetching lot data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// PUT method to update lot availability
export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    
    // Simulate database delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    // Check if lot exists
    if (!mockLotsDatabase[id]) {
      return NextResponse.json(
        { error: 'Lot not found' },
        { status: 404 }
      );
    }
    
    // Update lot data (in real app, this would update the database)
    if (body.availability) {
      mockLotsDatabase[id].availability = body.availability;
    }
    
    if (body.price) {
      mockLotsDatabase[id].price = body.price;
    }
    
    return NextResponse.json(mockLotsDatabase[id]);
    
  } catch (error) {
    console.error('Error updating lot data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
