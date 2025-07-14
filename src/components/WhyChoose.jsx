import React from "react";
import {
  FaUserFriends,
  FaMoneyBillWave,
  FaRupeeSign,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserFriends className="text-4xl sm:text-5xl text-[#0B1D27]" />,
    title: "Dedicated One-on-One Consulting",
    description:
      "Experience truly personalized guidance with undivided attention. We never juggle multiple clients simultaneously, ensuring your real estate journey receives our exclusive focus and commitment.",
    button: "Talk to a Consultant",
  },
  {
    icon: <FaMoneyBillWave className="text-4xl sm:text-5xl text-[#0B1D27]" />,
    title: "Zero Upfront Fees",
    description:
      "Pay only for results, not promises. Our unique success-based model means no fees during your buying, selling, or investment advisory process — you pay solely when services are rendered.",
    button: "Know More",
  },
  {
    icon: <FaRupeeSign className="text-4xl sm:text-5xl text-[#0B1D27]" />,
    title: "Save Lakhs in Commission",
    description:
      "Maximize value with fees up to *50% lower* than industry standards. From first-time buyers to seasoned investors, we ensure more money stays in your pocket without compromising service quality.",
    button: "View Savings",
  },
  {
    icon: <FaShieldAlt className="text-4xl sm:text-5xl text-[#0B1D27]" />,
    title: "Risk-Free Transactions",
    description:
      "Rest easy with our exhaustive due diligence process. We proactively cross-verify every detail — legal, financial, and structural — long before deals are finalized, transforming uncertainty into confidence.",
    button: "Our Process",
  },
];

const WhyChoose = () => {
  return (
    <section className="py-12 px-4 sm:px-8 lg:px-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl sm:text-4xl font-bold text-[#0B1D27]">
          Why Choose Qpixx Consultants?
        </h2>
        <p className="text-[#656E73] italic text-base sm:text-lg mt-2 font-medium">
          Your Vision, Our Expertise — Partnership Beyond Transactions
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white border border-[#D9D9D9] rounded-lg p-5 sm:p-6 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between text-center h-full"
          >
            <div className="flex flex-col items-center">
              {feature.icon}
              <h3 className="mt-3 text-base sm:text-lg font-semibold text-[#0B1D27]">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base text-[#656E73] leading-relaxed">
                {feature.description}
              </p>
            </div>
            <div className="mt-5 sm:mt-6">
              <button className="px-4 py-2 border border-[#0B1D27] text-[#0B1D27] text-sm sm:text-base rounded-md hover:bg-[#0B1D27] hover:text-white transition-colors duration-300">
                {feature.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
