import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="px-4 md:px-20 text-center ">
        <div className="pt-14 sm:pt-20 md:pt-36 max-w-screen-md mx-auto justify-between hero__subtitle py-9">
          <h1 className="hero__title text-center text-3xl md:text-6xl">About Us!</h1>
          <p className="pt-5 px-4 text-start text-sm sm:text-xl">
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
      </div>

      <div className="px-4 max-w-6xl mx-auto">
        <div className="text-center font-bold text-3xl md:text-6xl p-3 pt-6 pb-14 w-full my-3">
          Meet the NaijaCoder Team
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-14">
          {[
            {
              name: "Daniel Alabi",
              title: "President and Lead Instructor",
              image: "./Daniel_Alabi.jpg",
              link: "http://alabidan.me",
              linkType: "Website Link",
              suffix: ", Ph.D."
            },
            {
              name: "Lekan Afuye",
              image: "./Lekan_Afuye.jpg",
              title: "Vice President",
              link: "https://www.linkedin.com/in/olalekan-afuye/",
              linkType: "LinkedIn Link",
              suffix: ", Ph.D."
            },
            {
              name: "Alida Monaco",
              image: "./Alida_Monaco.jpg",
              title: "Chief of Operations",
              link: "https://www.linkedin.com/in/alida-monaco-4699a482",
              linkType: "LinkedIn Link"
            },
            {
              name: "Philip Abel",
              image: "./Philip_Abel.jpg",
              title: "Secretary",
              link: "https://www.linkedin.com/in/abelphilip/",
              linkType: "LinkedIn Link"
            },
            {
              name: "Zaidat Ibrahim",
              image: "./Zaidat_Ibrahim.jpg",
              link: "https://www.linkedin.com/in/zaidati",
              linkType: "LinkedIn Link"
            },
            {
              name: "Victory Yinka-Banjo",
              image: "./Victory_Yinka-Banjo.jpg",
              link: "https://www.linkedin.com/in/victory-yinka-banjo",
              linkType: "LinkedIn Link"
            },
            {
              name: "Ojima Abraham",
              image: "./Ojima_Abraham.jpg",
              link: "https://www.linkedin.com/in/ojima-abraham/",
              linkType: "LinkedIn Link"
            },
            {
              name: "Atinuke Adegbile",
              image: "./Atinuke_Adegbile.jpg",
              link: "https://ng.linkedin.com/in/atinuke-adegbile-267542b7",
              linkType: "LinkedIn Link"
            },
            {
              name: "Hamidah Oderinwale",
              image: "./Hamidah_Oderinwale.jpg",
              link: "https://ca.linkedin.com/in/hamidaho",
              linkType: "LinkedIn Link"
            },
            {
              name: "Eric Mibuari",
              image: "./Eric_Mibuari.jpg",
              link: "https://www.linkedin.com/in/eric-mibuari-bb24044/",
              linkType: "LinkedIn Link",
              suffix: ", Ph.D"
            },
            {
              name: "Joshua Nwozor",
              image: "./Joshua_Nwozor.jpg",
              link: "https://www.linkedin.com/in/joshuatochukwunwozor",
              linkType: "LinkedIn Link"
            },
            {
              name: "Akachukwu Obi",
              image: "./Akachukwu_Obi.jpg",
              link: "https://www.linkedin.com/in/aobi",
              linkType: "LinkedIn Link",
              suffix: ", Ph.D"
            },
            {
              name: "Joseph Ekpenyong",
              image: "./Joseph_Ekpenyong.jpg",
              link: "https://www.linkedin.com/in/joejekpenyong",
              linkType: "LinkedIn Link"
            },
            {
              name: "Ekene Ezeunala",
              image: "./Ekene_Ezeunala.jpg",
              link: "https://www.linkedin.com/in/ekene-ezeunala/",
              linkType: "LinkedIn Link"
            },
            {
              name: "Benem Davids",
              image: "./Benem_Davids.jpg",
              title: "Webmaster",
              link: "https://www.linkedin.com/in/benemdavids",
              linkType: "LinkedIn Link",
              suffix: ", Ph.D."
            }
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="image__card mb-2">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={118}
                  height={118}
                  className="object-contain"
                />
                <div className="text-sm sm:text-base mt-2">
                  {member.name}{member.suffix || ''}
                </div>
              </div>
              {member.title && <div className="name__title mb-2">{member.title}</div>}
              <div>
                <h3><u>
                  <a href={member.link} target="_blank">{member.linkType}</a>
                </u></h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center font-bold text-3xl md:text-6xl p-3 pt-14 pb-14 w-full my-3">
          Advisory Team
        </div>

        <div className="flex justify-center p-3 pb-8">
          <div className="flex flex-col items-center text-center">
            <div className="image__card mb-2">
              <Image
                src="./Jelani_Nelson.jpg"
                alt="Jelani Nelson"
                width={118}
                height={118}
                className="object-contain"
              />
              <div>Jelani Nelson, Ph.D</div>
            </div>
            <div className="name__title">Lead Advisor</div>
            <div className="wikipedia">
              <h3><u>
                <a target="_blank" href="https://en.wikipedia.org/wiki/Jelani_Nelson">Wikipedia Link</a>
              </u></h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
