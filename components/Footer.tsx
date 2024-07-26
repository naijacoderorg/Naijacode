import Link from 'next/link'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="flex flex-col  text-black-100 mt-5 border-t border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image src="./logo.png" alt="logo" width={118} height={18} className="object-contain" />
          <p className="text-base text-gray700">© 2024 <br/> All rights reserved.</p>
        </div>
        {/* 3 columns with 3 links under each */}
        <div className="flex flex-col justify-start items-start gap-1">
          <h3 className="text-lg font-bold text-gray-800">CONNECT WITH US</h3>
          <a href="https://x.com/naijacoderorg/" className="text-base text-gray-700">X</a>
          <a href="https://www.threads.net/@naijacoder" className="text-base text-gray-700">threads</a>
          <a href="https://www.instagram.com/naijacoder/" className="text-base text-gray-700">Instagram</a>
        </div>
        <div className="flex flex-col justify-start items-start gap-1 px-6">
          <h3 className="text-lg font-bold text-gray-800">LINKS</h3>
          <Link href="/scholarships" className="text-base text-gray-700">Scholarships</Link>
          <Link href="/events" className="text-base text-gray-700">Events</Link>
          <Link href="/highlights" className="text-base text-gray-700">Student Higlights</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer
