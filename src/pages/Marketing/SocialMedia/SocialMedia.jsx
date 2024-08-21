import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"
import TransButton from "../../../components/asssets/TransButton"
import { IoIosArrowDown } from "react-icons/io"
import { Link } from 'react-router-dom'


export default function SocialMedia() {
  return (
    <>
      <section className='' style={{ backgroundImage: 'url(/image/social-media-marketing-concept-marketing-with-applications.jpg)', backgroundSize: 'cover', paddingBottom: '200px', paddingTop: '50px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
            <h1 className='fs-1 fw-bold ms-5 mt-5'>Social Media Marketing Expertise in India</h1>
              <p className='ms-5 mt-4 fs-3'>In the boundless realm of the internet, there’s a potential customer just waiting for your message. we excel in leveraging social media marketing to bridge the gap between your business and your ideal audience.</p>
              <div className='mt-5 ms-5 flex items-center gap-4 flex-col md:flex-row'>
                <Link to="/design">
                  <ColorButton>View our designs</ColorButton>
                </Link>
                <Link to="/get-in-touch">
                  <TransButton>Get in touch</TransButton>
                </Link>
              </div>
            </div>
            <div className="col-md-6 mt-5">
              
            </div>
          </div>
        </div>
        <div onClick={() => window.scrollBy(0, 600)}
          className='absolute left-1/2 text-center flex flex-col'>
          <span className='fs-5'>Scroll Down</span>
          <span className='mt-4 self-center fs-4'><IoIosArrowDown /></span>
        </div>
      </section>

      <section>
        <img style={{ marginLeft: '55px', marginTop: '100px' }} src="/image/indulge.jpg" alt="image" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-5">
              <img src="/image/FOOD-.webp" alt=".." />
            </div>
            <div className="col-md-6 mt-5">

              <img src="/image/INSTA-READY.webp" alt="" />

            </div>
            <div className="row">
              <div className="col-md-6 mt-5">
                <div className="overflow-hidden">
                  <img src="/image/pre-prepared.jpg" className='w-full h-full transition-all duration-500 hover:scale-125' alt="" />
                </div>
              </div>
              <div className="col-md-6 mt-5">
                <div className="overflow-hidden">
                  <img className='ms-3 w-full h-full transition-all duration-500 hover:scale-125' src="/image/glass-orange.jpg" alt="foos-image" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-5">
                <div className="">
                  <img src="/image/1-2-1.png" alt="" />
                </div>
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
                <h1 className='fs-1 mt-5 ms-5'>Transform Your Social Media Marketing in India with Premium Photography</h1>
                <p className='fs-4 mt-4 ms-5'>In the expansive world of social media, authenticity and quality are crucial. By integrating high-caliber photography, we elevate your brand’s image with striking visuals that truly stand out. Our commitment to exceptional imagery enhances your business’s presence and appeal, setting you apart in the Indian market.</p>
                <p className='fs-5 ms-5 mt-4 fw-bold'>Tags: Social media Serviced India, Social media marketing Services India, Social media marketing company India, Social media company India, Social media advertising India</p>
                <Link className="block mt-5 mb-5 ms-5" to={"/media/photo"}>
                  <ColorButton>View Our Grade-A Imagery</ColorButton>
                </Link>
              </div>
              <div className="col-md-6 mt-5">
                <div className="overflow-hidden">
                  <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/armchair-green.jpg" alt="green-image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )

}
