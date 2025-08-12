"use client";

import { useState, useEffect } from 'react';
import LotMap from '@/components/LotMap';

export default function LotMapPage() {
  const [lotAvailability, setLotAvailability] = useState({});
  const [loading, setLoading] = useState(true);

  // Simulate fetching data from backend
  useEffect(() => {
    const fetchLotAvailability = async () => {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock backend data - in real app, this would come from your API
      const mockData = {
        "1": "available",
        "2": "unavailable", // This lot will be red
        "3": "reserved",    // This lot will be orange
        "4": "sold",        // This lot will be gray
        "5": "available",
        "6": "unavailable",
        "7": "available",
        "8": "reserved",
        "9": "available",
        "10": "sold",
        "11": "available",
        "12": "unavailable",
        "13": "available",
        "14": "reserved",
        "15": "available",
        "16": "available",
        "17": "unavailable",
        "18": "available",
        "19": "reserved",
        "20": "available",
        "21": "available",
        "22": "unavailable",
        "23": "available",
        "24": "sold",
        "25": "available",
        "26": "reserved",
        "27": "available",
        "28": "unavailable",
        "29": "available",
        "30": "reserved",
        "31": "available",
        "32": "available",
        "33": "unavailable",
        "34": "available",
        "35": "reserved",
        "36": "available",
        "37": "available",
        "38": "unavailable",
        "39": "available",
        "40": "reserved",
        "41": "available",
        "42": "available",
        "43": "unavailable",
        "44": "available",
        "45": "reserved",
        "46": "available",
        "47": "available",
        "48": "unavailable",
        "49": "available",
        "50": "reserved",
        "51": "available",
        "52": "available",
        "53": "unavailable",
        "54": "available",
        "55": "reserved",
        "56": "available",
        "57": "available",
        "58": "unavailable"
      };
      
      setLotAvailability(mockData);
      setLoading(false);
    };

    fetchLotAvailability();
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
      <div className="min-h-screen relative">
        {/* Fixed background image */}
        <div 
          className="fixed inset-0 z-10 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/mexico-sunset-background-wide.webp')"
          }}
        />
        
        {/* Content overlay */}
        <div className="relative z-20 flex items-center justify-center min-h-screen">
          <div className="text-lg text-white bg-black bg-opacity-50 px-6 py-3 rounded-lg">
            Loading lot availability...
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      {/* Fixed background image */}
      <div 
        className="fixed inset-0 z-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/mexico-sunset-background-wide.webp')"
        }}
      />
      
      {/* Content overlay */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Header */}
        <div className="text-center pt-8 pb-4">
          <h1 className="text-4xl font-bold text-white mb-4 drop-shadow-2xl">
            Villa Armonia - Interactive Lot Map
          </h1>
          <p className="text-white text-lg drop-shadow-lg max-w-2xl mx-auto px-4">
            Click on available lots to view details. Unavailable lots are shown in red.
          </p>
        </div>

        {/* Legend - Centered and styled for dark background */}
        <div className="flex justify-center mb-6">
          <div className="flex flex-wrap gap-4 bg-white bg-opacity-90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#a9bbb2] border border-[#d9b382]"></div>
              <span className="text-sm font-medium">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#ef4444] border border-[#dc2626]"></div>
              <span className="text-sm font-medium">Unavailable</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#f59e0b] border border-[#d97706]"></div>
              <span className="text-sm font-medium">Reserved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#6b7280] border border-[#374151]"></div>
              <span className="text-sm font-medium">Sold</span>
            </div>
          </div>
        </div>

        {/* Demo Controls - Centered and styled */}
        <div className="flex justify-center mb-6 px-4">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-2xl">
            <h3 className="font-semibold mb-3 text-center">Demo Controls</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium">Lot Number:</label>
                <select 
                  className="border rounded px-2 py-1 text-sm"
                  onChange={(e) => {
                    const lotNum = e.target.value;
                    const status = e.target.nextElementSibling.value;
                    if (lotNum && status) {
                      updateLotAvailability(lotNum, status);
                    }
                  }}
                >
                  <option value="">Select Lot</option>
                  {Array.from({ length: 58 }, (_, i) => i + 1).map(num => (
                    <option key={num} value={num.toString()}>Lot {num}</option>
                  ))}
                </select>
                <select 
                  className="border rounded px-2 py-1 text-sm"
                  onChange={(e) => {
                    const lotNum = e.target.previousElementSibling.value;
                    const status = e.target.value;
                    if (lotNum && status) {
                      updateLotAvailability(lotNum, status);
                    }
                  }}
                >
                  <option value="">Select Status</option>
                  <option value="available">Available</option>
                  <option value="unavailable">Unavailable</option>
                  <option value="reserved">Reserved</option>
                  <option value="sold">Sold</option>
                </select>
              </div>
              
              <div className="flex gap-2">
                <button 
                  onClick={() => {
                    // Make all lots available
                    const allAvailable = {};
                    for (let i = 1; i <= 58; i++) {
                      allAvailable[i.toString()] = 'available';
                    }
                    setLotAvailability(allAvailable);
                  }}
                  className="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600 transition-colors"
                >
                  Make All Available
                </button>
                <button 
                  onClick={() => {
                    // Make all lots unavailable (red)
                    const allUnavailable = {};
                    for (let i = 1; i <= 58; i++) {
                      allUnavailable[i.toString()] = 'unavailable';
                    }
                    setLotAvailability(allUnavailable);
                  }}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600 transition-colors"
                >
                  Make All Unavailable
                </button>
              </div>
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