export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        z-50
        flex
        w-full
        items-center
        justify-between
        px-8
        py-6
        backdrop-blur-md
      "
    >
      <a
        href="#hero"
        className="text-lg font-semibold tracking-tight"
      >
        KV
      </a>

      <div className="flex gap-8 text-sm text-zinc-300">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}