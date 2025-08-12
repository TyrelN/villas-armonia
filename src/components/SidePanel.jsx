"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function SidePanel({ lotNumber, onClose }) {
  const [lotData, setLotData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  // Fetch lot data from backend
  useEffect(() => {
    const fetchLotData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Replace with your actual API endpoint
        const response = await fetch(`/api/lots/${lotNumber}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch lot data');
        }
        
        const data = await response.json();
        setLotData(data);
      } catch (err) {
        console.error('Error fetching lot data:', err);
        setError(err.message);
        
        // Fallback to mock data for development
        setLotData({
          id: lotNumber,
          title: `Lot ${lotNumber}`,
          description: `Beautiful residential lot in Villa Armonia. This premium lot offers stunning views and excellent location within the community. Perfect for building your dream home.`,
          image: `../assets/Baaxal_pool.webp`,
          availability: 'available', // available, unavailable, reserved, sold
          price: 85000,
          currency: 'USD',
          size: '500 sqm',
          features: [
            'Water connection available',
            'Electricity connection available',
            'Road access',
            'Beautiful mountain views',
            'Close to community amenities'
          ],
          location: 'Villa Armonia, Costa Rica',
          coordinates: {
            lat: 9.9281,
            lng: -84.0907
          }
        });
      } finally {
        setLoading(false);
      }
    };

    if (lotNumber) {
      fetchLotData();
    }
  }, [lotNumber]);

  const handleClose = () => {
    setIsClosing(true);
    // Wait for the exit animation to complete before calling onClose
    setTimeout(() => {
      onClose();
    }, 250); // Slightly longer than animation duration to ensure smooth completion
  };

  const handlePurchase = async () => {
    try {
      // Replace with your actual purchase API endpoint
      const response = await fetch(`/api/lots/${lotNumber}/purchase`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lotId: lotNumber,
          // Add any additional purchase data
        }),
      });

      if (!response.ok) {
        throw new Error('Purchase failed');
      }

      const result = await response.json();
      alert('Purchase successful! We will contact you soon.');
      handleClose();
    } catch (err) {
      console.error('Purchase error:', err);
      alert('Purchase failed. Please try again.');
    }
  };

  const getAvailabilityColor = (availability) => {
    switch (availability) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'unavailable': return 'text-red-600 bg-red-100';
      case 'reserved': return 'text-orange-600 bg-orange-100';
      case 'sold': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getAvailabilityText = (availability) => {
    switch (availability) {
      case 'available': return 'Available';
      case 'unavailable': return 'Unavailable';
      case 'reserved': return 'Reserved';
      case 'sold': return 'Sold';
      default: return 'Unknown';
    }
  };

  const formatPrice = (price, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency,
    }).format(price);
  };

  // Animation classes based on state
  const animationClasses = isClosing 
    ? 'animate-out slide-out-to-left duration-300' 
    : 'animate-in slide-in-from-left duration-300';

  if (loading) {
    return (
      <div className={`fixed top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-white bg-opacity-95 backdrop-blur-sm shadow-lg z-40 p-6 overflow-y-auto ${animationClasses}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Loading...</h2>
          <button onClick={handleClose} className="text-gray-600 hover:text-black">
            ✕
          </button>
        </div>
        <div className="animate-pulse">
          <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`fixed top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-white bg-opacity-95 backdrop-blur-sm shadow-lg z-40 p-6 overflow-y-auto ${animationClasses}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Error</h2>
          <button onClick={handleClose} className="text-gray-600 hover:text-black">
            ✕
          </button>
        </div>
        <div className="text-red-600">
          <p>Failed to load lot data: {error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!lotData) {
    return null;
  }

  return (
    <div className={`fixed top-20 left-0 h-[calc(100vh-5rem)] w-80 bg-white/85 backdrop-blur-sm shadow-lg z-40 overflow-y-auto ${animationClasses}`}>
      {/* Header */}
      <div className="sticky top-0 bg-[var(--accent-sunset)]/75 backdrop-blur-sm p-6 z-10">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{lotData.title}</h2>
          <button 
            onClick={handleClose} 
            className="text-gray-600 hover:text-black transition-colors"
          >
            ✕
          </button>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Image */}
        <div className="relative h-48 rounded-lg overflow-hidden bg-gray-100">
          {lotData.image ? (
            <Image
              src={lotData.image}
              alt={lotData.title}
              fill
              className="object-cover"
              sizes="(max-width: 320px) 100vw, 320px"
            />
          ) : (
            <div className="flex items-center justify-center h-full text-gray-500">
              <span>No image available</span>
            </div>
          )}
        </div>

        {/* Availability Badge */}
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getAvailabilityColor(lotData.availability)}`}>
            {getAvailabilityText(lotData.availability)}
          </span>
          {lotData.size && (
            <span className="text-sm text-gray-600">{lotData.size}</span>
          )}
        </div>

        {/* Price */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gray-900">
              {formatPrice(lotData.price, lotData.currency)}
            </span>
            {lotData.availability === 'reserved' && (
              <span className="ml-2 text-sm text-orange-600">(Reservation fee applied)</span>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
          <p className="text-gray-700 leading-relaxed">{lotData.description}</p>
        </div>

        {/* Features */}
        {lotData.features && lotData.features.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Features</h3>
            <ul className="space-y-2">
              {lotData.features.map((feature, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Location */}
        {lotData.location && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700">{lotData.location}</p>
          </div>
        )}

        {/* Purchase Button */}
        {(lotData.availability === 'available' || lotData.availability === 'reserved') && (
          <div className="border-t border-gray-200 pt-6">
            <button
              onClick={handlePurchase}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {lotData.availability === 'available' ? 'Purchase Lot' : 'Reserve Lot'}
            </button>
            <p className="text-xs text-gray-500 mt-2 text-center">
              {lotData.availability === 'available' 
                ? 'Click to start the purchase process' 
                : 'Click to place a reservation'
              }
            </p>
          </div>
        )}

        {/* Contact Information */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Contact Us</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>📞 +1 (555) 123-4567</p>
            <p>📧 info@villaarmonia.com</p>
            <p>🌐 www.villaarmonia.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}