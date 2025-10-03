
'use client';
import { useEffect, useState } from 'react';
export default function Lightbox({ images, isOpen, startIndex = 0, onClose }:{ images: string[]; isOpen: boolean; startIndex?: number; onClose: () => void }){
  const [i, setI] = useState(startIndex);
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setI((p) => (p + 1) % images.length);
      if (e.key === 'ArrowLeft') setI((p) => (p - 1 + images.length) % images.length);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, images.length, onClose]);
  if (!isOpen) return null;
  return(<div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
    <button aria-label="Close" onClick={onClose} className="absolute top-4 right-4 text-white text-3xl">×</button>
    <div className="max-w-5xl w-[92vw] max-h-[88vh] flex items-center gap-4">
      <button aria-label="Prev" onClick={() => setI((p) => (p - 1 + images.length) % images.length)} className="text-white text-2xl px-3">‹</button>
      <img src={images[i]} alt="" className="max-h-[70vh] w-auto mx-auto rounded-xl shadow-card" />
      <button aria-label="Next" onClick={() => setI((p) => (p + 1) % images.length)} className="text-white text-2xl px-3">›</button>
    </div>
  </div>);
}
