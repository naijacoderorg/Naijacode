"use client";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    //

    emailjs.sendForm('service_pq0gnpi', 'template_0ignmts', form.current, 'zo3GYpyo57wLc3Dyr')
      .then(
        (result) => {
         // console.log('SUCCESS!', result.text);
          setMessageSent(true);
          form.current.reset(); // Reset the form
        },
        (error) => {
         // console.error('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="flex flex-col">
      <div id="form-container" className="lg:p-5 mt-36 font-Encode-Sans">
        <div className="overflow-hidden">
          <h2 className="text-center lg:text-5xl text-5xl mt-10 pb-6 font-bold">
            QUESTIONS? SUGGESTIONS?</h2>
            <h3 className="text-center lg:text-3xl text-3xl mt-2 pb-6 ">
            Send us a message using the contact form, or write us at 
           <b> <a href="mailto:contact@naijacoder.ord"> contact@niajacoder.org</a></b>. 
           <p></p>
           We look forward to hearing from you!
          </h3>
        </div>

        {messageSent && (
          <div className="text-center text-emerald-500 font-bold mb-4">
            Message sent successfully!
          </div>
        )}

        <div className=" mx-auto rounded-xl max-w-xl bg-emerald-50 border-2 border-gray-700">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mx-auto rounded-xl max-w-xl">
              <div className="grid grid-cols-1 gap-6 label">
                <label htmlFor="name" className="block border-b py-2">
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required="required"
                    placeholder="Name"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker font-bold text-3xl"
                  />
                </label>

                <label htmlFor="email" className="block border-b">
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                    required="required"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none font-bold  text-3xl"
                  />
                </label>

                <label className="block border-b">
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required="required"
                    placeholder="Please write your message here"
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none bg-cool-darker text-cool-beige text-2xl font-bold"
                  ></textarea>
                </label>
                <div className="text-center">
                  <button
                    type="submit"
                    className="uppercase text-sm font-bold tracking-wide bg-emerald-600 text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

