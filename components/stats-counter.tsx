"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface StatsCounterProps {
  value: number
  label: string
  className?: string
}

export default function StatsCounter({ value, label, className }: StatsCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000 // ms
    const steps = 50
    const stepValue = value / steps
    const stepTime = duration / steps
    let current = 0

    const timer = setInterval(() => {
      current += stepValue
      if (current > value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepTime)

    return () => clearInterval(timer)
  }, [value])

  return (
    <div className={cn("text-center", className)}>
      <div className="text-3xl md:text-4xl font-bold text-primary">{count.toLocaleString()}</div>
      <p className="text-sm md:text-base text-gray-700">{label}</p>
    </div>
  )
}
