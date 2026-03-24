"use client";

import Connect from "@/components/Connect";
import { ArrowUp, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function TransformingFMCGSaleswithDigitalCommerce() {
  const [showArrow, setShowArrow] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);

    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
  const whatsapp = `https://wa.me/?text=${encodeURIComponent(shareUrl)}`;

  return (
    <div>

      {/* SHARE BAR */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-[#0A1F44] rounded-l-xl flex flex-col items-center py-4 px-3 gap-4 shadow-lg">
          <a href={linkedIn} target="_blank">
            <FaLinkedin className="text-white hover:text-green-400" size={20} />
          </a>
          <a href={whatsapp} target="_blank">
            <FaWhatsapp className="text-white hover:text-green-400" size={20} />
          </a>
        </div>
      </div>

      {/* BREADCRUMB */}
      <div className="w-full bg-[#0A1F44] h-[80px] flex items-center mt-[120px]">
        <div className="w-full max-w-[1440px] mx-auto px-25 flex items-center text-white gap-3">
          {/* <Link href="/" className="hover:text-green-400">
            <Home size={18} />
          </Link> */}


           <a
            href="/"
            className="flex items-center gap-2 hover:text-green-400 cursor-pointer"
          >
            < Home size={18} />
          </a>

          <Link href="/flow/CaseStudys" className="hover:text-green-400">
            CaseStudys
          </Link>

          <span>{">"}</span>
          <span>Transforming FMCG Sales with Digital Commerce</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto text-xl px-20 py-1 bg-white leading-relaxed font-openSans">
        <div className="w-full mx-auto px-6 py-10 font-openSans">

          <h1 className="text-4xl font-bold mb-6">
            Transforming FMCG Sales with Digital Commerce & Omnichannel Strategy
          </h1>

          <div className="relative w-full h-[420px]">
            <Image
              src="/casestudy4-sub.png"
              alt="Case Study 4"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>

          <p className="mt-6 font-semibold">Case Study Details</p>

          <p><strong>Industry:</strong> FMCG (Fast Moving Consumer Goods)</p>
          <p><strong>Region:</strong> India / Global</p>
          <p><strong>Technology:</strong> Shopify, Odoo, Marketing Automation, Social Commerce, Analytics</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">About the Client</h2>

          <p>
            A rapidly growing <strong>FMCG brand specializing in packaged food and household products</strong> wanted to expand its digital presence and build a direct relationship with customers.
          </p>

          <p>
            The company relied heavily on <strong>traditional retail and distributor networks, </strong>which limited customer insights and slowed down market expansion.
          </p>

          <p>
            With the rise of<strong> online grocery platforms, quick commerce,</strong> and social commerce, the brand wanted to create a scalable digital<strong> commerce ecosystem </strong>to increase online sales and improve customer engagement.
          </p>

          <p>
            Digital commerce adoption is becoming essential in FMCG as companies leverage e-commerce and technology to optimize supply chains and customer experiences.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Key Challenges</h2>

          <p>1. Limited Direct-to-Consumer Sales</p>
          <p>The brand relied mainly on distributors and retailers, with minimal direct online sales.</p>

          <p>2. Fragmented Digital Channels</p>
          <p>Their website, marketplaces, and social media were not integrated, resulting in inconsistent customer experiences.</p>

          <p>3. Lack of Customer Data & Personalization</p>
          <p>Without a centralized CRM system, the brand could not track customer behavior or personalize marketing.</p>

          <p>4. Low Online Conversion Rates</p>
          <p>The website lacked optimized product pages, performance marketing strategies, and automated customer journeys.</p>

          <p>5. Inefficient Order Management</p>
          <p>Orders from different platforms were processed manually, causing delays and operational inefficiencies.</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Fuworx Solution</h2>

          <p>
            Fuworx Innovations Pvt Ltd designed a <strong> comprehensive digital commerce transformation strategy</strong> focused on customer experience, automation, and omnichannel growth.
          </p>

          <p className="mt-4">1. E-commerce Platform Development</p>

          <ul className="list-disc pl-6">
            <li>Built a scalable <strong>Direct-to-Consumer (D2C) website</strong></li>
            <li>Optimized product pages with high-quality visuals and SEO</li>
            <li>Integrated payment gateways and logistics partners</li>
          </ul>

          <p className="mt-4">2. Marketplace & Quick Commerce Integration</p>

          <p>Connected the brand with major online channels:</p>

          <ul className="list-disc pl-6">
            <li>Amazon</li>
            <li>Flipkart</li>
            <li>Quick commerce platforms</li>

            <li>Online grocery marketplaces</li>
          </ul>

          <p>This expanded the brand’s digital distribution and visibility.</p>

          <p className="mt-4">3. Social Commerce & Digital Marketing</p>

          <p>Social media became the<strong>primary demand-generation channel.</strong></p>

          <p>Strategies included:</p>

          <ul className="list-disc pl-6">
            <li>Instagram and Facebook product discovery</li>
            <li>Influencer collaborations</li>
            <li>Performance marketing campaigns</li>
            <li>Short-form video marketing (Reels)</li>
          </ul>

          <p className="mt-4">4. WhatsApp Commerce Integration</p>

          <p>As a<strong> sub-channel of social commerce,</strong> WhatsApp was used for:</p>

          <ul className="list-disc pl-6">
            <li>Automated product catalog sharing</li>
            <li>Order placement via chat</li>
            <li>Customer support and order tracking</li>
            <li>Promotional broadcasts and re-engagement campaigns</li>
          </ul>

          <p>This helped create a<strong> conversational shopping experience</strong> for customers.</p>

          <p className="mt-4">5. CRM & Marketing Automation</p>

          <p>Implemented a centralized CRM system that enabled:</p>

          <ul className="list-disc pl-6">
            <li>Customer segmentation</li>
            <li>Automated email & WhatsApp campaigns</li>
            <li>Personalized offers</li>
            <li>Loyalty programs</li>
          </ul>

          <p className="mt-4">6. Data Analytics & Demand Forecasting</p>

          <p>Advanced analytics dashboards were implemented to track:</p>

          <ul className="list-disc pl-6">
            <li>Customer acquisition cost</li>
            <li>Product demand trends</li>
            <li>Campaign performance</li>
            <li>Inventory movement</li>
          </ul>

          <p>This enabled <strong>data-driven marketing and supply chain planning.</strong></p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Results Achieved</h2>

          <p>Within <strong>6–9 months of digital transformation,</strong> the FMCG brand achieved:</p>

          <p>220% growth in online sales</p>
          <p>3X increase in website conversions</p>
          <p>60% of orders generated through social commerce</p>
          <p>40% higher repeat purchases through WhatsApp engagement</p>
          <p>30% faster order processing with automated systems</p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Business Impact</h2>

          <ul className="list-disc pl-6">
            <li>Build a strong Direct-to-Consumer channel</li>
            <li>Improve customer engagement and loyalty</li>
            <li>Gain real-time consumer insights</li>
            <li>Expand rapidly across multiple digital channels</li>
          </ul>

          <p>
            This positioned the brand for long-term growth in the highly competitive FMCG market.
          </p>

          <h2 className="text-2xl font-semibold mt-6 mb-2">Conclusion</h2>

          <p>
            Digital commerce is reshaping the FMCG industry by enabling brands to move beyond traditional retail distribution and build direct relationships with consumers through omnichannel platforms.
          </p>

          <p>
            With the right strategy, technology stack, and marketing automation, FMCG companies can unlock significant revenue growth and operational efficiency.
          </p>

          <p>
            Fuworx Innovations Pvt Ltd helps brands accelerate this transformation by combining digital commerce, social commerce, CRM automation, and data analytics to drive scalable growth.
          </p>

        </div>
      </div>

      <Connect />

      {/* ARROW */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#59e023] text-white p-4 rounded-full shadow-lg"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}