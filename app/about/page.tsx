import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <>
      <div className="px-4 md:px-20 text-center">
        <div className="pt-8 md:pt-36 max-w-screen-md mx-auto justify-between hero__subtitle py-9 rounded-xl border-2 border-rose-500">
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
              name: "Daniel Alabi, Ph.D.",
              title: "President and Lead Instructor",
              link: "http://alabidan.me",
              linkType: "Website Link"
            },
            {
              name: "Lekan Afuye, Ph.D.",
              title: "Vice President",
              link: "https://www.linkedin.com/in/olalekan-afuye/",
              linkType: "LinkedIn Link"
            },
            {
              name: "Alida Monaco",
              title: "Chief of Operations",
              link: "https://www.linkedin.com/in/alida-monaco-4699a482",
              linkType: "LinkedIn Link"
            },
            {
              name: "Philip Abel",
              title: "Secretary",
              link: "https://www.linkedin.com/in/abelphilip/",
              linkType: "LinkedIn Link"
            },
            {
              name: "Zaidat Ibrahim",
              title: "",
              link: "https://www.linkedin.com/in/zaidati",
              linkType: "LinkedIn Link"
            },
            {
              name: "Victory Yinka-Banjo",
              title: "",
              link: "https://www.linkedin.com/in/victory-yinka-banjo",
              linkType: "LinkedIn Link"
            },
            {
              name: "Ojima Abraham",
              title: "",
              link: "https://www.linkedin.com/in/ojima-abraham/",
              linkType: "LinkedIn Link"
            },
            {
              name: "Atinuke Adegbile",
              title: "",
              link: "https://ng.linkedin.com/in/atinuke-adegbile-267542b7",
              linkType: "LinkedIn Link"
            },
            {
              name: "Hamidah Oderinwale",
              title: "",
              link: "https://ca.linkedin.com/in/hamidaho",
              linkType: "LinkedIn Link"
            },
            {
              name: "Eric Mibuari, Ph.D",
              title: "",
              link: "https://www.linkedin.com/in/eric-mibuari-bb24044/",
              linkType: "LinkedIn Link"
            },
            {
              name: "Joshua Nwozor",
              title: "",
              link: "https://www.linkedin.com/in/joshuatochukwunwozor",
              linkType: "LinkedIn Link"
            },
            {
              name: "Akachukwu Obi, Ph.D",
              title: "",
              link: "https://www.linkedin.com/in/aobi",
              linkType: "LinkedIn Link"
            },
            {
              name: "Joseph Ekpenyong",
              title: "",
              link: "https://www.linkedin.com/in/joejekpenyong",
              linkType: "LinkedIn Link"
            },
            {
              name: "Ekene Ezeunala",
              title: "",
              link: "https://www.linkedin.com/in/ekene-ezeunala/",
              linkType: "LinkedIn Link"
            },
            {
              name: "Benem Davids, Ph.D.",
              title: "Webmaster",
              link: "https://www.linkedin.com/in/benemdavids",
              linkType: "LinkedIn Link"
            }
          ].map((member, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4">
              <div className="image__card mb-2">
                <Image
                  src={`/${member.name.split(',')[0].replace(' ', '_')}.jpg`}
                  alt={member.name}
                  width={118}
                  height={118}
                  className="object-contain"
                />
                <div className="text-sm sm:text-base mt-2">{member.name}</div>
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
                src="/Jelani_Nelson.jpg"
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
