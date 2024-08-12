import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import React, { useEffect } from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Layout() {

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      // "document.documentElement.scrollTo" is the magic for React Router Dom v6
      document.documentElement.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    }, [pathname]);

    return <></>;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main className='pt-[100px] px-2 md:px-4 mx-auto max-w-[1680px]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
