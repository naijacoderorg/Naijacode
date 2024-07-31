import React from 'react';
import Image from 'next/image';


const About = () => {
  return (
    <>
      <div className="flex-1 px-20 text-center">
        <div className="flex-1 pt-36 padding-x hero__subtitle py-9">
          <h1 className="hero__title justify-center text-center items-center">About Us</h1>
          <p className="text-start">
            Youth in Nigeria have little exposure to computer programming.
            This lack of exposure hinders future opportunities. NaijaCoder is
            geared towards using computer science as a tool for a better economic,
            social, and academic life for youth. Given the diversity of the
            occupations and interests of the board members, we can provide
            mentorship on various career options — both of the technical and
            non-technical variety. Our team consists of Nigerians who currently
            live and work in the USA but all attended high school in Nigeria.
            The occupations of the board members include engineers, computer
            scientists (PhDs), and business leaders.
          </p>
        </div>

        <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen padding-x">
          <div className="hero__image">
            <Image src="./aboutusyouth.png" alt="hero" fill className="object-contain" />
          </div>
        </div>
      </div>

      <div className="flex-col gap-5 relative z-0 w-max mx-auto">
        <div className="text-center justify-between font-bold from-stone-950 text-6xl p-3 pt-6 pb-14 w-full my-3 object-contain">
          Meet the NaijaCoder Team
        </div>

        <div className="flex justify-center gap-14 p-3 sm:flex-shrink">
          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Daniel_Alabi.jpg" alt="Daniel Alabi" width={118} height={118} className="object-contain" />
              <div>Daniel Alabi, Ph.D.</div>
            </div>
            <div className="name__title mb-2">Founder and Head Instructor</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Lekan_Afuye.jpg" alt="Lekan Afuye" width={118} height={118} className="object-contain" />
              <div>Lekan Afuye, Ph.D.</div>
            </div>
            <div className="name__title">Vice President</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Alida_Monaco.jpg" alt="Alida Monaco" width={118} height={118} className="object-contain" />
              <div>Alida Monaco</div>
            </div>
            <div className="name__title">Chief of Operations</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>
        </div>

        <div className="flex justify-center gap-14 p-3 sm:flex-shrink">
          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Philip_Abel.jpg" alt="Philip Abel" width={118} height={118} className="object-contain" />
              <div>Philip Abel</div>
            </div>
            <div className="name__title">Secretary</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Zaidat_Ibrahim.jpg" alt="Zaidat Ibrahim" width={118} height={118} className="object-contain" />
            </div>
            <div className="name__title">Zaidat Ibrahim</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Victory_Yinka-Banjo.jpg" alt="Victory Yinka-Banjo" width={118} height={118} className="object-contain" />
            </div>
            <div className="name__title">Victory Yinka-Banjo</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>
        </div>

        <div className="flex justify-center gap-14 p-3 sm:flex-shrink">
          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Ojima_Abraham.jpg" alt="Ojima Abraham" width={118} height={118} className="object-contain" />
            </div>
            <div className="name__title">Ojima Abraham</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Atinuke_Adegbile.jpg" alt="Atinuke Adegbile" width={118} height={118} className="object-contain" />
            </div>
            <div className="name__title">Atinuke Adegbile</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Hamidah_Oderinwale.jpg" alt="Hamidah Oderinwale" width={118} height={118} className="object-contain" />
              <div>Hamidah Oderinwale</div>
            </div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>
        </div>

        <div className="flex justify-center gap-14 p-3 sm:flex-shrink">
          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Eric_Mibuari.jpg" alt="Eric Mibuari" width={118} height={118} className="object-contain" />
              <div>Eric Mibuari, Ph.D</div>
              </div>
           
            <div className="linkedin__link">www.linkedin.com</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Joshua_Nwozor.jpg" alt="Joshua Nwozor" width={118} height={118} className="object-contain" />
              <div>Joshua Nwozor</div>
            </div>
                      <div className="linkedin__link">www.linkedin.com</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Akachukwu_Obi.jpg" alt="Akachukwu Obi" width={118} height={118} className="object-contain" />
              <div>Akachukwu Obi, Ph.D</div>
            </div>
          
            <div className="linkedin__link">www.linkedin.com</div>
          </div>
        </div>

        <div className="flex justify-center gap-14 p-3 sm:flex-shrink">
          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Joseph_Ekpenyong.jpg" alt="Joseph Ekpenyong" width={118} height={118} className="object-contain" />
            </div>
            <div className="name__title">Joseph Ekpenyong</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Ekene_Ezeunala.jpg" alt="Ekene Ezeunala" width={118} height={118} className="object-contain" />
            </div>
            <div className="name__title">Ekene Ezeunala</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>

          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Benem_Davids.jpg" alt="Benem Davids" width={118} height={118} className="object-contain" />
              <div>Benem Davids, Ph.D.</div>
            </div>
            <div className="name__title">Webmaster</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>
        </div>

        <div className="text-center justify-between font-bold from-stone-950 text-6xl p-3 pt-14 pb-14 w-full my-3 object-contain">
          Advisory Team
        </div>

        <div className="flex justify-center gap-14 p-3 sm:flex-shrink">
          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image src="./Jelani_Nelson.jpg" alt="Jelani Nelson" width={118} height={118} className="object-contain" />
            </div>
            <div className="name__title">Jelani Nelson, Ph.D</div>
            <div className="linkedin__link">www.linkedin.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

