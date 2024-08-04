// components/Grid.js
import Image from 'next/image';

// data/team.js
const teamMembers = [
  {
    name: "Lekan Afuye, Ph.D.",
    title: "Vice President",
    image: "/Lekan_Afuye.jpg",
    linkedin: "https://www.linkedin.com/in/olalekan-afuye/"
  },
  {
    name: "Alida Monaco",
    title: "Chief of Operations",
    image: "/Alida_Monaco.jpg",
    linkedin: "https://www.linkedin.com/in/alida-monaco-4699a482"
  },
  {
    name: "Philip Abel",
    title: "Secretary",
    image: "/Philip_Abel.jpg",
    linkedin: "https://www.linkedin.com/in/abelphilip/"
  },
  {
    name: "Zaidat Ibrahim",
    title: "Member",
    image: "/Zaidat_Ibrahim.jpg",
    linkedin: "https://www.linkedin.com/in/zaidati"
  },
  {
    name: "Victory Yinka-Banjo",
    title: "Member",
    image: "/Victory_Yinka-Banjo.jpg",
    linkedin: "https://www.linkedin.com/in/victory-yinka-banjo"
  },
  {
    name: "Ojima Abraham",
    title: "Member",
    image: "/Ojima_Abraham.jpg",
    linkedin: "https://www.linkedin.com/in/ojima-abraham/"
  },
  {
    name: "Atinuke Adegbile",
    title: "Member",
    image: "/Atinuke_Adegbile.jpg",
    linkedin: "https://ng.linkedin.com/in/atinuke-adegbile-267542b7"
  },
  {
    name: "Hamidah Oderinwale",
    title: "Member",
    image: "/Hamidah_Oderinwale.jpg",
    linkedin: "https://ca.linkedin.com/in/hamidaho"
  },
  {
    name: "Eric Mibuari, Ph.D",
    title: "Member",
    image: "/Eric_Mibuari.jpg",
    linkedin: "https://www.linkedin.com/in/eric-mibuari-bb24044/"
  },
  {
    name: "Joshua Nwozor",
    title: "Member",
    image: "/Joshua_Nwozor.jpg",
    linkedin: "https://www.linkedin.com/in/joshuatochukwunwozor"
  },
  {
    name: "Akachukwu Obi, Ph.D",
    title: "Member",
    image: "/Akachukwu_Obi.jpg",
    linkedin: "https://www.linkedin.com/in/aobi"
  },
  {
    name: "Joseph Ekpenyong",
    title: "Member",
    image: "/Joseph_Ekpenyong.jpg",
    linkedin: "https://www.linkedin.com/in/joejekpenyong"
  },
  {
    name: "Ekene Ezeunala",
    title: "Member",
    image: "/Ekene_Ezeunala.jpg",
    linkedin: "https://www.linkedin.com/in/ekene-ezeunala/"
  },
  {
    name: "Benem Davids, Ph.D.",
    title: "Webmaster",
    image: "/Benem_Davids.jpg",
    linkedin: "https://www.linkedin.com/in/benemdavids"
  }
];




const Gridz = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-[896px] w-full mx-auto">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg">
          <div className="image__card mb-2">
            <Image
              src={member.image}
              alt={member.name}
              width={118}
              height={118}
              className="object-contain rounded-full"
            />
          </div>
          <div className="name__title">{member.name}</div>
          <div className="title__text">{member.title}</div>
          <div className="linkedin__link">
            <h3>
              <u>
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  LinkedIn Link
                </a>
              </u>
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Gridz;
