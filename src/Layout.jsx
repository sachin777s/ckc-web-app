import { Outlet } from 'react-router-dom'
import './App.css'
import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Layout() {

  return (
    <>
      <Navbar />
      <main className='pt-[100px] px-2 md:px-4 mx-auto max-w-[1680px]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
