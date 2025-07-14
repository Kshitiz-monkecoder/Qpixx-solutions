import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const Properties = () => {
  return (
    <>
      <Header />

      {/* Hero Image */}
      <div className="w-full h-64 md:h-72 bg-cover bg-center" style={{ backgroundImage: `url('page-header.jpg')` }}></div>

      <section className="bg-white px-6 py-12 md:px-20 text-[#0B1D27]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Properties</h1>
          <button className="bg-[#0B1D27] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#0d2530] transition">
            PROPERTIES
          </button>
        </div>

        <p className="text-lg leading-relaxed max-w-4xl">
          At Qpixx Solutions, we don’t just deal in real estate—we deliver experiences tailored to your
          vision. Whether you're hunting for your dream home, investing in high-return assets, or selling
          to upgrade your lifestyle, our expert team turns every step into a smooth, strategic move.
          With deep market insights, personalized advice, and a passion for people over property, we’re
          here to guide you with clarity and confidence. 💼✨
        </p>

        <p className="mt-6 text-lg">Ready to make your next move your best one yet?</p>

        <a href="/contact-us">
          <button className="bg-[#0B1D27] cursor-pointer mt-5 text-white px-6 py-3 rounded-full font-semibold hover:bg-[#0d2530] transition">
            Book a Consultation
          </button>
        </a>
      </section>
    </>
  )
}

export default Properties
