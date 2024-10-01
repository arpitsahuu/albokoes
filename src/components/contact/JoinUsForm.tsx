// Modal.tsx
import React from 'react';

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

const JoinUsForm: React.FC<ModalProps> = ({ open, onClose }) => {
    if (!open) return null; // Don't render if not open

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-5 max-w-sm w-full">
                <h2 className="text-lg font-bold mb-4">Join Us</h2>
                <p className="mb-4">Fill out the form below to join our team!</p>
                {/* Add your form or any content here */}
                <button 
                    onClick={onClose} 
                    className="mt-4 bg-green-500 text-white rounded px-4 py-2"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default JoinUsForm;
