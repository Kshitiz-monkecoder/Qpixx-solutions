import React, { useState } from "react";
import emailjs from "emailjs-com";

const InvestmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    amount: "",
    city: "",
    roi: 5,
  });

  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "roi" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await emailjs.send(
        "service_k741yww",
        "template_rnuiaxt",
        {
          fullname: formData.fullName,
          mobile: formData.mobile,
          amount: formData.amount,
          city: formData.city,
          roi: formData.roi,
          date: new Date().toLocaleString(),
        },
        "dZ2b6fP_6bSVLqBos"
      );

      setSubmissionSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Failed to submit.");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#f1f1f1] py-16 px-4 sm:px-10 font-['Urbanist']">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold uppercase text-[#0B1D27] leading-tight">
            Where Expectations meet <br />
            <span className="text-[#656E73] font-light">Reality</span>
          </h2>
          <p className="text-sm text-[#656E73] mt-2">
            Connect with us to explore your investment vision.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
            />
            <input
              name="mobile"
              type="tel"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
            />
            <input
              name="amount"
              type="number"
              placeholder="Investment Amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
            />
            <input
              name="city"
              type="text"
              placeholder="Search City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
            />
          </div>

          <div>
            <label className="block text-[#0B1D27] font-medium mb-2">
              Expected Return on Investment
            </label>
            <input
              type="range"
              name="roi"
              min="3"
              max="20"
              step="1"
              value={formData.roi}
              onChange={handleChange}
              className="w-full accent-[#0B1D27]"
            />
            <div className="flex justify-between text-xs text-[#656E73] mt-1">
              {[3, 4, 5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20  ].map((val) => (
                <span key={val}>{val}%</span>
              ))}
            </div>
            <div className="mt-2 text-[#0B1D27] font-semibold">
              Selected: {formData.roi}%
            </div>
          </div>

          {/* ✅ Success Message */}
          {submissionSuccess && (
            <div className="text-[#656E73] font-medium text-center mt-4">
              Your query has been sent to Qpixx Solutions. You may expect a call from us shortly.
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0B1D27] hover:bg-[#112f3a] text-white px-8 py-3 rounded-full"
              disabled={submissionSuccess}
            >
              Send Submission
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default InvestmentPage;
