import React from 'react'
import HeroSection from './HeroSection'
import ContactDetails from "./ContactDetails"
import ContactUs from "../../components/Contactus"
import Adderess from './Adderess'
import TypingEffect from './TypingEffect'
import ContactForm from './ContactForm'

export default function GetInTouch() {
    return (
        <main>
            <HeroSection />
            <ContactDetails />
            <ContactUs />
            <Adderess/>
            <TypingEffect />
            <ContactForm/>
        </main>
    )
}
