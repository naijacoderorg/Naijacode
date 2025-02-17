import Link from 'next/link'
import Image from 'next/image'

import CustomButton from './CustomButton'

const Navbar = () => {
  return (
    <header className="w-full z-10 absolute">
      <nav className="max-w-[1440px] mx-auto 
        flex justify-between items-center
        sm:px-16 px-6 py-4">
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
