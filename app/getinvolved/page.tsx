import React from 'react';
import {grid} from "@/components";

const GetInvolved = () => {
  return (
    <div className="">
      <div className="hero p-36 ">
        <div className="flex-1 pt-32 padding-x text-center"> 
          <h1 className="hero__title justify-center text-center items-center ">Donate to NaijaCoder</h1>

          <h1 className="text-center hero__subtitle font-bold">We provide free instruction, especially for underprivileged students, on the basics of algorithms and computer programming.</h1>


          <form action="https://www.paypal.com/donate" method="post" target="_top">
            <input type="hidden" name="hosted_button_id" value="XTKYF6AJWXWXY" />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
              name="submit"
              title="PayPal - The safer, easier way to pay online!"
              alt="Donate with PayPal button"
              className="mt-20"
            />
            <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
          </form>
          
           <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <grid />
    </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
