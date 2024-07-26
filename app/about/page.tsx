import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
    <>
    <div className="flex-1 px-20 text-center">
    <div className="flex-1 pt-36 padding-x hero__subtitle py-9">
                    <h1 className="hero__title justify-center text-center items-center">About Us</h1>
                    <p>Youth in Nigeria have little exposure to computer programming.
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
                    <Image src="./aboutusyouth.png" alt="hero" 
                    fill className="object-contain" />
                </div>
            </div>
        </div>
        <div className="p-5  hero bg-emerald-700 w-max padding-x">
              
                <div className="text-center justify-between font-bold from-stone-950 text-6xl p-3 pt-14 pb-14 w-full  my-3 object-contain">
                    Meet the NaijaCoder Team
                </div>
                <div className="flex justify-center gap-14 p-3 sm:flex-shrink">
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Daniel_Alabi.jpg" alt="hero" width={118} height={118} className="object-contain" />
                            <div>Daniel Alabi, Ph.D.</div>
                        </div>
                        <div className="name__title mb-2">Founder and Head Instructor</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Lekan_Afuye.jpg" alt="hero" width={118} height={118} className="object-contain" />
                            <div>Lekan Afuye, Ph.D.</div>
                        </div>
                        <div className="name__title">Vice President</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Alida_Monaco.jpg" alt="hero" width={118} height={118} className="object-contain" />
                            <div>Alida Monaco</div>
                        </div>
                        <div className="name__title">Chief of Operations</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Philip_Abel.jpg" alt="hero" width={118} height={118} className="object-contain" />
                            <div>Philip Abel</div>
                        </div>
                        <div className="name__title">Secretary</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                </div>
                <div className="flex justify-center gap-14 p-3 sm:flex-shrink">
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Zaidat_Ibrahim.jpg" alt="hero" width={118} height={118} className="object-contain" />
                        </div>
                        <div className="name__title">Zaidat Ibrahim</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Victory_Yinka-Banjo.jpg" alt="hero" width={118} height={118} className="object-contain" />
                        </div>
                        <div className="name__title">Victory Yinka-Banjo</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Ojima_Abraham.jpg" alt="hero" width={118} height={118} className="object-contain" />
                        </div>
                        <div className="name__title">Ojima Abraham</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Atinuke_Adegbile.jpg" alt="hero" width={118} height={118} className="object-contain" />
                        </div>
                        <div className="name__title">Atinuke Adegbile</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                </div>
                <div className="flex justify-center gap-14 p-3 sm:flex-shrink">
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Hamidah_Oderinwale.jpg" alt="hero" width={118} height={118} className="object-contain" />
                            <div>Hamidah Oderinwale</div>
                        </div>
                        <div className="name__title">Hamidah Oderinwale</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Eric_Mibuari.jpg" alt="hero" width={118} height={118} className="object-contain" />
                            <div>Eric Mibuari</div>
                        </div>
                        <div className="name__title">Eric Mibuari</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Joshua_Nwozor.jpg" alt="hero" width={118} height={118} className="object-contain" />
                            <div>Joshua Nwozor</div>
                        </div>
                        <div className="name__title">Joshua Nwozor</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Akachukwu_Obi.jpg" alt="hero" width={118} height={118} className="object-contain" />
                            <div>Akachukwu Obi</div>
                        </div>
                        <div className="name__title">Akachukwu Obi</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                </div>
                <div className="flex justify-center gap-14 p-3 sm:flex-shrink">
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Joseph_Ekpenyong.jpg" alt="hero" width={118} height={118} className="object-contain" />
                        </div>
                        <div className="name__title">Joseph Ekpenyong</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Ekene_Ezeunala.jpg" alt="hero" width={118} height={118} className="object-contain" />
                        </div>
                        <div className="name__title">Ekene Ezeunala</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Jelani_Nelson.jpg" alt="hero" width={118} height={118} className="object-contain" />
                        </div>
                        <div className="name__title">Jelani Nelson</div>
                        <div className="linkedin__link">www.linkedin.com</div>
                    </div>
                    <div className="flex flex-col items-center text-center">
                        <div className="image__card mb-2">
                            <Image src="./Benem_Davids.jpg" alt="hero" width={118} height={118} className="object-contain" />
                            <div>Benem Davids, Ph.D.</div>

                            <div className="name__title">Webmaster</div>
                            <div className="linkedin__link">www.linkedin.com</div>
                        </div>
                    </div>
                </div>
            </div></>
    );
}

export default About;
