import React from 'react'

const RefundPolicy = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto text-[#212529]">
        <h1 className="text-4xl font-bold text-center text-[#0B1D27] mb-2">Refund & Cancellation Policy</h1>
        <p className="text-sm text-center text-gray-600 mb-10">
          <span className="font-semibold">Last updated:</span> December 12, 2024
        </p>

        <section className="bg-white rounded-md shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#0B1D27] mb-3">No Cancellation Option</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Clients do not have the option to cancel appointments once booked through the platform.</li>
            <li>Professionals have the ability to reschedule their clients' appointments as needed.</li>
            <li>The Company reserves the right to cancel or suspend accounts that violate the Terms and Conditions.</li>
          </ul>
        </section>

        <section className="bg-white rounded-md shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#0B1D27] mb-3">Refund Policy</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              <strong>Service Refunds:</strong> Payments for sessions or appointments are non-refundable unless canceled by the mental health professional.
            </li>
            <li>
              <strong>Technical Issues:</strong> If the service is unavailable due to verified technical errors, users may request compensation.
            </li>
            <li>
              <strong>Commission Policy:</strong> The 15% commission on the total booking amount is non-refundable, as it includes Razorpay fees, service charges, and GST.
            </li>
            <li>
              <strong>Requesting a Refund:</strong> Email us at <a className="text-blue-600 underline" href="mailto:info@qpixxsolutions.com">info@qpixxsolutions.com</a> with full transaction details.
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-md shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#0B1D27] mb-3">Processing of Refunds</h2>
          <p>
            Refunds will be processed within <strong>7–10 business days</strong> after approval and will be credited to the original payment method.
          </p>
        </section>

        <section className="bg-white rounded-md shadow-md p-6 mb-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-[#0B1D27] mb-3">Contact Information</h2>
          <p>
            If you have questions regarding these policies, please contact us at:<br />
            <span className="block mt-2"><strong>Email:</strong> <a className="text-blue-600 underline" href="mailto:info@qpixxsolutions.com">info@qpixxsolutions.com</a></span>
            <span><strong>Phone:</strong> +91 8860066868</span>
          </p>
        </section>
      </div>
    </div>
  )
}

export default RefundPolicy
