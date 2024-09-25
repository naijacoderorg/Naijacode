import React from 'react';

const GetInvolved = () => {
  return (
    <div className="">
      <div className="hero p-36 ">
        <div className="flex-1 pt-32 padding-x text-center"> 

          <h1 className="text-center hero__subtitle font-bold">We provide free instruction, especially for underprivileged students, on the basics of algorithms and computer programming.</h1>

        {/* TA Application Link Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Want to Help with Instruction?</h1>
          <Link href="https://apply.naijacoder.com/tas">
            <a className="bg-emerald-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-emerald-600">
              Teaching Assistant Application
            </a>
          </Link>
        </section>

        <section className="text-center py-20">

          <h1 className="text-4xl font-bold mb-4">Donate to NaijaCoder</h1>

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
        </section>

        </div>
      </div>
    </div>
  );
};

export default GetInvolved;
