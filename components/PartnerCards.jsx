




"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function PartnerCards() {
  const router = useRouter();

  return (
    <section id="PartnerCards" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">

          {/* ================= ODOO CARD ================= */}
          <div
            // onClick={() => router.push("/odoo")}
            className="relative bg-white border border-gray-300 rounded-2xl p-10 cursor-pointer hover:shadow-xl transition"
          >

            {/* Green Arrow Circle */}
            <div className="absolute right-8 top-8 bg-[#6CC24A] w-16 h-16 rounded-full flex items-center justify-center text-white shadow-md">
              <ArrowUpRight size={24} />
            </div>

            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/odoo_learning_partner_rgb.png"
                alt="Odoo Logo"
                width={130}
                height={60}
                className="object-contain"
              />
            </div>

            <p className="text-[#1E293B] text-lg leading-relaxed">
              Powering Unified Business Operations with Intelligent Odoo Solutions
            </p>
          </div>

          {/* ================= SHOPIFY CARD ================= */}
          <div
            // onClick={() => router.push("/shopify")}
            className="bg-white border border-gray-300 rounded-2xl p-10 cursor-pointer hover:shadow-xl transition"
          >

            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/Shopify Logo_Monotone_Black_PNG.PNG"
                alt="Shopify Logo"
                width={215}
                height={100}
                className="object-contain"
              />
            </div>

            <p className="text-[#1E293B] text-lg leading-relaxed">
              Automating Workflows and Connecting Apps with Zapier-Powered Integrations
            </p>
          </div>

          {/* ================= ZAPIER CARD ================= */}
          <div
            // onClick={() => router.push("/zapier")}
            className="bg-white border border-gray-300 rounded-2xl p-10 cursor-pointer hover:shadow-xl transition"
          >

            <div className="flex items-center gap-4 mb-8">
              <Image
                src="/Silver Solution Partner (light).png"
                alt="Zapier Logo"
                width={190}
                height={60}
                className="object-contain"
                
              />
            </div>

            <p className="text-[#1E293B] text-lg leading-relaxed">
              Building Scalable eCommerce Experiences with Shopify
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}