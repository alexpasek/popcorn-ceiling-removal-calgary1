
'use client';
import { useState } from 'react';
import Lightbox from '@/components/Lightbox';
export default function ServiceGallery({ images }:{ images:string[] }){
  const [open, setOpen] = useState(false);
  const [start, setStart] = useState(0);
  return(<>
    <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {images.map((src, idx) => (
        <button key={src} onClick={() => { setStart(idx); setOpen(true); }} className="relative w-full h-52">
          <img src={src} alt="" className="w-full h-full object-cover rounded-xl border hover:opacity-90" loading="lazy" />
        </button>
      ))}
    </div>
    <Lightbox images={images} isOpen={open} startIndex={start} onClose={() => setOpen(false)} />
  </>);
}
