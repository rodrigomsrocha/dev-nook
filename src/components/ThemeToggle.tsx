'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
import { LuSunDim, LuMoon } from 'react-icons/lu'

export function ThemeToggle() {
  const [isMounted, setIsMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <button
      onClick={() => {
        setTheme(theme === 'light' ? 'dark' : 'light')
      }}
      className="text-4xl"
    >
      {theme === 'light' ? <LuMoon /> : <LuSunDim />}
    </button>
  )
}
