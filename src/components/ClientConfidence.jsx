import React from "react";

const ClientConfidence = () => {
  return (
    <section
      className="relative w-full text-white font-['Urbanist']"
      style={{
        backgroundImage: "url('/client-confidence.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B1D27]/90 to-[#0B1D27]/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col justify-center items-center sm:items-start px-6 py-20 sm:py-28 text-center sm:text-left">
        <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-wide leading-tight">
          Client <br />
          <span className="font-light">Confidence</span>
        </h2>
        <p className="mt-6 max-w-xl text-base sm:text-lg font-light text-[#D9D9D9] leading-relaxed">
          “Our success in delivering quality service is evident through the trust and confidence
          consistently shown by our clients!”
        </p>
      </div>
    </section>
  );
};

export default ClientConfidence;
