import React from 'react';
import { CheckCircle, X } from 'lucide-react';

// Define the types for the props this modal expects
interface ThankYouModalProps {
  /** Controls the visibility of the modal. */
  isOpen: boolean;
  /** Function to call when the modal should be closed. */
  onClose: () => void;
}

const ThankYouModal: React.FC<ThankYouModalProps> = ({ isOpen, onClose }) => {
  // If isOpen is false, the component renders nothing, keeping the pop-up hidden.
  if (!isOpen) {
    return null;
  }

  return (
    // 1. Full-screen fixed overlay (the backdrop)
    // The 'fixed inset-0 z-50' classes ensure it covers the entire screen, on top of everything.
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm transition-opacity duration-300"
      // Close modal if user clicks outside the message box
      onClick={onClose} 
    >
      
      {/* 2. Modal content box */}
      <div 
        className="relative w-full max-w-sm rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-900 transform transition-all duration-300"
        // Prevent click events inside the modal from closing it via the backdrop
        onClick={(e) => e.stopPropagation()} 
        role="dialog"
        aria-modal="true"
        aria-labelledby="thank-you-title"
      >
        {/* Close Button (X icon) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-slate-300 transition"
          aria-label="Close message"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col items-center text-center">
          {/* Success Icon */}
          <CheckCircle className="mb-4 h-16 w-16 text-green-500" />
          
          {/* Message Headline */}
          <h2 id="thank-you-title" className="text-2xl font-bold text-slate-800 dark:text-white">Form Submitted Successfully!</h2>
          
          {/* Detailed Message */}
          <p className="mt-2 text-base text-slate-600 dark:text-slate-300">
            Your message has been received. I'll get back to you within 24 hours.
          </p>

          {/* Close Button */}
          <button
            onClick={onClose} // Closes the modal
            className="mt-6 inline-block w-full rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 px-5 py-2 text-white shadow-md transition hover:from-green-600 hover:to-emerald-700 focus:outline-none focus:ring-2 focus:ring-green-400 dark:shadow-green-800"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThankYouModal;