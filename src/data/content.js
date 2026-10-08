// ---------------------------------------------------------------------------
// Single source of truth for the "Desk Space Al Reem Island" micro-site.
// Prices and plan features come from www.aegiscoworking.ae/pricing.
// Edit this file — not the components — when prices, FAQs or blogs change.
// ---------------------------------------------------------------------------

import coworkImg from '../assets/desk-space-al-reem-island-coworking.webp'
import deskImg from '../assets/desk-space-al-reem-island-dedicated-desk.webp'
import meetingImg from '../assets/desk-space-al-reem-island-meeting-room.webp'
import receptionImg from '../assets/desk-space-al-reem-island-reception.webp'
import privateImg from '../assets/desk-space-al-reem-island-private-office.webp'
import boardroomImg from '../assets/desk-space-al-reem-island-boardroom.webp'

export const SITE_URL = 'https://deskspacealreemisland.online'
export const MAIN_SITE = 'https://www.aegiscoworking.ae'
export const PAGE_TITLE = 'Desk Space Al Reem Island for Freelancers & Remote Workers'
export const PAGE_DESCRIPTION =
  'Desk space Al Reem Island for freelancers and remote workers: hot desk AED 1,000, dedicated desk AED 1,150 or a day pass for AED 100 at Addax Tower.'
export const DATE_PUBLISHED = '2026-10-07'
export const DATE_MODIFIED = '2026-10-07'

export const BUSINESS = {
  name: 'Aegis Coworking - ADGM',
  phoneDisplay: '+971 50 392 6316',
  phoneTel: 'tel:+971503926316',
  whatsapp: 'https://wa.me/971503926316',
  email: 'contact@aegiscoworking.ae',
  street: 'Addax Tower, 3812, Al Reem Island, RT3',
  city: 'Abu Dhabi',
  country: 'United Arab Emirates',
  lat: 24.4989303,
  lng: 54.4031693,
  mapsUrl: 'https://www.google.com/maps/place/Aegis+Coworking+Space+ADGM/@24.4989303,54.4031693,17z',
  mapsEmbed: 'https://www.google.com/maps?q=Aegis+Coworking+Space+ADGM,+Addax+Tower,+Al+Reem+Island,+Abu+Dhabi&ll=24.4989303,54.4031693&z=16&output=embed',
  sameAs: [
    'https://www.linkedin.com/company/aegis-coworking/',
    'https://www.instagram.com/aegis.coworking/',
    'https://www.facebook.com/aegis.coworking',
  ],
}

// Card links open WhatsApp instead of other websites
export const WA_INFO = `${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like more details about your workspace.')}`

export const images = { coworkImg, deskImg, meetingImg, receptionImg, privateImg, boardroomImg }

export const sections = [
  { id: 'seat-map', label: 'Pick a desk' },
  { id: 'compare', label: 'Hot vs dedicated desk' },
  { id: 'plans', label: 'Desk plans & prices' },
  { id: 'day', label: 'A day at your desk' },
  { id: 'near-adgm', label: 'Inside ADGM' },
  { id: 'faq', label: 'FAQ' },
]

export const keywords = [
  'Desk space Al Reem Island', 'Desk space for rent Al Reem Island', 'Workspace Al Reem Island', 'Workspace for rent Al Reem Island',
  'Coworking space Al Reem Island', 'Coworking desk Al Reem Island', 'Coworking space Abu Dhabi', 'Coworking desk Abu Dhabi',
  'Dedicated desk Al Reem Island', 'Dedicated desk Abu Dhabi', 'Hot desk Al Reem Island', 'Hot desk Abu Dhabi', 'Shared desk Al Reem Island',
  'Shared workspace Al Reem Island', 'Flexible workspace Al Reem Island', 'Office desk Al Reem Island', 'Desk rental Al Reem Island',
  'Desk for rent Al Reem Island', 'Affordable coworking space Al Reem Island', 'Affordable desk space Abu Dhabi', 'Coworking space ADGM',
  'Coworking desk ADGM', 'Dedicated desk ADGM', 'Hot desk ADGM', 'Flexible workspace ADGM', 'Workspace near ADGM', 'Desk space near ADGM',
  'Coworking space near ADGM', 'Desk space Al Reem Island ADGM', 'Aegis Coworking',
]

// Desk types (features as published on aegiscoworking.ae/pricing)
export const deskTypes = {
  hot: {
    name: 'Hot desk', price: 'AED 1,000', unit: '/ month',
    line: 'Any open seat on the shared floor — or come in for a day pass at AED 100.',
    perks: ['Shared coworking floor', 'Fibre-optic internet', 'Meeting room credits', 'Coffee & tea'],
  },
  dedicated: {
    name: 'Dedicated desk', price: 'AED 1,150', unit: '/ month',
    line: 'The same desk every day, with a locker and an office address suitable for an ADGM licence.',
    perks: ['24/7 access', 'Dedicated locker', 'ADGM licence address', 'Extra meeting credits'],
  },
}

