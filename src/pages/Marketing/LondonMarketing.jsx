import React from 'react'
import ColorButton from "../../components/asssets/ColorButton"

export default function LondonMarketing() {
  return (
    <div className="container">
          <div className="row">
            <div className="col-md-4 mt-5">
              <div className='w-full overflow-hidden mt-5'>
                <img className='w-full h-full transition-all duration-500 hover:scale-125' src="/image/abhinav-sir.jpg" alt=".." />
              </div>
            </div>
            <div className="col-md-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="73" height="64" viewBox="0 0 73 64" fill="none" className='mt-5 ms-5'><path d="M32.3046 64V31.3766H18.4598C19.2988 19.7403 23.9138 16.2078 31.4655 12.8831L29.9971 0C12.1667 3.11688 0 14.5455 0 39.2727V64H32.3046ZM73 64V31.3766H59.3649C59.9942 19.7403 64.6092 16.2078 72.1609 12.8831L70.6925 0C52.8621 3.11688 40.6954 14.5455 40.6954 39.2727V64H73Z" fill="#3D89CA"></path></svg>
              <p className='mt-4 fs-4 ms-5'>In today’s fiercely competitive global market, a distinctive brand identity is not just an advantage but a necessity. As the renowned marketing expert David Ogilvy once highlighted, 'Brands are not merely products—they are a promise, a personality. In a world where choices are abundant, it’s the brand with the strongest, most unique identity that stands out and thrives. Building this sharp and memorable personality is the key to capturing market share and achieving enduring success.</p>
              <h1 className='fs-2 ms-5 mt-4 fw-bold'>Mr. Abhinav Tiwari</h1>
              <p className='fs-4 ms-5'>Founder & Managing Director</p>
              <ColorButton className="fs-4 mt-4 mb-5 ms-5 rounded-pill ">Discover the Noida Markeing Company team</ColorButton>
            </div>
          </div>
        </div>
  )
}
