import { motion } from "framer-motion"
import Reveal from "../components/Reveal"
import SectionTitle from "../components/SectionTitle"
import noise from "../assets/noise.jpg"

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        flex
        min-h-screen
        snap-start
        items-center
        overflow-hidden
        px-6
        py-32">

      {/* Floating Orb */}
      <motion.div
        animate={{
          y: [0, -40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-10%]
          top-[20%]
          h-[400px]
          w-[400px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div className="mx-auto max-w-6xl">

        <Reveal>
          <SectionTitle title="About" />
        </Reveal>

        <Reveal
          delay={0.2}
          y={120}
          scale={0.92}
        >
          <motion.div
            whileHover={{
              scale: 1.02,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[10px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-xl
              grid gap-12 
              md:grid-cols-2
            "
          >
            

            {/* Dynamic Gradient */}
            <div
              className="
                absolute
                inset-0
                opacity-60
                bg-gradient-to-br
                from-cyan-500/10
                via-transparent
                to-purple-500/10
              "
            />

            {/* Noise */}
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


           <p className="
                 relative
                 z-10
                 text-2xl
                 leading-relaxed
                 tracking-tight
                 text-zinc-200
                max-w-4xl
               ">
             I’m Karanveer Harika, Cyber Defense Engineer, 
             building at the crossroads of Cloud Infrastructure, 
             Software Engineering, and AI. Focused on developing 
             intelligent systems to secure the modern digital landscape.
           </p>

           <p className="
                 relative
                 z-10
                 text-2xl
                 leading-relaxed
                 tracking-tight
                 text-zinc-500
                 max-w-4xl
               ">
             My interests span AI, automation,
             immersive digital experiences,
             modern software engineering,
             and secure systems architecture.
           </p>

          </motion.div>
        </Reveal>

      </div>
    </section>
  )
}