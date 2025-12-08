import React, { useState } from 'react'
import { IoLogoGoogleplus } from "react-icons/io";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaBars } from "react-icons/fa";
import homeikn from '../assets/loder-logo.png'
import logo from '../assets/logo.png'
import { Link } from "react-router-dom";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);

  return (
    <div className='sticky top-0 z-50'>

      {/* ---------------- TOP BAR ---------------- */}
      <nav className='bg-[#2c364c] p-3 flex justify-between lg:pr-11 lg:pl-11 xl:pl-24 xl:pr-24'>
        <img className='ml-4 sm:hidden' src={homeikn} alt="" />
        <img className='hidden sm:flex lg:hidden' src={logo} alt="" />

        <ul className='w-max gap-8 text-white text-[14px] hidden lg:flex'>
          <li>+(123) 1234-567-8901</li>
          <li>info@domain.com</li>
          <li>Mon - Sat 8:00 - 17:30, Sunday - CLOSED</li>
        </ul>

        <ul className='hidden lg:flex text-white gap-4 items-center'>
          <li className='text-xl'><IoLogoGoogleplus /></li>
          <li><FaFacebookF /></li>
          <li><FaTwitter /></li>
          <li><FaLinkedinIn /></li>
        </ul>
      </nav>

      {/* ---------------- MAIN NAV ---------------- */}
      <nav
        className={`
          bg-[#4c4c4c] lg:bg-[#2c364c]
          p-2 lg:pt-9 lg:pb-10 flex flex-col 
          lg:flex-row lg:items-center lg:justify-around text-white
          w-[95%] md:w-[85%] lg:w-full
          absolute lg:static top-17 left-0 right-0
          mx-auto transition-all duration-300 
          ${menuOpen ? "h-max lg:h-[90px]" : "h-[60px]"}
        `}
      >

        {/* --- MOBILE MENU BUTTON --- */}
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className='flex justify-center items-center rounded-sm bg-[#1F1F1F] 
          text-white p-2 gap-2 w-max lg:hidden absolute top-2 right-2'
        >
          <p className='font-bold text-sm'>MENU</p>
          <FaBars />
        </div>

        {/* --- LOGO (Desktop Only) --- */}
        <img className='hidden lg:flex' src={logo} alt="" />

        {/* ======================================================
        ===============   MOBILE MENU ONLY (< lg)   ============
        ====================================================== */}
        <ul
          className={`
            flex-col gap-5 text-white 
            ${menuOpen ? "flex lg:hidden mt-14" : "hidden"}
          `}
        >
          <li className='hover:text-orange-400 transition'><Link to="/">Home</Link></li>
          <li className='hover:text-orange-400 transition'><Link to="/About">About</Link></li>
          <li className='hover:text-orange-400 transition'><Link to="/Projects">Projects </Link></li>
          <li className='hover:text-orange-400 transition'><Link to="/Services">Services</Link></li>
          <li className='hover:text-orange-400 transition'><Link to="/Blog">Blog</Link></li>

          {/* Mobile Pages Dropdown */}
          <li onClick={() => setPagesOpen(!pagesOpen)}>
            <p className='hover:text-orange-400 transition'>Pages <span className='text-[12px]'>+</span></p>
            
            {pagesOpen && (
              <ul className=' text-white  mt-2 rounded-md'>
                <li className='px-4 py-2 hover:bg-gray-100'><Link to="/Element">Elements</Link></li>
                <li className='px-4 py-2 hover:bg-gray-100'><Link to="/Page2">Project Details</Link></li>
                <li className='px-4 py-2 hover:bg-gray-100'><Link to="/Page3">Services Detail</Link></li>
              </ul>
            )}
          </li>

          <li className='hover:text-orange-400 transition'><Link to="/Contact">Contact</Link></li>
        </ul>

        {/* ======================================================
        ===============   DESKTOP MENU ONLY (lg+)  =============
        ====================================================== */}
        <ul className='hidden lg:flex gap-8 items-center text-white'>
          <li className='hover:text-orange-400 transition'><Link to="/">Home</Link></li>
          <li className='hover:text-orange-400 transition'><Link to="/About">About</Link></li>
          <li className='hover:text-orange-400 transition'><Link to="/Projects">Projects </Link></li>
          <li className='hover:text-orange-400 transition'><Link to="/Services">Services</Link></li>
          <li className='hover:text-orange-400 transition'><Link to="/Blog">Blog</Link></li>

          {/* Desktop Dropdown */}
          <li className="relative group">
            <button className="hover:text-orange-400 p-2 transition">Pages</button>

            <ul className="absolute left-0 top-full w-40 bg-white text-black shadow-lg border-t-2
              border-orange-400 rounded-b-md hidden group-hover:block"
            >
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Element">Elements</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Page2">Project Details</Link></li>
              <li className="px-4 py-2 hover:bg-gray-100"><Link to="/Page3">Services Detail</Link></li>
            </ul>
          </li>

          <li className='hover:text-orange-400 transition'><Link to="/Contact">Contact</Link></li>

          <button className='bg-[#f75910] text-white p-3 rounded-lg lg:ml-3 xl:ml-8'>
            CONTACT NOW
          </button>
        </ul>

      </nav>

    </div>
  )
}
