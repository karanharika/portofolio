import Reveal from "../components/Reveal"
import SectionTitle from "../components/SectionTitle"

const skillGroups = [
  {
    category: "Programming",
    skills: [
      "Python",
      "C/C++",
      "JavaScript",
      "SQL",
      "React",
      "Node.js",
    ],
  },
  {
    category: "Cybersecurity",
    skills: [
      "Network Security",
      "Threat Detection",
      "Ethical Hacking",
      "SIEM",
      "Cloud Security",
    ],
  },
  {
    category: "Cloud & Infrastructure",
    skills: [
      "AWS",
      "Azure",
      "GCP",
      "VMware",
      "Nutanix",
      "Hyper-V",
    ],
  },
  {
    category: "AI & Systems",
    skills: [
      "TensorFlow",
      "Machine Learning",
      "Automation",
      "System Design",
      "CI/CD",
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        min-h-screen
        snap-start
        overflow-hidden
        px-6
        py-40
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          left-[-10%]
          bottom-[0%]
          h-[600px]
          w-[600px]
          rounded-full
          bg-purple-500/10
          blur-3xl
        "
      />

      <div className="mx-auto max-w-7xl">

        <Reveal>
          <SectionTitle title="Capabilities" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mb-20 max-w-3xl leading-relaxed text-zinc-400">
            Engineering across cybersecurity,
            cloud-native infrastructure,
            intelligent systems,
            immersive interfaces,
            and scalable software architecture.
          </p>
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2 ">

          {skillGroups.map((group, index) => (
            <Reveal
              key={group.category}
              delay={0.2 + index * 0.15}
              y={100}
              scale={0.96}
            >
              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[10px]
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-10
                  backdrop-blur-xl
                "
              >

                {/* Gradient Layer */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-cyan-500/5
                    via-transparent
                    to-purple-500/5
                  "
                />

                <div className="relative z-10">

                  <h3
                    className="
                      text-3xl
                      font-semibold
                      tracking-tight
                    "
                  >
                    {group.category}
                  </h3>

                  <div className="mt-8 flex flex-wrap gap-4">

                    {group.skills.map((skill) => (
                      <div
                        key={skill}
                        className="
                          rounded-full
                          border
                          border-white/10
                          bg-white/[0.04]
                          px-5
                          py-3
                          text-sm
                          text-zinc-300
                          transition-all
                          duration-300
                          hover:border-cyan-400/30
                          hover:bg-cyan-400/10
                        "
                      >
                        {skill}
                      </div>
                    ))}

                  </div>

                </div>

              </div>
            </Reveal>
          ))}

        </div>

      </div>
    </section>
  )
}