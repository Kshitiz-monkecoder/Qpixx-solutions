import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const AssetManagement = () => {
  return (
    <>
      <Header />

      {/* Hero Image */}
      <div className="w-full h-64 md:h-72 bg-cover bg-center" style={{ backgroundImage: `url('page-header.jpg')` }}></div>

      <section className="bg-white px-6 py-12 md:px-20 text-[#0B1D27]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Asset Management</h1>
          <button className="bg-[#0B1D27] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#0d2530] transition">
            ASSET MANAGEMENT
          </button>
        </div>

        <p className="text-lg leading-relaxed max-w-4xl">
          Own property. We’ll power it. <br /><br />
          At Qpixx Solutions, we don’t just buy and sell—we manage over ₹250 crore+ in real estate
          assets with precision and care. From luxury homes to high-value commercial spaces, our Asset
          Management service ensures your property earns more and runs smoother—without you lifting a finger.
        </p>

        <a href="/contact-us">
          <button className="bg-[#0B1D27] cursor-pointer text-white mt-5 px-6 py-3 rounded-full font-semibold hover:bg-[#0d2530] transition">
            Book a Consultation
          </button>
        </a>
      </section>
    </>
  )
}

export default AssetManagement
