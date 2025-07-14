import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen px-4 py-10">
      <div className="max-w-6xl mx-auto text-[#212529]">
        <h1 className="text-4xl font-bold text-center text-[#0B1D27] mb-2">Privacy Policy</h1>
        <p className="text-sm text-center text-gray-600 mb-10">
          <span className="font-semibold">Last updated:</span> December 12, 2024
        </p>

        {[
          {
            title: 'Privacy Policy: An Overview',
            content: `Welcome to the Privacy Policy of Qpixx Solutions Private Limited, a real estate consulting company having its registered office on BR-54, sector 116, Noida, Pincode-201301. This policy applies to our website, www.qpixxsolutions.com. We continuously strive to keep your personal information safe and secure, safeguarding your privacy.\n\nPlease note that this policy applies only to information collected from our website.`,
          },
          {
            title: 'Understanding this Privacy Policy',
            content: `Together, these general terms and policies of using this Website alongside the Website's Terms and Conditions: Depending on your activities when visiting our Website, you may be required to agree to additional terms and conditions.\n\nThe physical address of our office, including email and phone number, is explicitly shared on the website and all social media pages such as Facebook, Instagram, and LinkedIn. Any numbers procured from there are primarily added to our data pool to make informative calls irrespective of DND enablings.`,
          },
          {
            title: 'Information Gathered from Visitors',
            content: `Qpixx Solutions collects non-personally identifying information about web browsers and servers, such as browser type, language preference, referring site, and the date and time of each visitor request. The purpose of collecting this information is to understand better how visitors use the website. IP addresses for logged-in users are also collected and held with confidentiality.`,
          },
          {
            title: 'Collecting Personal Information',
            content: `Examples of interactions with Qpixx Solutions that result in collecting personal information include newsletter subscriptions or contact forms. The type of information collected depends on the interaction, like username and email address for blog subscriptions.`,
          },
          {
            title: 'How to Protect Your Personal Information?',
            content: `We use commercially acceptable means to protect your personal information, though no method is 100% secure. While we strive to protect it, we cannot guarantee absolute security.`,
          },
          {
            title: 'Advertisements and Other Third-Party Content',
            content: `Our site uses cookies to enable ad servers to serve personalized ads. These cookies store preferences and may be used to track visits. While we manage our cookies, we do not control those of advertisers or external websites linked from our site. Please review the Privacy Policy of each third-party website you visit.`,
          },
          {
            title: 'Personalising your Experience with Cookies',
            content: `Cookies enhance your experience by personalizing content, providing targeted ads, and storing preferences. You can disable cookies in your browser settings, but this may affect site functionality. Continued use implies acceptance of cookies.`,
          },
          {
            title: 'Keeping Up with Privacy Policy Updates',
            content: `We may update this policy at any time. Please check this page regularly. Continued use of the website implies acceptance of any changes made.`,
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

        <section className="bg-white rounded-md shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#0B1D27] mb-3">Dispute Resolution and Jurisdiction</h2>

          <h3 className="text-lg font-semibold mb-1">Step 1: Amicable Resolution Through Mediation</h3>
          <p className="mb-4">
            Any dispute will first be resolved amicably through mediation within 30 days of notice.
          </p>

          <h3 className="text-lg font-semibold mb-1">Step 2: Binding Arbitration Process</h3>
          <p className="mb-4">
            If unresolved, a sole arbitrator will be appointed. The arbitration will be conducted in English in Noida. The arbitrator’s decision is final and binding.
          </p>

          <h3 className="text-lg font-semibold mb-1">Governing Law and Jurisdiction</h3>
          <p>
            This Policy and Terms are governed by Indian law. The courts of Noida have exclusive jurisdiction over any disputes.
          </p>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy
