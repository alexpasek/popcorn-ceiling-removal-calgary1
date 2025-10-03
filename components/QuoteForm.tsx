'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
export default function QuoteForm(){
  const router = useRouter();
  const [ts, setTs] = useState(''); const [submitting, setSubmitting] = useState(false); const [error, setError] = useState<string|null>(null);
  useEffect(()=>{ setTs(Date.now().toString()); }, []);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault(); setSubmitting(true); setError(null);
    const data = new FormData(e.currentTarget); const payload:Record<string,string> = {}; data.forEach((v,k)=>payload[k]=String(v));
    try{
      const res = await fetch('/api/quote', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload) });
      const out = await res.json(); if(!res.ok) throw new Error(out.error || 'Submission failed'); router.push('/thank-you');
    }catch(err:any){ setError(err.message || 'Something went wrong'); }finally{ setSubmitting(false); }
  }
  return(<form onSubmit={onSubmit} className="card p-6 space-y-4">
    <div className="grid sm:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium">Name</label><input name="name" required className="mt-1 block w-full rounded-md border-gray-300" /></div>
      <div><label className="block text-sm font-medium">Phone</label><input name="phone" required className="mt-1 block w-full rounded-md border-gray-300" /></div>
      <div><label className="block text-sm font-medium">Email (optional)</label><input type="email" name="email" className="mt-1 block w-full rounded-md border-gray-300" /></div>
      <div><label className="block text-sm font-medium">Neighborhood</label><input name="neighborhood" className="mt-1 block w-full rounded-md border-gray-300" /></div>
    </div>
    <div className="grid sm:grid-cols-2 gap-4">
      <div><label className="block text-sm font-medium">Service</label><select name="service" className="mt-1 block w-full rounded-md border-gray-300">
        <option>Popcorn Ceiling Removal</option><option>Drywall Installation & Repair</option><option>Wallpaper Removal</option><option>Interior Painting</option>
      </select></div>
      <div><label className="block text-sm font-medium">Approx. Sq Ft (optional)</label><input name="sqft" className="mt-1 block w-full rounded-md border-gray-300" /></div>
    </div>
    <div><label className="block text-sm font-medium">Message (optional)</label><textarea name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300" placeholder="Tell us about your ceilings, timelines, etc." /></div>
    <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
    <input type="hidden" name="ts" value={ts} />
    {error && <div className="text-red-600 text-sm">{error}</div>}
    <button className="btn btn-primary" disabled={submitting}>{submitting ? 'Sending…' : 'Get My Quote'}</button>
  </form>);
}
