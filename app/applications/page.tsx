import React from 'react';
import Image from 'next/image';

const ProgramOverview = () => {
  return (
    <div className="flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1440px] mx-auto p-36">
      <div className="hero__title ">
        <div>
          <h1>
            A few tips for submitting a great application.
            </h1>
            <a href="https://www.forbes.com/sites/jenniferlotito/2024/03/13/5-tips-for-landing-your-dream-summer-internship/">Tips from Forbes</a>
          
        </div>
        <h1 className="hero__title justify-center text-center items-center">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFyHnAmFwI7QUpAiSD3PaUY-8dPyDl_SuXG9Nt0j6SpILIUw/closedform>his will link to google docs</a>
        </h1>
        <h1 className="text-center hero__subtitle font-bold">
         Applications page
        </h1>
      </div>

<div className="hero__image-container">
      <div className="hero__image">
          <Image src="/picture_overview.png" alt="hero" fill className="object-contain" />
      </div>
      </div>



    <div className="hero__subtitle text-center">
   Applications
    </div>
  </div>


    
  );
}

export default ProgramOverview;
