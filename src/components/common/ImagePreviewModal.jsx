import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';

export default function ImagePreviewModal({ isOpen, src, alt, onClose }) {
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => {
            document.body.style.overflow = 'unset';
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen || !src) return null;

    return (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 transition-opacity duration-200"
            onClick={onClose}
        >
            <div className="relative max-w-5xl max-h-[90vh] flex flex-col items-center justify-center">
                <button
                    onClick={onClose}
                    className="absolute -top-10 right-0 md:-top-4 md:-right-10 z-10 bg-black/70 hover:bg-black text-white p-2 rounded-full transition-colors cursor-pointer border border-white/20"
                    aria-label="Close preview"
                >
                    <FiX className="text-2xl" />
                </button>
                <img
                    src={src}
                    alt={alt || "Image preview"}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10"
                    onClick={(e) => e.stopPropagation()}
                />
                {alt && (
                    <p className="mt-3 text-white text-center text-sm md:text-base font-medium px-4 py-1 bg-black/50 rounded-full border border-white/10">
                        {alt}
                    </p>
                )}
            </div>
        </div>
    );
}
