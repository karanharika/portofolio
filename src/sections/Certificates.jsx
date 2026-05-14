import Reveal from "../components/Reveal"
import SectionTitle from "../components/SectionTitle"
import MouseGlowCard from "../components/MouseGlowCard"

const certificates = [
  {
    title: "Ethical Hacker",
    issuer: "Cisco",
    image: `${import.meta.env.BASE_URL}certificates/ethical-hacker.png`,
    link: "https://www.credly.com/badges/51c242d1-7daf-4180-a90c-4cf4cd1d716f/public_url",
  },
  {
    title: "Network Defense",
    issuer: "Cisco",
    image: `${import.meta.env.BASE_URL}certificates/network-defense.png`,
    link: "https://www.credly.com/badges/d534fdaf-119b-4e64-b694-344ae52037ed/public_url",
  },
  {
    title: "Darktrace Cyber Engineer",
    issuer: "Darktrace",
    image: `${import.meta.env.BASE_URL}certificates/darktrace1.png`,
    link: "https://www.credly.com/badges/6eb12d7a-bcff-4440-bc67-5fd60c509951/public_url",
  },
  {
    title: "Darktrace Threat Visualizer Essentials",
    issuer: "Darktrace",
    image: `${import.meta.env.BASE_URL}certificates/darktrace2.png`,
    link: "https://www.credly.com/badges/33c8e8b1-da7f-4dbc-9548-3fea8b7d3d2d/public_url",
  },
]

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="
        relative
        min-h-screen
        snap-start
        overflow-hidden
        px-6
        py-40
      "
    >

      {/* Ambient Gradient */}
      <div
        className="
          absolute
          right-[-10%]
          top-[10%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-cyan-500/10
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl">

        <Reveal>
          <SectionTitle title="Certificates" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mb-16 max-w-2xl leading-relaxed text-zinc-400">
            Continuous learning across cybersecurity,
            cloud infrastructure,
            software engineering,
            and intelligent systems.
          </p>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2">

          {certificates.map((cert, index) => (
            <Reveal
              key={cert.title}
              delay={0.2 + index * 0.15}
              y={100}
              scale={0.95}
            >
              <a
  href={cert.link}
  target="_blank"
  rel="noopener noreferrer"
  className="
    block
    h-full
  "
>
              <MouseGlowCard
                className="
                  group
                  p-8
                  transition-all
                  duration-700
                  hover:-translate-y-1
                "
              >

                {/* Hover Glow */}
                <div
                  className="
                    absolute
                    inset-0
                    opacity-0
                    transition-opacity
                    duration-700
                    group-hover:opacity-100
                    bg-gradient-to-br
                    from-cyan-500/10
                    via-transparent
                    to-purple-500/10
                  "
                />

                <div className="relative z-10">

                    <div
                    className="
                        relative
                        z-10
                        my-0
                        px-3
                        py-0
                        grid
                        grid-cols-[1fr_auto]
                        auto-rows-min
                        gap-x-6
                        gap-y-6
                        items-center
                        content-start
                    "
                    >

                    {/* Top Left */}
                    <div>

                        <p
                        className="
                            text-xs
                            uppercase
                            tracking-[0.3em]
                            text-cyan-300/70
                        "
                        >
                        Certificate
                        </p>

                        <h3
                        className="
                            mt-4
                            max-w-[300px]
                            text-2xl
                            font-semibold
                            leading-tight
                            tracking-tight
                        "
                        >
                        {cert.title}
                        </h3>

                    </div>

                    {/* Top Right */}
                    <div
                        className="
                        flex
                        h-30
                        w-30
                        items-center
                        justify-center
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        p-2
                        "
                    >
                        <img
                        src={cert.image}
                        alt={cert.issuer}
                        className="
                            h-full
                            w-full
                            object-contain
                        "
                        />
                    </div>

                    {/* Bottom Left */}
                    <p
                        className="
                        text-zinc-400
                        "
                    >
                        {cert.issuer}
                    </p>

                    {/* Bottom Right */}
                    <div
                        className="
                        justify-self-end
                        rounded-full
                        border
                        border-cyan-400/20
                        bg-cyan-400/10
                        px-4
                        py-2
                        text-[11px]
                        uppercase
                        tracking-[0.25em]
                        text-cyan-300
                        "
                    >
                        Verified
                    </div>

                    </div>
                </div>

              </MouseGlowCard>
              </a>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}