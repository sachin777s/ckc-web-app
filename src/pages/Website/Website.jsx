import React from 'react'
import HeroSection from './HeroSection'
import InformationalVideo from './InformationalVideo'
import Booking from './Booking'
import Responsive from './Responsive'
import States from './States'
import SixWays from './SixWays'
import SEO from './SEO'
import SEOstates from './SEOstates'
import ServicesTypingEffect from './ServicesTypingEffect'
import WebHosting from './WebHosting'
import PlayPerClick from './PlayPerClick'
import ContentWriting from './ContentWriting'
import FAQ from './FAQ'
import Contactus from '../../components/Contactus'

export default function Website() {
  return (
    <main>
      <HeroSection />
      <InformationalVideo />
      <Booking />
      <Responsive />
      <States />
      <SixWays />
      <SEO />
      <SEOstates />
      <ServicesTypingEffect />
      <WebHosting />
      <PlayPerClick />
      <ContentWriting />
      <FAQ />
      <Contactus />
    </main>
  )
}
