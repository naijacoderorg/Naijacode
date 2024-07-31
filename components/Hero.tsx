"use client";
import Image from 'next/image'
import CustomButton from './CustomButton'
import Link from 'next/link'; 

const Hero = () => {
    const handleScroll = () => {

    }
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title"> 
                The Future of Nigeria Lies in its Youth 
                </h1>
                <p className="hero__subtitle">  
                NaijaCoder organizes a free, intensive summer program in Nigeria to teach the basics of algorithms and computer programming to high schoolers. The program also provides resources for students applying to universities abroad.

Programming offers these students, especially those from indigent backgrounds, an opportunity to learn profitable skills and ignite their passions for problem-solving and critical thinking.
                </p>
                <Link href="/about"> 
                <CustomButton
                    title=" Learn More "
                    containerStyles="bg-emerald-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-600"
                    handleClick={handleScroll}
                />
                </Link>

                  <Link href="/applications"> 
                <CustomButton
                    title=" Student Application "
                    containerStyles="bg-primary-blue border-4 border-primary-blue 
                    text-white rounded-full mt-10 py-4 "
                    handleClick={handleScroll}
                />
                </Link>
        </div>
        <div className="hero__image-container">
            <div className="hero__image">
                <Image src="./Picture2.png" alt ="hero"
                fill className="object-contain" />
            </div>
           
        </div>
                   
    </div>
    
    
  )
}

export default Hero

