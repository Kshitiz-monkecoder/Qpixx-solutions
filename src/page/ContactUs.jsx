import React from 'react'

const ContactUs = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen px-4 py-10">
      <div className="max-w-3xl mx-auto text-[#212529]">
        <h1 className="text-4xl font-bold text-center text-[#0B1D27] mb-2">Contact Us</h1>
        <p className="text-sm text-center text-gray-600 mb-10">
          We'd love to hear from you. Reach out to us with any questions or concerns.
        </p>

        <section className="bg-white rounded-md shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#0B1D27] mb-4">Get in Touch</h2>
          <div className="space-y-4 text-lg leading-relaxed">
            <p>
              <strong>Email:</strong>{' '}
              <a
                href="mailto:info@qpixxsolutions.com"
                className="text-blue-600 underline hover:text-blue-800"
              >
                info@qpixxsolutions.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{' '}
              <a
                href="tel:+918860066868"
                className="text-blue-600 underline hover:text-blue-800"
              >
                +91 88600 66868
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ContactUs
