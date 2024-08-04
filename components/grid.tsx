// components/Grid.js
import Image from 'next/image';
import teamMembers from '/team';

const Grid = () => {
  return (
    <div className="flex flex-wrap gap-4 max-w-[896px] w-full mx-auto">
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

export default Grid;
