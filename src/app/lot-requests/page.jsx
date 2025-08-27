"use client";

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function LotRequestsPage() {
  const { isAdmin, isSignedIn } = useAuth();
  const router = useRouter();
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [adminNotes, setAdminNotes] = useState('');
  const [expandedRows, setExpandedRows] = useState(new Set());

  // Redirect if not admin
  useEffect(() => {
    if (!isSignedIn) {
      router.push('/login');
      return;
    }
    if (!isAdmin) {
      router.push('/');
      return;
    }
  }, [isSignedIn, isAdmin, router]);

  // Fetch lot requests
  useEffect(() => {
    if (isAdmin) {
      fetchLotRequests();
    }
  }, [isAdmin]);

  const fetchLotRequests = async () => {
    try {
      const response = await fetch('/api/lot-requests');
      if (response.ok) {
        const data = await response.json();
        setRequests(data);
      }
    } catch (error) {
      console.error('Error fetching lot requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleContact = async (requestId) => {
    try {
      const response = await fetch(`/api/lot-requests/${requestId}/contact`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminNotes }),
      });

      if (response.ok) {
        setShowModal(false);
        setAdminNotes('');
        setSelectedRequest(null);
        fetchLotRequests(); // Refresh the list
      }
    } catch (error) {
      console.error('Error updating request:', error);
    }
  };

  const handleApprove = async (requestId) => {
    try {
      const response = await fetch(`/api/lot-requests/${requestId}/approve`, {
        method: 'PATCH',
      });

      if (response.ok) {
        fetchLotRequests(); // Refresh the list
      }
    } catch (error) {
      console.error('Error approving request:', error);
    }
  };

  const handleReject = async (requestId) => {
    try {
      const response = await fetch(`/api/lot-requests/${requestId}/reject`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ adminNotes }),
      });

      if (response.ok) {
        setShowModal(false);
        setAdminNotes('');
        setSelectedRequest(null);
        fetchLotRequests(); // Refresh the list
      }
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  const toggleRowExpansion = (requestId) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(requestId)) {
      newExpandedRows.delete(requestId);
    } else {
      newExpandedRows.add(requestId);
    }
    setExpandedRows(newExpandedRows);
  };

  const getStatusBadge = (status) => {
    const statusConfig = {
      PENDING: { color: 'bg-yellow-100 text-yellow-800', label: 'Pending' },
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

  if (!isSignedIn || !isAdmin) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-accent-sand/20 to-accent-gold/20 flex items-center justify-center">
        <div className="text-lg">Loading lot requests...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-accent-sand/20 to-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 py-24 md:py-36">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-primary-color mb-2">
              Lot Purchase Requests
            </h1>
            <p className="text-secondary-color">
              Review and manage lot purchase requests from potential buyers
            </p>
          </div>

          {requests.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-secondary-color mb-2">
                No Requests Yet
              </h3>
              <p className="text-soft-sage">
                When buyers submit lot purchase requests, they will appear here for your review.
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-accent-sand/30">
                    <th className="text-left py-3 px-4 font-semibold text-primary-color w-8"></th>
                    <th className="text-left py-3 px-4 font-semibold text-primary-color">Buyer</th>
                    <th className="text-left py-3 px-4 font-semibold text-primary-color">Lot</th>
                    <th className="text-left py-3 px-4 font-semibold text-primary-color">Status</th>
                    <th className="text-left py-3 px-4 font-semibold text-primary-color">Requested</th>
                    <th className="text-left py-3 px-4 font-semibold text-primary-color">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {requests.map((request) => (
                    <React.Fragment key={request.id}>
                      <tr 
                        className="border-b border-accent-sand/20 hover:bg-accent-sand/5 cursor-pointer"
                        onClick={() => toggleRowExpansion(request.id)}
                      >
                        <td className="py-4 px-4 w-8">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleRowExpansion(request.id);
                            }}
                            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-accent-sand/20 transition-colors"
                          >
                            <svg
                              className={`w-4 h-4 text-secondary-color transition-transform ${
                                expandedRows.has(request.id) ? 'rotate-90' : ''
                              }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                        </td>
                        <td className="py-4 px-4">
                          <div>
                            <div className="font-medium text-secondary-color">{request.user.fullName}</div>
                            <div className="text-sm text-soft-sage">{request.user.email}</div>
                            <div className="text-sm text-soft-sage">{request.user.cellPhone}</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div>
                            <div className="font-medium text-secondary-color">Lot {request.lot.id}</div>
                            <div className="text-sm text-soft-sage">${request.lot.price.toLocaleString()}</div>
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          {getStatusBadge(request.status)}
                        </td>
                        <td className="py-4 px-4 text-sm text-soft-sage">
                          {new Date(request.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex gap-2">
                            {request.status === 'PENDING' && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedRequest(request);
                                    setShowModal(true);
                                  }}
                                  className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
                                >
                                  Contact
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleApprove(request.id);
                                  }}
                                  className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
                                >
                                  Approve
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedRequest(request);
                                    setShowModal(true);
                                  }}
                                  className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
                                >
                                  Reject
                                </button>
                              </>
                            )}
                            {request.status === 'CONTACTED' && (
                              <>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleApprove(request.id);
                                  }}
                                  className="px-3 py-1 bg-green-500 text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
                                >
                                  Approve
                                </button>
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedRequest(request);
                                    setShowModal(true);
                                  }}
                                  className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
                                >
                                  Reject
                                </button>
                              </>
                            )}
                            {(request.status === 'APPROVED' || request.status === 'REJECTED') && (
                              <span className="text-sm text-soft-sage">
                                {request.status === 'APPROVED' ? 'Approved' : 'Rejected'}
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                      {expandedRows.has(request.id) && (
                        <tr className="bg-accent-sand/5">
                          <td colSpan="6" className="px-4 py-6">
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-accent-sand/20">
                              <h4 className="text-lg font-semibold text-primary-color mb-4">
                                Buyer Details
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                  <h5 className="font-medium text-secondary-color mb-3">Personal Information</h5>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium text-soft-sage">Full Name:</span>
                                      <span className="ml-2 text-secondary-color">{request.user.fullName}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-soft-sage">Email:</span>
                                      <span className="ml-2 text-secondary-color">{request.user.email}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-soft-sage">Phone:</span>
                                      <span className="ml-2 text-secondary-color">{request.user.cellPhone || 'Not provided'}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-soft-sage">Date of Birth:</span>
                                      <span className="ml-2 text-secondary-color">
                                        {request.user.dateOfBirth ? new Date(request.user.dateOfBirth).toLocaleDateString() : 'Not provided'}
                                      </span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-soft-sage">Place of Birth:</span>
                                      <span className="ml-2 text-secondary-color">{request.user.placeOfBirth || 'Not provided'}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-soft-sage">Marriage Status:</span>
                                      <span className="ml-2 text-secondary-color">{request.user.marriageStatus || 'Not provided'}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-soft-sage">Occupation:</span>
                                      <span className="ml-2 text-secondary-color">{request.user.occupation || 'Not provided'}</span>
                                    </div>
                                    <div>
                                      <span className="font-medium text-soft-sage">CURP:</span>
                                      <span className="ml-2 text-secondary-color">{request.user.curp || 'Not provided'}</span>
                                    </div>
                                  </div>
                                </div>
                                <div>
                                  <h5 className="font-medium text-secondary-color mb-3">Documents</h5>
                                  <div className="space-y-3">
                                    <div>
                                      <span className="font-medium text-soft-sage text-sm">Copy of ID:</span>
                                      {request.user.copyOfIdUrl ? (
                                        <a
                                          href={request.user.copyOfIdUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="ml-2 text-blue-600 hover:text-blue-800 underline text-sm"
                                        >
                                          View Document
                                        </a>
                                      ) : (
                                        <span className="ml-2 text-soft-sage text-sm">Not provided</span>
                                      )}
                                    </div>
                                    <div>
                                      <span className="font-medium text-soft-sage text-sm">Proof of Residency:</span>
                                      {request.user.proofOfResidencyUrl ? (
                                        <a
                                          href={request.user.proofOfResidencyUrl}
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="ml-2 text-blue-600 hover:text-blue-800 underline text-sm"
                                        >
                                          View Document
                                        </a>
                                      ) : (
                                        <span className="ml-2 text-soft-sage text-sm">Not provided</span>
                                      )}
                                    </div>
                                  </div>
                                  
                                  <h5 className="font-medium text-secondary-color mb-3 mt-6">Request Details</h5>
                                  <div className="space-y-2 text-sm">
                                    <div>
                                      <span className="font-medium text-soft-sage">Requested On:</span>
                                      <span className="ml-2 text-secondary-color">
                                        {new Date(request.createdAt).toLocaleString()}
                                      </span>
                                    </div>
                                    {request.adminNotes && (
                                      <div>
                                        <span className="font-medium text-soft-sage">Admin Notes:</span>
                                        <span className="ml-2 text-secondary-color">{request.adminNotes}</span>
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Contact/Reject */}
      {showModal && selectedRequest && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-semibold text-primary-color mb-4">
              {selectedRequest.status === 'PENDING' ? 'Contact Buyer' : 'Reject Request'}
            </h3>
            <textarea
              value={adminNotes}
              onChange={(e) => setAdminNotes(e.target.value)}
              placeholder="Add notes about contacting the buyer or reason for rejection..."
              className="w-full h-32 p-3 border border-accent-sand/30 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-accent-sand"
            />
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => {
                  setShowModal(false);
                  setAdminNotes('');
                  setSelectedRequest(null);
                }}
                className="flex-1 px-4 py-2 border border-accent-sand/30 rounded-lg text-secondary-color hover:bg-accent-sand/10 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => {

                  if (selectedRequest.status === 'PENDING') {
                    handleContact(selectedRequest.id);
                  } else {
                    handleReject(selectedRequest.id);
                  }
                }}
                className="flex-1 px-4 py-2 bg-accent-clay text-white rounded-lg hover:bg-accent-clay/90 transition-colors"
              >
                {selectedRequest.status === 'PENDING' ? 'Contact' : 'Reject'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
