import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rishabh Parikh",
    location: "Delhi, India",
    image: "/emily.jpg",
    feedback:
      "I cannot BELIEVE how simple the QPIXX Services was in helping me to find my first real estate buying in commercial property and how amazing the customer support is.",
    signature: "Rishabh Parikh"
  },
  {
    name: "Girish Chaudhary",
    location: "VP-IT",
    image: "/david.jpg",
    feedback:
      "I hesitated in the beginning, but as QPIXX guided me in buying a dream home, it was GENUINELY a true advisory Firm. Thank you for making it happen.",
    signature: "Girish Chaudhary"
  },
  {
    name: "Dr. Reena Sanwar",
    location: "",
    image: "/monica.jpg",
    feedback:
      "After my retirement, I opt for a rental solution in real estate. Hell lot of surprises and fake commitment in the market. Then QPIXX help me to make my savings into genuine real estate investment. Returns and appreciation were taken in a calculative and secure way. Thanks to their detailed research and services support. Much Appreciated.",
    signature: "Dr. Reena Sanwar"
  }
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const nextTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTransitionDirection("right");
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const prevTestimonial = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTransitionDirection("left");
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setIsAnimating(false);
    }, 300);
  };

  const current = testimonials[index];

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <section className="animate-fadeIn relative py-20 px-4 sm:px-10 bg-[#FAFAFA] font-['Urbanist'] text-[#0B1D27] overflow-hidden">

      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 uppercase">What Our Clients Say</h2>
        <p className="text-[#656E73] mb-14 text-base sm:text-lg">
          Real stories from real people we've helped.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-evenly gap-10 relative min-h-[400px] md:min-h-[300px]">
          {/* Image */}
          <div
            className={`w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[250px] aspect-square rounded-3xl overflow-hidden shadow-xl flex-shrink-0 transition-opacity duration-300 ${
              isAnimating ? "opacity-70" : "opacity-100"
            }`}
          >
            <img
              src={current.image}
              alt={current.name}
              loading="lazy"
              className="w-full h-full object-cover object-center"
              style={{
                imageRendering: "optimizeQuality",
                transform: "translate3d(0,0,0)"
              }}
            />
          </div>

          {/* Content */}
          <div
            key={index}
            className={`text-left max-w-xl lg:space-y-3 space-y-5 animate-fadeIn ${
              transitionDirection === "right" ? "slide-from-right" : "slide-from-left"
            }`}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold">{current.name}</h3>
              <p className="text-sm text-[#656E73]">{current.location}</p>
            </div>

            <p className="text-base sm:text-lg lg:text-xl lg:leading-relaxed text-[#0B1D27]">
              {current.feedback}
            </p>

            <p className="font-signature text-base sm:text-lg font-medium text-[#0B1D27] mt-4">
              — {current.signature}
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-14">
          <button className="bg-transparent text-[#0B1D27] border-2 border-[#0B1D27] px-6 py-3 rounded-full font-semibold hover:bg-[#0B1D27] hover:text-white transition-colors duration-300">
            Book your FREE Consultation
          </button>
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center md:justify-end gap-4 mt-8 md:mt-0 md:absolute md:bottom-10 md:right-10">
        <button
          onClick={prevTestimonial}
          className="bg-[#0B1D27] text-white rounded-full w-12 h-12 text-xl flex items-center justify-center hover:bg-[#112f3a] transition-colors duration-300 shadow-md"
          aria-label="Previous Testimonial"
          disabled={isAnimating}
        >
          ←
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-[#0B1D27] text-white rounded-full w-12 h-12 text-xl flex items-center justify-center hover:bg-[#112f3a] transition-colors duration-300 shadow-md"
          aria-label="Next Testimonial"
          disabled={isAnimating}
        >
          →
        </button>
      </div>

      {/* Dots for mobile */}
      <div className="md:hidden flex justify-center gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setTransitionDirection(i > index ? "right" : "left");
              setIndex(i);
            }}
            className={`w-3 h-3 rounded-full ${i === index ? "bg-[#0B1D27]" : "bg-gray-300"}`}
            aria-label={`Go to testimonial ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
