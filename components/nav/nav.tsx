'use client'

import React, { useEffect, useRef, useState } from 'react'
import { useTheme } from 'next-themes'
import { Icon, ICONS, useIsMobile } from '../portfolio/primitives'

const LINKS = ['home', 'work', 'experience', 'services', 'contact']
const SECTION_IDS = ['home', 'work', 'experience', 'skills', 'services', 'testimonials', 'contact']

const DROPLETS = [
  { dx: '6px', dy: '-16px', d: '0.74s', s: 5 },
  { dx: '14px', dy: '-11px', d: '0.8s', s: 4 },
  { dx: '-4px', dy: '-13px', d: '0.78s', s: 3.5 },
  { dx: '10px', dy: '-19px', d: '0.86s', s: 3 },
]

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState('home')
  const [waving, setWaving] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobile = useIsMobile(720)
  const firstThemeRender = useRef(true)

  useEffect(() => { setMounted(true) }, [])

  // Play the wave-break animation whenever the theme flips (but not on first mount)
  useEffect(() => {
    if (!mounted) return
    if (firstThemeRender.current) { firstThemeRender.current = false; return }
    setWaving(true)
    const t = setTimeout(() => setWaving(false), 1900)
    return () => clearTimeout(t)
  }, [resolvedTheme, mounted])

  // Close the mobile menu when we grow back to desktop
  useEffect(() => { if (!isMobile) setMenuOpen(false) }, [isMobile])

  useEffect(() => {
    const onScroll = () => {
      let cur = 'home'
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) cur = id
      }
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const onNav = (e: React.MouseEvent, id: string) => {
    const el = document.getElementById(id)
    if (!el) return // allow default navigation (anchor on another page)
    e.preventDefault()
    const y = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top: id === 'home' ? 0 : y, behavior: 'smooth' })
  }
  const handleNav = (e: React.MouseEvent, id: string) => { setMenuOpen(false); onNav(e, id) }

  const isDark = mounted && resolvedTheme === 'dark'

  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 20, backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', background: 'color-mix(in srgb, var(--bg) 78%, transparent)', borderBottom: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', padding: '0.85rem var(--page-gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="#home" onClick={(e) => onNav(e, 'home')} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', textDecoration: 'none' }}>
          <span style={{ position: 'relative', display: 'inline-flex', alignItems: 'center', gap: '0.55rem' }}>
            <span style={{ width: 30, height: 30, display: 'inline-flex', color: 'var(--text-strong)', animation: waving ? 'wm-wave-surge 1.5s cubic-bezier(0.45, 0, 0.2, 1) both' : 'none' }}><Icon src="/wave-logo.svg" /></span>
            {waving && DROPLETS.map((p, i) => (
              <span key={i} aria-hidden="true" style={{ ['--dx' as any]: p.dx, ['--dy' as any]: p.dy, position: 'absolute', left: 26, top: 6, width: p.s, height: p.s, borderRadius: '50%', background: 'var(--accent)', opacity: 0, pointerEvents: 'none', animation: `wm-droplet 0.75s var(--ease-out) ${p.d} both` }} />
            ))}
            <span style={{ position: 'relative', fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)' as unknown as number, fontSize: 'var(--text-lg)', letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>
              {['w', 'a', 'v', 'e', '.'].map((ch, i) => (
                <span key={i} style={{ display: 'inline-block', color: ch === '.' ? 'var(--accent)' : 'inherit', animation: waving ? `wm-shore-hit 0.7s var(--ease-soft) ${780 + i * 70}ms both` : 'none' }}>{ch}</span>
              ))}
              {waving && <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: -3, height: 2, borderRadius: 2, background: 'var(--accent)', transformOrigin: 'left center', opacity: 0, animation: 'wm-foam 0.9s var(--ease-out) 0.8s both' }} />}
            </span>
          </span>
        </a>
        <nav style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          {!isMobile && LINKS.map((l) => (
            <a key={l} href={`#${l}`} onClick={(e) => onNav(e, l)}
              style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', textDecoration: 'none', padding: '0.4rem 0.7rem', borderRadius: 'var(--radius-sm)', color: active === l ? 'var(--accent)' : 'var(--text-muted)', transition: 'color var(--dur)' }}>
              {l}
            </a>
          ))}
          <button
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            aria-label="Toggle theme"
            style={{ marginLeft: isMobile ? 0 : '0.4rem', width: 36, height: 36, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', background: 'transparent', borderRadius: 'var(--radius-md)', cursor: 'pointer', color: 'var(--text-body)' }}
          >
            <span style={{ width: 17, height: 17, display: 'inline-flex' }}>
              {mounted && <Icon src={isDark ? ICONS.sun : ICONS.moon} />}
            </span>
          </button>
          {isMobile && (
            <button onClick={() => setMenuOpen((o) => !o)} aria-label="Toggle menu" aria-expanded={menuOpen} style={{ marginLeft: '0.4rem', width: 36, height: 36, position: 'relative', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', background: menuOpen ? 'var(--surface-sunken)' : 'transparent', borderRadius: 'var(--radius-md)', cursor: 'pointer' }}>
              <span style={{ position: 'relative', width: 16, height: 12, display: 'inline-block' }}>
                <span style={{ position: 'absolute', left: 0, right: 0, height: 2, borderRadius: 2, background: 'var(--text-strong)', top: menuOpen ? 5 : 0, transform: menuOpen ? 'rotate(45deg)' : 'none', transition: 'top var(--dur), transform var(--dur)' }} />
                <span style={{ position: 'absolute', left: 0, right: 0, height: 2, borderRadius: 2, background: 'var(--text-strong)', top: 5, opacity: menuOpen ? 0 : 1, transition: 'opacity var(--dur)' }} />
                <span style={{ position: 'absolute', left: 0, right: 0, height: 2, borderRadius: 2, background: 'var(--text-strong)', top: menuOpen ? 5 : 10, transform: menuOpen ? 'rotate(-45deg)' : 'none', transition: 'top var(--dur), transform var(--dur)' }} />
              </span>
            </button>
          )}
        </nav>
      </div>
      {isMobile && (
        <div style={{ overflow: 'hidden', maxHeight: menuOpen ? 320 : 0, transition: 'max-height var(--dur-slow) var(--ease-soft)', borderTop: menuOpen ? '1px solid var(--border)' : '1px solid transparent' }}>
          <nav style={{ display: 'flex', flexDirection: 'column', padding: '0.5rem var(--page-gutter) 1rem' }}>
            {LINKS.map((l) => (
              <a key={l} href={`#${l}`} onClick={(e) => handleNav(e, l)}
                style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-base)', textDecoration: 'none', padding: '0.7rem 0.2rem', borderBottom: '1px solid var(--border)', color: active === l ? 'var(--accent)' : 'var(--text-body)' }}>
                {l}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
