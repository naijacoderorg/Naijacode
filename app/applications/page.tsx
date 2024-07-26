import React from 'react';
import Image from 'next/image';

const ProgramOverview = () => {
  return (
    <div className="flex xl:flex-col flex-col gap-5 relative z-0 max-w-[1440px] mx-auto p-36">
      <div className="hero__title ">
        <h1 className="hero__title justify-center text-center items-center">
          This will link to google docs
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
