'use client'

import React from 'react'
import { Icon, SocialLink, ICONS, SOCIALS } from '../portfolio/primitives'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: 'var(--space-6) var(--page-gutter)' }}>
      <div style={{ maxWidth: 'var(--container)', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-faint)' }}>© Wavina Mayola {new Date().getFullYear()}</span>
        <div style={{ display: 'flex', gap: '0.3rem' }}>
          {SOCIALS.map((s) => (
            <SocialLink key={s.key} href={s.href} label={s.label} size={34}><Icon src={ICONS[s.key]} /></SocialLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
