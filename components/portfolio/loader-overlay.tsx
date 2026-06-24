'use client'

import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { Loader } from './primitives'

const LOADER_DURATION = 3500 // 3.5 seconds — the matcha-whisk intro

const LoaderContext = createContext<{ skip: () => void }>({ skip: () => {} })

/* Call from a page to dismiss the intro loader immediately (e.g. the 404 page,
   which should render straight away without the whisking overlay). */
export function useSkipLoader() {
  const { skip } = useContext(LoaderContext)
  useEffect(() => {
    skip()
  }, [skip])
}

export default function LoaderProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), LOADER_DURATION)
    return () => clearTimeout(t)
  }, [])

  const skip = useCallback(() => setLoading(false), [])

  return (
    <LoaderContext.Provider value={{ skip }}>
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
      {children}
    </LoaderContext.Provider>
  )
}
