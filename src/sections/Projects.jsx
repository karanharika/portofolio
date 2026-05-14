import SectionTitle from "../components/SectionTitle"

export default function Projects() {
  return (
    <section
      id="projects"
      className="px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <SectionTitle title="Projects" />

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-12
            backdrop-blur-xl
          "
        >
          <h3 className="text-3xl font-semibold">
            AI & Security Systems
          </h3>

          <p className="mt-6 max-w-2xl text-zinc-400">
            Intelligent systems combining machine learning,
            cybersecurity, cloud infrastructure,
            and immersive user experiences.
          </p>
        </div>

      </div>
    </section>
  )
}