'use client'

import { Button } from '@/components/portfolio/primitives'
import { useSkipLoader } from '@/components/portfolio/loader-overlay'

export default function NotFound() {
  // Skip the matcha-whisk intro overlay — a missing route should land
  // straight on the 404 instead of waiting out the loader.
  useSkipLoader()

  return (
    <section
      style={{
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        gap: '1.25rem',
        padding: '4rem 1.5rem',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.875rem',
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: 'var(--accent)',
          margin: 0,
        }}
      >
        404
      </p>
      <h1
        style={{
          fontSize: 'clamp(2rem, 6vw, 3.25rem)',
          fontWeight: 600,
          letterSpacing: '-0.03em',
          color: 'var(--text-strong)',
          margin: 0,
        }}
      >
        Page not found
      </h1>
      <p
        style={{
          maxWidth: '32ch',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          margin: 0,
        }}
      >
        The page you’re looking for doesn’t exist or may have been moved.
      </p>
      <Button href="/" variant="primary" size="md" style={{ marginTop: '0.5rem' }}>
        Back home
      </Button>
    </section>
  )
}
