import React, { useState } from 'react'
import logo from '../assets/aliev-logo.png'
import {NAVIGATION_LINKS} from '../constants'
import { FaTimes } from 'react-icons/fa'
import { FaBars } from 'react-icons/fa6'

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen)

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    const targetElement = document.querySelector(href)

    if (targetElement) {
        const offset = -85
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollTo({
          top:offsetPosition,
          behavior:"smooth"
        })
    }
    // setIsMobileMenuOpen(true)
  }

  return (
    <div className='z-50'>
      <nav className='fixed left-0 right-0 lg:top-4 top-0'>
        {/* desktop menu */}
        <div className='mx-auto hidden max-w-2xl items-center justify-center  rounded-lg border border-stone-50/3 bg-black py-3 backdrop-blur-lg lg:flex'>
          <div className='flex items-center justify-between gap-6 '>

            <div>
              <a href="/">
                <img src={logo} alt="logo" width={150} />
              </a>
            </div>

              <ul className='flex items-center gap-4  h-full'>
                  {
                    NAVIGATION_LINKS.map((item) => (
                      <li key={item.href} className='cursor-pointer z-100'>
                        <a href={item.href} className='text-sm hover:text-yellow-400 cursor-pointer' >
                          {item.label}
                        </a>
                        
                      </li>
                    ))
                  }
              </ul>
          </div>
        </div>


        {/* mobile menu */}

        <div className='rounded-lg lg:hidden flex items-center justify-between bg-slate-900 backdrop-blur-md p-4'>
                  <div className='flex items-center justify-between'>
                      <a href="/">
                        <img src={logo} alt="logo"  width={90} className='m-2'/>
                      </a>
                  </div>

                  <div className='flex items-center'>
                      <button className='focus:outline-none lg:hidden' onClick={toggleMobileMenu}>
                        {isMobileMenuOpen ? (<FaTimes className='h-6 w-5 m-2'/>) : ( <FaBars className='m-2 h-6 w-5'/>)}
                      </button>
                  </div>
        </div>

        {
          isMobileMenuOpen && <ul className='ml-4  flex flex-col gap-4 backdrop-blur-md w-full'>
            {
              NAVIGATION_LINKS.map((item) => (
                <li key={item.href} className='w-full'>
                  <a href={item.href} className='blcok w-full p-2 hover:text-yellow-100 hover:bg-slate-600 text-lg rounded-md' onClick={(e) => handleLinkClick(e, item.href)}>
                    {item.label}
                  </a>
                </li>
              ))
            }
          </ul>
        }
      </nav>
    </div>
  )
}

export default Navbar