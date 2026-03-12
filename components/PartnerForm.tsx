
"use client";

import { useState } from "react";

export default function PartnerForm() {
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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

  // const handleChange = (
  //   e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  // ) => {
  //   const { name, value, type } = e.target;

  //   setFormData((prev) => ({
  //     ...prev,
  //     [name]:
  //       type === "checkbox"
  //         ? (e.target as HTMLInputElement).checked
  //         : value,
  //   }));
  // };



    const handleChange = (e: any) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? e.target.checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSuccessMessage("");
    setErrorMessage("");

    if (!formData.consent) {
      setErrorMessage("Please accept consent checkbox");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/partner-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      //  Show success message below form
      setSuccessMessage("Form Submitted Successfully ✅");

      // Reset form
      setFormData({
        company: "",
        product: "",
        contact: "",
        website: "",
        email: "",
        phone: "",
        type: "",
        consent: false,
      });

    } catch (error: any) {
      console.error("Submit Error:", error);
      setErrorMessage(error.message || "Email sending failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="PartnerForm" className="relative py-20">
      <div className="absolute inset-0 w-[1815px]  bg bg-cover bg-center opacity-80"></div>
    

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="text-white">
          <h2 className="text-5xl font-bold leading-tight mb-6">
            Let’s Build a <br /> Strong <br /> Partnership
          </h2>

          <p className="text-lg text-gray-300 mb-4">
            Join the Fuworx partner ecosystem and expand your product reach
            through trusted implementation and resale.
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
              value={formData.company}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />

            <input
              type="text"
              name="product"
              placeholder="| Product / Platform Name"
              value={formData.product}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />

            <input
              type="text"
              name="contact"
              placeholder="| Partner Contact Name"
              value={formData.contact}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />

            <input
              type="text"
              name="website"
              placeholder="| Website"
              value={formData.website}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />

            <input
              type="email"
              name="email"
              placeholder="| Business Email"
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />

            <input
              type="text"
              name="phone"
              placeholder="| Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
            />
          </div>

          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full bg-transparent border border-gray-400 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-green-400"
          >
            <option value="" className="text-black">
              Partner Type
            </option>
            <option value="Solutions Partner" className="text-black">
              Solutions Partner
            </option>
            <option value="Implementation Partner" className="text-black">
              Implementation Partner
            </option>
            <option value="Reseller Partner" className="text-black">
              Reseller Partner
            </option>
          </select>

          <div className="flex items-start gap-3 text-sm text-gray-300">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-1"
            />
            <p>
              By checking this box, I provide my consent to process my submitted
              data and receive business communications.
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full md:w-1/2 bg-[#6CC24A] hover:bg-green-600 text-white font-semibold py-4 rounded-xl transition duration-300"
          >
            {loading ? "Sending..." : "Submit"}
          </button>

          {/* Success Message */}
          {successMessage && (
            <p className="text-green-400 font-semibold mt-4">
              {successMessage}
            </p>
          )}

          {/*  Error Message */}
          {errorMessage && (
            <p className="text-red-400 font-semibold mt-4">
              {errorMessage}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
