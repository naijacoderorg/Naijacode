import React from 'react';
import Image from 'next/image';

const ProgramOverview = () => {
  return (
    <div className="flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1440px] mx-auto p-36 ">
      <div className="hero__title justify-center start items-center  ">
        <h1 className="text-4xl font-bold p-7">Summer 2025: To be announced.</h1>
        <h1 className="hero__title justify-center text-start items-center text-4xl">
          Summer 2024 Program Overview
        </h1>
        <h1 className="mt-4 text-start hero__subtitle font-bold">
          The Lagos camp is in collaboration with the <u><a href="http://airol.unilag.edu.ng/"> AirLab </a></u> of the University of Lagos. The camp will take place from the 19th of August to the 30th of 
          August at the AI & Robotics Labs in the University of Lagos. The Abuja camp will take place at the <u><a href ="http://airol.unilag.edu.ng/">Olumawu School </a></u> in Abuja from the 12th of August to the 
          23rd of August.
        </h1>
      </div>

<div className="hero__image-container">
      <div className="hero__image">
          <Image src="./picture_overview.png" alt="hero" fill className="object-contain" />
      </div>
      </div>

    <div className="hero__subtitle text-start ml-10">
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

      <div className="hero__title mt-8 ">
        <h1 className="hero__title justify-center text-center items-center text-4xl">
         Summer 2023
        </h1>
        <h1 className="text-start hero__subtitle font-bold">
        The in-person program ran from August 7 up to August 18, 2023. Location: Lifegate Academy in Abuja.
        </h1>
      </div>
      
      <div className="hero__title ">
        <h1 className="hero__title justify-center text-center items-center text-4xl">
          Highlights from Summer 2022
        </h1>
        <h1 className="text-start hero__subtitle font-bold ml-10">
          <ol>
  <li>1. Lists of Lists; Stack ADT</li>
  <li>2.Queue, Priority Queue, and Graph ADTs</li>
  <li>3.Graph Traversal: BFS, DFS</li>
  <li>4. Dictionary, Set, and Multiset ADTs</li>
  <li>5. Sorting</li>
  <li>6. Efficiency and Asymptotics: Big-O, Big-Omega, Big-Theta</li>
  <li>7. Recursion, Searching</li>
  <li>8. List Implementation: Array-Based, Linked-Based</li>
  <li>9. Stack Implementation: Array-Based, Linked-Based</li>
  <li>10.Queue Implementation: Array-Based, Linked-Based</li>
  <li>11.General Trees and Binary Trees: Structures and Traversals (pre-order, in-order, post-order)</li>
</ol>
        </h1>
      </div>
  </div>


    
  );
}

export default ProgramOverview;
