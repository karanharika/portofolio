import noise from "../assets/noise2.jpg"

export default function AmbientBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#050816]">

      {/* Animated Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      />

      {/* Large Gradient Orb */}
      <div
        className="
          absolute
          left-[-15%]
          top-[10%]
          h-[700px]
          w-[700px]
          rounded-full
          bg-cyan-500/20
          blur-3xl
          animate-pulse [animation-duration:4500ms]
        "
      />

      {/* Secondary Orb */}
      <div
        className="
          absolute
          right-[-10%]
          top-[35%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-blue-500/20
          blur-3xl
        "
      />

      {/* Purple Layer */}
      <div
        className="
          absolute
          bottom-[-20%]
          left-[30%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      {/* Noise Overlay */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.03]
          mix-blend-soft-light
        "
        style={{
          backgroundImage: `url(${noise})`,
        }}
      />
    </div>
  )
}