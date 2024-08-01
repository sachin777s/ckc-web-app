import React from 'react'
import HeroSection from './components/HeroSection'
import Branding from './components/Branding'
import LogoDesign from './components/LogoDesign'
import TradeShows from './components/TradeShows'
import Packaging from './components/Packaging'
import Corporate from './components/Corporate'
import PrintDesign from './components/PrintDesign'
import Contactus from "../../components/Contactus"

export default function Design() {
  return (
    <main>
      <HeroSection />
      <section className='my-8 bg-[var(--bg-secondary)]'>
        <Branding />
        <LogoDesign />
        <TradeShows />
        <Packaging />
        <Corporate />
        <PrintDesign />
      </section>
      <Contactus />
    </main>
  )
}
