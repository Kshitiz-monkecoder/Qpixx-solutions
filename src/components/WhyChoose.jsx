import React from "react";

const features = [
  {
    title: "1:1 Consulting",
    image: "/consulting.jpg",
    description: "Get personalized one-on-one expert advice tailored to your investment goals.",
  },
  {
    title: "Zero Upfront Fees",
    image: "/zero-fee.jpg",
    description: "You only pay for results—start your journey without any upfront cost.",
  },
  {
    title: "Save Lakhs in Commission",
    image: "/save-commission.jpg",
    description: "Avoid heavy brokerage fees and retain your hard-earned money.",
  },
  {
    title: "Risk-Free Transactions",
    image: "/risk-free.jpg",
    description: "Work with verified professionals to ensure secure and smooth investments.",
  },
  // Example of 5th card
  // {
  //   title: "24/7 Support",
  //   image: "/support.jpg",
  //   description: "Dedicated assistance throughout your investment journey.",
  // },
];

const WhyChoose = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12 bg-[#FAFAFA] text-[#0B1D27]">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl font-bold mb-2">
          Why Choose Qpixx Consultants?
        </h2>
        <p className="text-[#656E73] mt-2 text-base sm:text-lg">
          Your Vision, Our Expertise — Partnership Beyond Transactions
        </p>
      </div>

      {/* Responsive Centered Grid */}
      <div
        className={`
          grid gap-6
          sm:grid-cols-2
          lg:grid-cols-4
          justify-center
        `}
      >
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 max-w-sm mx-auto"
          >
            <div className="relative w-full h-[200px] overflow-hidden group">
              <img
                src={item.image}
                alt={item.title}
                className="object-cover w-full h-full transition duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 flex items-center justify-center">
                <h3 className="text-lg sm:text-xl font-semibold text-white text-center px-2">
                  {item.title}
                </h3>
              </div>
            </div>
            <div className="p-4 text-sm sm:text-base text-[#656E73]">
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
