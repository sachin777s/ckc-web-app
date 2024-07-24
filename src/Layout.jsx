import { Outlet } from 'react-router-dom'
import './App.css'
import React from 'react'
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

export default function Layout() {

  return (
    <>
      <Navbar />
      <main className='mx-auto max-w-[1850px]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
