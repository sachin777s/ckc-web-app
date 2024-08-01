import React from 'react'
import HeroSection from './components/HeroSection'
import Photography from './components/Photography'
import VideoMarketing from './components/VideoMarketing'
import MarketingConcept from './components/MarketingConcept'
import DronePromotion from './components/DronePromotion'
import Contactus from '../../components/Contactus'

export default function Media() {
  return (
    <main>
      <HeroSection />
      <section className='pt-8 bg-[var(--bg-secondary)]'>
        <Photography />
        <VideoMarketing />
        <MarketingConcept />
        <DronePromotion />
      </section>
      <Contactus />
    </main>
  )
}
