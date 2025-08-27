"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function MyRequestsPage() {
  const { isSignedIn, user } = useAuth();
  const router = useRouter();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  // Redirect if not signed in
  useEffect(() => {
    if (!isSignedIn) {
      router.push('/login');
      return;
    }
  }, [isSignedIn, router]);

  // Fetch user's requests
  useEffect(() => {
    if (isSignedIn) {
      fetchMyRequests();
    }
  }, [isSignedIn]);

  const fetchMyRequests = async () => {
    try {
      const response = await fetch('/api/my-requests');
      if (response.ok) {
        const data = await response.json();
        setRequests(data);
      }
    } catch (error) {
      console.error('Error fetching requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      PENDING: { color: 'bg-yellow-100 text-yellow-800', label: 'Pending Review' },
      CONTACTED: { color: 'bg-blue-100 text-blue-800', label: 'Contacted' },
      APPROVED: { color: 'bg-green-100 text-green-800', label: 'Approved' },
      REJECTED: { color: 'bg-red-100 text-red-800', label: 'Rejected' },
    };

    const config = statusConfig[status] || statusConfig.PENDING;
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${config.color}`}>
        {config.label}
      </span>
    );
  };

  if (!isSignedIn) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-sand/20 to-accent-gold/20 flex items-center justify-center">
        <div className="text-lg">Loading your requests...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-sand/20 to-accent-gold/20">
      <div className="max-w-6xl mx-auto px-4 py-24 md:py-36">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary-color mb-2">
              My Lot Requests
            </h1>
            <p className="text-secondary-color">
              Track the status of your lot purchase requests
            </p>
          </div>

          {requests.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-secondary-color mb-2">
                No Requests Yet
              </h3>
              <p className="text-soft-sage mb-6">
                You haven't submitted any lot purchase requests yet.
              </p>
              <button
                onClick={() => router.push('/lot-map')}
                className="px-6 py-3 bg-accent-clay text-white rounded-lg font-semibold hover:bg-accent-clay/90 transition-colors"
              >
                Browse Available Lots
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {requests.map((request) => (
                <div key={request.id} className="border border-accent-sand/20 rounded-lg p-6 hover:bg-accent-sand/5 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-primary-color">
                          Lot {request.lot.id}
                        </h3>
                        {getStatusBadge(request.status)}
                      </div>
                      <p className="text-secondary-color mb-2">
                        ${request.lot.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-soft-sage">
                        Requested on {new Date(request.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      {request.status === 'PENDING' && (
                        <div className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded-lg">
                          <p className="font-medium">Under Review</p>
                          <p>Our team is reviewing your information and documents.</p>
                        </div>
                      )}
                      
                      {request.status === 'CONTACTED' && (
                        <div className="text-sm text-blue-700 bg-blue-50 p-3 rounded-lg">
                          <p className="font-medium">Contacted</p>
                          <p>We've reached out to discuss your request. Check your email and phone.</p>
                        </div>
                      )}
                      
                      {request.status === 'APPROVED' && (
                        <div className="text-sm text-green-700 bg-green-50 p-3 rounded-lg">
                          <p className="font-medium">Approved!</p>
                          <p>Your request has been approved. The lot is now yours!</p>
                        </div>
                      )}
                      
                      {request.status === 'REJECTED' && (
                        <div className="text-sm text-red-700 bg-red-50 p-3 rounded-lg">
                          <p className="font-medium">Rejected</p>
                          <p>{request.adminNotes || 'Your request was not approved at this time.'}</p>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {request.adminNotes && request.status !== 'REJECTED' && (
                    <div className="mt-4 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm text-secondary-color">
                        <span className="font-medium">Admin Notes:</span> {request.adminNotes}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
