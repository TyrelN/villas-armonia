"use client";

import { useState, useEffect } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import RequestSuccessModal from './RequestSuccessModal';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function LotPurchaseModal({ lot, isOpen, onClose, onRequestSubmitted }) {
  const { isSignedIn, user, userProfile, fetchUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState(userProfile?.cellPhone || '');
  const formData = {
    fullName: userProfile?.fullName || '',
    email: userProfile?.email || '',
    cellPhone: userProfile?.cellPhone || '',
    occupation: userProfile?.occupation || '',
    placeOfBirth: userProfile?.placeOfBirth || '',
    dateOfBirth: userProfile?.dateOfBirth ? new Date(userProfile.dateOfBirth).toISOString().split('T')[0] : '',
    marriageStatus: userProfile?.marriageStatus || 'SINGLE',
    curp: userProfile?.curp || '',
  };
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Update phone number when user profile changes
  useEffect(() => {
    if (userProfile?.cellPhone) {
      setPhoneNumber(userProfile.cellPhone);
    }
  }, [userProfile?.cellPhone]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!isSignedIn) {
      setMessage('Please sign in to request a lot purchase');
      return;
    }

    if (!phoneNumber) {
      setMessage('Please enter a valid phone number');
      return;
    }

    setLoading(true);
    setMessage('');

    try {
      const formDataToSubmit = new FormData(e.target);
      
      // Add the phone number from state since it's not in the form
      formDataToSubmit.set('cellPhone', phoneNumber);
      
      const response = await fetch(`/api/lots/${lot.id}/purchase`, {
        method: 'POST',
        body: formDataToSubmit,
      });

      const data = await response.json();

      if (response.ok) {
        setShowSuccessModal(true);
        // Refresh user profile to get updated information
        if (user?.id) {
          await fetchUserProfile(user.id);
        }
        onRequestSubmitted();
      } else {
        setMessage(data.error || 'Failed to submit request');
      }
    } catch (error) {
      console.error('Error submitting purchase request:', error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="max-w-2xl max-h-[80vh] rounded-2xl overflow-hidden mt-5 p-0">
      {/* Make the scrollable area inside handle scrolling */}
      <div className="max-h-[80vh] overflow-y-auto p-6">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-primary-color">
            Request Lot Purchase
          </DialogTitle>
          <DialogDescription className="text-secondary-color">
            Lot {lot.id} - ${lot.price.toLocaleString()}
          </DialogDescription>
        </DialogHeader>

        {!isSignedIn && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-yellow-800">
              You need to be signed in to request a lot purchase.
            </p>
          </div>
        )}

        {message && (
          <div className={`mb-6 p-4 rounded-lg text-sm ${
            message.includes('successfully') 
              ? 'bg-green-50 text-green-800 border border-green-200' 
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}>
            {message}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit} encType="multipart/form-data">
          {/* Personal Information */}
          <div>
            <h4 className="text-lg font-semibold text-primary-color mb-4">Personal Information</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary-color mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  defaultValue={formData.fullName}
                  className="w-full px-3 py-2 border border-accent-sand/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sand"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-color mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  defaultValue={formData.email}
                  className="w-full px-3 py-2 border border-accent-sand/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sand"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-color mb-2">
                  Cell Phone *
                </label>
                <PhoneInput
                  defaultCountry="MX"
                  placeholder="xxx-xxx-xxxx"
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                  className="w-full px-3 py-2 border border-accent-sand/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sand"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-color mb-2">
                  Occupation
                </label>
                <input
                  type="text"
                  name="occupation"
                  defaultValue={formData.occupation}
                  className="w-full px-3 py-2 border border-accent-sand/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sand"
                />
              </div>
              
              <div>
                <label 
                className="block text-sm font-medium text-secondary-color mb-2">
                  Place of Birth *
                </label>
                <input
                  type="text"
                  name="placeOfBirth"
                  placeholder="City, State, Country"
                  defaultValue={formData.placeOfBirth}
                  className="w-full px-3 py-2 border border-accent-sand/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sand"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-color mb-2">
                  Date of Birth *
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  defaultValue={formData.dateOfBirth}
                  className="w-full px-3 py-2 border border-accent-sand/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sand"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-color mb-2">
                  Marriage Status
                </label>
                <select
                  name="marriageStatus"
                  defaultValue={formData.marriageStatus}
                  className="w-full px-3 py-2 border border-accent-sand/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sand"
                >
                  <option value="SINGLE">Single</option>
                  <option value="MARRIED">Married</option>
                  <option value="DIVORCED">Divorced</option>
                  <option value="WIDOWED">Widowed</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-color mb-2">
                  CURP (Mexican ID)
                </label>
                <input
                  type="text"
                  name="curp"
                  defaultValue={formData.curp}
                  className="w-full px-3 py-2 border border-accent-sand/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sand"
                />
              </div>
            </div>
          </div>

          {/* Document Uploads */}
          <div>
            <h4 className="text-lg font-semibold text-primary-color mb-4">Required Documents</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-secondary-color mb-2">
                  Copy of ID *
                </label>
                <input
                  type="file"
                  name="copyOfId"
                  accept="image/*,.pdf"
                  className="w-full px-3 py-2 border border-accent-sand/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-sand"
                  required
                />
                <p className="text-xs text-soft-sage mt-1">Upload a clear copy of your government-issued ID</p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary-color mb-2">
                  Proof of Residency *
                </label>
                <input
                  type="file"
                  name="proofOfResidency"
                  accept="image/*,.pdf"
                  className="w-full px-3 py-2 border border-accent-sand/30 rounded-lg focus:ring-2 focus:ring-accent-sand"
                  required
                />
                <p className="text-xs text-soft-sage mt-1">Upload a utility bill or other proof of residency</p>
              </div>
            </div>
          </div>

          {/* Terms and Conditions */}
          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-soft-sage">
              By submitting this request, you agree to provide your documentation and details 
              for review. Our team will contact you directly to discuss the purchase terms and 
              verify your information. All documents will be kept confidential and used only 
              for the purchase verification process.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-accent-sand/30 rounded-lg text-secondary-color hover:bg-accent-sand/10 transition-colors"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading || !isSignedIn}
              className="flex-1 px-4 py-2 bg-accent-clay text-white rounded-lg hover:bg-accent-clay/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>
          </div>
        </form>
        </div>
      </DialogContent>

      {/* Success Modal */}
      <RequestSuccessModal
        isOpen={showSuccessModal}
        onClose={() => {
          setShowSuccessModal(false);
          onClose();
        }}
        lotData={lot}
      />
    </Dialog>
  );
}
