import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Leasing = () => {
  return (
    <>
      <Header />

      {/* Hero Image */}
      <div className="w-full h-64 md:h-72 bg-cover bg-center" style={{ backgroundImage: `url('page-header.jpg')` }}></div>

      {/* Content */}
      <section className="bg-white px-6 py-12 md:px-20 text-[#0B1D27]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Leasing</h1>
          <button className="bg-[#0B1D27] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#0d2530] transition">
            LEASING
          </button>
        </div>

        <p className="text-lg leading-relaxed mb-8 max-w-4xl">
          Whether for commercial, residential, retail, or industrial properties, our tailored advice,
          trusted insights, and technology-enabled approach delivers results.
        </p>

        <a href="/contact-us">
          <button className="bg-[#0B1D27] cursor-pointer text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0d2530] transition">
            Book a Consultation
          </button>
        </a>
      </section>
    </>
  )
}

export default Leasing
