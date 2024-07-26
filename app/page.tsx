import { Hero } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 bg-gradient-to-b  from-emerald-700 to-emerald-600 text-center" id="discover">
        <div className="home__text-containier flex-1 hero__title px-20 py-9 mb-10">
          <strong>NaijaCoder</strong> is an intensive summer program in Nigeria.
        </div>
      </div>

      <div className="hero">
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="./aboutalgo2.png" alt="hero" fill className="object-contain" />
          </div>
        </div>
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            <br />
            Providing free instruction on:
          </h1>
          <p className="hero__subtitle">
            The basics of algorithms--sorting algorithms, searching algorithms, and graph algorithms big O notation, and
            more.
          </p>
        </div>
      </div>

     
      <div className="hero">
        <div className="hero__image-container">
          <div className="hero__image">
            <Image src="./programing.png" alt="hero" fill className="object-contain" />
          </div>
        </div>
        <div className="flex-1 pt-36 padding-x">
          <h1 className="hero__title">
            <br />
            Programming
          </h1>
          <p className="hero__subtitle">
            Data structures, object-oriented programming, and more.
          </p>
        </div>
      </div>

      <div className="flex-1 px-20 text-center">
        <h1 className="hero__title">
          <br />
          Mentoring Circles
        </h1>
        <p className="hero__subtitle">
          Given the diversity of the careers of our board members (e.g., in software development, finance, and academia),
          we will offer advice and mentorship on using software tools for product development.
        </p>
      </div>
      <div className="hero__image-container padding-x">
        <div className="hero__image">
          <Image src="./mentoring.png" alt="hero" fill className="object-contain" />
        </div>
      </div>

      <div className="mt-12 bg-gradient-to-b from-emerald-700 to-emerald-600 text-center" id="discover">
        <div className="home__text-containier flex-1 hero__title px-20 py-9">
         <Link href="/highlights">
          <strong>Student Highlights</strong> from the NaijaCoder program
        </Link>
        </div>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="./supporters.png" alt="hero" fill className="object-contain" />
        </div>
      </div>
    </main>
  );
}
