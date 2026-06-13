'use client'

import React from 'react'
import { Eyebrow, Reveal, Tag } from './primitives'

const GROUPS = [
  { label: 'Languages', items: ['Go', 'PHP', 'TypeScript', 'JavaScript', 'SQL'] },
  { label: 'Frameworks', items: ['Laravel', 'Next.js', 'Vue 3', 'React', 'Redux'] },
  { label: 'Data', items: ['PostgreSQL', 'MySQL', 'Redis', 'gRPC'] },
  { label: 'Infra & Ops', items: ['Kubernetes', 'AWS', 'GCP', 'Docker', 'Grafana'] },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: 'var(--space-8) var(--page-gutter)', borderTop: '1px solid var(--border)', background: 'var(--surface)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <Eyebrow index="03">Toolkit</Eyebrow>
        <h2 style={{ margin: 'var(--space-4) 0 var(--space-6)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-semibold)' as unknown as number, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>Tools I reach for</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 'var(--space-5)' }}>
          {GROUPS.map((g, i) => (
            <Reveal key={i} delay={i * 70}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--accent)' }}>{g.label}</span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {g.items.map((t) => <Tag key={t}>{t}</Tag>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
