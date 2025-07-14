import React from "react";
import { FaMousePointer, FaPhoneAlt, FaClipboardList, FaHandshake } from "react-icons/fa";

const processSteps = [
  {
    icon: <FaMousePointer className="text-[#0B1D27] text-4xl mb-4" />,
    title: "Consultation Request",
    subtitle: "Start with a Click",
    description:
      "Initiate your journey effortlessly. Share your goals through our brief digital questionnaire, and our expert team will immediately begin crafting your personalized strategy.",
  },
  {
    icon: <FaPhoneAlt className="text-[#0B1D27] text-4xl mb-4" />,
    title: "Strategy Discovery Call",
    subtitle: "Deep Dive, Clear Vision",
    description:
      "In a dedicated 1:1 session, we analyze your unique case, market dynamics, and profit potential. This collaborative discussion transforms complexity into actionable insights.",
  },
  {
    icon: <FaClipboardList className="text-[#0B1D27] text-4xl mb-4" />,
    title: "Tailored Action Plan",
    subtitle: "Your Roadmap to Results",
    description:
      "Receive 3–5 customized solutions backed by rigorous due diligence. We present risk–mitigated strategies with projected returns, empowering you to choose the optimal path.",
  },
  {
    icon: <FaHandshake className="text-[#0B1D27] text-4xl mb-4" />,
    title: "Seamless Execution",
    subtitle: "Transaction Perfected",
    description:
      "We handle negotiations, documentation, and compliance while keeping you informed. Celebrate your success as we close the deal and maximize your gains.",
  },
];

const TheProcess = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-[#FAFAFA] font-['Urbanist']">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D27]">The Process</h2>
        <p className="italic text-[#656e73] mt-2 text-base sm:text-lg">
          Your Blueprint for Profitable Real Estate Decisions
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {processSteps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div>
              {step.icon}
              <h3 className="text-lg sm:text-xl font-semibold text-[#0B1D27] mt-2">{step.title}</h3>
              <p className="italic text-[#656e73] text-sm sm:text-base mt-1">{step.subtitle}</p>
              <p className="text-[#0B1D27] text-sm sm:text-base mt-4">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <p className="text-center text-[#656e73] italic mt-12 px-4 text-sm sm:text-base max-w-4xl mx-auto">
        "Our partnership continues post–transaction with portfolio optimization insights — because your growth is our ongoing mission."
      </p>
    </section>
  );
};

export default TheProcess;
