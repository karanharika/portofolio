import AmbientBackground from "../components/AmbientBackground"
import Navbar from "../components/Navbar"

import Hero from "../sections/Hero"
import About from "../sections/About"
import Education from "../sections/Education"
import Experience from "../sections/Experience"
import Certificates from "../sections/Certificates"
import Skills from "../sections/Skills"
import Projects from "../sections/Projects"
import Contact from "../sections/Contact"
import Footer from "../sections/Footer"

export default function Home() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        text-white
        snap-y
        snap-mandatory
      "
    >
      <AmbientBackground />

      <Navbar />

      <Hero />

      <About />

      <Education />

      <Experience />

      <Certificates />

      <Skills />

      <Projects />

      <Contact />

      <Footer />
    </main>
  )
}