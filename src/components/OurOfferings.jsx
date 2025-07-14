import React from "react";
import {
  FaLeaf,
  FaSolarPanel,
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

const offeringsData = [
  { title: "Sustainability Solutions", icon: <FaLeaf className="text-[#0B1D27] text-3xl" /> },
  { title: "Renewable Energy Solutions", icon: <FaSolarPanel className="text-[#0B1D27] text-3xl" /> },
  { title: "Infrastructure & Government", icon: <FaCity className="text-[#0B1D27] text-3xl" /> },
  { title: "Developers & Funds Advisory", icon: <FaUserTie className="text-[#0B1D27] text-3xl" /> },
  { title: "Industrial Services", icon: <FaIndustry className="text-[#0B1D27] text-3xl" /> },
  { title: "Retail & Brands Advisory", icon: <FaShoppingBag className="text-[#0B1D27] text-3xl" /> },
  { title: "Hospitality & Tourism Solutions", icon: <FaHotel className="text-[#0B1D27] text-3xl" /> },
  { title: "Housing Services", icon: <FaHome className="text-[#0B1D27] text-3xl" /> },
  { title: "Data Centre Research & Advisory", icon: <FaDatabase className="text-[#0B1D27] text-3xl" /> },
  { title: "Business Consulting", icon: <FaBriefcase className="text-[#0B1D27] text-3xl" /> },
  { title: "Business Intelligence", icon: <FaChartBar className="text-[#0B1D27] text-3xl" /> },
  { title: "Urban Development & Rejuvenation", icon: <FaBuilding className="text-[#0B1D27] text-3xl" /> },
  { title: "Construction Planning & Strategy", icon: <FaTools className="text-[#0B1D27] text-3xl" /> },
  { title: "Education & Institutional Investment Advisory", icon: <FaGraduationCap className="text-[#0B1D27] text-3xl" /> },
  { title: "Transactions and Bid Advisory", icon: <FaFileContract className="text-[#0B1D27] text-3xl" /> },
];

const OurOfferings = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-20 bg-[#FAFAFA]">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#0B1D27] mb-12">
        Our Offerings
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {offeringsData.map((item, index) => (
          <div
            key={index}
            className="bg-white hover:bg-[#D9D9D9] shadow-md border border-[#D9D9D9] rounded-lg p-6 flex flex-col items-center justify-center text-center transition-colors duration-300"
          >
            <div className="mb-4">{item.icon}</div>
            <p className="text-sm sm:text-base font-medium text-[#0B1D27]">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurOfferings;
