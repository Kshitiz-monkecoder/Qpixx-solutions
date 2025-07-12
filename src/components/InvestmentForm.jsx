import React, { useState } from "react";
import * as XLSX from "xlsx";
import emailjs from "emailjs-com";

const InvestmentPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    amount: "",
    city: "",
    roi: 5,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "roi" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const worksheet = XLSX.utils.json_to_sheet([formData]);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "InvestmentData");

    const excelBinary = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "binary",
    });

    function s2ab(s) {
      const buf = new ArrayBuffer(s.length);
      const view = new Uint8Array(buf);
      for (let i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    }

    const blob = new Blob([s2ab(excelBinary)], {
      type: "application/octet-stream",
    });

    const url = URL.createObjectURL(blob);

    emailjs
      .send(
        "service_g8hebjh",
        "template_p7bol68",
        {
          to_name: "Kshitiz",
          from_name: formData.fullName,
          message: `New investment submission. Download Excel here: ${url}`,
        },
        "aaKDxdhJqlS0x0Lm2"
      )
      .then(() => {
        alert("Form submitted. Excel download link sent by email!");
        const a = document.createElement("a");
        a.href = url;
        a.download = "investment_submission.xlsx";
        a.click();
      })
      .catch((err) => {
        console.error(err);
        alert("Failed to send email.");
      });
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FAFAFA] to-[#f1f1f1] py-16 px-4 sm:px-10 font-['Urbanist']">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12 space-y-8">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0B1D27] leading-tight">
            Where Expectations meet <br />
            <span className="text-[#656E73] font-light">Reality</span>
          </h2>
          <p className="text-sm text-[#656E73] mt-2">
            Connect with us to explore your investment vision.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B1D27] transition"
            />
            <input
              name="mobile"
              type="tel"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B1D27] transition"
            />
            <input
              name="amount"
              type="number"
              placeholder="Investment Amount"
              value={formData.amount}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B1D27] transition"
            />
            <input
              name="city"
              type="text"
              placeholder="Search City"
              value={formData.city}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0B1D27] transition"
            />
          </div>

          {/* ROI Slider */}
          <div className="text-left">
            <label className="block text-[#0B1D27] font-medium mb-2">
              Expected Return on Investment
            </label>
            <input
              type="range"
              name="roi"
              min="5"
              max="35"
              step="5"
              value={formData.roi}
              onChange={handleChange}
              className="w-full accent-[#0B1D27] cursor-pointer"
            />
            <div className="flex justify-between text-xs text-[#656E73] mt-1">
              {[5, 10, 15, 20, 25, 30, 35].map((val) => (
                <span key={val}>{val}%</span>
              ))}
            </div>
            <div className="mt-2 text-[#0B1D27] font-semibold">
              Selected: {formData.roi}%
            </div>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0B1D27] cursor-pointer hover:bg-[#112f3a] text-white px-8 py-3 rounded-full shadow-lg transition-all duration-300"
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
