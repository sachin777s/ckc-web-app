import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='-z-10 mt-5 px-2 md:px-4 mx-auto max-w-[1680px]'>
      <section style={{ backgroundColor: 'var(--main-color)' }}>
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <img style={{ height: '200px' }} src="/image/CKC Abhinaw-04.png" alt="" />
              </div>
              <div className="col-md-4 mt-4 text-white fs-5">
                <ul>
                  <li>10-11 Saville PI,</li>
                  <li>Clifton Village,</li>
                  <li>Bristol,</li>
                  <li>BS8 4EJ</li>
                </ul>
              </div>
              <div className="col-md-4 mt-4 text-white fs-5">
                <ul>
                  <li>10-11 Saville PI,</li>
                  <li>Clifton Village,</li>
                  <li>Bristol,</li>
                  <li>BS8 4EJ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ms-3 text-white">
            <div className="col-md-2">
              <Link to={'/'}><h1 className='fs-4 fw-bold'>Marketing</h1></Link>
              <div className="mt-4 gap-5">
                <Link to={'/'}><p className='fs-5'></p>Consulting</Link>
                <Link to={'/'}><p className='mt-2 fs-5'></p>Management</Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Pitch Decks</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Public Relations</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>SEO</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Social Media</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Start-Up & Scale</p></Link>
              </div>
            </div>
            <div className="col-md-2">
              <Link to={'/'}><h1 className='fs-4 fw-bold'>Websites</h1></Link>
              <div className="mt-4 gap-5">
                <Link to={'/'}><p className='fs-5'>Content</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Design</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Development</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>PPC</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>SEO</p></Link>
              </div>
            </div>
            <div className="col-md-2">
              <Link to={'/'}><h1 className='fs-4 fw-bold'>Media</h1></Link>
              <div className="mt-4 gap-5">
                <Link to={'/media/drone'}><p className='fs-5'>Drone</p></Link>
                <Link to={'/media/photo'}><p className='mt-2 fs-5'>Photo</p></Link>
                <Link to={'/media/video'}><p className='mt-2 fs-5'>Video</p></Link>
                <Link to={'/media/virtual'}><p className='mt-2 fs-5'>Virtual Tours</p></Link>
                <Link to={'/media/3d'}><p className='mt-2 fs-5'>3D</p></Link>
              </div>
            </div>
            <div className="col-md-2">
              <Link to={'/'}><h1 className='fs-4 fw-bold'>Design</h1></Link>
              <div className="mt-4 gap-5">
                <Link to={'/'}><p className='fs-5'>Branding</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Corporate</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Logos</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Print</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Product</p></Link>
                <Link to={'/'}><p className='mt-2 fs-5'>Trade Shows</p></Link>
              </div>
            </div>
            <div className="col-md-2">
              <Link to={'/'}><h1 className='fs-4 fw-bold'>About Us</h1></Link>
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
          <div className="row ms-3 mt-5 text-white">
            <div className="col-md-6">
              <div className="row mt-4">
                <div className="col-md-3">
                  <img src="/image/order.png" alt="" />
                </div>
                <div className="col-md-3">
                  <h1 className='fs-3'>Get In Touch:</h1>
                  <Link to={'/'}><p className='fs-5 mt-3'>+ 9560337275</p></Link>
                  <Link to={'/'}><p className='fs-5 mt-3'>info@londonmarketingcompany.co.uk</p></Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row mt-4">
                <div className="col-md-3">
                  <img src="/image/information-point.png" alt="" />
                </div>
                <div className="col-md-3">
                  <h1 className='fs-3'>Visit Us:</h1>
                  <Link to={'/'}><p className='fs-5 mt-3'>Berkeley Square,
                    Berkeley Square House,
                    2nd Floor,
                    London,
                    W1J 6BD</p></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container ms-5 mt-5 text-white fs-5 pb-5">
          <p style={{ marginLeft: '190px' }}>Terms and Conditions
            Privacy Policy
            © 2023 London Marketing Company - 13375416</p>
        </div>
      </section>
    </footer>
  )
}
'var(--main-color)' 
