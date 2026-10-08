import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import { Intro, Compare, Plans, Day } from '../components/Sections'
import { Reviews, NearADGM, FAQ, FinalCTA, WhatsAppFab } from '../components/More'
import {
  SITE_URL, MAIN_SITE, PAGE_TITLE, PAGE_DESCRIPTION, DATE_PUBLISHED, DATE_MODIFIED,
  BUSINESS, faqs, guides, keywords,
} from '../data/content'

const OG_IMAGE = `${SITE_URL}/og-image.jpg`
const BUSINESS_ID = `${MAIN_SITE}/#business`
const priceValidUntil = `${new Date().getFullYear()}-12-31`

const offer = (name, url, description, price) => ({
  '@type': 'Offer', name, url, description,
  ...(price ? {
    price, priceCurrency: 'AED', priceValidUntil,
    priceSpecification: { '@type': 'UnitPriceSpecification', price, priceCurrency: 'AED', unitText: 'MONTH', unitCode: 'MON' },
  } : {}),
  availability: 'https://schema.org/InStock',
  seller: { '@id': BUSINESS_ID },
  itemOffered: { '@type': 'Service', name },
})

const schemaGraph = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`,
      name: 'Desk Space Al Reem Island — Aegis Coworking', inLanguage: 'en-AE',
      publisher: { '@id': `${MAIN_SITE}/#organization` },
    },
    {
      '@type': 'WebPage', '@id': `${SITE_URL}/#webpage`, url: `${SITE_URL}/`,
      name: PAGE_TITLE, description: PAGE_DESCRIPTION, inLanguage: 'en-AE',
      isPartOf: { '@id': `${SITE_URL}/#website` }, about: { '@id': BUSINESS_ID },
      mainEntity: { '@id': `${SITE_URL}/#desk-space` },
      primaryImageOfPage: OG_IMAGE, datePublished: DATE_PUBLISHED, dateModified: DATE_MODIFIED,
      breadcrumb: { '@id': `${SITE_URL}/#breadcrumb` },
      keywords: keywords.join(', '),
      speakable: { '@type': 'SpeakableSpecification', cssSelector: ['#hero-title', '.answer'] },
    },
    {
      '@type': 'BreadcrumbList', '@id': `${SITE_URL}/#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Aegis Coworking', item: `${MAIN_SITE}/` },
        { '@type': 'ListItem', position: 2, name: 'Office Space', item: `${MAIN_SITE}/office-space` },
        { '@type': 'ListItem', position: 3, name: 'Desk Space Al Reem Island', item: `${SITE_URL}/` },
      ],
    },
    {
      '@type': 'Organization', '@id': `${MAIN_SITE}/#organization`, name: BUSINESS.name,
      url: MAIN_SITE, logo: `${MAIN_SITE}/logo.png`, sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'LocalBusiness', '@id': BUSINESS_ID, name: BUSINESS.name, alternateName: 'Aegis Coworking',
      description: 'Coworking space and desk space provider on Al Reem Island, inside ADGM, at Addax Tower — hot desks, dedicated desks, day passes, private offices and meeting rooms.',
      url: MAIN_SITE, logo: `${MAIN_SITE}/logo.png`, image: [OG_IMAGE], telephone: '+971503926316',
      email: BUSINESS.email, priceRange: 'AED 100 – AED 4,500', currenciesAccepted: 'AED',
      address: { '@type': 'PostalAddress', streetAddress: BUSINESS.street, addressLocality: 'Abu Dhabi', addressRegion: 'Abu Dhabi', addressCountry: 'AE' },
      geo: { '@type': 'GeoCoordinates', latitude: BUSINESS.lat, longitude: BUSINESS.lng },
      hasMap: BUSINESS.mapsUrl,
      openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], opens: '00:00', closes: '23:59' }],
      areaServed: [{ '@type': 'Place', name: 'Abu Dhabi Global Market (ADGM)' }, { '@type': 'Place', name: 'Al Reem Island' }, { '@type': 'City', name: 'Abu Dhabi' }, { '@type': 'Country', name: 'United Arab Emirates' }],
      sameAs: BUSINESS.sameAs,
    },
    {
      '@type': 'Service', '@id': `${SITE_URL}/#desk-space`, name: 'Desk Space on Al Reem Island',
      alternateName: ['Desk space Al Reem Island', 'Coworking space Al Reem Island', 'Hot desk Al Reem Island', 'Dedicated desk Al Reem Island', 'Coworking space ADGM', 'Coworking desk Abu Dhabi'],
      serviceType: 'Coworking desk rental', provider: { '@id': BUSINESS_ID },
      areaServed: { '@type': 'Place', name: 'Al Reem Island, Abu Dhabi Global Market (ADGM), Abu Dhabi' },
      description: 'Hot desks, dedicated desks and day passes in the coworking space on Level 38 of Addax Tower, Al Reem Island, inside ADGM.',
      offers: offer('Hot desk', `${SITE_URL}/#plans`, 'Any open desk on the shared coworking floor.', 1000),
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'Desk space on Al Reem Island',
        itemListElement: [
          offer('Hot desk', `${SITE_URL}/#plans`, 'Any open desk on the shared coworking floor, meeting room credits, coffee & tea.', 1000),
          offer('Dedicated desk', `${SITE_URL}/#plans`, 'Own desk with 24/7 access, locker and an office address suitable for an ADGM licence.', 1150),
          { ...offer('Day pass', `${SITE_URL}/#plans`, 'One day on the shared coworking floor.'), price: 100, priceCurrency: 'AED', priceSpecification: { '@type': 'UnitPriceSpecification', price: 100, priceCurrency: 'AED', unitText: 'DAY', unitCode: 'DAY' } },
          offer('Private office', `${SITE_URL}/#plans`, 'Furnished private office, from price.', 4500),
        ],
      },
    },
    {
      '@type': 'FAQPage', '@id': `${SITE_URL}/#faq`,
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
}

function DeskSpacePage() {
  return (
    <>
      <Helmet>
        <html lang="en-AE" />
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="en-ae" href={`${SITE_URL}/`} />
        <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
        <meta name="geo.region" content="AE-AZ" />
        <meta name="geo.placename" content="Al Reem Island, Abu Dhabi" />
        <meta name="geo.position" content={`${BUSINESS.lat};${BUSINESS.lng}`} />
        <meta name="ICBM" content={`${BUSINESS.lat}, ${BUSINESS.lng}`} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Aegis Coworking" />
        <meta property="og:locale" content="en_AE" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta property="og:image:alt" content="Desk space on Al Reem Island at Aegis Coworking, Addax Tower, ADGM" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(schemaGraph)}</script>
      </Helmet>

      <a className="skip-link" href="#main">Skip to content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <Intro />
        <Compare />
        <Plans />
        <Day />
        <Reviews />
        <NearADGM />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}

export default DeskSpacePage
