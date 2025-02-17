import React from 'react';
import Image from 'next/image';

const ProgramOverview = () => {
  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      {/* 2025 Section */}
      <div className="space-y-8">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center">Summer 2025</h1>
          <div className="text-base md:text-lg space-y-2">
            <ol className="list-decimal list-inside space-y-2">
              <li>Abuja camp (tentative) dates: August 4 -- August 15</li>
              <li>Lagos camp (tentative) dates: July 21 -- August 1</li>
              <li>Kano camp (tentative) dates: April 10 -- April 21</li>
            </ol>
          </div>
        </div>

        {/* 2024 Section */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">Summer 2024</h1>
      <p className="text-base md:text-lg font-bold">
    The Lagos camp was in collaboration with the <u><a href="http://airol.unilag.edu.ng/" className="hover:text-blue-600">AirLab</a></u> of 
    the University of Lagos. The camp took place from the 19th of August to the 30th of August at the 
    AI & Robotics Labs in the University of Lagos. The Abuja camp took place at the 
    <u><a href="http://airol.unilag.edu.ng/" className="hover:text-blue-600"> Olumawu School </a></u> 
    in Abuja from the 12th of August to the 23rd of August.
      </p>
        </div>

        {/* Image Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image 
            src="./picture_overview.png" 
            alt="hero" 
            fill 
            className="object-contain"
            priority
          />
        </div>

        {/* 2024 Schedule */}
        <div className="text-lg md:text-xl lg:text-[27px] space-y-2">
          <ol className="list-decimal list-inside space-y-2">
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

        {/* 2023 Section */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">Summer 2023</h1>
          <p className="text-base md:text-lg font-bold">
            The in-person program ran from August 7 up to August 18, 2023. Location: Lifegate Academy in Abuja.
          </p>
        </div>

        {/* 2022 Section */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center">Summer 2022</h1>
          <ol className="list-decimal list-inside space-y-2 text-base md:text-lg font-bold">
            <li>Lists of Lists; Stack ADT</li>
            <li>Queue, Priority Queue, and Graph ADTs</li>
            <li>Graph Traversal: BFS, DFS</li>
            <li>Dictionary, Set, and Multiset ADTs</li>
            <li>Sorting</li>
            <li>Efficiency and Asymptotics: Big-O, Big-Omega, Big-Theta</li>
            <li>Recursion, Searching</li>
            <li>List Implementation: Array-Based, Linked-Based</li>
            <li>Stack Implementation: Array-Based, Linked-Based</li>
            <li>Queue Implementation: Array-Based, Linked-Based</li>
            <li>General Trees and Binary Trees: Structures and Traversals (pre-order, in-order, post-order)</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default ProgramOverview;
