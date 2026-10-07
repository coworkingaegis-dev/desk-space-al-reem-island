import { useEffect, useRef, useState } from 'react'
import { Reveal } from './Motion'
import Icon from './Icon'
import { sections, compareRows, plans, dayStops, images, MAIN_SITE, BUSINESS } from '../data/content'

const wa = (t) => `${BUSINESS.whatsapp}?text=${encodeURIComponent(t)}`
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

export function Intro() {
  return (
    <section className="intro sec" aria-labelledby="intro-title">
      <div className="wrap intro-grid">
        <Reveal variant="blur">
          <p className="kicker">In one minute</p>
          <h2 id="intro-title">What is desk space on Al Reem Island?</h2>
          <p className="answer">
            Desk space Al Reem Island companies rent is a seat in a shared, serviced coworking floor instead of a whole
            office. At Aegis Coworking on Level 38 of Addax Tower — inside ADGM — you can rent a hot desk for AED 1,000 a
            month, a dedicated desk for AED 1,150 or a day pass for AED 100, with WiFi, coffee and meeting rooms included.
          </p>
          <p>
            It is the simplest workspace Al Reem Island has for freelancers and small teams: desk space for rent Al Reem
            Island style, month to month, run by <a href={`${MAIN_SITE}/`}>Aegis Coworking</a>. Think of it as an
            office desk Al Reem Island founders can move into tomorrow — a shared desk Al Reem Island members use
            without fit-out costs, and an affordable coworking space Al Reem Island budgets can handle.
          </p>
        </Reveal>
        <nav className="toc" aria-label="On this page">
          <p>On this page</p>
          <ol>{sections.map((s, i) => <li key={s.id}><a href={`#${s.id}`}><i>{String(i + 1).padStart(2, '0')}</i>{s.label}<Icon name="arrow" size={14} /></a></li>)}</ol>
        </nav>
      </div>
    </section>
  )
}

// Drag-to-compare: hot desk (left) vs dedicated desk (right)
export function Compare() {
  const [pos, setPos] = useState(50)
  const lean = pos < 42 ? 'ded' : pos > 58 ? 'hot' : 'both'
  return (
    <section className="compare sec" id="compare" aria-labelledby="cmp-title">
      <div className="wrap">
        <div className="head head-center">
          <p className="kicker">Hot desk vs dedicated desk</p>
          <h2 id="cmp-title">Drag to compare your two desk options</h2>
          <p>A hot desk Abu Dhabi freelancers love, or a dedicated desk Abu Dhabi startups register with — slide across to see the difference.</p>
        </div>
        <Reveal className="cmp-stage" variant="zoom" style={{ '--pos': `${pos}%` }}>
          <img className="cmp-img cmp-right" src={images.deskImg} alt="Dedicated desk Al Reem Island at Aegis Coworking, Addax Tower" width="900" height="675" loading="lazy" decoding="async" />
          <div className="cmp-left">
            <img className="cmp-img" src={images.coworkImg} alt="Hot desk Al Reem Island on the shared coworking floor at Aegis" width="900" height="675" loading="lazy" decoding="async" />
          </div>
          <span className="cmp-tag cmp-tag-l">Hot desk · AED 1,000</span>
          <span className="cmp-tag cmp-tag-r">Dedicated desk · AED 1,150</span>
          <span className="cmp-handle" aria-hidden="true"><Icon name="drag" size={20} strokeWidth={2} /></span>
          <input className="cmp-range" type="range" min="0" max="100" value={pos} onChange={(e) => setPos(Number(e.target.value))} aria-label="Compare hot desk and dedicated desk photos" />
        </Reveal>

        <div className={`cmp-table lean-${lean}`} role="table" aria-label="Hot desk vs dedicated desk">
          <div className="ct-row ct-head" role="row">
            <span role="columnheader">Feature</span><span role="columnheader" className="ct-hot">Hot desk</span><span role="columnheader" className="ct-ded">Dedicated desk</span>
          </div>
          {compareRows.map((r, i) => (
            <Reveal className="ct-row" role="row" key={r.k} variant="up" delay={i * 50}>
              <span role="rowheader">{r.k}</span><span role="cell" className="ct-hot">{r.hot}</span><span role="cell" className="ct-ded">{r.ded}</span>
            </Reveal>
          ))}
        </div>
        <p className="fine center">Not sure? Read <a href={`${MAIN_SITE}/blog/adgm-flexi-desk-enough-solo-business`}>is a flexi desk enough for a solo business</a>.</p>
      </div>
    </section>
  )
}

