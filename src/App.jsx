import React, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MaverickSection from './components/MaverickSection'
import ScrollCategories from './components/CategorySlide'
import TalktoQPIXX from './components/TalktoQPIXX'
import InvestmentForm from './components/InvestmentForm'
import ClientConfidence from './components/ClientConfidence'
import Testimonial from './components/Testimonials'
import Footer from './components/Footer'
import OurOfferings from './components/OurOfferings'
import TheProcess from './components/TheProcess'
import WhyChoose from './components/WhyChoose'

function App() {
  const [count, setCount] = useState(0)

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

export default App
