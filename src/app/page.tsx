import Hero from '@/components/sections/home/Hero'
import Features from '@/components/sections/home/Features'
import Process from '@/components/sections/home/Process'
import Benefits from '@/components/sections/home/Benefits'
import Services from '@/components/sections/home/Services'
import Casestudies from '@/components/sections/home/Casestudies'
import Contact from '@/components/sections/home/Contact'

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <Hero />
      </section>
      <section id="features">
        <Features />
      </section>
      <section id="process">
        <Process />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="case-studies">
        <Casestudies />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  )
}