import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"
import { Link } from 'react-router-dom'

export default function SocialMediaPromotion() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 mt-5">
          <div className='w-full overflow-hidden mt-5'>
            <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/structure-social-media-73.jpg" alt=".." />
          </div>
        </div>
        <div className="col-md-6">
          <svg xmlns="http://www.w3.org/2000/svg" width="73" height="64" viewBox="0 0 73 64" fill="none" className='mt-5 ms-5'><path d="M32.3046 64V31.3766H18.4598C19.2988 19.7403 23.9138 16.2078 31.4655 12.8831L29.9971 0C12.1667 3.11688 0 14.5455 0 39.2727V64H32.3046ZM73 64V31.3766H59.3649C59.9942 19.7403 64.6092 16.2078 72.1609 12.8831L70.6925 0C52.8621 3.11688 40.6954 14.5455 40.6954 39.2727V64H73Z" fill="#3D89CA"></path></svg>
          <h1 className='fs-1 ms-5 mt-3'>Custom Social Media Marketing.</h1>
          <p className='mt-4 fs-4 mx-5'>At Noida Marketing Company, we craft bespoke social media profiles designed to illuminate and engage your audience. Our experts leverage proven branding strategies to generate leads and build recognition across diverse industries. Partner with us to create a compelling online presence that resonates across all channels and drives meaningful connections.</p>
          <Link to={"/marketing/social-media"} className='mt-5 mb-5 ms-5 block'>
            <ColorButton className="">See our social media promotions</ColorButton>
          </Link>
        </div>
      </div>
    </div>
  )
}
