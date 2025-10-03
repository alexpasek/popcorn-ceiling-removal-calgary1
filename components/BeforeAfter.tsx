
'use client';
import { useRef, useState } from 'react';
export default function BeforeAfter({ before, after, alt='', className='' }:{ before:string; after:string; alt?:string; className?:string }){
  const [x,setX]=useState(50); const ref=useRef<HTMLDivElement>(null);
  return(<div className={`relative overflow-hidden rounded-2xl border aspect-[16/9] ${className}`} ref={ref}
    onMouseMove={(e)=>{const r=ref.current?.getBoundingClientRect(); if(!r)return; setX(Math.max(0,Math.min(100,((e.clientX-r.left)/r.width)*100)));}}
    onTouchMove={(e)=>{const t=e.touches[0]; const r=ref.current?.getBoundingClientRect(); if(!r)return; setX(Math.max(0,Math.min(100,((t.clientX-r.left)/r.width)*100)));}}>
    <img src={after} alt={alt} className="absolute inset-0 w-full h-full object-cover"/>
    <div className="absolute inset-0" style={{width:x+'%',overflow:'hidden'}}><img src={before} alt={alt} className="absolute inset-0 w-full h-full object-cover"/></div>
    <div className="absolute inset-y-0" style={{left:x+'%'}}><div className="w-1 bg-white/80 h-full shadow"/></div>
  </div>);
}
