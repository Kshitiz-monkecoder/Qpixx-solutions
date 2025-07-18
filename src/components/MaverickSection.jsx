import React from 'react';

const MaverickSection = () => {
  return (
    <section id='firm' className="px-4 sm:px-8 lg:px-20 py-12 bg-[#FAFAFA] font-['Urbanist'] my-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-20 lg:gap-32">

        {/* Left Side Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 md:flex md:justify-center md:items-center">
  <img
    src="/WhatsApp Image 2025-07-16 at 18.47.02_9aab634a.jpg"
    alt="Maverick"
    className="w-full md:w-3/4 h-auto rounded-xl object-cover shadow-lg"
  />
</div>


        {/* Right Side Text */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl md:text-6xl font-bold text-[#0B1D27] leading-tight mb-4 text-center md:text-left">
            We are a <span className="hidden sm:inline"><br /></span>
            <span className="text-[#0B1D27]">MAVERICK</span> of
            <span className="hidden sm:inline"><br /></span> Real Estate
          </h2>

          <p className="text-[#656E73] text-base sm:text-lg font-semibold md:text-2xl mb-8 max-w-md mx-auto md:mx-0">
            QPIXX consultants assist clients
in achieving earnings that surpass
industry standards.
We are experts who are adept at
succeeding in today's markets.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xs sm:max-w-md mx-auto md:mx-0">
            <div>
              <p className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#0B1D27]">90+</p>
              <p className="text-[#656E73] font-semibold text-sm md:text-lg mt-1">Properties Sold</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#0B1D27]">15+</p>
              <p className="text-[#656E73] text-sm md:text-lg font-semibold mt-1">Cities Served</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#0B1D27]">200+</p>
              <p className="text-[#656E73] font-semibold text-sm md:text-lg mt-1">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MaverickSection;
