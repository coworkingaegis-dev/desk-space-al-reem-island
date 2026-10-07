import { useMemo, useRef, useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { testimonials, guides, guideTags, faqs, images, BUSINESS, MAIN_SITE } from '../data/content'
import { PhoneLink } from './Navbar'

const initials = (n) => n.split(' ').map((p) => p[0]).slice(0, 2).join('')

function ReviewCard({ t, hidden }) {
  return (
    <li className="rv-card" aria-hidden={hidden || undefined}>
      <figure>
        <span className="rv-stars" aria-hidden="true">{'★★★★★'}</span>
        <blockquote><p>{t.quote}</p></blockquote>
        <figcaption>
          <span className="rv-av" aria-hidden="true">{initials(t.name)}</span>
          <span><b>{t.name}</b><small>{t.role}</small></span>
        </figcaption>
      </figure>
    </li>
  )
}

// Two columns of reviews drifting in opposite directions (pause on hover)
export function Reviews() {
  const colA = testimonials.filter((_, i) => i % 2 === 0)
  const colB = testimonials.filter((_, i) => i % 2 === 1)
  const col = (list, dir) => (
    <div className={`rv-col rv-${dir}`}>
      <ul className="rv-track">
        {list.map((t) => <ReviewCard key={t.name} t={t} />)}
        {list.map((t) => <ReviewCard key={`${t.name}-b`} t={t} hidden />)}
      </ul>
    </div>
  )
  return (
    <section className="reviews sec" id="reviews" aria-labelledby="rev-title">
      <div className="wrap rv-grid">
        <div className="rv-copy">
          <p className="kicker">Member reviews</p>
          <h2 id="rev-title">What members say about our coworking space in ADGM</h2>
          <p>Seven reviews, exactly as published on <a href={`${MAIN_SITE}/`}>aegiscoworking.ae</a>. Hover to pause the scroll.</p>
          <a className="btn btn-peri" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">Ask a member question</a>
        </div>
        <div className="rv-cols">
          {col(colA, 'up')}
          {col(colB, 'down')}
        </div>
      </div>
    </section>
  )
}

export function NearADGM() {
  const [mapOn, setMapOn] = useState(false)
  return (
    <section className="near sec" id="near-adgm" aria-labelledby="near-title">
      <div className="wrap near-grid">
        <Reveal variant="blur">
          <p className="kicker">Inside ADGM</p>
          <h2 id="near-title">Looking for a workspace near ADGM? Work inside it.</h2>
          <p className="near-sub">
            Many people search for desk space near ADGM or a coworking space near ADGM — but Addax Tower on Al Reem
            Island sits inside the Abu Dhabi Global Market jurisdiction. That makes Aegis a coworking space ADGM
            members can name as their workplace, with a coworking desk ADGM freelancers book by the month, a dedicated
            desk ADGM founders use for their licence address, and a hot desk ADGM visitors take for a day. Flexible
            workspace ADGM companies need, on Al Reem Island: desk space Al Reem Island ADGM teams can grow from.
          </p>
          <dl className="nap">
            <div><dt>Address</dt><dd>{BUSINESS.name}, {BUSINESS.street}, {BUSINESS.city}, {BUSINESS.country}</dd></div>
            <div><dt>Phone</dt><dd><PhoneLink>{BUSINESS.phoneDisplay}</PhoneLink></dd></div>
            <div><dt>Email</dt><dd><a href={`mailto:${BUSINESS.email}`}>{BUSINESS.email}</a></dd></div>
            <div><dt>Tours</dt><dd>Monday–Friday, 9 AM–6 PM · 24/7 access for dedicated desks</dd></div>
          </dl>
          <div className="near-ctas">
            <a className="btn btn-peri" href={BUSINESS.mapsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>
            <a className="link-u" href={`${MAIN_SITE}/blog/is-al-reem-island-part-of-adgm`}>Is Al Reem Island part of ADGM?</a>
          </div>
        </Reveal>
        <div className="near-map">
          {mapOn ? (
            <iframe title="Map of Aegis Coworking desk space, Addax Tower, Al Reem Island, ADGM" src={BUSINESS.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          ) : (
            <button type="button" className="map-facade" onClick={() => setMapOn(true)}>
              <img src={images.receptionImg} alt="" width="900" height="675" loading="lazy" decoding="async" />
              <span className="sonar" aria-hidden="true"><i /><i /><i /><b><Icon name="pin" size={22} strokeWidth={1.8} /></b></span>
              <span className="map-tag"><b>Addax Tower, Level 38</b><small>Al Reem Island · ADGM</small></span>
              <span className="map-load">Load interactive map</span>
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

export function Guides() {
  const [tag, setTag] = useState('All')
  const list = tag === 'All' ? guides : guides.filter((g) => g.tag === tag)
  return (
    <section className="guides sec" id="guides" aria-labelledby="guides-title">
      <div className="wrap">
        <div className="head head-row">
          <div>
            <p className="kicker">From the Aegis blog</p>
            <h2 id="guides-title">Guides before you rent a desk</h2>
          </div>
          <p>Costs, visas, licences and location — filter by topic. <a href={`${MAIN_SITE}/blogs`}>All articles</a></p>
        </div>
        <div className="g-filter" role="group" aria-label="Filter guides by topic">
          {guideTags.map((t) => (
            <button key={t} type="button" aria-pressed={tag === t} className={tag === t ? 'on' : ''} onClick={() => setTag(t)}>
              {t}<span>{t === 'All' ? guides.length : guides.filter((g) => g.tag === t).length}</span>
            </button>
          ))}
        </div>
        <ul className="g-grid" key={tag}>
          {list.map((g, i) => (
            <li key={g.slug} className="g-item" style={{ '--i': i }}>
              <a href={g.url} className={`g-card g-${g.tag.toLowerCase()}`}>
                <span className="g-tag">{g.tag}</span>
                <span className="g-title">{g.title}</span>
                <span className="g-go" aria-hidden="true"><Icon name="arrow" size={16} /></span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
function Mark({ text, q }) {
  if (!q) return text
  const parts = text.split(new RegExp(`(${esc(q)})`, 'ig'))
  return parts.map((p, i) => (p.toLowerCase() === q.toLowerCase() ? <mark key={i}>{p}</mark> : p))
}

// FAQ with live search
export function FAQ() {
  const [q, setQ] = useState('')
  const query = q.trim()
  const shown = useMemo(() => faqs.map((f) => !query || `${f.q} ${f.a}`.toLowerCase().includes(query.toLowerCase())), [query])
  const count = shown.filter(Boolean).length
  return (
    <section className="faq sec" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-wrap">
        <div className="head head-center">
          <p className="kicker">FAQ</p>
          <h2 id="faq-title">Desk space questions, answered</h2>
          <p>Type a word — price, licence, 24/7 — and the answers filter as you go.</p>
        </div>
        <div className="faq-search">
          <Icon name="search" size={18} strokeWidth={1.8} />
          <label htmlFor="faq-q" className="sr-only">Search the FAQ</label>
          <input id="faq-q" type="search" placeholder="Search questions…" value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off" />
          <span className="faq-count" aria-live="polite">{count} of {faqs.length}</span>
        </div>
        <div className="faq-list">
          {faqs.map((f, i) => (
            <details key={f.q} hidden={!shown[i]} open={query || i === 0 ? true : undefined}>
              <summary><h3><Mark text={f.q} q={query} /></h3><span className="fq-ic" aria-hidden="true"><Icon name="plus" size={16} strokeWidth={2} /></span></summary>
              <div className="fq-body">
                <p><Mark text={f.a} q={query} /></p>
                {f.link && <p><a href={f.link.url}>{f.link.text}</a></p>}
              </div>
            </details>
          ))}
          {count === 0 && <p className="faq-empty">No match — <a href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer">ask us on WhatsApp</a>.</p>}
        </div>
      </div>
    </section>
  )
}

export function FinalCTA() {
  const ref = useRef(null)
  const move = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - r.left) / r.width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - r.top) / r.height) * 100}%`)
  }
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="wrap">
        <div className="final-card" ref={ref} onPointerMove={move}>
          <div className="final-float" aria-hidden="true">
            <span><Icon name="chair" size={22} /></span><span><Icon name="coffee" size={22} /></span><span><Icon name="wifi" size={22} /></span><span><Icon name="key" size={22} /></span>
          </div>
          <p className="kicker kicker-light">Coworking space Al Reem Island</p>
          <h2 id="final-title">Your desk on Level 38 is one message away</h2>
          <p>Book a visit to the coworking space, or get a video walkthrough on WhatsApp today.</p>
          <div className="final-actions">
            <a className="btn btn-butter" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to book a desk on Al Reem Island.')}`} target="_blank" rel="noopener noreferrer">Book my desk</a>
            <PhoneLink className="btn btn-outline-light"><Icon name="phone" size={16} />{BUSINESS.phoneDisplay}</PhoneLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export function WhatsAppFab() {
  return (
    <a className="wa-fab" href={BUSINESS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Chat with Aegis Coworking on WhatsApp">
      <svg width="26" height="26" viewBox="0 0 32 32" aria-hidden="true">
        <path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.7c-2 0-4-.5-5.7-1.6l-.4-.2-3.9 1 1-3.8-.3-.4A10.7 10.7 0 1 1 16 26.7zm5.9-8c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.8 8.8 0 0 1-4.4-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.7s1.2 3.2 1.3 3.4c.2.2 2.3 3.5 5.5 4.9 2 .9 2.8.9 3.8.8.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
      </svg>
    </a>
  )
}
