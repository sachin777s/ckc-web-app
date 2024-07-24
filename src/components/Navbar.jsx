import React from 'react'

export default function Navbar() {
  return (
    <header className='w-full h-[60px] bg-[var(--main-color)] flex items-center justify-center'>
      <nav className='px-2  md:px-4 max-w-[1850px] w-full h-full bg-white flex items-center justify-between'>
        <div>
          Logo Here
        </div>
        <div className='flex'>
          <div className="">
            <div className="dropdown inline-block relative">
              <button className="font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">Dropdown</span>
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
              </button>
              <ul className="dropdown-menu absolute hidden pt-1">
                <li className=""><a className="rounded-t py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                <li className=""><a className=" py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                <li className=""><a className="rounded-b py-2 px-4 block whitespace-no-wrap" href="#">Three</a></li>
                <li className=""><a className="rounded-b py-2 px-4 block whitespace-no-wrap" href="#">Four</a></li>
                <li className=""><a className="rounded-b py-2 px-4 block whitespace-no-wrap" href="#">Five</a></li>
              </ul>
            </div>

          </div>
          <button>Get in Touch</button>
        </div>
      </nav>
    </header>
  )
}
