import React from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import { ImWhatsapp } from "react-icons/im";
import { TfiEmail } from "react-icons/tfi";

export default function Footer() {
  return (
    <footer className='-z-10 mt-5 px-2 md:px-4 mx-auto max-w-[1680px]'>
      <section style={{ backgroundColor: 'var(--main-color)' }}>
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <img style={{ height: '170px'}} src="/image/CKC Abhinaw-04.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ms-3 text-white">
            <div className="col-md-2">
              <Link to={'/marketing'}><h1 className='fs-4 fw-bold'>Marketing</h1></Link>
              <div className="mt-4 gap-5">
                <ScrollLink to="consulting" offset={-150} duration={500}><p className='fs-5'></p>Consulting</ScrollLink>
                <Link to={'/'}><p className='mt-2 fs-5'></p>Management</Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Pitch Decks</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Public Relations</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>SEO</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Social Media</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Start-Up & Scale</p></Link>
              </div>
            </div>
            <div className="col-md-2 ms-5">
              <Link to={'/website'}><h1 className='fs-4 fw-bold'>Websites</h1></Link>
              <div className="mt-4 gap-5">
                <ScrollLink to="content" offset={-150} duration={500}><p className='fs-5'>Content</p></ScrollLink>
                <Link to={'/'}><p className='mt-2 fs-5'>Design</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Development</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>PPC</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>SEO</p></Link>
              </div>
            </div>
            <div className="col-md-2 ms-5">
              <Link to={'/media'}><h1 className='fs-4 fw-bold'>Media</h1></Link>
              <div className="mt-4 gap-5">
                <Link to={'/media/drone'}><p className='fs-5'>Drone</p></Link>
                <Link to={'/media/photo'}><p className='mt-2 fs-5'>Photo</p></Link>
                <Link to={'/media/video'}><p className='mt-2 fs-5'>Video</p></Link>
                <Link to={'/media/virtual'}><p className='mt-2 fs-5'>Virtual Tours</p></Link>
                <Link to={'/media/3d'}><p className='mt-2 fs-5'>3D</p></Link>
              </div>
            </div>
            <div className="col-md-2 ms-5">
              <Link to={'/design'}><h1 className='fs-4 fw-bold'>Design</h1></Link>
              <div className="mt-4 gap-5">
                <Link to={'/design/branding'}><p className='fs-5'>Branding</p></Link>
                <Link to={'/design/corporate'}><p className='mt-2 fs-5'>Corporate</p></Link>
                <Link to={'/design/logo'}><p className='mt-2 fs-5'>Logos</p></Link>
                <Link to={'/design/print'}><p className='mt-2 fs-5'>Print</p></Link>
                <Link to={'/design/packaging'}><p className='mt-2 fs-5'>Product</p></Link>
                <Link to={'/design/trade'}><p className='mt-2 fs-5'>Trade Shows</p></Link>
              </div>
            </div>
            <div className="col-md-2 ms-5">
              <Link to={'/about'}><h1 className='fs-4 fw-bold'>About Us</h1></Link>
              <div className="mt-4 gap-5">
                <Link to={'/'}><p className='fs-5'>Team</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Accolades</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Google Leading Partner</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Job Opportunities</p></Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="mt-3 text-white">
          <hr/>
          </div>
          <div className="row ms-3 text-white">
            <div className="col-md-6">
              <h1 className='fs-3 mt-4'>Get In Touch:</h1>
              <Link target="blank" to={'https://api.whatsapp.com/message/RO4GMC4S2KC6K1?autoload=1&app_absent=0'}><p className='fs-5 mt-3 flex items-center gap-2'><ImWhatsapp />7088869333</p></Link>
              <Link to={'/'}><p className='fs-5 mt-3 flex items-center gap-2'><TfiEmail />info@ckcgi.com</p></Link>
              <Link to={'/'}><p className='fs-5 mt-3'><i className="bi bi-geo-alt fs-3"></i> Chandrakrishna Creative, Main Road Hoshiyarpur, Shop No-2, 2nd Floor, opp. Metro Pillar No-235, Sector 51, Noida, Uttar Pradesh 201301</p></Link>
            </div>
            <div className="col-md-6">
              <h1 className='fs-3 mt-4'>Visit Us:</h1>
              <iframe className='mt-4' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11150.578635117075!2d77.36947217933428!3d28.584556524624865!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52b63569ff1%3A0xa938afb4674597da!2sChandrakrishna%20Creative%20(CKCGI)!5e1!3m2!1sen!2sin!4v1723296044888!5m2!1sen!2sin" width="" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
        <div className="container mt-5 text-white fs-5 pb-4">
          <p className='text-center'>Terms and Conditions Copyright © 2024 All right reserved. Crafted with precision by Codfty</p>
        </div>
      </section>
    </footer>
  )
}
'var(--main-color)' 
