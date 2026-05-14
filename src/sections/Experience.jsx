// import Reveal from "../components/Reveal"
// import MouseGlowCard from "../components/MouseGlowCard"
// import SectionTitle from "../components/SectionTitle"

// const experiences = [
//   {
//     company: "Darktrace",
//     role: "Cyber Engineer",
//     period: "2022 — 2024",
//   },
//   {
//     company: "Rhythm Immigration",
//     role: "IT Support Administrator",
//     period: "2021 — 2022",
//   },
//   {
//     company: "BuiltSpace Technologies",
//     role: "Web Developer (Intern)",
//     period: "2021",
//   },
//   {
//     company: "DANS L'JARDIN + TEDx Abbotsford",
//     role: "Web Developer (Intern)",
//     period: "2020",
//   },
  
// ]

// export default function Experience() {
//   return (
//     <section
//       id="experience"
//       className="
//         relative
//         min-h-screen
//         snap-start
//         items-center
//         px-6
//         py-32
//       "
//     >
//       <div className="mx-auto max-w-6xl">

//         <Reveal>
//             <SectionTitle title="Experience" />
//         </Reveal>

//         <div className="space-y-8">

//   {experiences.map((exp, index) => (
//     <Reveal
//       key={exp.company}
//       delay={0.2 + index * 0.2}
//       y={80}
//       scale={0.95}
//     >
//       <MouseGlowCard
//         className="
//             group
//             p-8
//             hover:-translate-y-1
//         "
//         >

//         {/* Hover Glow */}
//         <div
//           className="
//             absolute
//             inset-0
//             opacity-0
//             transition-opacity
//             duration-500
//             group-hover:opacity-100
//             bg-gradient-to-br
//             from-cyan-500/10
//             via-transparent
//             to-purple-500/10
//           "
//         />

//         <div className="relative z-10 flex items-center justify-between">

//           <div>
//             <h3 className="text-2xl font-semibold tracking-tight">
//               {exp.company}
//             </h3>

//             <p className="mt-2 text-zinc-400">
//               {exp.role}
//             </p>
//           </div>

//           <span className="text-zinc-500">
//             {exp.period}
//           </span>

//         </div>
//       </MouseGlowCard>
//     </Reveal>
//   ))}

// </div>

//       </div>
//     </section>
//   )
// }

import Reveal from "../components/Reveal"
import SectionTitle from "../components/SectionTitle"
import MouseGlowCard from "../components/MouseGlowCard"

const experiences = [
  {
    company: "Darktrace",
    role: "Cyber Engineer",
    period: "2022 — 2024",
    info: "Deploying, integrating, and optimizing Darktrace's cyber defense systems while resolving any obstacles during the operations in diverse enterprise environments"                
  },
  {
    company: "Rhythm Immigration",
    role: "IT Support Administrator",
    period: "2021 — 2022",
    info: "Provisioning, configuring, and maintaining core IT infrastructure while proactively resolving technical hindrances to ensure seamless business continuity"
  },
  {
    company: "BuiltSpace Technologies",
    role: "Web Developer (Intern)",
    period: "2021",
    info: "Optimized mission-critical legacy PHP backends by integrating parallelized batch processing, reducing execution times and resolving complex concurrency obstacles within production environments"                
  },
  {
    company: "DANS L'JARDIN + TEDx Abbotsford",
    role: "Web Developer (Intern)",
    period: "2020",
    info: "Developed a scalable, online booking ecosystem for event entertainment, leveraging ReactJS to create an intuitive user journey for discovering, vetting, and securing live talent for diverse event scales."                
  },
  
]

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        min-h-screen
        snap-start
        px-6
        py-40
      "
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 lg:grid-cols-[300px_1fr]">

        {/* Sticky Left Side */}
        <div className="lg:sticky lg:top-32 lg:h-fit">

          <Reveal>
            <SectionTitle title="Experience" />
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-zinc-400 leading-relaxed">
              Building secure infrastructure,
              intelligent systems,
              and immersive digital experiences
              across cybersecurity and software engineering.
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

          {experiences.map((exp, index) => (
            <Reveal
              key={exp.company}
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
                    border-cyan-400/40
                    bg-cyan-300
                    shadow-[0_0_30px_rgba(34,211,238,0.8)]
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
                      from-cyan-500/10
                      via-transparent
                      to-purple-500/10
                    "
                  />

                  <div className="relative z-10">

                    <div className="flex items-center justify-between">

                      <div>
                        <h3
                          className="
                            text-3xl
                            font-semibold
                            tracking-tight
                          "
                        >
                          {exp.company}
                        </h3>

                        <p className="mt-3 text-zinc-400">
                          {exp.role}
                        </p>
                      </div>

                      <span className="text-zinc-500">
                        {exp.period}
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
                      {exp.info}
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