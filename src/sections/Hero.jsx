import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        px-6
      "
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <p className="mb-6 text-sm uppercase tracking-[0.3em] text-zinc-400">
          Cyber Defense Engineer · Developer · Systems Builder
        </p>

        <h1
          className="
            max-w-5xl
            text-6xl
            font-semibold
            leading-tight
            tracking-tight
            md:text-8xl
          "
        >
          Building intelligent,
          secure & immersive
          digital systems.
        </h1>

        <p
          className="
            mx-auto
            mt-8
            max-w-2xl
            text-lg
            text-zinc-400
          "
        >
          Former Cyber Engineer at Darktrace with experience
          across cybersecurity, cloud systems, AI, and
          modern software engineering.
        </p>
      </motion.div>
    </section>
  )
}