import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"
import TransButton from "../../../components/asssets/TransButton"
import { IoIosArrowDown } from "react-icons/io"


export default function SocialMedia() {
  return (
    <>
    <section style={{backgroundImage: 'url(/image/mobile-design.jpg)', backgroundSize: 'cover', paddingBottom: '200px'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
           
          </div>
          <div className="col-md-6 mt-5">
          <h1 className='fs-1 fw-bold ms-5 mt-5'>Social Media <br/> Marketing Agency <br/> London.</h1>
            <p className='ms-5 mt-4 fs-3'>The internet is an endlessly vast space, but for every business, there's a potential customer - someone who could be reached with social media.</p>
            <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill">View our designs</ColorButton>
            <TransButton className="fs-4 mt-5 ms-5 rounded-pill">Get in touch</TransButton>
          </div>
        </div>
      </div>

      <div onClick={()=>window.scrollBy(0,600)}
         className='absolute -bottom-20 left-1/2 text-center flex flex-col'>
          <span className='fs-5'>Scroll Down</span>
          <span className='mt-4 self-center fs-4'><IoIosArrowDown /></span>
        </div>
    </section>

    <section>
      <img style={{marginLeft: '55px', marginTop: '100px'}} src="/image/indulge.jpg" alt="image" />
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <img src="/image/FOOD-.webp" alt="image" />
          </div>
          <div className="col-md-6 mt-5">
            <img src="/image/INSTA-READY.webp" alt="" />
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <img src="/image/pre-prepared.jpg" alt="" />
            </div>
            <div className="col-md-6 mt-5">
              <img className='ms-3' src="/image/glass-orange.jpg" alt="foos-image" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <img src="/image/1-2-1.png" alt="" />
            </div>
            <div className="col-md-6 mt-5">
              <img src="/image/2-3-1.webp" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <img src="/image/2.webp" alt="" />
            </div>
            <div className="col-md-6 mt-5">
              <img src="/image/10.V1.webp" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <img src="/image/25-1-1.png" alt="" />
            </div>
            <div className="col-md-6 mt-5">
              <img src="/image/26-1-1.png" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <img src="/image/STORY-1-1-scaled.webp" alt="" />
            </div>
            <div className="col-md-6 mt-5">
              <img src="/image/STORY-8-scaled.webp" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <img src="/image/Ramadan.jpg" alt="" />
            </div>
            <div className="col-md-6 mt-5">
              <img src="/image/scaled.jpg" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <img src="/image/SERVICES-.webp" alt="" />
            </div>
            <div className="col-md-6 mt-5">
              <img src="/image/17.webp" alt="" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mt-5">
              <h1 className='fs-1 mt-5 ms-5'>Enhance social media marketing with Grade-A photography.</h1>
              <p className='fs-4 mt-4 ms-5'>The authenticity and perceived quality of a business can be significantly enhanced by using top-tier photography, we pride ourselves on delivering unique and beautiful imagery.</p>
              <p className='fs-5 ms-5 mt-4 fw-bold'>Tags: Social media agency London, Social media marketing agency London, Social media marketing company London, Social media company London, Social media advertising London</p>
              <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill">View Our Grade-A Imagery</ColorButton>
            </div>
            <div className="col-md-6 mt-5">
              <img className='mt-5' src="/image/armchair-green.jpg" alt="green-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
  
}
