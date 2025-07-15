import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const ProjectManagement = () => {
  return (
    <>
      <Header />

      {/* Hero Image */}
      <div className="w-full h-64 md:h-72 bg-cover bg-center" style={{ backgroundImage: `url('page-header.jpg')` }}></div>

      <section className="bg-white px-6 py-12 md:px-20 text-[#0B1D27]">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 md:mb-0">Project Management</h1>
          <button className="bg-[#0B1D27] text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#0d2530] transition">
            PROJECT MANAGEMENT
          </button>
        </div>

        <p className="text-lg leading-relaxed max-w-4xl">
          Project management consulting (PMC) involves providing expert guidance and support to real estate organizations 
          in pre and post planning, executing, and completing projects successfully. 
          <br /><br />
          <span className='font-extrabold'>QPIXX</span> offers specialized skills in designing, marketing, and technical assistance, 
          delivering expertise and knowledge to help small to large clients optimize project performance, manage risks, 
          and achieve their strategic objectives.
        </p>

        <a
          href="https://calendly.com/qpixxsolutions/30min?month=2025-07"
          className="cusror-pointer"
          target="_blank"
        >
          <button className="bg-[#0B1D27] cursor-pointer text-white mt-5 px-6 py-3 rounded-full font-semibold hover:bg-[#0d2530] transition">
            Book a Consultation
          </button>
        </a>
      </section>
    </>
  )
}

export default ProjectManagement
