import React from 'react'
import HeroSection from './components/HeroSection'
import States from './components/States'
import OurTeam from './components/OurTeam'
import Jobs from './components/Jobs'
import ProfessionalMarketing from './components/ProfessionalMarketing'
import ServicesTypingEffect from './components/ServicesTypingEffect'
import ContactDetails from './components/ContactDetails'
import ContactUs from "../../components/Contactus"

export default function About() {
  return (
    <main className='w-full'>
      <HeroSection />
      <section className='my-8 pb-4 bg-[var(--bg-secondary)]'>
        <States />
        <OurTeam />
        <Jobs />
      </section>
      <ProfessionalMarketing />
      <ServicesTypingEffect />
      <ContactDetails />
      <ContactUs />
    </main>
  )
}
