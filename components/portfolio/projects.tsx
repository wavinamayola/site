'use client'

import React from 'react'
import { Eyebrow, ProjectCard, Reveal } from './primitives'
// import { Tag } from './primitives' // re-add when the Featured section is restored

const PERSONAL = [
  { index: '01', title: 'Guesthouse booking system', description: 'A full-stack booking platform for a private guesthouse. Guests browse live availability and upload payment receipts, while admins handle pricing, vouchers, and the full reservation lifecycle from one panel.', tags: ['Vue 3', 'TypeScript', 'Go', 'PostgreSQL'], status: 'live' as const },
  { index: '02', title: 'Reading tracker', description: 'A companion app for readers — log reading sessions, build daily streaks, discover your reader persona, and share the books that shaped you.', tags: ['fullstack', 'community'], status: 'wip' as const },
]

// const FEATURED = [
//   { img: '/projects/project-alpha.png', index: '01', title: 'Featured project one', desc: 'A short summary of a flagship build — what it does, who it serves, and the impact it had. Replace this copy and the image in code.', tags: ['Go', 'Vue 3', 'PostgreSQL'] },
//   { img: '/projects/project-beta.png', index: '02', title: 'Featured project two', desc: 'Another highlighted project with a screenshot. Swap in a real preview and write a one-paragraph story about the problem you solved.', tags: ['Laravel', 'React', 'AWS'] },
// ]

const sectionLabel: React.CSSProperties = { margin: 'var(--space-5) 0 var(--space-4)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }
const grid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }

export default function Projects() {
  return (
    <section id="work" style={{ padding: 'var(--space-8) var(--page-gutter)', borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <Eyebrow index="01">Selected work</Eyebrow>
        <h2 style={{ margin: 'var(--space-4) 0 0', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-semibold)' as unknown as number, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>Things I&apos;ve been building</h2>

        {/* Featured section — commented out for now; restore the FEATURED const and Tag import above to bring it back.
        <p style={sectionLabel}>Featured</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 'var(--space-4)', marginBottom: 'var(--space-7)' }}>
          {FEATURED.map((p, i) => (
            <Reveal key={p.index} delay={i * 90}>
              <a href="#" className="wm-featured-card" style={{ display: 'flex', flexDirection: 'column', height: '100%', textDecoration: 'none', background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-sm)', transition: 'transform var(--dur), box-shadow var(--dur)' }}>
                <div style={{ position: 'relative', aspectRatio: '16 / 10', overflow: 'hidden', borderBottom: '1px solid var(--border)' }}>
                  <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent)' }}>{p.index}</span>
                  <h3 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)' as unknown as number, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>{p.title}</h3>
                  <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)' }}>{p.desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.2rem' }}>
                    {p.tags.map((t) => <Tag key={t}>{t}</Tag>)}
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
        */}

        <p style={sectionLabel}>Personal projects</p>
        <div style={grid}>
          {PERSONAL.map((p, i) => (
            <Reveal key={p.index} delay={i * 90}><ProjectCard {...p} /></Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
