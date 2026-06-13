'use client'

import React from 'react'
import { Eyebrow, Reveal } from './primitives'

const QUOTES = [
  { quote: 'Wave is the engineer you want on your hardest production problems — calm, precise, and relentless until it’s actually fixed.', name: 'Engineering Lead', role: 'Fintech platform' },
  { quote: 'Clean architecture and clear communication. The services he built were easy for the rest of the team to extend without breaking things.', name: 'Senior Developer', role: 'Healthcare systems' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" style={{ padding: 'var(--space-8) var(--page-gutter)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <Eyebrow index="05">Kind words</Eyebrow>
        <h2 style={{ margin: 'var(--space-4) 0 var(--space-6)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-semibold)' as unknown as number, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>What people say</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
          {QUOTES.map((q, i) => (
            <Reveal key={i} delay={i * 90}>
              <figure style={{ margin: 0, height: '100%', boxSizing: 'border-box', background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', boxShadow: 'var(--shadow-sm)' }}>
                <span aria-hidden="true" style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xl)', lineHeight: 0.5, color: 'color-mix(in srgb, var(--accent) 50%, transparent)' }}>&ldquo;</span>
                <blockquote style={{ margin: 0, fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-normal)', color: 'var(--text-strong)' }}>{q.quote}</blockquote>
                <figcaption style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '0.15rem' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-sm)', fontWeight: 'var(--weight-semibold)' as unknown as number, color: 'var(--text-strong)' }}>{q.name}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>{q.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
