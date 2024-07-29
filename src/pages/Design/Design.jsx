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
      <Branding />
      <LogoDesign/>
      <TradeShows/>
      <Packaging/>
      <Corporate/>
      <PrintDesign/>
      <Contactus/>
    </main>
  )
}
