import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function SocialMediaPromotion() {
  return (
    <div className="container">
    <div className="row">
      <div className="col-md-6 mt-5">
        <div className='w-full overflow-hidden mt-5'>
          <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/fresh-orange.jpg" alt=".." />
        </div>
      </div>
      <div className="col-md-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="73" height="64" viewBox="0 0 73 64" fill="none" className='mt-5 ms-5'><path d="M32.3046 64V31.3766H18.4598C19.2988 19.7403 23.9138 16.2078 31.4655 12.8831L29.9971 0C12.1667 3.11688 0 14.5455 0 39.2727V64H32.3046ZM73 64V31.3766H59.3649C59.9942 19.7403 64.6092 16.2078 72.1609 12.8831L70.6925 0C52.8621 3.11688 40.6954 14.5455 40.6954 39.2727V64H73Z" fill="#3D89CA"></path></svg>
        <h1 className='fs-1 ms-5 mt-3'>Targeted social media promotions.</h1>
        <p className='mt-4 fs-4 mx-5'>The London Marketing Company is here to help you establish your online presence with a social media profile that will enlighten and engage. Our marketing experts have helped companies across the board from all industries generate leads through our effective branding-recognition strategies! The London Marketing Company is here to help you establish your online presence with a social media profile that will resonate across all channels.</p>
        <ColorButton className="fs-4 mt-5 mb-5 ms-5 rounded-pill ">See our social media promotions</ColorButton>
      </div>
    </div>
  </div>
  )
}
