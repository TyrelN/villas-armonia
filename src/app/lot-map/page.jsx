"use client";

import { useState, useEffect } from 'react';
import LotMap from '@/components/LotMap';
import { fetchLotAvailability } from '@/utils/lotAvailabilityService';

export default function LotMapPage() {
  const [lotAvailability, setLotAvailability] = useState({});
  const [loading, setLoading] = useState(true);

  // Fetch lot availability from database
  useEffect(() => {
    const loadLotAvailability = async () => {
      try {
        setLoading(true);
        const data = await fetchLotAvailability();
        setLotAvailability(data);
      } catch (error) {
        console.error('Error fetching lot availability:', error);
        // Fallback to empty object if API fails
        setLotAvailability({});
      } finally {
        setLoading(false);
      }
    };

    loadLotAvailability();
  }, []);

  // Function to update lot availability (simulate real-time updates)
  const updateLotAvailability = (lotNumber, status) => {
    setLotAvailability(prev => ({
      ...prev,
      [lotNumber]: status
    }));
  };

  if (loading) {
    return (
      <div className="relative">
        {/* Fixed background image */}
        <div 
          className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/mexico-sunset-background-wide.webp')"
          }}
        />
        
        {/* Content overlay */}
        <div className="relative z-10 flex items-center justify-center min-h-screen">
          <div className="text-lg text-white bg-black bg-opacity-50 px-6 py-3 rounded-lg">
            Loading lot availability...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Fixed background image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/mexico-sunset-background-wide.webp')"
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-10 flex flex-col mt-24">
        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-2xl">
            Villa Armonia - Interactive Lot Map
          </h1>
          <p className="text-white text-lg drop-shadow-lg max-w-2xl mx-auto px-4">
            Click on available lots to view details.
          </p>
        </div>

        {/* Legend - Centered and styled for dark background */}
        <div className="flex justify-center mb-6 mx-12 md:mx-0">
          <div className="flex flex-wrap gap-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 border-2 rounded-sm"
                style={{
                  backgroundColor: 'oklch(96.2% .044 156.743)',
                  borderColor: '#d9b382'
                }}
              ></div>
              <span className="text-sm font-medium">Available</span>
            </div>
                          <div className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 border-2 rounded-sm"
                  style={{
                    backgroundColor: '#dbeafe', // bg-blue-100
                    borderColor: '#2563eb' // text-blue-600
                  }}
                ></div>
                <span className="text-sm font-medium">Pending Approval</span>
              </div>
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 border-2 rounded-sm"
                style={{
                  backgroundColor: 'var(--color-orange-100)',
                  borderColor: '#d97706'
                }}
              ></div>
              <span className="text-sm font-medium">Reserved</span>
            </div>
            <div className="flex items-center gap-2">
              <div 
                className="w-4 h-4 border-2 rounded-sm"
                style={{
                  backgroundColor: '#6b7280',
                  borderColor: '#374151'
                }}
              ></div>
              <span className="text-sm font-medium">Sold</span>
            </div>
          </div>
        </div>

        {/* Lot Map - Centered with transparent background */}
        <div className="flex-1 flex items-center justify-center px-4 pb-8">
          <div className="bg-transparent">
            <LotMap 
              lotAvailability={lotAvailability}
              title="Villa Armonia Lot Map"
              desc="Interactive map showing lot availability"
            />
          </div>
        </div>

        {/* Current Status Display - Centered and styled */}
        <div className="flex justify-center px-4 pb-8">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-4xl w-full">
            <h3 className="font-semibold mb-3 text-center">Current Lot Status</h3>
            <div className="grid grid-cols-6 gap-2 text-sm max-h-32 overflow-y-auto">
              {Object.entries(lotAvailability).map(([lot, status]) => (
                <div key={lot} className="flex items-center gap-1">
                  <span className="font-medium">Lot {lot}:</span>
                  <span className={`px-2 py-1 rounded text-xs ${
                    status === 'available' ? 'bg-green-100 text-green-800' :
                    status === 'unavailable' ? 'bg-red-100 text-red-800' :
                    status === 'reserved' ? 'bg-orange-100 text-orange-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}