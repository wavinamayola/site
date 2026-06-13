'use client'

/* Wave Mayola — UI primitives, ported from the design system.
   Styling is driven entirely by the CSS custom properties in
   app/globals.css so the components flip cleanly between themes. */

import React, { useEffect, useRef, useState } from 'react'

type CSS = React.CSSProperties

/* ---------------- useIsMobile ---------------- */
export function useIsMobile(breakpoint = 720) {
  // Start false so server and first client render agree (avoids hydration
  // mismatch), then sync to the real viewport after mount.
  const [mobile, setMobile] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`)
    const onChange = () => setMobile(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [breakpoint])
  return mobile
}

/* ---------------- Button ---------------- */
type ButtonProps = {
  children?: React.ReactNode
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  target?: string
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  disabled?: boolean
  onClick?: (e: React.MouseEvent) => void
  type?: 'button' | 'submit' | 'reset'
  style?: CSS
}

export function Button({
  children, variant = 'primary', size = 'md', href, iconLeft, iconRight,
  disabled, onClick, type = 'button', style = {}, ...rest
}: ButtonProps & Record<string, unknown>) {
  const [hover, setHover] = useState(false)
  const [active, setActive] = useState(false)
  const sizes: Record<string, CSS & { gap: string; radius: string }> = {
    sm: { fontSize: '0.8125rem', padding: '0.4rem 0.85rem', gap: '0.4rem', radius: 'var(--radius-sm)' },
    md: { fontSize: '0.9375rem', padding: '0.6rem 1.15rem', gap: '0.5rem', radius: 'var(--radius-md)' },
    lg: { fontSize: '1rem', padding: '0.8rem 1.5rem', gap: '0.6rem', radius: 'var(--radius-md)' },
  }
  const s = sizes[size] || sizes.md
  const palettes: Record<string, { base: CSS; hover: CSS }> = {
    primary: { base: { background: 'var(--accent-bright)', color: 'var(--text-on-accent)', border: '1px solid transparent' }, hover: { background: 'var(--accent-hover)' } },
    secondary: { base: { background: 'transparent', color: 'var(--text-strong)', border: '1px solid var(--border-strong)' }, hover: { background: 'var(--surface-sunken)', borderColor: 'var(--text-faint)' } },
    ghost: { base: { background: 'transparent', color: 'var(--accent)', border: '1px solid transparent' }, hover: { background: 'var(--accent-soft)' } },
  }
  const p = palettes[variant] || palettes.primary
  const styles: CSS = {
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: s.gap,
    fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-medium)' as unknown as number, fontSize: s.fontSize, lineHeight: 1,
    letterSpacing: 'var(--tracking-tight)', padding: s.padding, borderRadius: s.radius,
    cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1, textDecoration: 'none', whiteSpace: 'nowrap',
    transition: 'background var(--dur) var(--ease-soft), border-color var(--dur) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)',
    transform: active && !disabled ? 'translateY(1px)' : 'none', ...p.base, ...(hover && !disabled ? p.hover : {}), ...style,
  }
  const content = (<>{iconLeft && <span style={{ display: 'inline-flex', width: '1.05em', height: '1.05em' }}>{iconLeft}</span>}{children}{iconRight && <span style={{ display: 'inline-flex', width: '1.05em', height: '1.05em' }}>{iconRight}</span>}</>)
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false) },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
  }
  if (href && !disabled) return <a href={href} style={styles} onClick={onClick} {...handlers} {...rest}>{content}</a>
  return <button type={type} style={styles} disabled={disabled} onClick={onClick} {...handlers} {...rest}>{content}</button>
}

/* ---------------- Tag ---------------- */
export function Tag({ children, variant = 'default', style = {} }: { children: React.ReactNode; variant?: 'default' | 'accent' | 'outline'; style?: CSS }) {
  const palettes: Record<string, CSS> = {
    default: { background: 'var(--surface-sunken)', color: 'var(--text-body)', border: '1px solid transparent' },
    accent: { background: 'var(--accent-soft)', color: 'var(--accent)', border: '1px solid transparent' },
    outline: { background: 'transparent', color: 'var(--text-muted)', border: '1px solid var(--border)' },
  }
  const p = palettes[variant] || palettes.default
  return <span style={{ display: 'inline-flex', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', lineHeight: 1, letterSpacing: '0.01em', padding: '0.4rem 0.6rem', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', ...p, ...style }}>{children}</span>
}

/* ---------------- Eyebrow ---------------- */
export function Eyebrow({ children, index, style = {} }: { children: React.ReactNode; index?: string; style?: CSS }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase', color: 'var(--accent)', ...style }}>
      {index != null && <span style={{ color: 'var(--text-faint)' }}>{index}</span>}
      <span style={{ width: '1.5rem', height: '1px', background: 'var(--border-strong)' }} />
      <span style={{ color: 'var(--text-muted)' }}>{children}</span>
    </div>
  )
}

/* ---------------- Icon (CSS mask so SVG inherits currentColor) ---------------- */
export function Icon({ src, style = {} }: { src: string; style?: CSS }) {
  return <span style={{ display: 'inline-block', width: '100%', height: '100%', background: 'currentColor', WebkitMaskImage: `url(${src})`, maskImage: `url(${src})`, WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat', WebkitMaskPosition: 'center', maskPosition: 'center', WebkitMaskSize: 'contain', maskSize: 'contain', ...style }} />
}

/* ---------------- SocialLink ---------------- */
export function SocialLink({ href, label, children, size = 40, style = {} }: { href: string; label: string; children: React.ReactNode; size?: number; style?: CSS }) {
  const [hover, setHover] = useState(false)
  return (
    <a href={href} aria-label={label} title={label} target={href && href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: size, height: size, borderRadius: 'var(--radius-md)', color: hover ? 'var(--accent)' : 'var(--text-muted)', background: hover ? 'var(--accent-soft)' : 'transparent', transition: 'color var(--dur) var(--ease-soft), background var(--dur) var(--ease-soft), transform var(--dur-fast) var(--ease-soft)', transform: hover ? 'translateY(-2px)' : 'none', ...style }}>
      <span style={{ display: 'inline-flex', width: size * 0.5, height: size * 0.5 }}>{children}</span>
    </a>
  )
}

/* ---------------- ProjectCard ---------------- */
type Status = 'live' | 'wip' | 'coming-soon'
export function ProjectCard({ title, description, tags = [], year, href, status = 'live', index, style = {} }: {
  title: string; description?: string; tags?: string[]; year?: string; href?: string; status?: Status; index?: string; style?: CSS
}) {
  const [hover, setHover] = useState(false)
  const isPlaceholder = status === 'coming-soon'
  const statusMeta: Record<string, { label: string; color: string }> = {
    live: { label: 'Live', color: 'var(--term-dot-green)' },
    wip: { label: 'In progress', color: 'var(--term-dot-amber)' },
    'coming-soon': { label: 'Coming soon', color: 'var(--text-faint)' },
  }
  const meta = statusMeta[status] || statusMeta.live
  const Wrapper: any = href && !isPlaceholder ? 'a' : 'div'
  return (
    <Wrapper href={href && !isPlaceholder ? href : undefined} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{ display: 'block', position: 'relative', textDecoration: 'none', background: 'var(--surface-card)', border: `1px solid ${hover && !isPlaceholder ? 'var(--border-strong)' : 'var(--border)'}`, borderRadius: 'var(--radius-lg)', padding: '1.5rem 1.6rem', transition: 'border-color var(--dur) var(--ease-soft), transform var(--dur) var(--ease-soft), box-shadow var(--dur) var(--ease-soft)', transform: hover && !isPlaceholder ? 'translateY(-3px)' : 'none', boxShadow: hover && !isPlaceholder ? 'var(--shadow-md)' : 'none', cursor: href && !isPlaceholder ? 'pointer' : 'default', opacity: isPlaceholder ? 0.85 : 1, borderStyle: isPlaceholder ? 'dashed' : 'solid', ...style }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.9rem' }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>
          {index != null && <span>{index}</span>}{year && <span>· {year}</span>}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: meta.color }} />{meta.label}
        </span>
      </div>
      <h3 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-xl)', fontWeight: 'var(--weight-semibold)' as unknown as number, letterSpacing: 'var(--tracking-tight)', color: isPlaceholder ? 'var(--text-muted)' : 'var(--text-strong)' }}>{title}</h3>
      {description && <p style={{ margin: '0.55rem 0 0', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)', maxWidth: '52ch' }}>{description}</p>}
      {tags.length > 0 && <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1.1rem' }}>{tags.map((t) => <Tag key={t}>{t}</Tag>)}</div>}
      {href && !isPlaceholder && <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', marginTop: '1.1rem', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--accent)', transform: hover ? 'translateX(3px)' : 'none', transition: 'transform var(--dur) var(--ease-soft)' }}>View project →</span>}
    </Wrapper>
  )
}

/* ---------------- Field ---------------- */
export function Field({ label, name, type = 'text', placeholder, multiline = false, rows = 4, required = false, value, onChange, style = {} }: {
  label?: string; name?: string; type?: string; placeholder?: string; multiline?: boolean; rows?: number; required?: boolean;
  value?: string; onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; style?: CSS
}) {
  const [focus, setFocus] = useState(false)
  const controlStyle: CSS = { width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', color: 'var(--text-strong)', background: 'var(--surface-card)', border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border)'}`, borderRadius: 'var(--radius-md)', padding: '0.7rem 0.9rem', outline: 'none', boxShadow: focus ? 'var(--ring-accent)' : 'none', transition: 'border-color var(--dur) var(--ease-soft), box-shadow var(--dur) var(--ease-soft)', resize: multiline ? 'vertical' : undefined, lineHeight: multiline ? 'var(--leading-normal)' : undefined }
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', ...style }}>
      {label && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}{required && <span style={{ color: 'var(--accent)' }}> *</span>}</span>}
      {multiline
        ? <textarea name={name} rows={rows} placeholder={placeholder} required={required} value={value} onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={controlStyle} />
        : <input name={name} type={type} placeholder={placeholder} required={required} value={value} onChange={onChange} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} style={controlStyle} />}
    </label>
  )
}

