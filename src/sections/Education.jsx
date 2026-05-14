import Reveal from "../components/Reveal"
import SectionTitle from "../components/SectionTitle"
import MouseGlowCard from "../components/MouseGlowCard"

const education = [
  {
    school: "Thapar Institute of Engineering & Technology",
    city: "Patiala, Punjab",
    degree: "B.E. Computer Science & Engineering",
    period: "2024 - Present",
    description:
      "Focused on advanced computer science, artificial intelligence, systems engineering, and modern software architecture.",
  },
  {
    school: "British Columbia Institute of Technology",
    city: "Burnaby, British Columbia",
    degree: "Undergrad - Computer Information Technology (with Distinction)",
    period: "2019 - 2021",
    description:
      "Built a strong foundation in software engineering, cybersecurity, cloud systems, networking, and infrastructure technologies.",
  },
]

export default function Education() {
  return (
    <section
      id="education"
      className="
        relative
        min-h-screen
        snap-start
        px-6
        py-40
      "
    >

      {/* Ambient Glow */}
      <div
        className="
          absolute
          left-[-10%]
          top-[20%]
          h-[500px]
          w-[500px]
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[300px_1fr]">

        {/* Sticky Left */}
        <div className="lg:sticky lg:top-32 lg:h-fit">

          <Reveal>
            <SectionTitle title="Education" />
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 leading-relaxed text-zinc-400">
              Building deep foundations across
              computer science,
              cybersecurity,
              intelligent systems,
              and modern engineering disciplines.
            </p>
          </Reveal>

        </div>

        {/* Timeline */}
        <div className="relative space-y-10">

          {/* Vertical Line */}
          <div
            className="
              absolute
              left-6
              top-0
              h-full
              w-px
              bg-white/10
            "
          />

          {education.map((edu, index) => (
            <Reveal
              key={edu.school}
              delay={0.2 + index * 0.2}
              y={120}
              scale={0.94}
            >
              <div className="relative pl-20">

                {/* Timeline Dot */}
                <div
                  className="
                    absolute
                    left-[14px]
                    top-10
                    h-4
                    w-4
                    rounded-full
                    border
                    border-purple-400/40
                    bg-purple-300
                    shadow-[0_0_30px_rgba(192,132,252,0.8)]
                  "
                />

                <MouseGlowCard
                  className="
                    group
                    p-10
                    transition-all
                    duration-700
                    hover:-translate-y-1
                  "
                >

                  {/* Hover Gradient */}
                  <div
                    className="
                      absolute
                      inset-0
                      opacity-0
                      transition-opacity
                      duration-700
                      group-hover:opacity-100
                      bg-gradient-to-br
                      from-purple-500/10
                      via-transparent
                      to-cyan-500/10
                    "
                  />

                  <div className="relative z-10">

                    <div className="flex items-center justify-between">

                      <div>
                        <h3
                          className="
                            max-w-2xl
                            text-3xl
                            font-semibold
                            tracking-tight
                          "
                        >
                          {edu.school}
                        </h3>

                        <h4
                          className="
                            max-w-2xl
                            text-md
                            tracking-tight
                            text-zinc-400
                          "
                        >
                          {edu.city}
                        </h4>

                        <p className="mt-3 text-zinc-400">
                          {edu.degree}
                        </p>
                      </div>

                      <span className="text-zinc-500">
                        {edu.period}
                      </span>

                    </div>

                    <p
                      className="
                        mt-8
                        max-w-2xl
                        leading-relaxed
                        text-zinc-500
                      "
                    >
                      {edu.description}
                    </p>

                  </div>

                </MouseGlowCard>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}