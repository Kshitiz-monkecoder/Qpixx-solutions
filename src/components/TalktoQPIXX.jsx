import React from "react";

const TalktoQPIXX = () => {
  return (
    <section className="bg-[#FAFAFA] py-10 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 lg:gap-32">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <div className="aspect-w-16 aspect-h-9 bg-[#D9D9D9] rounded-xl flex items-center justify-center">
            <img
              src="/Talkto.jpg"
              alt="Talk to QPIXX"
              className="w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right Text */}
        <div className="w-full md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            Talk to QPIXX
          </h1>
          <p className="text-[#656E73] text-base font-semibold md:text-2xl">
            You'll be connected with an Expert. <br className="sm:inline" /> Feel free to explore the opportunities.
          </p>
          <a href="https://calendly.com/qpixxsolutions/30min?month=2025-07"
          className="cusror-pointer"
          target="_blank"
          ><button className="mt-4 bg-[#0B1D27] cursor-pointer hover:bg-[#112f3a] text-white py-2 px-6 md:py-3 md:px-8 md:text-xl text-base rounded-full shadow-md transition-all duration-300">
            Book Consultation
          </button></a>
          
        </div>
      </div>
    </section>
  );
};

export default TalktoQPIXX;
