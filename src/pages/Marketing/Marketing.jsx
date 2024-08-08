import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import TransButton from "../../components/asssets/TransButton"
import { Link } from 'react-router-dom'
import { IoIosArrowDown } from "react-icons/io"
import HeroSection from './HeroSection'
import BusinessMarketing from './BusinessMarketing'
import LondonMarketing from './LondonMarketing'
import TrainedSpecialists from './TrainedSpecialists'
import { PitchDecks } from './PitchDecks'
import StartupAndScalel from './StartupAndScale'
import SocialMediaPromotion from './SocialMediaPromotion'
import EnticeCustomers from './EnticeCustomers'
import ContentWriting from './ContentWriting'
import ContentCanWork from './ContentCanWork'
import StorySharing from './StorySharing'
import SEO from './SEO'
import TypingEffect from './TypingEffect'
import Contactus from '../../components/Contactus'
import Broadcast from './Borascast'

export default function Marketing() {

  return (
    <>
      <section style={{ backgroundImage: 'url(/image/bulding.jpg)', backgroundSize: 'cover', paddingTop: '100px', paddingBottom: "100px", position: "relative" }}>
        <HeroSection />

        <div onClick={() => window.scrollBy(0, 600)}
          className='absolute bottom-20 left-1/2 text-center flex flex-col'>
          <span className='text-danger'>Scroll Down</span>
          <span className='mt-4 self-center text-danger fs-3'><IoIosArrowDown /></span>
        </div>

      </section>

      <section style={{ backgroundColor: "#f1f1f1" }}>
        <BusinessMarketing />
        <LondonMarketing />
        <TrainedSpecialists />
        <PitchDecks />
        <StartupAndScalel />
        <SocialMediaPromotion />
        <EnticeCustomers />
        <ContentWriting />
        <ContentCanWork />
        <Broadcast />
        <StorySharing />
        <SEO />
      </section>
      <TypingEffect />
      <Contactus />
    </>
  )
}

