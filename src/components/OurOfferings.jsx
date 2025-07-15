import React, { useState } from "react";
import {
  FaCity,
  FaUserTie,
  FaIndustry,
  FaShoppingBag,
  FaHotel,
  FaHome,
  FaDatabase,
  FaBriefcase,
  FaChartBar,
  FaBuilding,
  FaTools,
  FaGraduationCap,
  FaFileContract,
} from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const offeringsData = [
  {
    title: "Hotels and resort Project Acquisition",
    icon: <FaHotel className="text-[#0B1D27] text-3xl" />,
    description:
      "Customized strategies crafted to maximize solutions and capitalize on opportunities within India’s hospitality and tourism sector.",
  },
  {
    title: "Infrastructure and Government",
    icon: <FaCity className="text-[#0B1D27] text-3xl" />,
    description:
      "Development of policies, urban planning guidance, and transaction advisory services for projects and programs in collaboration with government and public sector organizations.",
  },
  {
    title: "Developers and fund advisory",
    icon: <FaUserTie className="text-[#0B1D27] text-3xl" />,
    description:
      "Strategic advisory services that evaluate project feasibility across conceptual, regulatory, market, and financial dimensions.",
  },
  {
    title: "Industrial services",
    icon: <FaIndustry className="text-[#0B1D27] text-3xl" />,
    description:
      "Comprehensive 360-degree solutions covering the entire lifecycle—from pre-investment due diligence and product conceptualization to asset exit—for developers and investors.",
  },
  {
    title: "Retail and brand advisory",
    icon: <FaShoppingBag className="text-[#0B1D27] text-3xl" />,
    description:
      "Viable solutions for developers and retailers covering the entire project life cycle to ensure better returns from their assets and brands.",
  },
  {
    title: "Housing services",
    icon: <FaHome className="text-[#0B1D27] text-3xl" />,
    description:
      "Tailored housing solutions across a range of segments, including senior living, student accommodation, and housing for industrial workers.",
  },
  {
    title: "Data Centre and research advisory",
    icon: <FaDatabase className="text-[#0B1D27] text-3xl" />,
    description:
      "A comprehensive suite of solutions designed for data center operators and users to develop and implement effective market strategies, ensuring both efficiency and profitability.",
  },
  {
    title: "Business consulting",
    icon: <FaBriefcase className="text-[#0B1D27] text-3xl" />,
    description:
      "Strategic advisory offering targeted business solutions that support complex decision-making and align effectively with key business objectives and priorities.",
  },
  {
    title: "Business intelligence",
    icon: <FaChartBar className="text-[#0B1D27] text-3xl" />,
    description:
      "Holistic, data-driven strategies rooted in emerging trends, designed to identify key value drivers through the effective integration of market and consumer insights.",
  },
  {
    title: "Urban Development and Rejuvenation",
    icon: <FaBuilding className="text-[#0B1D27] text-3xl" />,
    description:
      "Transforming and upgrading existing urban areas to boost quality of life, economic opportunities, and long-term sustainability.",
  },
  {
    title: "Construction planning and strategy",
    icon: <FaTools className="text-[#0B1D27] text-3xl" />,
    description:
      "Consulting services that help you navigate complexities and achieve excellence in construction planning for your upcoming projects.",
  },
  {
    title: "Land Acquisition",
    icon: <FaGraduationCap className="text-[#0B1D27] text-3xl" />,
    description:
      "End-to-end land acquisition solutions encompassing identification, evaluation, negotiation, and transaction support to secure strategic land parcels for development, infrastructure, and investment-led projects.",
  },
  {
    title: "Transactions and Bid Advisory",
    icon: <FaFileContract className="text-[#0B1D27] text-3xl" />,
    description:
      "Developing strategic value propositions to guide you through the entire business transformation and transaction lifecycle.",
  },
];

const OurOfferings = () => {
  const [selectedOffering, setSelectedOffering] = useState(null);

  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-[#FAFAFA]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0B1D27] mb-12">
        Our Offerings
      </h2>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-center gap-6">
          {offeringsData.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedOffering(item)}
              className="cursor-pointer w-[calc(50%-12px)] sm:w-[calc(33.333%-16px)] lg:w-[calc(25%-18px)] bg-white hover:bg-[#D9D9D9] shadow-md border border-[#D9D9D9] rounded-lg p-6 flex flex-col items-center justify-center text-center transition-colors duration-300"
            >
              <div className="mb-4">{item.icon}</div>
              <p className="text-sm sm:text-base font-medium text-[#0B1D27]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedOffering && (
  <div className="fixed inset-0 bg-black/20 bg-opacity-30 flex items-center justify-center z-50 px-4">
    <div className="bg-white max-w-lg w-full rounded-lg shadow-lg p-6 relative">
      <button
        onClick={() => setSelectedOffering(null)}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500"
      >
        <IoMdClose size={24} />
      </button>
      <div className="text-center">
        <h3 className="text-xl font-bold text-[#0B1D27] mb-4">
          {selectedOffering.title}
        </h3>
        <p className="text-gray-700 text-sm sm:text-base">
          {selectedOffering.description}
        </p>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default OurOfferings;
