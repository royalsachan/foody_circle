import React from 'react';

const Dialog = ({ open, onOpenChange, children }) => {
  if (!open) return null; // Don't render the dialog if it's not open

  const handleClose = () => {
    onOpenChange(false); // Close the dialog
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full">
        <button onClick={handleClose} className="absolute top-2 right-2 text-gray-600 hover:text-gray-800">
          &times; {/* Close button */}
        </button>
        {children} {/* Render the children passed to the dialog */}
      </div>
    </div>
  );
};

export const DialogContent = ({ children }) => (
  <div>{children}</div>
);

export const DialogHeader = ({ children }) => (
  <div className="mb-4">{children}</div>
);

export const DialogTitle = ({ children }) => (
  <h2 className="text-xl font-bold">{children}</h2>
);

export default Dialog;