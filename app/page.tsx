import Hero from "@/components/portfolio/hero"
import Projects from "@/components/portfolio/projects"
import Experience from "@/components/portfolio/experience"
import Skills from "@/components/portfolio/skills"
import Services from "@/components/portfolio/services"
// import Testimonials from "@/components/portfolio/testimonials"
import Contact from "@/components/portfolio/contact"

export const metadata = {
  title: 'Wave Mayola — Software Engineer',
}

export default function Page() {
  return (
    <>
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Services />
      {/* <Testimonials /> */}
      <Contact />
    </>
  )
}