/* ---------------- Loader (matcha whisk, with .mp4 slot) ---------------- */
export function Loader({ size = 56, label, videoSrc, style = {} }: { size?: number; label?: string; videoSrc?: string; style?: CSS }) {
  const ring: CSS = { position: 'absolute', inset: 0, borderRadius: '50%', border: `${Math.max(2, size * 0.05)}px solid transparent`, boxSizing: 'border-box' }
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', ...style }}>
      <div style={{ position: 'relative', width: size, height: size }}>
        {videoSrc
          ? <video className="wm-loader-video" src={videoSrc} autoPlay muted loop playsInline style={{ width: size, height: size, objectFit: 'cover' }} />
          : <>
              <span style={{ ...ring, borderTopColor: 'var(--matcha-bright)', borderRightColor: 'var(--matcha-bright)', animation: 'wm-whisk-spin 1.1s var(--ease-soft) infinite' }} />
              <span style={{ ...ring, inset: size * 0.18, borderTopColor: 'var(--teal-500)', animation: 'wm-whisk-spin-rev 0.8s var(--ease-soft) infinite' }} />
              <span style={{ position: 'absolute', inset: '50%', width: size * 0.16, height: size * 0.16, margin: -(size * 0.08), borderRadius: '50%', background: 'var(--matcha-bright)', animation: 'wm-whisk-pulse 1.1s var(--ease-soft) infinite' }} />
            </>}
      </div>
      {label && <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-muted)' }}>{label}</span>}
    </div>
  )
}

/* ---------------- Reveal — gentle fade-up on first view ---------------- */
export function Reveal({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: CSS }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) { setShown(true); return }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setShown(true); io.disconnect() } })
    }, { threshold: 0.12 })
    io.observe(el)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ animation: shown ? `wm-reveal 0.6s var(--ease-out) ${delay}ms both` : 'none', opacity: shown ? undefined : 0, ...style }}>
      {children}
    </div>
  )
}

export const ICONS: Record<string, string> = {
  github: '/icons/github.svg',
  linkedin: '/icons/linkedin.svg',
  email: '/icons/email.svg',
  instagram: '/icons/instagram.svg',
  moon: '/icons/moon.svg',
  sun: '/icons/sun.svg',
}

export const SOCIALS = [
  { key: 'github', label: 'GitHub', href: 'https://github.com/wavinamayola' },
  { key: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/wavina-mayola/' },
  { key: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/__rndm.jpg/' },
  { key: 'email', label: 'Email', href: 'mailto:hi@wavinamayola.com' },
]
