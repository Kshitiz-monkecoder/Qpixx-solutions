import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const CapitalMarketing = () => {
  return (
    <>
      <Header />

      {/* Hero Image */}
      <div className="w-full h-64 md:h-72 bg-cover bg-center" style={{ backgroundImage: `url('page-header.jpg')` }}>
        {/* Optionally add overlay here */}
      </div>

      {/* Main Content */}
      <section className="bg-white px-6 py-12 md:px-20 text-[#0B1D27]">
        {/* Title & Button */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Capital Market</h1>
          <button className="bg-[#0B1D27] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#0d2530] transition">
            CAPITAL MARKET
          </button>
        </div>

        {/* Description */}
        <p className="text-lg leading-relaxed mb-10 max-w-4xl">
          The capital market plays a vital role in India's real estate growth, offering a structured way for developers and investors to raise long-term funds. Tools like REITs, AIFs, and listed equities enable investment without owning property directly. With strong regulation from SEBI and RERA, along with rising interest from NBFCs and banks, the capital market is now a key funding source—especially for commercial real estate.
        </p>

        {/* Key Numbers Section */}
        <div className="bg-[#f8f9fa] p-6 rounded-lg shadow-md max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Key Numbers (as of 2023–2024)</h2>
          <ul className="space-y-2 text-base list-disc pl-5">
            <li>₹3.5 lakh crore – Current size of India’s real estate sector.</li>
            <li>₹65 lakh crore – Projected real estate market size by 2047.</li>
            <li>₹1.5 lakh crore+ – Combined market cap of listed REITs in India.</li>
            <li>$10+ billion – FDI inflow into real estate (2017–2023).</li>
            <li>₹2.3 lakh crore – AIF commitments focused on real estate (SEBI).</li>
            <li>15–20% – NBFC lending portfolio exposure to real estate.</li>
            <li>$25–30 billion – Estimated REIT market size in India by 2030.</li>
          </ul>
        </div>
         <a href="https://calendly.com/qpixxsolutions/30min?month=2025-07"
          className="cusror-pointer"
          target="_blank"
          >
          <button className="bg-[#0B1D27] cursor-pointer mt-5 text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0d2530] transition">
            Book a Consultation
          </button>
        </a>
      </section>
    </>
  )
}

export default CapitalMarketing
