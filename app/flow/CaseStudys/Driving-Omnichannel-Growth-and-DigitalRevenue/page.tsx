"use client";

import Connect from "@/components/Connect";
import { ArrowUp, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function DrivingOmnichannelGrowthandDigitalRevenue() {
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

      {/* RIGHT SHARE BAR */}
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
        <div className="w-full max-w-[1440px] mx-auto px-10 flex items-center text-white gap-3">


          {/* <Link href="/" className="flex items-center gap-2 hover:text-green-400">
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

          <span> Driving Omnichannel Growth and Digital </span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto text-xl px-20 py-1 bg-white leading-relaxed font-openSans">
        <div className="w-full text-xl mx-auto px-6 py-10 font-openSans">

            

          <h1 className="text-4xl font-bold mb-6">
            Driving Omnichannel Growth and Digital Revenue for an Apparel Retail Brand through Performance Marketing & Automation
          </h1>

          {/* <div className="relative w-full h-[420px] mb-6">
            <Image
              src="/casestudy5-sub.png"
              alt="Case Study"
              fill
              className="object-cover rounded-[20px]"
            />
          </div> */}

            <div className="relative w-full h-[420px] mb-6">
            <img
              src="/casestudy5-sub.png"
              alt="Case Study"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>

          <h2 className="text-2xl font-semibold mb-4">Case Study Details</h2>

          <p><strong>Industry:</strong> Apparel Retail (Fashion & Lifestyle)</p>
          <p><strong>Region:</strong> India</p>
          <p className="mb-6">
           <strong> Services / Technology:</strong> Performance Marketing (Meta Ads, Google Ads), Social Media Marketing, WhatsApp Automation, SEO, Google Analytics (GA4), E-commerce Platforms (Shopify / Marketplaces), Marketing Automation Tools, CRM & Customer Data Integration
          </p>

          <h2 className="text-2xl font-semibold mb-4">About the Client</h2>

          <p className="mb-4">
            A fast-growing apparel retail brand with a strong presence across multiple offline stores and online sales channels, including its own e-commerce website and leading marketplaces.
          </p>

          <p className="mb-4">
            The brand offers a wide range of fashion products, catering to urban and semi-urban customers, with a focus on affordability, seasonal collections, and trend-driven inventory.
          </p>

          <p className="mb-4">
            With expanding operations across physical and digital touchpoints, the client aimed to build a unified digital growth strategy, improve customer acquisition, and increase repeat purchases across channels.
          </p>

          <p className="mb-6">
            However, fragmented marketing efforts and lack of centralized data visibility were limiting scalability and ROI.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Key Business Challenges</h2>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Disconnected online and offline customer journeys</li>
            <li>Low ROI from paid advertising campaigns</li>
            <li>Lack of structured performance marketing strategy</li>
            <li>Poor visibility into customer behavior and campaign attribution</li>
            <li>Limited repeat customer engagement</li>
            <li>Inconsistent brand presence across digital platforms</li>
            <li>Manual campaign execution and reporting delays</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Solution Overview</h2>

          <p className="mb-6">
            Fuworx Innovations implemented a comprehensive digital commerce and marketing transformation strategy, combining performance marketing, automation, and omnichannel integration.
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>Performance-driven customer acquisition</li>
            <li>Lifecycle marketing automation</li>
            <li>Unified customer data tracking</li>
            <li>Omnichannel brand consistency</li>
            <li>Scalable campaign execution</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            1. Performance Marketing & Customer Acquisition Optimization
          </h2>

          <h3 className="font-semibold mt-4">Challenges</h3>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>High ad spend with low conversion rates</li>
            <li>Poor targeting and audience segmentation</li>
            <li>No structured funnel (awareness → consideration → conversion)</li>
            <li>Limited tracking of campaign performance</li>
          </ul>

          <h3 className="font-semibold">Solution</h3>

          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Designed full-funnel performance marketing strategy across Meta and Google</li>
            <li>Implemented advanced audience segmentation (lookalike, retargeting, 
behavioral) </li>
            <li>Optimized creatives for apparel(catalog ads, seasonal drops, offers) </li>
            <li>Integrated conversion tracking(GA4, Meta Pixel, events tracking) </li>
            <li>Launched A/B testing for creatives, audiences, and landing pages </li>
          </ul>

          <h3 className="font-semibold">Results</h3>

          <ul className="list-disc pl-6 space-y-2 mb-6">
            <li>2.5X increase in ROAS</li>
            <li>40–60% improvement in conversion rates</li>
            <li>Reduced customer acquisition cost</li>
            <li>Improved campaign scalability</li>
          </ul>


          {/* 2. Omnichannel Customer Journey Integration */}

<h2 className="text-2xl font-semibold mb-4">
  2. Omnichannel Customer Journey Integration
</h2>

<h3 className="font-semibold mb-2">Challenges</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Offline store customers not connected to digital ecosystem</li>
  <li>No unified customer view across platforms</li>
  <li>Missed opportunities for cross-channel engagement</li>
</ul>

<h3 className="font-semibold mb-2">Solution</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Integrated POS and e-commerce customer data</li>
  <li>Built unified customer profiles across online and offline channels</li>
  <li>Implemented QR-based and WhatsApp-based store engagement</li>
  <li>Enabled retargeting of offline customers via digital channels</li>
  <li>Created omnichannel campaigns (online → store & store → online)</li>
</ul>

<h3 className="font-semibold mb-2">Results</h3>
<ul className="list-disc pl-6 space-y-2 mb-6">
  <li>30% increase in repeat purchases</li>
  <li>Improved customer lifetime value (CLTV)</li>
  <li>Higher engagement across both online and offline channels</li>
  <li>Better tracking of customer journeys</li>
</ul>

{/* 3. WhatsApp & Lifecycle Marketing Automation */}

<h2 className="text-2xl font-semibold mb-4">
  3. WhatsApp & Lifecycle Marketing Automation
</h2>

<h3 className="font-semibold mb-2">Challenges</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>No structured follow-up for abandoned carts or inactive users</li>
  <li>Limited direct communication with customers</li>
  <li>Manual customer engagement processes</li>
</ul>

<h3 className="font-semibold mb-2">Solution</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Implemented WhatsApp automation for:</li>
  <li>Abandoned cart recovery</li>
  <li>Order updates and confirmations</li>
  <li>Promotional campaigns and offers</li>
  <li>Set up email and SMS automation workflows</li>
  <li>Built customer lifecycle journeys (new user → repeat → loyal customer)</li>
  <li>Enabled personalized messaging based on user behavior</li>
</ul>

<h3 className="font-semibold mb-2">Results</h3>
<ul className="list-disc pl-6 space-y-2 mb-6">
  <li>20–25% recovery of abandoned carts</li>
  <li>3X increase in customer engagement rates</li>
  <li>Higher repeat purchase frequency</li>
  <li>Reduced manual effort in customer communication</li>
</ul>

{/* 4. Social Media & Brand Positioning */}

<h2 className="text-2xl font-semibold mb-4">
  4. Social Media & Brand Positioning
</h2>

<h3 className="font-semibold mb-2">Challenges</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Inconsistent content strategy across platforms</li>
  <li>Low engagement on social media</li>
  <li>Lack of brand storytelling and visual identity</li>
</ul>

<h3 className="font-semibold mb-2">Solution</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Developed a structured content calendar for fashion campaigns</li>
  <li>Created platform-specific content (Instagram, Facebook, reels, stories)</li>
  <li>Focused on trend-based and seasonal campaigns</li>
  <li>Collaborated with micro-influencers for brand reach</li>
  <li>Implemented performance-driven social media strategy</li>
</ul>

<h3 className="font-semibold mb-2">Results</h3>
<ul className="list-disc pl-6 space-y-2 mb-6">
  <li>3X growth in social media engagement</li>
  <li>Significant increase in follower base</li>
  <li>Improved brand recall and positioning</li>
  <li>Higher traffic driven to e-commerce channels</li>
</ul>

{/* 5. Marketplace & E-commerce Optimization */}

<h2 className="text-2xl font-semibold mb-4">
  5. Marketplace & E-commerce Optimization
</h2>

<h3 className="font-semibold mb-2">Challenges</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Low visibility and conversion rates on marketplaces</li>
  <li>Poor product listing optimization</li>
  <li>Inconsistent pricing and promotions</li>
</ul>

<h3 className="font-semibold mb-2">Solution</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Optimized product listings with SEO-driven titles and descriptions</li>
  <li>Improved catalog quality (images, attributes, keywords)</li>
  <li>Implemented marketplace advertising strategies</li>
  <li>Aligned pricing and promotional strategies across channels</li>
  <li>Enhanced product discovery and visibility</li>
</ul>

<h3 className="font-semibold mb-2">Results</h3>
<ul className="list-disc pl-6 space-y-2 mb-6">
  <li>35–50% increase in marketplace sales</li>
  <li>Improved product ranking and visibility</li>
  <li>Higher conversion rates across platforms</li>
  <li>Better inventory movement</li>
</ul>

{/* 6. Analytics, Reporting & Decision Intelligence */}

<h2 className="text-2xl font-semibold mb-4">
  6. Analytics, Reporting & Decision Intelligence
</h2>

<h3 className="font-semibold mb-2">Challenges</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Lack of centralized reporting</li>
  <li>No real-time visibility into marketing performance</li>
  <li>Difficulty in decision-making</li>
</ul>

<h3 className="font-semibold mb-2">Solution</h3>
<ul className="list-disc pl-6 space-y-2 mb-4">
  <li>Implemented GA4 and advanced analytics dashboards</li>
  <li>Integrated data from ads, website, and CRM systems</li>
  <li>Built real-time performance dashboards</li>
  <li>Enabled campaign-level and product-level insights</li>
  <li>Automated reporting workflows</li>
</ul>

<h3 className="font-semibold mb-2">Results</h3>
<ul className="list-disc pl-6 space-y-2 mb-6">
  <li>Real-time visibility into business performance</li>
  <li>Faster and data-driven decision-making</li>
  <li>Improved marketing efficiency</li>
  <li>Better budget allocation across channels</li>
</ul>

{/* Business Impact Summary */}

<h2 className="text-2xl font-semibold mb-4">
  Business Impact Summary
</h2>

<ul className="list-disc pl-6 space-y-2 mb-6">
  <li>2–3X increase in overall digital revenue</li>
  <li>30% increase in repeat customers</li>
  <li>40–60% improvement in conversion rates</li>
  <li>20–25% recovery of abandoned carts</li>
  <li>Significant growth in omnichannel customer engagement</li>
  <li>Reduced manual effort through marketing automation</li>
  <li>Improved ROI across all digital marketing channels</li>
</ul>

          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>

          <p className="mb-6">
            By combining performance marketing, automation, and omnichannel integration, Fuworx Innovations enabled the apparel brand to transition from fragmented marketing efforts to a scalable, data-driven digital commerce ecosystem.
          </p>

          <p className="mb-6">
            The transformation not only improved revenue and customer engagement but also established a strong foundation for sustainable growth across online and offline channels.
          </p>

        </div>
      </div>

      <Connect />

      {/* SCROLL BUTTON */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#59e023] hover:bg-orange-500 text-white p-4 rounded-full shadow-lg"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}