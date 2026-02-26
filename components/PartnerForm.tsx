"use client";

import { useState } from "react";

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    company: "",
    product: "",
    contact: "",
    website: "",
    email: "",
    phone: "",
    type: "",
    consent: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      e.target instanceof HTMLInputElement ? e.target.checked : false;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully ✅");
  };

  return (
    <section 
    
    className="relative bg-[#0A1F44] py-20"
    >
      {/* Background overlay image (optional) */}

  <div className="absolute inset-0 bg bg-cover bg-center opacity-80"></div>
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE TEXT */}
        <div className="text-white">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Let’s Build a <br /> Strong <br />Partnership
          </h2>

          <p className="text-lg text-gray-300 mb-4">
            Join the Fuworx partner ecosystem and<br/> expand your product reach
            through <br/>trusted implementation and resale.
          </p>

          <p className="text-lg text-gray-300">
            Grow Through Strategic Partnerships
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              name="company"
              placeholder="| Company Name"
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />

            <input
              type="text"
              name="product"
              placeholder="| Product / Platform Name"
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />

            <input
              type="text"
              name="contact"
              placeholder="| Partner Contact Name"
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />

            <input
              type="text"
              name="website"
              placeholder="| Website"
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />

            <input
              type="email"
              name="email"
              placeholder="| Business Email"
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />

            <input
              type="text"
              name="phone"
              placeholder="| Phone Number"
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />
          </div>

          <select
            name="type"
            onChange={handleChange}
            className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
          >
            <option value="" className="text-black">
              Partner Type
            </option>
            <option value="technology" className="text-black">
             Solutions Partner
            </option>
            <option value="reseller" className="text-black">
            Implementation Partner 
            </option>
             <option value="reseller" className="text-black">
              Reseller Partner 
            </option>

          </select>

          {/* Checkbox */}
          <div className="flex items-start gap-3 text-sm text-gray-300">
            <input
              type="checkbox"
              name="consent"
              onChange={handleChange}
              className="mt-1"
            />
            <p>
              By checking this box, I provide my consent to process my submitted data and receive business communications.
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full md:w-1/2 bg-[#6CC24A] hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}