// Seat map (illustrative layout of the coworking floor)
export const seatZones = [
  { id: 'H', type: 'hot', label: 'Hot desk zone', count: 12 },
  { id: 'D', type: 'dedicated', label: 'Dedicated desks', count: 8 },
]

export const compareRows = [
  { k: 'Monthly price', hot: 'AED 1,000', ded: 'AED 1,150' },
  { k: 'Your seat', hot: 'Any open desk', ded: 'Same desk, every day' },
  { k: 'Access', hot: 'Shared floor', ded: '24/7 access' },
  { k: 'Storage', hot: '—', ded: 'Dedicated locker' },
  { k: 'ADGM licence address', hot: 'Not included', ded: 'Included' },
  { k: 'Meeting rooms', hot: 'Credits', ded: 'Extra credits' },
  { k: 'Best for', hot: 'Freelancers, no licence needed', ded: 'ADGM startups & solo founders' },
]

export const plans = [
  {
    id: 'day', tone: 'mint', name: 'Day pass', price: 'AED 100', unit: '/ day',
    who: 'Try the coworking space Abu Dhabi visitors drop into — no lease, no commitment.',
    perks: ['Full access to the shared coworking floor', 'High-speed WiFi', 'Premium coffee & tea', 'Print & scan access'],
    link: WA_INFO, cta: 'Book a day pass',
  },
  {
    id: 'hot', tone: 'lav', name: 'Hot desk', price: 'AED 1,000', unit: '/ month',
    who: 'A hot desk Al Reem Island freelancers use month to month — perfect when you don’t need a licence address.',
    perks: ['Full access to the shared coworking floor', 'Fast, reliable fibre-optic internet', 'Meeting room credits', 'Invitations to community events', 'Complimentary coffee and tea'],
    link: WA_INFO, cta: 'Get a hot desk',
  },
  {
    id: 'dedicated', tone: 'apricot', name: 'Dedicated desk', price: 'AED 1,150', unit: '/ month',
    who: 'A dedicated desk Al Reem Island founders keep — the lowest-cost desk that comes with an ADGM licence address.',
    perks: ['Office address suitable for an ADGM licence', '24/7 access', 'Dedicated lockers for storage', 'Extra meeting room credits every month', 'Everything in the hot desk plan'],
    note: 'One-time AED 1,200 due-diligence fee.',
    link: WA_INFO, cta: 'Reserve a dedicated desk',
  },
  {
    id: 'private', tone: 'butter', name: 'Private office', price: 'From AED 4,500', unit: '/ month',
    who: 'When the team outgrows a shared desk, move into a lockable office on the same floor.',
    perks: ['Office address suitable for an ADGM licence', 'Fully furnished, ready-to-use private office', 'Configurable layout to suit your team', 'All dedicated desk benefits'],
    link: WA_INFO, cta: 'See private offices',
  },
]

// "A day at your desk" — scroll-driven timeline
export const dayStops = [
  { t: '08:00', icon: 'sun', title: 'Badge in on Level 38', text: 'Take the lift up Addax Tower and pick a seat on the shared floor — or head straight to your dedicated desk.' },
  { t: '09:30', icon: 'wifi', title: 'Deep work, fast WiFi', text: 'Fibre-optic internet, quiet corners and big windows for the work that matters most.' },
  { t: '11:00', icon: 'video', title: 'Client call in a meeting room', text: 'Use your monthly meeting room credits for calls and client meetings.' },
  { t: '13:00', icon: 'coffee', title: 'Coffee & tea, on the house', text: 'Complimentary coffee and tea in the lounge — and a chance to meet other members.' },
  { t: '15:30', icon: 'print', title: 'Print, scan, sign', text: 'Print and scan your documents without leaving the floor.' },
  { t: '18:00', icon: 'people', title: 'Community events', text: 'Hot desk members get invitations to community events with other founders.' },
  { t: '23:00', icon: 'key', title: 'Still going? 24/7 access', text: 'Dedicated desk and private office members can work any hour, any day.' },
]

// Two genuine member reviews, word for word — a different pair on each site
export const testimonials = [
  { quote: 'We were comparing affordable coworking space in ADGM and found Aegis to be a very practical choice. The workspace feels professional while keeping costs affordable.', name: 'John Paints', role: 'Software Analyst' },
  { quote: 'For businesses looking for a low cost office in ADGM, Aegis provides flexible office space and a professional seating. The team made the setup process very easy.', name: 'Haseeb Awan', role: 'Entrepreneur' },
]

export const guideTags = ['All', 'Desks', 'Cost', 'Location', 'Setup']

