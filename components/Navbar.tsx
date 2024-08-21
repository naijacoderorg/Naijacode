"use client";
import { useState } from 'react';
import Link from 'next/link'
import Image from 'next/image'
import CustomButton from './CustomButton'

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="relative  z-10">
      {/* Mobile Menu Button */}
      <nav className="md:hidden">
        <button 
          onClick={toggleDropdown}
          className="p-4 text-white bg-black"
        >
          ☰
        </button>
        <div 
          id="dropdownInformation" 
          className={`z-10 ${isDropdownOpen ? 'block' : 'hidden'} bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute left-0 `}>
          <div className="px-4 py-3 text-sm text-gray-900">
            
            <div className="font-medium truncate">
              <a href="/">NaijaCoder</a></div>
          </div>

          <ul className="py-2 text-sm text-gray-700">
          <li>
              <a href="/about" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
            </li>
            <li>
              <a href="/applications" className="block px-4 py-2 hover:bg-gray-100">Applications</a>
            </li>
            <li>
              <a href="/overview" className="block px-4 py-2 hover:bg-gray-100">Program Overview</a>
            </li>
            <li>
              <a href="/contact" className="block px-4 py-2 hover:bg-gray-100">Contact Us</a>
            </li>
            <li>
              <a href="/getinvolved" className="block px-4 py-2 hover:bg-gray-100">Get Involved</a>
            </li>
          </ul>
          
        </div>
      </nav>
      <nav className="max-w-[1440px] mx-auto
        flex justify-between items-center
        px-16 px-6 py-4 invisible md:visible ">


        <Link href="/" className="flex 
          justify-center items-center min-w-[130px]">
          <Image
            src="./logo.png"
            alt="Logo"
            width={118}
            height={18}
            className="object-contain"
          />
        </Link>
        <Link href="/about" className="flex 
          justify-center items-center min-w-[130px]">
        <CustomButton
          title="About Us"
          btnType="button"
          containerStyles="text-primary-black100  rounded-full bg-white min-w-[130px]"
        />
        </Link>

        <Link href="/applications" className="flex 
          justify-center items-center min-w-[130px]">
        <CustomButton
          title="Applications"
          btnType="button"
          containerStyles="text-primary-black100  rounded-full bg-white min-w-[130px]"
        />
        </Link>


        <Link href="/overview" className="flex 
          justify-center items-center min-w-[130px]">
        <CustomButton
          title="Program Overview"
          btnType="button"
          containerStyles="text-primary-black100 rounded-full bg-white min-w-[130px]"
        />
        </Link>

        <Link href="/contact" className="flex 
          justify-center items-center min-w-[130px]">
        <CustomButton
          title="Contact Us"
          btnType="button"
          containerStyles="text-primary-black100 rounded-full bg-white min-w-[130px]"
        />
        </Link>

        <Link href="/getinvolved" className="flex 
          justify-center items-center min-w-[130px]">
          <CustomButton
            title="Get Involved"
            btnType="button"
            containerStyles="text-primary-black100 rounded-full bg-white min-w-[130px]"
          />
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
