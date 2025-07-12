import React from "react";

const TalktoQPIXX = () => {
  return (
    <section class="bg-[#FAFAFA] py-10 px-6 sm:px-10 ">
  <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20 lg:gap-32">
    
    <div class="w-full md:w-1/2">
      <div class="aspect-w-16 aspect-h-9 bg-[#D9D9D9] rounded-xl flex items-center justify-center">
        <img
          src="/Talkto.jpg"
            alt="Talk to QPIXX"
            class="w-full h-full object-cover rounded-xl"
            loading="lazy"
        />
      </div>
    </div>

    <div class="w-full md:w-1/2 space-y-5 text-center md:text-left">
      <h1 class="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold mb-2">Talk to QPIXX</h1>
      <p class="text-[#656E73] text-base sm:text-xl">
        You'll be connected with an expert <br class="hidden sm:inline" /> no pressure or obligations.
      </p>

      <button class="mt-4 bg-[#0B1D27] cursor-pointer hover:bg-[#112f3a] text-white py-2 px-6 rounded-full shadow-md transition-all duration-300">
        Book Consultation
      </button>
    </div>
  </div>
</section>

  );
}

export default TalktoQPIXX;