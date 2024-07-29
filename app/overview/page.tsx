import React from 'react';
import Image from 'next/image';

const ProgramOverview = () => {
  return (
    <div className=" flex flex-col gap-5 relative z-0 max-w-[1440px] mx-auto p-36]
    
      <div className="hero__title">
        <h1 className="justify-center text-center items-center">
          Summer of 2024 Program Overview
        </h1>
        <h2 className="text-center hero__subtitle font-bold">
          The NaijaCoder program is a 10-day course that teaches the basics of algorithms and computer programming.
          The course is designed to be accessible to all students, especially those who are underprivileged.
        </h2>
        <h2 className="text-center font-large text-3xl">
          The Lagos camp is in collaboration with the AirLab of the University of Lagos. 
          The camp will take place from the 19th of August to the 30th of August at the AI & Robotics Labs in the University of Lagos. 
          The Abuja camp will take place at the Olumawu School in Abuja from the 12th of August to the 23rd of August.
        </h2>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/picture_overview.png" alt="hero" layout="fill" className="object-contain" />
        </div>
        </div>
      

      <div className="hero__subtitle text-center">
        <ol>
          <li>Day 1: Introductions and Motivations</li>
          <li>Day 2: Types in Python</li>
          <li>Day 3: For Loops and Recursion</li>
          <li>Day 4: More Methods of Iteration in Python</li>
          <li>Day 5: Objects, Libraries, Data Science</li>
          <li>Day 6: Growth of Functions</li>
          <li>Day 7: Searching Algorithms: Linear, Binary</li>
          <li>Day 8: Sorting Algorithms: Bubble, Selection, Insertion</li>
          <li>Day 9: Sorting Algorithms: Part 2</li>
          <li>Day 10: Review, Recap, Exam</li>
        </ol>
      </div>

      <div className="hero__title">
        <h1 className="justify-center text-center items-center">
          Summer of 2023 Highlights
        </h1>
        <h2 className="text-center hero__subtitle font-bold">
          The NaijaCoder program is a 10-day course that teaches the basics of algorithms and computer programming.
          The course is designed to be accessible to all students, especially those who are underprivileged.
        </h2>
      </div>

      <div className="hero__title">
        <h1 className="justify-center text-center items-center">
          Summer of 2022 Highlights
        </h1>
        <h2 className="text-center hero__subtitle font-bold">
          The NaijaCoder program is a 10-day course that teaches the basics of algorithms and computer programming.
          The course is designed to be accessible to all students, especially those who are underprivileged.
        </h2>
      </div>
    
  );
}

export default ProgramOverview;
