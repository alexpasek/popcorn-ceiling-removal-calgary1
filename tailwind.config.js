/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: { extend: {
    colors:{ primary:{50:"var(--twc-primary-50)",100:"var(--twc-primary-100)",200:"var(--twc-primary-200)",300:"var(--twc-primary-300)",400:"var(--twc-primary-400)",500:"var(--twc-primary-500)",600:"var(--twc-primary-600)",700:"var(--twc-primary-700)",800:"var(--twc-primary-800)",900:"var(--twc-primary-900)"},
      ink:"var(--color-ink)", body:"var(--color-body)", muted:"var(--color-muted)", bg:"var(--color-bg)", 'bg-soft':"var(--color-bg-soft)" },
    boxShadow:{card:"0 4px 24px rgba(0,0,0,0.06)"}, maxWidth:{'8xl':'96rem'} } },
  plugins:[require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};