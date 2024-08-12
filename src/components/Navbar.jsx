import React, { useState } from 'react';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import Logo from "../assets/logo.png";
import ColorButton from './asssets/ColorButton';
import { NavLink, } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Navbar() {

  const [isNavbarOpen, setisNavbarOpen] = useState(false);

  return (
    <header className='navbar z-[100] fixed w-full h-[100px] bg-[var(--secondary-color)] flex items-center justify-center shadow-[0_0_13px_-3px_var(--main-color)]'>
      <nav className='px-2 md:px-4 max-w-[1810px] w-full h-full flex items-center justify-between'>
        <div>
         <img width={150} src={Logo} alt="..." />
        </div>
        <div className={`h-screen w-screen lg:h-auto lg:w-auto transition-all duration-500 ${!isNavbarOpen ? "-translate-y-full" : "-translate-y-0"} lg:-translate-y-0 fixed top-0 left-0 lg:static bg-[var(--secondary-color)] lg:bg-transparent flex justify-center flex-col lg:flex-row`}>
          <div className="flex justify-center items-center flex-col lg:flex-row">

            <NavLink
              onClick={() => setisNavbarOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? "var(--main-color)" : "",
              })}
              className="hover:text-[var(--main-color)] text-[20px] font-medium py-2 px-4 rounded inline-flex items-center"
              to={"/"}
            >
              <span className="mr-1">Home</span>
            </NavLink>

            {/* marketing dropdown menu */}
            <div className="dropdown inline-block relative">
              <NavLink
                onClick={() => setisNavbarOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? "var(--main-color)" : "",
                })}
                className="hover:text-[var(--main-color)] text-[20px] font-medium py-2 px-4 rounded inline-flex items-center"
                to={"/marketing"}
              >
                <span className="mr-1">Marketing</span>
                <MdOutlineKeyboardArrowDown />
              </NavLink>
              <ul className="pb-1 w-[14rem] bg-[var(--secondary-color)] dropdown-menu static lg:absolute hidden pt-1 shadow-[0_0_12px_-3px_gray] rounded-md">
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='broadcast' offset={-150} duration={500}>Broadcast</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='consulting' offset={-150} duration={500}>Consulting</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='management' offset={-150} duration={500}>Management</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='picth-desk' offset={-150} duration={500}>Pitch Desk</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='pr' offset={-150} duration={500}>PR</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='seo-marketing' offset={-150} duration={500}>SEO</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/marketing/social-media"}
                  >
                    Social Media
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='startupandscale' offset={-150} duration={500}>Start-up & Scale</Link>
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* website dropdown menu */}
            <div className=" dropdown inline-block relative">
              <NavLink
                onClick={() => setisNavbarOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? "var(--main-color)" : "",
                })}
                className="hover:text-[var(--main-color)] text-[20px] font-medium py-2 px-4 rounded inline-flex items-center"
                to={"/website"}
              >
                <span className="mr-1">Website</span>
                <MdOutlineKeyboardArrowDown />
              </NavLink>
              <ul className="pb-1 bg-[var(--secondary-color)] dropdown-menu static lg:absolute hidden pt-1 shadow-[0_0_12px_-3px_gray] rounded-md">
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='development' offset={-150} duration={500}>Development</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='hosting' offset={-150} duration={500}>Hosting</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='ppc' offset={-150} duration={500}>PPC</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='seo' offset={-150} duration={500}>SEO</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='content' offset={-150} duration={500}>Content</Link>
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* media dropdown menu */}
            <div className="dropdown inline-block relative">
              <NavLink
                onClick={() => setisNavbarOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? "var(--main-color)" : "",
                })}
                className="hover:text-[var(--main-color)] text-[20px] font-medium py-2 px-4 rounded inline-flex items-center"
                to={"/media"}
              >
                <span className="mr-1">Media</span>
                <MdOutlineKeyboardArrowDown />
              </NavLink>
              <ul className="pb-1 bg-[var(--secondary-color)] dropdown-menu static lg:absolute hidden pt-1 shadow-[0_0_12px_-3px_gray] rounded-md">
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/media/drone"}
                  >
                   drone
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/media/photo"}
                  >
                    Photo
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/media/video"}
                  >
                    Video
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/media/virtual"}
                  >
                    Virtual
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/media/3d"}
                  >
                    3D
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/media/products"}
                  >
                    Products
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* design dropdown menu */}
            <div className="dropdown inline-block relative">
              <NavLink
                onClick={() => setisNavbarOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? "var(--main-color)" : "",
                })}
                className="hover:text-[var(--main-color)] font-medium py-2 px-4 text-[20px] rounded inline-flex items-center"
                to={"/design"}
              >
                <span className="mr-1">Design</span>
                <MdOutlineKeyboardArrowDown />
              </NavLink>
              <ul className="pb-1 bg-[var(--secondary-color)] dropdown-menu static lg:absolute hidden pt-1 shadow-[0_0_12px_-3px_gray] rounded-md">
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/design/branding"}
                  >
                    Branding
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/design/corporate"}
                  >
                    Corporate
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/design/logo"}
                  >
                    Logo
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/design/print"}>
                    Print
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/design/packaging"}>
                    Packaging
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"/design/trade"}>
                    Trade
                  </NavLink>
                </li>
              </ul>
            </div>

            {/* About Dropdown Menu */}
            <div className="dropdown inline-block relative">
              <NavLink
                onClick={() => setisNavbarOpen(false)}
                style={({ isActive }) => ({
                  color: isActive ? "var(--main-color)" : "",
                })}
                className="hover:text-[var(--main-color)] font-medium py-2 px-4 text-[20px] rounded inline-flex items-center"
                to={"/about"}
              >
                <span className="mr-1">About</span>
                <MdOutlineKeyboardArrowDown />
              </NavLink>
              <ul className="pb-1 w-[14rem] bg-[var(--secondary-color)] dropdown-menu static lg:absolute hidden pt-1 shadow-[0_0_12px_-3px_gray] rounded-md">
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='our-team' offset={-150} duration={500}>Our Team</Link>

                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}
                  >
                    <Link to='our-accolades' offset={-150} duration={500}>Our Accolades</Link>
                  </NavLink>
                </li>
                <li className="">
                  <NavLink
                    onClick={() => setisNavbarOpen(false)}
                    className="px-4 mt-1 text-center text-[18px] hover:text-[var(--main-color)] block whitespace-no-wrap"
                    to={"#"}>
                    <Link to='job-opportunities' offset={-150} duration={500}>Job Opportunities</Link>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>

          <ColorButton
            onClickHander={() => setisNavbarOpen(false)}
            type={"link"}
            to={"/get-in-touch"}
            className="max-w-[14rem] self-center"
          >Get in Touch
          </ColorButton>
        </div>

        {/* Hamburger */}
        <div
          onClick={() => setisNavbarOpen(!isNavbarOpen)}
          class="z-50 block lg:hidden space-y-2"
        >
          <span className={`transition-all duration-200 ${isNavbarOpen ? "translate-y-[5px] rotate-45" : "0"} block h-0.5 w-8 bg-gray-600`}></span>
          <span className={`transition-all duration-200 ${isNavbarOpen ? "hidden" : "block"} h-0.5 w-8 bg-gray-600`}></span>
          <span className={`transition-all duration-200 ${isNavbarOpen ? "-translate-y-[5px] -rotate-45" : "0"} block h-0.5 w-8 bg-gray-600`}></span>
        </div>
      </nav>
    </header>
  )
}
