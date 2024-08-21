import React from 'react'
import ColorButton from '../../../components/asssets/ColorButton'
import TransButton from '../../../components/asssets/TransButton'
import { IoIosArrowDown } from "react-icons/io"
import { Link } from 'react-router-dom'


export default function Virtual() {
  return (
    <>
      <section style={{ backgroundImage: 'url(/image/man-wearing-virtual-reality.jpg)', backgroundSize: 'cover', paddingBottom: '150px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='mt-5 fs-1 fw-bold text-white'>Immersive 360° <br /> virtual tours.</h1>
              <p className='fs-5 mt-4 text-white'>Stunning HD 360° virtual tours to seamlessly immerse digital browsers into real-life experiences.</p>
              <Link to="/media/3d">
                <ColorButton className="mt-5 mb-5">Explore 3D concepts</ColorButton>
              </Link>
              <br />
              <Link to={"/get-in-touch"}>
                <TransButton className=" mb-5">Get in touch</TransButton>
              </Link>
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>
        <div onClick={() => window.scrollBy(0, 600)}
          className='absolute -bottom-10 left-1/2 text-center flex flex-col'>
          <span className='text-white'>Scroll Down</span>
          <span className='mt-4 self-center fs-3 text-white'><IoIosArrowDown /></span>
        </div>
      </section>
      <section>
        <div className="container">
          <h1 className='mt-5 fs-1 fw-bold'>Powerful Immersive Marketing</h1>
          <p className='fs-5 mt-4'>Ultra-engaging 360° digital content can help buyers see what they will experience when visiting the location of their choice before making an appointment or purchasing product(s).</p>
          <Link to={"/get-in-touch"}>
            <ColorButton className="mt-5 mb-5">Contact Us Today</ColorButton>
          </Link>
          <div className="mt-5">
            <img src="/image/old-books-library-table.jpg" alt="" />
          </div>
          <div className="row">
            <div className="col-md-6 mt-5">
              <iframe className='mt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19887.79557271244!2d-2.5726051!3d51.4586256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e9!4m0!4m0!5e0!3m2!1sen!2sin!4v1722493321332!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div className="col-md-6 mt-5">
              <iframe className='mt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19878.750695415754!2d-2.6160944!3d51.4793807!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e9!4m0!4m0!5e0!3m2!1sen!2sin!4v1722494375478!5m2!1sen!2sin" width="600" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
