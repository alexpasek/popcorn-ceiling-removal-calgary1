
import { SITE } from '@/data/site';
export default function Footer(){
  const year=new Date().getFullYear();
  return(<footer className="mt-16 border-t bg-white"><div className="container-x py-8 grid gap-6 md:grid-cols-3">
    <div><div className="font-bold text-ink">{SITE.brand}</div><div className="text-sm text-muted mt-1">Serving {SITE.city}</div><div className="text-sm text-muted">Hours: {SITE.hours}</div><div className="mt-2"><a href={SITE.phoneHref} className="link-primary">{SITE.phone}</a></div></div>
    <div className="text-sm text-muted md:col-span-2"><p>Popcorn ceiling removal, drywall installation & repair, wallpaper removal, and interior painting with clean prep and dust control.</p><p className="mt-2">© {year} {SITE.brand}. All rights reserved.</p></div>
  </div></footer>);
}

// import { SITE } from "@/data/site";

// function IconInstagram({ className = "h-[60px] w-[60px]" }) {
//   // 3× bigger
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       className={className}
//       aria-hidden="true"
//     >
//       <rect x="3" y="3" width="18" height="18" rx="5" />
//       <circle cx="12" cy="12" r="4" />
//       <circle cx="17.5" cy="6.5" r="1" />
//     </svg>
//   );
// }

// function IconFacebook({ className = "h-[60px] w-[60px]" }) {
//   // 3× bigger
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       fill="currentColor"
//       className={className}
//       aria-hidden="true"
//     >
//       <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 2 6.48 2 12.06c0 5 3.66 9.14 8.44 10v-7.07H8.1V12h2.34V9.8c0-2.3 1.37-3.57 3.46-3.57.99 0 2.02.18 2.02.18v2.22h-1.14c-1.12 0-1.47.69-1.47 1.4V12h2.51l-.4 2.99h-2.11V22c4.78-.86 8.44-5 8.44-9.94Z" />
//     </svg>
//   );
// }

// export default function Footer() {
//   const year = new Date().getFullYear();
//   return (
//     <footer className="mt-16 border-t bg-white">
//       <div className="container-x py-8 grid items-start
//   md:grid-cols-[0.4fr_auto_1fr]  /* left | center (auto) | right */
//   gap-y-8 md:gap-y-0
//   md:gap-x-4 lg:gap-x-6        /* was gap-8; now tighter on both sides */
// ">
//         {/* Left: brand / contact */}
//         <div className="text-center md:text-left">
//           <div className="font-bold text-ink">{SITE.brand}</div>
//           <div className="text-sm text-muted mt-1">Serving {SITE.city}</div>
//           <div className="text-sm text-muted">Hours: {SITE.hours}</div>
//           <div className="mt-2">
//             <a href={SITE.phoneHref} className="link-primary">
//               {SITE.phone}
//             </a>
//           </div>
//         </div>

//         {/* Center: Follow us + icons below (only if links are set) */}
//         {(SITE.social?.instagram || SITE.social?.facebook) && (
//           <div className="flex flex-col items-center justify-start text-center">
//             <span className="text-ink font-semibold text-base md:text-lg">
//               Follow us
//             </span>
//             <div className="mt-3 flex items-center justify-center gap-6">
//               {SITE.social?.instagram && (
//                 <a
//                   href={SITE.social.instagram}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Instagram"
//                   className="text-muted hover:text-primary-600 transition hover:scale-105"
//                   title="Instagram"
//                 >
//                   <IconInstagram />
//                 </a>
//               )}
//               {SITE.social?.facebook && (
//                 <a
//                   href={SITE.social.facebook}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   aria-label="Facebook"
//                   className="text-muted hover:text-primary-600 transition hover:scale-105"
//                   title="Facebook"
//                 >
//                   <IconFacebook />
//                 </a>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Right: description / © year */}
//         <div className="text-sm text-muted text-center md:text-right">
//           <p>
//             Popcorn ceiling removal, drywall installation & repair, wallpaper
//             removal, and interior painting with clean prep and dust control.
//           </p>
//           <p className="mt-2">
//             © {year} {SITE.brand}. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }

