'use client'

import React, { useState } from 'react'
import { Button, Eyebrow, Field, Icon, SocialLink, ICONS, SOCIALS } from './primitives'

const CONTACT_EMAIL = 'hi@wavinamayola.com'
// Public by design — Web3Forms access keys only allow submitting a form that
// emails the owner. Set NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in .env.local.
const WEB3FORMS_ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [botcheck, setBotcheck] = useState('') // honeypot — real users leave it empty

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (botcheck) return // bot tripped the honeypot
    setError('')

    if (!WEB3FORMS_ACCESS_KEY) {
      setError('The form isn’t configured yet. Please email me directly for now.')
      return
    }

    setSending(true)
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio inquiry from ${name || 'someone'}`,
          from_name: name || 'Portfolio visitor',
          name,
          email,
          message,
          botcheck: '',
        }),
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
      } else {
        setError(data.message || 'Something went wrong. Please try again or email me directly.')
      }
    } catch {
      setError('Couldn’t reach the server. Please try again or email me directly.')
    } finally {
      setSending(false)
    }
  }

  const reset = () => { setSent(false); setError(''); setName(''); setEmail(''); setMessage('') }

  return (
    <section id="contact" style={{ padding: 'var(--space-8) var(--page-gutter) var(--space-7)', borderTop: '1px solid var(--border)' }}>
      <div className="wm-contact-grid" style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.1fr)', gap: 'var(--space-7)', alignItems: 'start' }}>
        <div>
          <Eyebrow index="05">Get in touch</Eyebrow>
          <h2 style={{ margin: 'var(--space-4) 0 0', fontFamily: 'var(--font-sans)', fontSize: 'var(--text-3xl)', fontWeight: 'var(--weight-semibold)' as unknown as number, letterSpacing: 'var(--tracking-tight)', color: 'var(--text-strong)' }}>Let&apos;s work together</h2>
          <p style={{ margin: 'var(--space-3) 0 var(--space-5)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--text-body)', maxWidth: '38ch' }}>
            Have a backend that needs to scale, or an idea that needs building? Tell me about it — I read every message.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: 'var(--space-5)' }}>
            <img src="/photo.jpeg" alt="Wave Mayola" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border)' }} />
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--text-strong)' }}>hi@wavinamayola.com</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)' }}>usually replies within a day</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {SOCIALS.map((s) => (
              <SocialLink key={s.key} href={s.href} label={s.label}><Icon src={ICONS[s.key]} /></SocialLink>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--surface-card)', border: '1px solid var(--border)', borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)', boxShadow: 'var(--shadow-sm)' }}>
          {sent ? (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.75rem', padding: 'var(--space-4) 0' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--accent)' }}>&gt; message.sent ✓</span>
              <p style={{ margin: 0, fontSize: 'var(--text-lg)', color: 'var(--text-strong)' }}>Thanks — your message is on its way. I&apos;ll be in touch soon.</p>
              <Button variant="ghost" onClick={reset}>Send another</Button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="wm-form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-3)' }}>
                <Field label="Name" name="name" placeholder="Your name" required value={name} onChange={(e) => setName(e.target.value)} />
                <Field label="Email" name="email" type="email" placeholder="you@company.com" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <Field label="Message" name="message" multiline rows={4} placeholder="Tell me about the project…" required value={message} onChange={(e) => setMessage(e.target.value)} />
              {/* Honeypot — hidden from humans, bots tend to fill it */}
              <input
                type="text" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true"
                value={botcheck} onChange={(e) => setBotcheck(e.target.value)}
                style={{ position: 'absolute', left: '-9999px', width: 1, height: 1, opacity: 0 }}
              />
              {error && <p style={{ margin: 0, fontSize: 'var(--text-sm)', color: 'var(--term-dot-red)' }}>{error} <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'var(--accent)' }}>{CONTACT_EMAIL}</a></p>}
              <div><Button variant="primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'}</Button></div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
