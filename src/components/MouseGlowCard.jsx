import { useRef } from "react"

export default function MouseGlowCard({ children, className = "" }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current

    if (!card) return

    const rect = card.getBoundingClientRect()

    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    card.style.setProperty("--x", `${x}px`)
    card.style.setProperty("--y", `${y}px`)
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`
        relative
        overflow-hidden
        rounded-[10px]
        border
        border-white/10
        bg-white/[0.03]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:border-cyan-400/20
        ${className}
      `}
    >

      {/* Mouse Glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: `
            radial-gradient(
              500px circle at var(--x) var(--y),
              rgba(34,211,238,0.15),
              transparent 40%
            )
          `,
        }}
      />

      {children}
    </div>
  )
}