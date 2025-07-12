import React, { useState } from 'react'
import Header from './components/Header'
import Navbar from './components/Navbar'
import MaverickSection from './components/MaverickSection'
import ScrollCategories from './components/CategorySlide'
import TalktoQPIXX from './components/TalktoQPIXX'
import InvestmentForm from './components/InvestmentForm'
import ClientConfidence from './components/ClientConfidence'
import WhyChoose from './components/WhyChoose'
import Testimonial from './components/Testimonials'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Navbar />
      <MaverickSection />
      <ScrollCategories />
      <WhyChoose />
      <TalktoQPIXX />
      <InvestmentForm />
      <ClientConfidence />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
