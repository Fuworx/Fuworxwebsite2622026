

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaWhatsapp, FaLinkedin, FaShareAlt } from "react-icons/fa";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Connect from "@/components/Connect";

export default function CaseStudy() {
  const router = useRouter();

  // ✅ FIX: base URL for SSR-safe usage
  const [baseUrl, setBaseUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin);
    }
  }, []);

  const caseStudies = [
    {
      title: "How a Fashion Brand Achieved 2X Growth",
      image: "/casestudy1-main.png",
      link: "/flow/CaseStudy/How-a-Fashion-Brand-Achieved-2X-Growth",
    },
    {
      title: "Driving Operational Excellence in HealthTech with",
      image: "/casestudy2-main.png",
      link: "/flow/CaseStudy/Driving-Operational-Excellence-in-HealthTech",
    },
    {
      title: "Driving Scalable Learning Operations with EdTech SaaS",
      image: "/casestudy3-main.png",
      link: "/flow/CaseStudy/Driving-Scalable-Learning-Operations",
    },
    {
      title: "Transforming FMCG Sales with Digital Commerce",
      image: "/casestudy4-main.png",
      link: "/flow/CaseStudy/Transforming-FMCG-Sales-with-Digital-Commerce",
    },
    {
      title: "Driving Omnichannel Growth and Digital Revenue for",
      image: "/casestudy5-main.png",
      link: "/flow/CaseStudy/Driving-Omnichannel-Growth-and-DigitalRevenue",
    },
    {
      title: "Transforming Inventory and Procurement Operations for",
      image: "/casestudy6-main.png",
      link: "/flow/CaseStudy/Transforming-Inventory-and-Procurement",
    },
  ];

  return (
    <div className="relative min-h-screen bg-white">

      {/* Background */}
      <div
        className="absolute top-[77px] left-0 w-full h-[455px] bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/46d981b42179b415df8f52b0cef0882b81324b31.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0A2540]/80"></div>
      </div>

      {/* Header */}
      <div className="relative pt-[188px] max-w-[1200px] mx-auto px-9 z-0">

        <h2
          className="font-extrabold text-[50px] text-center leading-[70px] text-white"
          style={{ fontFamily: "Literata" }}
        >
          Case studies
        </h2>

        <div className="mt-[60px]">
          <img
            src="/a7f9b473f8bc16917d797110e141b1b3b2014671 (1).jpg"
            alt="Case Study"
            className="w-full h-[380px] object-cover rounded-[17px]"
          />
        </div>

        {/* Categories */}
        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-3 border border-[#1e2b4a] text-[#1e2b4a] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#1e2b4a] hover:text-white transition bg-white">
            Categories
            <div className="grid grid-cols-2 gap-1">
              <span className="w-2 h-2 border border-current rounded-sm"></span>
              <span className="w-2 h-2 border border-current rounded-sm"></span>
              <span className="w-2 h-2 border border-current rounded-sm"></span>
              <span className="w-2 h-2 border border-current rounded-sm"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Cards */}
      <section className="bg-white py-10 mt-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-14">

            {caseStudies.map((item, index) => (
              <div
                key={index}
                onClick={() => router.push(item.link)}
                className="w-[380px] h-[290px] bg-white rounded-[16px] border p-4 flex flex-col gap-4 hover:shadow-lg transition duration-300 cursor-pointer"
              >

                {/* Image */}
                <div className="relative w-full h-[140px] rounded-xl overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                <a href={item.link}>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                </a>

                {/* Bottom */}
                <div className="flex justify-between items-center pt-2">

                  <span className="text-black hover:underline font-medium text-sm">
                    Learn More →
                  </span>

                  <div className="relative flex items-center group">

                    {/* Share Icons */}
                    <div className="flex items-center gap-3 mr-2 opacity-0 translate-x-4 
                      group-hover:opacity-100 group-hover:translate-x-0 
                      transition-all duration-300">

                      {/* LinkedIn */}
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          baseUrl + item.link
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0A1F44] text-white p-3 rounded-full hover:bg-blue-700"
                      >
                        <FaLinkedin />
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(
                          item.title + "\n" + baseUrl + item.link
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0A1F44] text-white p-3 rounded-full hover:bg-green-600"
                      >
                        <FaWhatsapp />
                      </a>

                    </div>

                    {/* Share Button */}
                    <span className="flex items-center gap-2 hover:underline text-black font-medium">
                      Share
                      <FaShareAlt />
                    </span>

                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Load More */}
      <div className="w-full flex justify-center py-10 bg-white">
        <button className="flex items-center gap-2 px-6 py-3 border border-[#0A1F44] text-[#0A1F44] rounded-full hover:bg-[#0A1F44] hover:text-white transition duration-300">
          Load more
          <ChevronDown size={18} />
        </button>
      </div>

      {/* Footer */}
      <div className="w-full h-auto flex">
        <Connect />
      </div>
    </div>
  );
}


