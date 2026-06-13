'use client'

import React from 'react'
import { Button, Eyebrow, Reveal } from './primitives'

const SERVICES = [
  { title: 'Custom business systems', desc: 'End-to-end platforms built around how your business actually works — booking systems, POS, EMR, inventory, and internal tools that replace spreadsheets and manual processes.' },
  { title: 'AI & workflow automation', desc: 'Put repetitive operations on autopilot — AI-assisted pipelines, document parsing, and smart integrations that quietly save your team hours every week.' },
  { title: 'API & payment integrations', desc: 'Reliable integrations with banks, payment providers, and third-party services — clean gRPC and REST contracts that other developers can build on without surprises.' },
  { title: 'Cloud deployment & reliability', desc: 'Production-grade deployments on AWS and GCP with Kubernetes, monitoring with Grafana, and incident response — systems that stay fast, observable, and stable.' },
]

const STEPS = [
  { step: '01', title: 'Discovery', desc: 'We map the problem, constraints, and goals so the solution fits how you actually work.' },
  { step: '02', title: 'Build', desc: 'Iterative delivery with clean architecture, tests, and regular check-ins — no black boxes.' },
  { step: '03', title: 'Ship & support', desc: 'Production deployment, monitoring, and handover docs your team can extend confidently.' },
]

export default function Services() {
  const toContact = (e: React.MouseEvent) => {
    const el = document.getElementById('contact')
    if (!el) return
    e.preventDefault()
    const y = el.getBoundingClientRect().top + window.scrollY - 64
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
  return (
    <section id="services" style={{ padding: 'var(--space-8) var(--page-gutter)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto' }}>
        <Eyebrow index="04">Services</Eyebrow>
        <h2 style={{ margin: 'var(--space-4) 0 0', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-semibold)' as unknown as number, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>Where I can help</h2>
        <p style={{ margin: 'var(--space-3) 0 var(--space-6)', maxWidth: '52ch', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-muted)' }}>
          From first architecture sketch to production deployment — these are the problems I specialize in solving.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--space-4)' }}>
          {SERVICES.map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <div style={{ height: '100%', boxSizing: 'border-box', background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: '0.6rem', boxShadow: 'var(--shadow-sm)' }}>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent)' }}>{String(i + 1).padStart(2, '0')}</span>
                <h3 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-lg)', fontWeight: 'var(--weight-semibold)' as unknown as number, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>{s.title}</h3>
                <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)' }}>{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ marginTop: 'var(--space-7)', paddingTop: 'var(--space-6)', borderTop: '1px solid var(--border)' }}>
          <p style={{ margin: '0 0 var(--space-5)', fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)' }}>How I work</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 'var(--space-5)' }}>
            {STEPS.map((p, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xl)', fontWeight: 'var(--weight-semibold)' as unknown as number, color: 'color-mix(in srgb, var(--accent) 35%, transparent)' }}>{p.step}</span>
                  <h4 style={{ margin: 0, fontFamily: 'var(--font-sans)', fontSize: 'var(--text-base)', fontWeight: 'var(--weight-semibold)' as unknown as number, color: 'var(--text-strong)' }}>{p.title}</h4>
                  <p style={{ margin: 0, fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)' }}>{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 'var(--space-7)' }}>
          <Button variant="primary" href="#contact" onClick={toContact}>Request a service quote</Button>
        </div>
      </div>
    </section>
  )
}
