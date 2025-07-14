// src/pages/HomePage.jsx
import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import MaverickSection from '../components/MaverickSection'
import TalktoQPIXX from '../components/TalktoQPIXX'
import InvestmentForm from '../components/InvestmentForm'
import ClientConfidence from '../components/ClientConfidence'
import Testimonial from '../components/Testimonials'
import Footer from '../components/Footer'
import OurOfferings from '../components/OurOfferings'
import TheProcess from '../components/TheProcess'
import WhyChoose from '../components/WhyChoose'

const HomePage = () => {
  return (
    <>
      <Header />
      <Navbar />
      <MaverickSection />
      {/* <ScrollCategories /> */}
      <OurOfferings />
      <WhyChoose />
      <TalktoQPIXX />
      <TheProcess />
      <InvestmentForm />
      <ClientConfidence />
      <Testimonial />
      <Footer />
    </>
  )
}

export default HomePage
