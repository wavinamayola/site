'use client'

import React, { useEffect, useState } from 'react'
import { Loader } from './primitives'

const LOADER_DURATION = 3500 // 3.5 seconds — the matcha-whisk intro

export default function LoaderOverlay() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), LOADER_DURATION)
    return () => clearTimeout(t)
  }, [])

  return (
    <div
      aria-hidden={!loading}
      style={{
        position: 'fixed', inset: 0, zIndex: 60, display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'var(--bg)', opacity: loading ? 1 : 0, visibility: loading ? 'visible' : 'hidden',
        transition: 'opacity var(--dur-slow) var(--ease-soft), visibility var(--dur-slow)',
        pointerEvents: loading ? 'auto' : 'none',
      }}
    >
      <Loader size={128} label="whisking…" videoSrc="/whiskingmatchamuted.mp4" />
    </div>
  )
}
