'use client'

import React from 'react'
import { Eyebrow, Reveal } from './primitives'

const ROLES = [
  { period: '2023 — present', company: 'Atmail', role: 'Server Apps Engineer — Email as a Service', detail: 'Build and maintain backend services in Go and PHP, resolve P0 production incidents, and manage AWS deployments across EC2, ECS, and S3.' },
  { period: '2021 — 2023', company: 'Brankas', role: 'Systems Developer — Payment Systems', detail: 'Maintained gRPC services for bank transactions, built statement PDF parsers, and onboarded new bank integrations on GCP with Kubernetes and Grafana.' },
  { period: '2020 — 2021', company: 'Sun Asterisk', role: 'Fullstack Developer — E-learning', detail: 'Developed backend services for a platform serving Japanese users and translated Figma designs into polished React UI.' },
  { period: '2018 — 2020', company: 'DGV SmartStart', role: 'Web Developer & Team Leader — Healthcare', detail: 'Built EMR and clinic appointment backends, pharmaceutical inventory management, and worked with PhilHealth toward accreditation. Led the development team.' },
]

export default function Experience() {
  return (
    <section id="experience" style={{ padding: 'var(--space-8) var(--page-gutter)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <Eyebrow index="02">Career</Eyebrow>
        <h2 style={{ margin: 'var(--space-4) 0 var(--space-6)', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-semibold)' as unknown as number, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>Where I&apos;ve worked</h2>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {ROLES.map((r, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="wm-exp-row" style={{ display: 'grid', gridTemplateColumns: 'minmax(120px, 0.4fr) 1fr', gap: 'var(--space-5)', padding: 'var(--space-5) 0', borderTop: i === 0 ? 'none' : '1px solid var(--border)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent)', letterSpacing: '0.04em' }}>{r.period}</span>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)' as unknown as number, color: 'var(--text-strong)' }}>{r.company}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-medium)' as unknown as number, color: 'var(--text-strong)' }}>{r.role}</span>
                  <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)', maxWidth: '60ch' }}>{r.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
