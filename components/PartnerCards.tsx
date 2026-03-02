
"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PartnerCards() {
  const router = useRouter();

  return (
    // <section id="PartnerCards" className="bg-white py-20">
    <section id ="partner-cards" className="bg-white py-20">

      <div className="max-w-1xl mx-auto px-6 ">
        <div className="grid md:grid-cols-3 gap-6">

         

{/* ================= ODOO CARD ================= */}
<div

  className=" group relative w-full max-w-[407px] h-[216px] rounded-[13px] border border-[#B7B7B7] bg-white p-6 cursor-pointer hover:shadow-xl transition "
>

  {/* Green Arrow Circle */}
  <div className="absolute right-8 top-8 bg-[#6CC24A] w-16 h-16 rounded-full 
                  flex items-center justify-center text-white shadow-md
                  opacity-0 scale-75
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:scale-100">
    <ArrowUpRight size={24} className="md:w-6 md:h-6" />
  </div>

 


  <div className="flex justify-left mb-9">
  <Image
    src="/odoo_learning_partner_rgb.png"
    alt="Odoo Logo"
    width={120}
    height={61}
    className="object-contain"
  />
</div>

  {/* <p className="text-[#1E293B] leading-relaxed py-3"> */}
  <p className="font-[var(--font-literata)] font-normal text-[14px] leading-[22px] tracking-normal">
    Powering Unified Business Operations with Intelligent Odoo Solutions
  </p>
</div>



          {/* ================= SHOPIFY CARD ================= */}
          <div
            // onClick={() => router.push("/shopify")}
            className="w-full max-w-[407px] h-[216px] rounded-[13px] border border-[#B7B7B7] bg-white p-6"
          >

            <div className="  flex items-left gap-4 mb-10">
              <Image
                src="/Shopify Logo_Monotone_Black_PNG.PNG"
                alt="Shopify Logo"
                width={186}
                height={53}
                className="object-contain   "
              />
            </div>

            {/* <p className="text-[#1E293B]  leading-relaxed  py-7">
             Building Scalable eCommerce Experiences with Shopify
            </p> */}


            <p className="font-[var(--font-literata)] font-normal text-[14px] leading-[22px] tracking-normal">
  Building Scalable eCommerce Experiences with Shopify
</p>
          </div>

          {/* ================= ZAPIER CARD ================= */}
          <div
            // onClick={() => router.push("/zapier")}
            className="w-full max-w-[407px] h-[216px] rounded-[13px] border border-[#B7B7B7] bg-white p-6"
          >

            <div className="flex items-left gap-4 mb-4">
              <Image
                src="/Untitled design.png"
                alt="Zapier Logo"
                width={210}
                height={74}
                className="object-contain"
                
              />
            </div>

            {/* <p className="text-[#1E293B]  leading-relaxed py-2  ">
             Automating Workflows and Connecting Apps with Zapier-Powered Integrations
            </p> */}



 <p className="font-[var(--font-literata)] font-normal text-[14px] leading-[22px] tracking-normal">
  Automating Workflows and Connecting Apps with Zapier-Powered Integrations
</p>
          </div>

        </div>
      </div>
    </section>
  );
}