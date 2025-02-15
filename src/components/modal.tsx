'use client';

import { useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ModalProps {
  children: React.ReactNode;
  onClose?: () => void;
}

export default function Modal({ children, onClose }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleClose = useCallback(() => {
    if (onClose) {
      onClose();
    } else {
      router.back();
    }
  }, [onClose, router]);

  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current || e.target === wrapper.current) {
        handleClose();
      }
    },
    [handleClose]
  );

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    },
    [handleClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handleEscape]);

  return (
    <div
      ref={overlay}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
      onClick={handleClick}
    >
      <div
        ref={wrapper}
        className="relative bg-white rounded-lg p-6 shadow-xl max-w-3xl max-h-[90vh] overflow-auto"
      >
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 rounded-lg hover:bg-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}
