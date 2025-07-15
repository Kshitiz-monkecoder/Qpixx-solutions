import React from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const Navbar = () => {
  return (
    <section className="bg-[#FAFAFA] px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
      <div className="relative overflow-hidden rounded-[30px] sm:rounded-[50px] border-t-0 border-4 border-white shadow-xl">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source media="(max-width: 768px)" srcSet="/hero-mobile.jpg" />
            <img
              src="/hero-desktop.jpg"
              alt="Hero Background"
              className="w-full h-full object-cover"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1D27]/70 via-[#0B1D27]/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-[90vh] flex items-center px-4 sm:px-6 py-10 sm:py-12">
          <div className="w-full max-w-4xl text-white text-center md:text-left md:ml-20">
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
    Real Estate <br className="hidden sm:inline" /> Made Easy.
  </h1>
  
  <div className="mx-auto md:mx-0 max-w-xl">
    <p className="text-[#D9D9D9] mb-4 text-sm sm:text-base leading-relaxed">
      As leaders in real estate, we aim to leverage our expertise and 
      established presence to provide appealing returns for our investors, 
      regardless of market conditions. It is also possible to achieve 
      substantial financial gains, even without specialized real estate 
      knowledge.
    </p>
  </div>

  <h2 className="text-base sm:text-lg md:text-xl font-medium mb-6">
    Consult before your next move
  </h2>

  {/* Buttons */}
  <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
    <a
      href="https://calendly.com/qpixxsolutions/30min?month=2025-07"
      target="_blank"
      className="bg-white cursor-pointer text-[#0B1D27] px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition inline-flex items-center justify-center gap-1"
    >
      Book Consultation <ArrowRight className="w-4 h-4" />
    </a>
    <a
      href="https://drive.usercontent.google.com/u/0/uc?id=1Qm0NgR54D-R2cdBvIZHOVF6uXp5I-p3N&export=download"
      target="_blank"
      className="border border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-[#0B1D27] transition text-center"
    >
      Download Brochure
    </a>
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default Navbar;