export const guides = [
  { slug: 'adgm-flexi-desk-enough-solo-business', title: 'Is a Flexi Desk Enough for a Solo ADGM Business?', tag: 'Desks' },
  { slug: 'adgm-tech-startup-licence-dedicated-desk', title: 'ADGM Tech Startup Licence with a Dedicated Desk', tag: 'Desks' },
  { slug: 'adgm-dedicated-desk-visa-capacity-vs-seating', title: 'ADGM Dedicated Desk: Visa Capacity vs Seating', tag: 'Desks' },
  { slug: 'adgm-coworking-visa-quota-employees-per-desk', title: 'ADGM Coworking Visa Quota: Employees per Desk', tag: 'Setup' },
  { slug: 'adgm-coworking-space-cost-2026', title: 'ADGM Coworking Space Cost in 2026', tag: 'Cost' },
  { slug: 'day-pass-coworking-abu-dhabi-your-flexible-workday-solved', title: 'Day Pass Coworking in Abu Dhabi', tag: 'Cost' },
  { slug: 'affordable-coworking-al-reem-island-adgm', title: 'Affordable Coworking on Al Reem Island, ADGM', tag: 'Location' },
  { slug: 'is-al-reem-island-part-of-adgm', title: 'Is Al Reem Island Part of ADGM?', tag: 'Location' },
  { slug: 'flexible-workspace-adgm-startups', title: 'Flexible Workspace in ADGM for Startups', tag: 'Setup' },
  { slug: 'which-adgm-workspace-fits-you', title: 'Which ADGM Workspace Fits You?', tag: 'Setup' },
].map((g) => ({ ...g, url: `${MAIN_SITE}/blog/${g.slug}` }))

export const faqs = [
  {
    q: 'How much is desk space on Al Reem Island?',
    a: 'At Aegis Coworking in Addax Tower, a hot desk is AED 1,000 per month, a dedicated desk is AED 1,150 per month (plus a one-time AED 1,200 due-diligence fee) and a day pass is AED 100. ADGM government fees are separate.',
  },
  {
    q: 'What is the difference between a hot desk and a dedicated desk?',
    a: 'A hot desk lets you use any open seat on the shared coworking floor. A dedicated desk is your own permanent desk with 24/7 access, a locker, extra meeting room credits and an office address suitable for an ADGM licence.',
  },
  {
    q: 'Is Al Reem Island inside ADGM?',
    a: 'Yes. Addax Tower on Al Reem Island is within the Abu Dhabi Global Market (ADGM) jurisdiction, so a desk at Aegis is not just near ADGM — it is inside it.',
  },
  {
    q: 'Can I use a desk for my ADGM licence?',
    a: 'Yes, with a dedicated desk. It includes an office address suitable for an ADGM licence application. The hot desk is for working only and does not include a licence address.',
    link: { text: 'Tech start-up licence with a dedicated desk', url: 'https://www.aegiscoworking.ae/blog/adgm-tech-startup-licence-dedicated-desk' },
  },
  {
    q: 'Do desk members get 24/7 access?',
    a: 'Dedicated desk and private office members have 24/7 access. Tours run Monday to Friday, 9 AM–6 PM.',
  },
  {
    q: 'Is there a deposit or setup fee?',
    a: 'No deposit, no admin fees and no setup fees, with free registration. The dedicated desk has a one-time AED 1,200 due-diligence fee.',
  },
  {
    q: 'Can I try the coworking space before committing?',
    a: 'Yes. A day pass is AED 100 and includes the shared coworking floor, high-speed WiFi, coffee and tea, and print and scan access — no lease and no commitment.',
  },
  {
    q: 'Are meeting rooms included with a desk?',
    a: 'Hot desk members get meeting room credits, and dedicated desk members get extra meeting room credits every month. More hours can be booked when you need them.',
    link: { text: 'Meeting room or private office for client meetings?', url: 'https://www.aegiscoworking.ae/blog/adgm-meeting-room-vs-private-office-client-meetings' },
  },
  {
    q: 'Can I upgrade from a desk to a private office?',
    a: 'Yes. Private offices start from AED 4,500 per month on the same floor, so you can move from a hot desk or dedicated desk without changing buildings.',
  },
  {
    q: 'How do I book a desk or a tour?',
    a: 'Message us on WhatsApp or call +971 50 392 6316. Tours run Monday to Friday, 9 AM–6 PM, and we can send a video walkthrough if you are abroad.',
  },
  {
    q: 'Do I need a company or licence to rent a hot desk?',
    a: 'No. The hot desk has no licence requirement, so freelancers and remote workers can simply rent a seat. If you later need an ADGM licence address, switch to a dedicated desk.',
  },
  {
    q: 'Can remote workers employed by a company abroad use the desk space?',
    a: 'Yes — a hot desk or day pass is simply a place to work. Visa and employment questions are separate and depend on your own situation.',
  },
]
