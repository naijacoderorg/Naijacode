import Link from 'next/link'; // Import Link from Next.js for client-side navigation

const applications = () => {
  return (
    <>
      {/* Main Container */}
      <div className="min-h-screen  p-10">
        
        {/* Application Link Section */}
        <section className="text-center py-20">
          <h1 className="text-4xl font-bold mb-4">Apply Now</h1>
          <p className="text-lg mb-8">
            We are excited to offer you the opportunity to apply to our program. Click the link below to start your application.
          </p>
          <Link href="https://docs.google.com/forms/d/e/1FAIpQLSeFyHnAmFwI7QUpAiSD3PaUY-8dPyDl_SuXG9Nt0j6SpILIUw/closedform">
            <a className="bg-blue-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-600">
              Start Your Application
            </a>
          </Link>
        </section>

        {/* About the Application Section */}
        <section className="bg-white p-10 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold mb-6 text-center">What Makes a Good Application?</h2>
          <p className="text-lg mb-4">
            A strong application showcases your unique strengths, experiences, and skills. Here are some key elements that make an application stand out:
          </p>
          <ul className="list-disc list-inside mb-4 space-y-2">
            <li><strong>Clarity and Focus:</strong> Clearly articulate your goals and how they align with the program's objectives.</li>
            <li><strong>Relevance:</strong> Highlight experiences and skills that are directly relevant to the program.</li>
            <li><strong>Personal Touch:</strong> Share personal stories or experiences that demonstrate your passion and commitment.</li>
            <li><strong>Attention to Detail:</strong> Ensure that your application is free from errors and follows all guidelines provided.</li>
            <li><strong>Strong Recommendations:</strong> Secure recommendations from individuals who can speak to your strengths and potential.</li>
          </ul>
          <p className="text-lg">
            We encourage you to put your best foot forward and showcase why you would be a great fit for our program. Good luck!
          </p>
        </section>
      </div>
    </>
  );
};

export default applications;
