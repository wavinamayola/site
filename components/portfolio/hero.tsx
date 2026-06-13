'use client'

import React, { useEffect, useState } from 'react'
import { Button, Eyebrow, Reveal } from './primitives'

const GREETINGS = ['Hello', 'Bonjour', 'Hola', 'Ciao', 'こんにちは', '안녕하세요']

const SPEC_ROWS = [
  { label: 'based in', value: 'Cebu, Philippines' },
  { label: 'education', value: 'BS IT — University of San Jose – Recoletos' },
  { label: 'core stack', value: 'Golang · Cloud (AWS/GCP) · ReactJS · Laravel' },
  { label: 'off the clock', value: 'running · freediving · photography · reading' },
]

export default function Hero() {
  const [text, setText] = useState('')
  const [idx, setIdx] = useState(0)
  const [del, setDel] = useState(false)

  useEffect(() => {
    const full = GREETINGS[idx % GREETINGS.length]
    const speed = del ? 55 : 95
    const t = setTimeout(() => {
      if (!del) {
        setText(full.slice(0, text.length + 1))
        if (text === full) { setTimeout(() => setDel(true), 1400) }
      } else {
        setText(full.slice(0, text.length - 1))
        if (text === '') { setDel(false); setIdx(idx + 1) }
      }
    }, text === full && !del ? 1400 : speed)
    return () => clearTimeout(t)
  }, [text, del, idx])

  return (
    <section id="home" style={{ padding: 'var(--space-9) var(--page-gutter) var(--space-8)', maxWidth: 'var(--container)', margin: '0 auto' }}>
      <div style={{ marginBottom: 'var(--space-5)' }}><Eyebrow>Full-stack software engineer · Cebu, Philippines</Eyebrow></div>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: 'var(--space-4)', padding: '0.3rem 0.7rem', borderRadius: 'var(--radius-full)', background: 'var(--matcha-soft)', border: '1px solid color-mix(in srgb, var(--matcha) 30%, transparent)' }}>
        <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--matcha-bright)', animation: 'wm-whisk-pulse 1.6s var(--ease-soft) infinite' }} />
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--matcha)', whiteSpace: 'nowrap' }}>available for work</span>
      </div>
      <h1 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.75rem, 8vw, var(--text-5xl))', fontWeight: 'var(--weight-semibold)' as unknown as number, letterSpacing: 'var(--tracking-tighter)', lineHeight: 1.02, color: 'var(--text-strong)' }}>
        {text || ' '}<span style={{ color: 'var(--accent)' }}>.</span>
        <span style={{ display: 'inline-block', width: '0.5ch', marginLeft: '0.05ch', background: 'var(--accent-bright)', animation: 'blink 1.1s steps(1) infinite' }}>&nbsp;</span>
      </h1>
      <p style={{ margin: 'var(--space-5) 0 0', maxWidth: '58ch', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)', textAlign: 'justify' }}>
        For more than <strong style={{ color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' as unknown as number }}>7 years</strong>, I&apos;ve partnered with startups and enterprise teams to design, build, and scale full-stack systems — though my real specialty is the <strong style={{ color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' as unknown as number }}>backend</strong>, primarily in <strong style={{ color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' as unknown as number }}>Golang and PHP</strong>. I&apos;ve worked on products ranging from email-as-a-service platforms and banking integrations across Southeast Asia to healthcare and e-learning systems serving real users every day.
      </p>
      <p style={{ margin: 'var(--space-4) 0 0', maxWidth: '58ch', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)', textAlign: 'justify' }}>
        I&apos;m happiest deep in the backend — creating reliable, high-performance services with clean, maintainable architectures. Whether I&apos;m troubleshooting critical production issues, managing cloud deployments with <strong style={{ color: 'var(--text-strong)', fontWeight: 'var(--weight-medium)' as unknown as number }}>Kubernetes and AWS</strong>, or designing extensible APIs, I aim to build software that scales and lasts. When a project needs it, I&apos;ll take it all the way to the frontend too.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', margin: 'var(--space-6) 0 var(--space-7)' }}>
        {/* <Button variant="primary" href="/wave_resumeUpdated.pdf" target="_blank">Download résumé</Button> */}
        <Button variant="secondary" href="#contact" iconRight={<span>→</span>}>Get in touch</Button>
      </div>
      <Reveal delay={120}>
        <div style={{ border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', background: 'var(--surface-card)', boxShadow: 'var(--shadow-sm)', overflow: 'hidden', display: 'flex', flexWrap: 'wrap' }}>
          <div className="wm-hero-id" style={{ flex: '0 0 auto', display: 'flex', alignItems: 'center', gap: '0.9rem', padding: 'var(--space-5)', borderRight: '1px solid var(--border)', background: 'var(--matcha-soft)' }}>
            <img src="/photo.jpeg" alt="Wave Mayola" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: '2px solid color-mix(in srgb, var(--matcha) 45%, transparent)' }} />
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontWeight: 'var(--weight-semibold)' as unknown as number, fontSize: 'var(--text-base)', color: 'var(--text-strong)', letterSpacing: 'var(--tracking-tight)' }}>Wavina Mayola</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--matcha)' }}>est. 2018 · still shipping</span>
            </div>
          </div>
          <div style={{ flex: '1 1 320px', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: '0.65rem', justifyContent: 'center' }}>
            {SPEC_ROWS.map((row, i) => (
              <div key={i} className="wm-stat-row" style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem' }}>
                <span style={{ flex: '0 0 auto', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>{row.label}</span>
                <span aria-hidden="true" style={{ flex: '1 1 2rem', minWidth: '1.5rem', borderBottom: '1px dotted var(--border-strong)', transform: 'translateY(-3px)' }} />
                <span style={{ flex: '0 1 auto', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-medium)' as unknown as number, color: 'var(--text-strong)', textAlign: 'right' }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
