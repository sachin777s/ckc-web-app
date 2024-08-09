import React from 'react'
import { Link } from 'react-router-dom'

export default function SEO() {
  return (
    <>
    <div className="container">
    <h1 className='fs-1 text-center mt-5 fw-bold'>What is Search Engine <br /> Optimisation?</h1>
    <div className="row">
      <div className="col-md-4">
        <div className="card mt-5 rounded-0 border-0 transition-all duration-500 hover:shadow-[0_0_20px_-3px_black]">
          <div style={{ margin: '0 auto' }}>
            <img className='mt-5' src="/image/text.png" alt="text-image " />
          </div>
          <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>The <br /> Language</h1>
          <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mt-5 rounded-0 border-0 transition-all duration-500 hover:shadow-[0_0_20px_-3px_black]" >
          <div style={{ margin: '0 auto' }}>
            <img className='mt-5' src="/image/mail.png" alt="text-image" />
          </div>
          <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>Call-To- <br />Actions</h1>
          <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mt-5 rounded-0 border-0 transition-all duration-500 hover:shadow-[0_0_20px_-3px_black]">
          <div style={{ margin: '0 auto' }}>
            <img className='mt-5' src="/image/operational-system.png" alt="text-image" />
          </div>
          <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>Business <br /> Offering</h1>
          <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
        </div>
      </div>
    </div>

    <div className="row">
      <div className="col-md-4">
        <div className="card mt-5 rounded-0 border-0 transition-all duration-500 hover:shadow-[0_0_20px_-3px_black]">
          <div style={{ margin: '0 auto' }}>
            <img className='mt-5' src="/image/notebook.png" alt="text-image" />
          </div>
          <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>The <br /> Process</h1>
          <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
        </div>
      </div>

      <div className="col-md-4 mb-5">
        <div className="card mt-5 rounded-0 border-0 transition-all duration-500 hover:shadow-[0_0_20px_-3px_black]">
          <div style={{ margin: '0 auto' }}>
            <img className='mt-5' src="/image/adware.png" alt="text-image " />
          </div>
          <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>On-Page <br /> Content</h1>
          <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card mt-5 rounded-0 border-0 transition-all duration-500 hover:shadow-[0_0_20px_-3px_black]">
          <div style={{ margin: '0 auto' }}>
            <img className='mt-5' src="/image/media.png" alt="text-image " />
          </div>
          <h1 className='fs-2 mt-3 mb-5 fw-bold text-center'>Website <br /> Speed</h1>
          <Link to={'/'}><p className='text-center fs-4 mt-5 mb-5'>Learn more <i class="bi bi-arrow-right text-primary"></i></p></Link>
        </div>
      </div>
    </div>
  </div>
  </>
  )
}
