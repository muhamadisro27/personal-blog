"use client"

import { useEffect, useState } from "react"

interface AmbientBackgroundProps {
  children: React.ReactNode
}

const AmbientBackground: React.FC<AmbientBackgroundProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const generateParticles = () => {
    if (!mounted) return []

    return Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: (i * 23 + 10) % 90,
      top: (i * 17 + 5) % 85,
      delay: (i * 0.3) % 2,
      duration: 2 + (i % 3),
    }))
  }

  const particles = generateParticles()

  return (
    <div className="relative min-h-svh overflow-hidden bg-gradient-to-br from-slate-900 via-yellow-900/25 to-slate-900">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/5 via-transparent to-blue-600/5" />

        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/8 rounded-full blur-3xl" />
        <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-yellow-500/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/8 rounded-full blur-3xl" />

        {mounted && (
          <>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse [animation-delay:0.5s]" />

            {particles.map((particle) => (
              <div
                key={particle.id}
                className="absolute w-1 h-1 bg-white/20 rounded-full animate-bounce"
                style={{
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  animationDelay: `${particle.delay}s`,
                  animationDuration: `${particle.duration}s`,
                }}
              />
            ))}

            <div className="absolute top-10 right-10 w-32 h-32 border border-slate-500/20 rounded-full animate-pulse [animation-duration:10s]" />
            <div className="absolute bottom-10 left-10 w-24 h-24 border border-blue-500/20 rounded-full animate-ping" />
          </>
        )}
      </div>

      <div className="relative z-10">{children}</div>
    </div>
  )
}

export default AmbientBackground
