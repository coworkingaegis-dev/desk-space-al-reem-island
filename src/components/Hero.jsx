import { useRef, useState } from 'react'
import Icon from './Icon'
import { BUSINESS, deskTypes, seatZones } from '../data/content'

const seats = seatZones.flatMap((z) =>
  Array.from({ length: z.count }, (_, i) => ({ id: `${z.id}-${String(i + 1).padStart(2, '0')}`, type: z.type, zone: z.id }))
)
const byZone = (zone) => seats.filter((s) => s.zone === zone)

export default function Hero() {
  const [sel, setSel] = useState('D-03')
  const [pulse, setPulse] = useState(0)
  const mapRef = useRef(null)
  const seat = seats.find((s) => s.id === sel)
  const t = deskTypes[seat.type]

  const pick = (id) => { setSel(id); setPulse((p) => p + 1) }
  const spot = (e) => {
    const el = mapRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    el.style.setProperty('--sx', `${e.clientX - r.left}px`)
    el.style.setProperty('--sy', `${e.clientY - r.top}px`)
  }
  const waText = `Hi Aegis, I'd like a ${t.name.toLowerCase()} on Al Reem Island (seat ${seat.id} on your map).`

  const seatEl = (s, i) => (
    <li key={s.id} style={{ '--i': i }}>
      <button type="button" className={`seat seat-${s.type} ${s.id === sel ? 'on' : ''}`} aria-pressed={s.id === sel}
        onClick={() => pick(s.id)}>
        <span className="sr-only">Seat {s.id}, {deskTypes[s.type].name.toLowerCase()}</span>
        <span className="seat-chair" aria-hidden="true" />
      </button>
    </li>
  )

  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-blobs" aria-hidden="true"><i /><i /><i /></div>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="hero-badge hl" style={{ '--d': 0 }}><span>ADGM</span>Level 38, Addax Tower · Al Reem Island</p>
          <h1 id="hero-title" className="hero-title">
            <span className="hl" style={{ '--d': 1 }}>Desk space on</span>{' '}
            <span className="hl" style={{ '--d': 2 }}>Al Reem Island,</span>{' '}
            <span className="hl hero-accent" style={{ '--d': 3 }}>
              pick your seat
              <svg className="squiggle" viewBox="0 0 300 24" preserveAspectRatio="none" aria-hidden="true"><path d="M3 15 C 40 3, 70 23, 110 12 S 180 3, 220 13 S 280 20, 297 8" /></svg>
            </span>
          </h1>
          <p className="hero-lead hl" style={{ '--d': 4 }}>
            For freelancers and remote workers: hot desks from <strong>AED 1,000</strong>, dedicated desks at{" "}
            <strong>AED 1,150</strong> and day passes at <strong>AED 100</strong> — a coworking space Al Reem Island
            freelancers share on Level 38 of Addax Tower, with no licence needed for a hot desk.
          </p>
          <div className="hero-ctas hl" style={{ '--d': 5 }}>
            <a className="btn btn-peri" href={`${BUSINESS.whatsapp}?text=${encodeURIComponent('Hi Aegis, I would like to reserve a desk on Al Reem Island.')}`} target="_blank" rel="noopener noreferrer">Reserve a desk <Icon name="arrow" size={16} /></a>
            <a className="btn btn-soft" href="#compare">Compare desks</a>
          </div>
          <ul className="hero-chips hl" style={{ '--d': 6 }}>
            <li><Icon name="shield" size={15} strokeWidth={1.8} />No deposit</li>
            <li><Icon name="key" size={15} strokeWidth={1.8} />24/7 for dedicated desks</li>
            <li><Icon name="pin" size={15} strokeWidth={1.8} />Inside ADGM</li>
          </ul>
        </div>

        <div className="seatmap-card hl" style={{ '--d': 3 }} id="seat-map">
          <div className="sm-head">
            <p><b>Coworking floor</b><small>Tap a desk to preview it</small></p>
            <ul className="sm-legend" aria-label="Legend">
              <li><i className="lg-hot" />Hot desk</li>
              <li><i className="lg-ded" />Dedicated</li>
            </ul>
          </div>
          <div className="sm-floor" ref={mapRef} onPointerMove={spot}>
            <span className="sm-window" aria-hidden="true">Windows</span>
            <div className="sm-zone sm-zone-h">
              <p className="sm-zlabel">Hot desk zone</p>
              <ul className="sm-grid sm-grid-h">{byZone('H').map((s, i) => seatEl(s, i))}</ul>
            </div>
            <div className="sm-side" aria-hidden="true">
              <span className="sm-room">Meeting room</span>
              <span className="sm-room sm-lounge">Lounge &amp; coffee</span>
            </div>
            <div className="sm-zone sm-zone-d">
              <p className="sm-zlabel">Dedicated desks</p>
              <ul className="sm-grid sm-grid-d">{byZone('D').map((s, i) => seatEl(s, i + 12))}</ul>
            </div>
          </div>

          <div className={`ticket ticket-${seat.type}`} key={pulse} aria-live="polite">
            <div className="tk-main">
              <p className="tk-k">Seat <b>{seat.id}</b></p>
              <p className="tk-name">{t.name}</p>
              <p className="tk-line">{t.line}</p>
            </div>
            <div className="tk-stub">
              <p className="tk-price">{t.price}<small>{t.unit}</small></p>
              <a href={`${BUSINESS.whatsapp}?text=${encodeURIComponent(waText)}`} target="_blank" rel="noopener noreferrer" className="tk-go">Reserve <Icon name="arrow" size={14} /></a>
            </div>
          </div>
          <p className="sm-note">Illustrative layout of the Aegis coworking floor.</p>
        </div>
      </div>
    </section>
  )
}
