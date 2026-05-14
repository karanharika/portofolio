import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa"

export default function Footer() {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/5
        px-6
        py-16
      "
    >

      {/* Ambient Glow */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_bottom,rgba(34,211,238,0.08),transparent_40%)]
        "
      />

      {/* Animated Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1.2 }}
        className="
          absolute
          top-0
          left-0
          h-px
          w-full
          origin-left
          bg-gradient-to-r
          from-transparent
          via-cyan-400/40
          to-transparent
        "
      />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-10
          md:flex-row
        "
      >

        {/* Left */}
        <div>

          <h3
            className="
              text-2xl
              font-semibold
              tracking-tight
            "
          >
            Karanveer Harika
          </h3>

          <p
            className="
              mt-3
              max-w-md
              text-sm
              leading-relaxed
              text-zinc-500
            "
          >
            Engineering intelligent systems across
            cybersecurity,
            AI,
            cloud infrastructure,
            and immersive digital experiences.
          </p>

        </div>

        {/* Center */}
        <div
          className="
            flex
            items-center
            gap-4
          "
        >

          <a
            href="https://github.com/karanharika"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-zinc-400
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:border-cyan-400/30
              hover:bg-cyan-400/10
              hover:text-cyan-300
            "
          >
            <FaGithub
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </a>

          <a
            href="https://www.linkedin.com/in/karanveer-harika-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              text-zinc-400
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-[2px]
              hover:border-cyan-400/30
              hover:bg-cyan-400/10
              hover:text-cyan-300
            "
          >
            <FaLinkedinIn
              size={16}
              className="
                transition-transform
                duration-300
                group-hover:scale-110
              "
            />
          </a>

        </div>

        {/* Right */}
        <div
          className="
            text-sm
            text-zinc-600
          "
        >
          <p>
            Designed & engineered by Karanveer
          </p>

          <p className="mt-2">
            © 2026
          </p>
        </div>

      </div>

    </footer>
  )
}