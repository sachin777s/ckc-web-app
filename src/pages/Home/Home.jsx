import React from 'react'
import HeroSection from './HeroSection'
import Partners from './Partners'
import WebsitePortFolio from "./WebsitePortFolio"
import Promotion from './Promotion'
import Branding from './Branding'
import SongPromotion from './SongPromotion'
import VirtualModeling from './VirtualModeling'
import VirtualConcept from './VirtualConcept'
import GrowthPartner from './GrowthPartner'
import Contactus from '../../components/Contactus'

export default function Home() {
  return (
    <main className='w-full'>
      <HeroSection />
      <Partners />
      <WebsitePortFolio />
      <Promotion />
      <Branding />
      <SongPromotion />
      <VirtualModeling />
      <VirtualConcept />
      <GrowthPartner />
      <Contactus />
    </main>
  )
}
