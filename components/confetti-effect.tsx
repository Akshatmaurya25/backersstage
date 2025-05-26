"use client"

import { useEffect, useState, useRef } from "react"
import confetti from "canvas-confetti"

interface ConfettiEffectProps {
  trigger: boolean
  onComplete?: () => void
  duration?: number
  particleCount?: number
  spread?: number
  colors?: string[]
}

export function ConfettiEffect({
  trigger,
  onComplete,
  duration = 3000,
  particleCount = 100,
  spread = 70,
  colors = ["#ff0000", "#00ff00", "#0000ff"],
}: ConfettiEffectProps) {
  const [isActive, setIsActive] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const confettiInstance = useRef<confetti.CreateTypes | null>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    // Create confetti instance
    confettiInstance.current = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    })

    return () => {
      if (confettiInstance.current) {
        confettiInstance.current.reset()
      }
    }
  }, [])

  useEffect(() => {
    if (trigger && !isActive && confettiInstance.current) {
      setIsActive(true)

      // Fire confetti
      confettiInstance.current({
        particleCount,
        spread,
        origin: { y: 0.6 },
        colors,
        disableForReducedMotion: true,
      })

      // Set timeout to complete
      const timer = setTimeout(() => {
        setIsActive(false)
        if (onComplete) onComplete()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [trigger, isActive, duration, particleCount, spread, colors, onComplete])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      style={{ width: "100%", height: "100%" }}
    />
  )
}
