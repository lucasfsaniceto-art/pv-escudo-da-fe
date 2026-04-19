'use client'

import { useEffect, useState } from 'react'

const TARGET_HOURS = 4

function pad(n: number) {
  return String(n).padStart(2, '0')
}

export default function CountdownBar() {
  const [timeLeft, setTimeLeft] = useState<number | null>(null)

  useEffect(() => {
    const key = 'escudo_countdown_end'
    let end = Number(localStorage.getItem(key) || '0')
    if (!end || end < Date.now()) {
      end = Date.now() + TARGET_HOURS * 60 * 60 * 1000
      localStorage.setItem(key, String(end))
    }
    setTimeLeft(Math.max(0, end - Date.now()))
    const id = setInterval(() => {
      const remaining = Math.max(0, end - Date.now())
      setTimeLeft(remaining)
      if (remaining === 0) clearInterval(id)
    }, 1000)
    return () => clearInterval(id)
  }, [])

  if (timeLeft === null) return null

  const totalSec = Math.floor(timeLeft / 1000)
  const h = Math.floor(totalSec / 3600)
  const m = Math.floor((totalSec % 3600) / 60)
  const s = totalSec % 60

  return (
    <div
      className="bg-gold-light border-b border-border px-4 py-2.5 flex flex-wrap items-center justify-center gap-3"
      role="timer"
      aria-live="polite"
    >
      <span className="text-navy text-xs font-sans font-semibold tracking-wide">
        Preço sobe em:
      </span>
      <div className="flex items-center gap-1.5 font-sans font-bold text-sm">
        {[{ v: h, l: 'h' }, { v: m, l: 'min' }, { v: s, l: 'seg' }].map(({ v, l }, i) => (
          <span key={l} className="flex items-center gap-1">
            {i > 0 && <span className="text-navy/30">:</span>}
            <span className="bg-navy text-on-navy rounded px-2 py-0.5 tabular-nums">
              {pad(v)}
            </span>
            <span className="text-muted text-xs font-normal">{l}</span>
          </span>
        ))}
      </div>
    </div>
  )
}
