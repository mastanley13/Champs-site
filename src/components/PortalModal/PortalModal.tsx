import { useState, useEffect } from 'react';

interface PortalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PortalModal({ isOpen, onClose }: PortalModalProps) {
  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in fade-in zoom-in duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close modal"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Construction Icon */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">🚧</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Customer Portal Under Construction
          </h2>
          <p className="text-gray-600">
            We're working hard to bring you an amazing new customer experience!
          </p>
        </div>

        {/* Current Customers Section */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Current Customers
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Access your account through our current system:
          </p>
          <a
            href="https://champsdoghouse.portal.gingrapp.com/#/public/login"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-[#005596] text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-[#004475] transition-colors"
          >
            Gingr Parent App Sign In
          </a>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-3 bg-white text-gray-500">or</span>
          </div>
        </div>

        {/* New Customers Section */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            New Customers
          </h3>
          <p className="text-gray-600 text-sm mb-4">
            Ready to get started? Give us a call to schedule your first service!
          </p>
          <a
            href="tel:888-856-0012"
            className="block w-full bg-[#E63946] text-white py-3 px-4 rounded-lg text-center font-semibold hover:bg-red-600 transition-colors"
          >
            📞 Call (888) 856-0012
          </a>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            Thank you for your patience as we improve your experience!
          </p>
        </div>
      </div>
    </div>
  );
} 