import React from 'react'
import { MdOutlineKeyboardArrowDown } from "react-icons/md"
import Logo from "../assets/logo.png"
import TransButton from './asssets/TransButton'
import ColorButton from './asssets/ColorButton'

export default function Navbar() {


  return (
    <header className='z-[100] sticky w-full h-[100px] flex items-center justify-center shadow-[0_0_13px_-3px_var(--main-color)]'>
      <nav className='px-2 md:px-4 max-w-[1850px] w-full h-full bg-white flex items-center justify-between'>
        <div>
          <img width={150} src={Logo} alt="..." />
        </div>
        <div className='flex'>
          <div className="">

            <button className="hover:text-[var(--main-color)] text-[20px] font-medium py-2 px-4 rounded inline-flex items-center">
              <span className="mr-1">Home</span>
            </button>

            {/* marketing dropdown menu */}
            <div className="dropdown inline-block relative">
              <button className="hover:text-[var(--main-color)] text-[20px] font-medium py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Marketing</span>
                <MdOutlineKeyboardArrowDown />
              </button>
              <ul className="pb-1 bg-[var(--secondary-color)] dropdown-menu absolute hidden pt-1 shadow-[0_0_12px_-3px_gray] rounded-md">
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Broadcast</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Consulting</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Management</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Pitch Decks</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">PR</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">SEO</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Social Media</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Start-up & Scale</a></li>
              </ul>
            </div>

            {/* website dropdown menu */}
            <div className=" dropdown inline-block relative">
              <button className="hover:text-[var(--main-color)] text-[20px] font-medium py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Website</span>
                <MdOutlineKeyboardArrowDown />
              </button>
              <ul className="pb-1 bg-[var(--secondary-color)] dropdown-menu absolute hidden pt-1 shadow-[0_0_12px_-3px_gray] rounded-md">
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Development</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Hosting</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">PPC</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">SEO</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Content</a></li>
              </ul>
            </div>

            {/* media dropdown menu */}
            <div className="dropdown inline-block relative">
              <button className="hover:text-[var(--main-color)] text-[20px] font-medium py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Media</span>
                <MdOutlineKeyboardArrowDown />
              </button>
              <ul className="pb-1 bg-[var(--secondary-color)] dropdown-menu absolute hidden pt-1 shadow-[0_0_12px_-3px_gray] rounded-md">
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Dron</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Photo</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Video</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Virtual</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">3D</a></li>
              </ul>
            </div>

            {/* design dropdown menu */}
            <div className="dropdown inline-block relative">
              <button className="hover:text-[var(--main-color)] font-medium py-2 px-4 text-[20px] rounded inline-flex items-center">
                <span className="mr-1">Design</span>
                <MdOutlineKeyboardArrowDown />
              </button>
              <ul className="pb-1 bg-[var(--secondary-color)] dropdown-menu absolute hidden pt-1 shadow-[0_0_12px_-3px_gray] rounded-md">
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Branding</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Corporate</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Logo</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Print</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Packaging</a></li>
                <li className=""><a className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap" href="#">Trade</a></li>
              </ul>
            </div>

          </div>
          <ColorButton>Get in Touch</ColorButton>
        </div>
      </nav>
    </header>
  )
}