// Sticky stacking plan cards that shrink as the next one slides over
export function Plans() {
  const listRef = useRef(null)
  useEffect(() => {
    const list = listRef.current
    if (!list || reduced()) return
    const cards = [...list.querySelectorAll('.plan')]
    let raf = 0
    const update = () => {
      raf = 0
      cards.forEach((c, i) => {
        const next = cards[i + 1]
        if (!next) return
        const a = c.getBoundingClientRect(), b = next.getBoundingClientRect()
        const p = Math.min(1, Math.max(0, 1 - (b.top - a.top) / a.height))
        c.style.setProperty('--shrink', p.toFixed(3))
      })
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <section className="plans sec" id="plans" aria-labelledby="plans-title">
      <div className="wrap plans-grid">
        <div className="plans-intro">
          <p className="kicker">Desk plans &amp; prices</p>
          <h2 id="plans-title">Desk rental Al Reem Island, from one day to every day</h2>
          <p>
            Four ways into the same coworking floor. Start with a day pass, take a desk for rent Al Reem Island
            style by the month, and upgrade when the team grows — it is flexible workspace Al Reem Island
            companies never have to move out of.
          </p>
          <p>
            Whether you want a coworking desk Abu Dhabi visitors book for a day or a workspace for rent Al Reem
            Island teams keep all year, it is one shared workspace Al Reem Island members share — affordable desk
            space Abu Dhabi professionals can actually budget for.
          </p>
          <p className="fine">No deposit, no admin or setup fees, free registration. Current offers on <a href={`${MAIN_SITE}/pricing`}>aegiscoworking.ae/pricing</a>.</p>
        </div>
        <ol className="plan-stack" ref={listRef}>
          {plans.map((p, i) => (
            <li key={p.id} className={`plan plan-${p.tone}`} style={{ '--k': i }}>
              <div className="plan-in">
                <div className="plan-top">
                  <span className="plan-n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.name}</h3>
                  <p className="plan-price"><b>{p.price}</b><span>{p.unit}</span></p>
                </div>
                <p className="plan-who">{p.who}</p>
                <ul className="plan-perks">{p.perks.map((x) => <li key={x}><Icon name="check" size={15} strokeWidth={2.4} />{x}</li>)}</ul>
                {p.note && <p className="plan-note">{p.note}</p>}
                <div className="plan-ctas">
                  <a className="btn btn-ink" href={wa(`Hi Aegis, I'm interested in a ${p.name.toLowerCase()} on Al Reem Island.`)} target="_blank" rel="noopener noreferrer">{p.cta}</a>
                  <a className="link-u" href={p.link}>Details<span className="sr-only"> about the {p.name.toLowerCase()}</span></a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

// Scroll-driven horizontal timeline: the sky shifts from morning to night
export function Day() {
  const secRef = useRef(null)
  const trackRef = useRef(null)
  useEffect(() => {
    const sec = secRef.current, track = trackRef.current
    if (!sec || !track) return
    const mq = window.matchMedia('(min-width: 901px)')
    let raf = 0
    const update = () => {
      raf = 0
      if (!mq.matches || reduced()) { sec.style.removeProperty('--p'); track.style.transform = ''; sec.classList.remove('is-pinned'); return }
      sec.classList.add('is-pinned')
      const r = sec.getBoundingClientRect()
      const total = sec.offsetHeight - window.innerHeight
      const p = Math.min(1, Math.max(0, -r.top / total))
      const dist = track.scrollWidth - track.parentElement.clientWidth
      track.style.transform = `translate3d(${(-dist * p).toFixed(1)}px,0,0)`
      sec.style.setProperty('--p', p.toFixed(3))
    }
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); cancelAnimationFrame(raf) }
  }, [])

  return (
    <section className="day" id="day" aria-labelledby="day-title" ref={secRef}>
      <div className="day-pin">
        <div className="day-sky" aria-hidden="true"><span className="day-orb" /></div>
        <div className="wrap day-head">
          <p className="kicker kicker-light">A day at your desk</p>
          <h2 id="day-title">From first coffee to late-night deadline</h2>
          <p>What a coworking desk Al Reem Island members rent actually feels like — scroll to move through the day.</p>
        </div>
        <div className="day-viewport">
          <ol className="day-track" ref={trackRef}>
            {dayStops.map((s) => (
              <li key={s.t} className="day-card">
                <span className="day-t">{s.t}</span>
                <span className="day-ic" aria-hidden="true"><Icon name={s.icon} size={22} strokeWidth={1.6} /></span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
            <li className="day-card day-end">
              <h3>Your desk is ready</h3>
              <p>Tours Monday–Friday, 9 AM–6 PM.</p>
              <a className="btn btn-butter" href={wa('Hi Aegis, I would like to visit the coworking space on Al Reem Island.')} target="_blank" rel="noopener noreferrer">Book a visit</a>
            </li>
          </ol>
        </div>
        <div className="wrap day-bar" aria-hidden="true"><span /></div>
      </div>
    </section>
  )
}
