

// components/Partnersus.jsx
import React from "react";

const Partnersus = () => {
  return (
    <div className="w-full h-auto py-32 lg:h-[500px] b6 flex px-10 flex-col justify-center items-center">
      <div className="flex flex-col gap-8 w-full h-auto justify-center items-center">

        {/* Title */}
        <div className="text-[#6CC24A] lg:max-w-[35ch] text-center font-semibold font-body text-4xl lg:text-5xl">
          Interested in partnering with us?
          <br />
          Let’s build something impactful together.
        </div>

        {/* Description */}
        <div className="text-center text-sm lg:text-lg text-white">
          Fuworx collaborates with forward-thinking partners to create scalable
          digital and business solutions that drive real results.
        </div>

        {/* ===================== BUTTON HERE ===================== */}
        {/* <a href="#PartnerCards"> */}
           <a href="#PartnerForm">
          <button className="bg-white w-[300px] text-center text-[18px] rounded-xl py-4 text-[#0A1F44] font-semibold hover:bg-gray-100 transition">
            Partner With Us
          </button>
        </a>

      </div>
    </div>
  );
};

export default Partnersus;
