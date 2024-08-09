import React from 'react'
import ColorButton from "../../../components/asssets/ColorButton"
import TransButton from "../../../components/asssets/TransButton"
import { IoIosArrowDown } from "react-icons/io"


export default function SocialMedia() {
  return (
    <>
      <section style={{ backgroundImage: 'url(/image/mobile-design.jpg)', backgroundSize: 'cover', paddingBottom: '200px' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">

            </div>
            <div className="col-md-6 mt-5">
              <h1 className='fs-1 fw-bold ms-5 mt-5'>Social Media Marketing Services in India</h1>
              <p className='ms-5 mt-4 fs-3'>The internet is an endlessly vast space, but for every business, there's a potential customer waiting to be reached through social media. we specialize in harnessing the power of social media marketing in India to connect you with your ideal.</p>
              <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill">View our designs</ColorButton>
              <TransButton className="fs-4 mt-5 ms-5 rounded-pill">Get in touch</TransButton>
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
                <h1 className='fs-1 mt-5 ms-5'>Elevate Your Social Media Marketing in India with Premium Photography.</h1>
                <p className='fs-4 mt-4 ms-5'>In the vast realm of social media, authenticity and quality are paramount. By incorporating top-tier photography, we elevate your brand’s image, showcasing unique and stunning visuals that set you apart. we take pride in delivering exceptional imagery that enhances your business’s presence and appeal in the Indian market.</p>
                <p className='fs-5 ms-5 mt-4 fw-bold'>Tags: Social media Serviced India, Social media marketing Services India, Social media marketing company India, Social media company India, Social media advertising India</p>
                <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill">View Our Grade-A Imagery</ColorButton>
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
