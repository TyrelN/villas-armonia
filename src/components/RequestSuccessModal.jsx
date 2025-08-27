"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function RequestSuccessModal({ isOpen, onClose, lotData }) {
  const router = useRouter();
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300);
  };

  const handleViewRequests = () => {
    router.push('/lot-requests');
    handleClose();
  };

  const handleGoHome = () => {
    router.push('/');
    handleClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md gap-0 h-120 mt-10 md:h-140 p-0.5">
         {/* Make the scrollable area inside handle scrolling */}
      <div className=" overflow-y-auto p-6">
        <DialogHeader>
          <div className="text-center mb-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <DialogTitle className="text-2xl font-bold text-primary-color mb-2">
              Request Submitted!
            </DialogTitle>
          </div>
        </DialogHeader>

        {/* Lot Information */}
        {lotData && (
          <div className="bg-accent-sand/10 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-primary-color mb-2">Request Details</h4>
            <div className="space-y-1 text-sm text-secondary-color">
              <p><span className="font-medium">Lot:</span> {lotData.id}</p>
              <p><span className="font-medium">Price:</span> ${lotData.price?.toLocaleString()}</p>
              <p><span className="font-medium">Status:</span> Pending Review</p>
            </div>
          </div>
        )}

        {/* Next Steps */}
        <div className="mb-6">
          <h4 className="font-semibold text-primary-color mb-3">What happens next?</h4>
          <div className="space-y-3 text-sm text-secondary-color">
            <div className="flex items-start">
              <div className="w-6 h-6 bg-accent-sand rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <span className="text-xs font-bold text-white">1</span>
              </div>
              <p>Our team will review your information and documents</p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-accent-sand rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <span className="text-xs font-bold text-white">2</span>
              </div>
              <p>We'll contact you directly to discuss the purchase terms</p>
            </div>
            <div className="flex items-start">
              <div className="w-6 h-6 bg-accent-sand rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                <span className="text-xs font-bold text-white">3</span>
              </div>
              <p>Once approved, the lot will be transferred to your ownership</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-primary-color mb-2">Need help?</h4>
          <div className="text-sm text-secondary-color space-y-1">
            <p>📧 villasarmonias@gmail.com</p>
            <p>📞 +1 (250) 123-4567</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleViewRequests}
            className="w-full px-4 py-3 bg-accent-clay text-white rounded-lg font-semibold hover:bg-accent-clay/90 transition-colors"
          >
            View My Requests
          </button>
          <button
            onClick={handleGoHome}
            className="w-full px-4 py-3 border border-accent-sand/30 rounded-lg text-secondary-color hover:bg-accent-sand/10 transition-colors"
          >
            Return to Home
          </button>
        </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
