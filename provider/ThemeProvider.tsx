'use client'
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'



const NextThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

    return <ThemeProvider attribute='class'>{children}</ThemeProvider>
}
export default NextThemeProvider