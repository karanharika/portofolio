import { motion } from "framer-motion"
import Reveal from "../components/Reveal"
import SectionTitle from "../components/SectionTitle"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        flex
        min-h-screen
        snap-start
        items-center
        overflow-hidden
        px-6
        py-40
      "
    >

      {/* Ambient Background */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),transparent_35%)]
        "
      />

      <motion.div
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          right-[-10%]
          bottom-[-10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      <div className="relative z-10 mx-auto max-w-4xl">

        <Reveal>
          <SectionTitle title="Establish Connection" />
        </Reveal>

        <Reveal delay={0.2}>
          <h2
            className="
              mt-8
              max-w-3xl
              text-5xl
              font-semibold
              leading-tight
              tracking-tight
            "
          >
            Let’s build intelligent systems,
            secure infrastructure,
            and immersive digital experiences.
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p
            className="
              mt-8
              max-w-2xl
              leading-relaxed
              text-zinc-400
            "
          >
            Available for cybersecurity,
            AI,
            cloud infrastructure,
            software engineering,
            and innovative technology collaborations.
          </p>
        </Reveal>

        {/* Contact Form */}
        <Reveal delay={0.4}>
          <form
            action="https://formspree.io/f/mzdoqypo"
            method="POST"
            className="
              mt-16
              space-y-6
            "
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-5
                text-white
                placeholder:text-zinc-500
                backdrop-blur-xl
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400/40
                focus:bg-white/[0.05]
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="
                w-full
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-5
                text-white
                placeholder:text-zinc-500
                backdrop-blur-xl
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400/40
                focus:bg-white/[0.05]
              "
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
              className="
                w-full
                resize-none
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-5
                text-white
                placeholder:text-zinc-500
                backdrop-blur-xl
                outline-none
                transition-all
                duration-300
                focus:border-cyan-400/40
                focus:bg-white/[0.05]
              "
            />

            <button
              type="submit"
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-cyan-400/20
                bg-cyan-400/10
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.25em]
                text-cyan-300
                transition-all
                duration-500
                hover:border-cyan-300/40
                hover:bg-cyan-300/20
              "
            >

              <span className="relative z-10">
                Transmit Message
              </span>

              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                  bg-gradient-to-r
                  from-cyan-400/20
                  to-purple-400/20
                "
              />

            </button>

          </form>
        </Reveal>

        {/* Social Links */}
        <Reveal delay={0.5}>
          <div className="mt-16 flex flex-wrap gap-6">

            <a
              href="https://www.linkedin.com/in/karanveer-harika-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3
                text-zinc-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:border-cyan-400/30
                hover:bg-cyan-400/10
              "
            >

              <FaLinkedinIn
                size={25}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <span>Linkedin</span>

            </a>

            <a
              href="https://GitHub.com/karanharika"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                flex
                items-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-6
                py-3
                text-zinc-300
                backdrop-blur-xl
                transition-all
                duration-300
                hover:-translate-y-[2px]
                hover:border-cyan-400/30
                hover:bg-cyan-400/10
              "
            >

              <FaGithub
                size={25}
                className="
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              />

              <span>GitHub</span>

            </a>

          </div>
        </Reveal>

      </div>

    </section>
  )
}