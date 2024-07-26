"use client"
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import DarkIcon from '@/svg/DarkIcon'
import LightIcon from '@/svg/LightIcon'

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    setTheme('light')
  }, [])

  if (!mounted) {
    return <DarkIcon />
  }

  return (
    <span onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      {theme === 'dark' ? <LightIcon /> : <DarkIcon />}
    </span>
  )
}
