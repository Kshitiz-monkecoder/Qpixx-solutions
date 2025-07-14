import React from 'react'

const TermsAndConditions = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto text-[#212529]">
        <h1 className="text-4xl font-bold text-center text-[#0B1D27] mb-2">Terms & Conditions</h1>
        <p className="text-sm text-center text-gray-600 mb-10">
          These Terms govern the use of our website and services. By accessing the platform, you agree to them.
        </p>

        {[
          {
            title: 'Introduction',
            content: `These Terms & Conditions (“Terms”) govern the use of our website and mobile application (“Platform”) by users (“You” / “User”). By accessing our website and using our services, you agree to be bound by these Terms.`,
          },
          {
            title: 'Interpretation & Definitions',
            content: `Interpretation: References to “you,” “your,” or “user” shall include individuals and legal entities using the Platform. Headings are for convenience only and do not affect interpretation. Words importing the singular shall include the plural and vice versa.`,
          },
          {
            title: 'Definitions',
            content: `Account: Refers to the personal account created by the User on the Platform.\nCompany: Qpixx Solutions Private Limited.\nContent: Includes text, images, videos, and other materials available on Our Platform.\nDevice: Refers to any device that can be used to access Our Platform.\nPersonal Data: Any information that relates to an identified or identifiable individual.\nPlatform: Our website and mobile application providing real estate consultancy services.\nServices: As defined in the Services section.\nUsage Data: Data collected automatically through the Service.\nUser: Any person who accesses or uses the Platform.`,
          },
          {
            title: 'Services',
            content: `“Services” shall include all real estate consultancy-related services provided by Qpixx Solutions through the Platform, including but not limited to:\n- Property Advisory\n- Property Listing & Marketing\n- Transaction Assistance\n- Market Analysis & Valuation\n- Consultation\n- Financing & Loan Assistance\nThe Company reserves the right to add, modify, or discontinue any Service without prior notice.`,
          },
          {
            title: 'Eligibility',
            content: `You must be at least 18 years old to use our Platform. By accessing or using our Services, you warrant that you can enter into a binding contract under Indian law.`,
          },
          {
            title: 'User Obligations',
            content: `Security & Integrity: Do not breach or tamper with platform security.\nProhibited Automated Access: Avoid bots, crawlers, scrapers.\nIP Compliance: Do not misuse copyrighted or trademarked material.\nCommercial Use: No unauthorized reselling or promoting.\nFair Usage: Avoid overloading or harming platform performance.\nLegal Compliance: Adhere to Indian laws and our Privacy Policy.\nUnauthorized Access: Do not attempt to access unauthorized accounts, data, or systems.`,
          },
          {
            title: 'Limitation of Liability',
            content: `We are not liable for any losses or damages unless explicitly stated in a written contract. This includes inaccuracies in property details or third-party failures.`,
          },
          {
            title: 'Third-Party Links',
            content: `Our Platform may contain links to third-party websites. We do not endorse or accept responsibility for their content, terms, or policies.`,
          },
          {
            title: 'Account Registration',
            content: `You must provide accurate and updated information when registering. Accounts may be suspended if terms are violated or false info is provided.`,
          },
          {
            title: 'Privacy & Data Protection',
            content: `Your use of the Platform is governed by our Privacy Policy, which details our data handling practices.`,
          },
          {
            title: 'Amendments',
            content: `We may update these Terms at any time. Continued use of the Platform constitutes your acceptance of the revised Terms.`,
          },
          {
            title: 'Contact Information',
            content: `For any queries:\nBR – 54, Sector 116, Noida,\nUttar Pradesh, India- 201303\nPhone: 8860066868\nEmail: info@qpixxsolutions.com`,
          },
        ].map((section, index) => (
          <section
            key={index}
            className="bg-white rounded-md shadow-md p-6 mb-6 border border-gray-200"
          >
            <h2 className="text-2xl font-semibold text-[#0B1D27] mb-3">{section.title}</h2>
            <p className="whitespace-pre-line leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

export default TermsAndConditions
