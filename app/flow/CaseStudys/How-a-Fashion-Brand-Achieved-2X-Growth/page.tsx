
"use client";

import Connect from "@/components/Connect";
import { ArrowUp, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function HowaFashionBrandAchieved2XGrowth() {

  const [showArrow, setShowArrow] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
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

      {/* HEADER */}
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

          <span>Fashion Brand Achieved 2X Growth </span>

        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto text-xl px-20 py-1 bg-white leading-relaxed font-openSans">

        <div className="w-full text-s mx-auto px-6 py-10 font-openSans">

          <h1 className="text-4xl font-bold mb-6">
            How a Fashion Brand Achieved 2X Growth 
            with Digital & Social Commerce
          </h1>

          <div className="relative w-full h-[420px] mb-6">
            <Image
              src="/casestudy1-sub.png"
              alt="Case Study"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>

          <p><strong>Case Study Details</strong></p>
          <p> <strong>Industry:</strong> Fashion & Apparel Retail</p>
          <p><strong>Region:</strong> India / Global</p>
          <p><strong>Technology:</strong> Shopify, CRM, Marketing Automation, Meta</p>

          <h2 className="text-2xl font-semibold mt-6">About the Client</h2>

          <p>
            A fast-growing fashion and apparel retailer with both offline stores and an emerging 
            online presence wanted to scale its digital commerce operations and improve customer 
            engagement.
          </p>

          <p>
            The brand struggled with fragmented digital channels, poor online conversions, and 
            inefficient marketing processes that limited its growth potential.
          </p>

          <p>
            With support from Fuworx Innovations Pvt Ltd, the company implemented a 
            comprehensive digital commerce transformation strategy to optimize its e-commerce 
            platform, automate marketing campaigns, and enhance the customer shopping 
            experience.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            Digital Commerce Transformation Highlights
          </h2>

          <ul className="list-disc pl-6">
            <li>120% Growth in Online Revenue</li>
            <li>40% Increase in Conversion Rate</li>
            <li>35% Reduction in Cart Abandonment</li>
            <li>3x Growth in Customer Engagement</li>
            <li>Improved Customer Retention & Repeat Purchases</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            E-commerce Platform Optimization
          </h2>

          <p><strong>Business Context</strong></p>

          <p>
            The client’s existing e-commerce platform was slow, difficult to navigate, and not 
            optimized for mobile shoppers, resulting in poor customer experience and low 
            conversions.
          </p>

          <p><strong>Challenges</strong></p>

          <ul className="list-disc pl-6">
            <li>Slow website loading speeds</li>
            <li>Complex navigation structure</li>
            <li>Poor mobile shopping experience</li>
            <li>High bounce rates on product pages</li>
            <li>Inefficient checkout process</li>
          </ul>

          <p><strong>Fuworx Digital Commerce Solution</strong></p>

          <ul className="list-disc pl-6">
            <li>Implementing a<strong> mobile-first UI/UX design</strong></li>
            <li>Optimizing <strong>website speed and performance</strong></li>
            <li>Simplifying the <strong>checkout process</strong></li>
            <li>Improving<strong> product page layouts and visuals</strong></li>
            <li>Integrating<strong> secure payment gateways</strong></li>
          </ul>

          <p><strong>Business Impact</strong></p>

          <ul className="list-disc pl-6">
            <li>40% increase in conversion rates</li>
            <li>30% reduction in website bounce rate</li>
            <li>25% faster page load time</li>
            <li>Improved customer satisfaction and browsing experience</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            Marketing Automation & Customer Engagement
          </h2>

          <p><strong>Business Context</strong></p>

          <p>
            The fashion brand relied heavily on manual marketing campaigns, limiting 
            personalization and engagement with customers.
          </p>

          <p><strong>Challenges</strong></p>

          <ul className="list-disc pl-6">
            <li>Manual email marketing processes</li>
            <li>Lack of customer segmentation</li>
            <li>Poor follow-up on abandoned carts</li>
            <li>Low repeat purchase rate</li>
          </ul>

          <p><strong>Fuworx Digital Marketing Automation Solution</strong></p>

          <ul className="list-disc pl-6">
            <li>Automated <strong> welcome email journeys for new customers</strong></li>
            <li><strong>Abandoned cart recovery campaigns</strong></li>
            <li>Personalized<strong> product recommendation emails</strong></li>
            <li>Customer segmentation based on shopping behavior</li>
            <li>Automated<strong> seasonal promotions and loyalty campaigns</strong></li>
          </ul>

          <p><strong>Business Impact</strong></p>

          <ul className="list-disc pl-6">
            <li>35% reduction in cart abandonment</li>
            <li>3x increase in email engagement rates</li>
            <li>45% increase in repeat purchases</li>
            <li>Significant improvement in customer retention</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            Inventory & Omnichannel Commerce Integration
          </h2>

          <p><strong>Business Context</strong></p>

          <p>
            The client operated both retail stores and online channels, but inventory systems were 
            disconnected, causing stock visibility issues.
          </p>

          <p><strong>Challenges</strong></p>

          <ul className="list-disc pl-6">
            <li>Lack of real-time inventory visibility</li>
            <li>Frequent stockouts for popular items</li>
            <li>Inefficient order fulfillment</li>
            <li>Poor coordination between online and offline sales</li>
          </ul>

          <p><strong>Fuworx Omnichannel Commerce Solution</strong></p>

          <ul className="list-disc pl-6">
            <li>Unified inventory management across online and offline stores</li>
            <li>Enabled real-time stock tracking</li>
            <li>Introduced Click & Collect capabilities</li>
            <li>Optimized order fulfillment workflows</li>
            <li>Implemented centralized order tracking dashboards</li>
          </ul>

          <p><strong>Business Impact</strong></p>

          <ul className="list-disc pl-6">
            <li>50% faster order processing</li>
            <li>Improved inventory accuracy</li>
            <li>Reduced stockouts and overselling</li>
            <li>Seamless omnichannel customer experience</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            Social Media Commerce & Customer Engagement
          </h2>

          <p><strong>Business Context</strong></p>

          <p>
            The fashion brand had active social media pages but was unable to convert 
            engagement into actual sales. Social media traffic was high, but purchase conversion 
            remained low.
          </p>

          <p><strong>Challenges</strong></p>

          <ul className="list-disc pl-6">
            <li>Low conversion from social media traffic</li>
            <li>Inconsistent content and campaign strategy</li>
            <li>Limited use of social commerce features</li>
            <li>Lack of real-time customer engagement</li>
          </ul>

          <p><strong>Fuworx Social Media Commerce Solution</strong></p>

          <ul className="list-disc pl-6">
            <li>Integration of<strong> Instagram & Facebook Shops</strong></li>
            <li>Creation of<strong> shoppable posts, reels, and product tags</strong></li>
            <li>Performance-driven<strong> paid social media campaigns</strong></li>
            <li>Influencer and creator collaboration strategies</li>
            <li>Social analytics to track engagement and conversions</li>
          </ul>

          <h3 className="text-xl font-semibold mt-4">
            WhatsApp Commerce Integration
          </h3>

          <ul className="list-disc pl-6">
            <li>Automated <strong> customer inquiries and product queries</strong></li>
            <li><strong>Abandoned cart reminders through WhatsApp</strong></li>
            <li><strong>Order confirmation and delivery notifications</strong></li>
            <li>Personalized <strong>product recommendations via chat</strong></li>
            <li>Real-time <strong>customer support and consultation</strong></li>
          </ul>

          <p><strong>Business Impact</strong></p>

          <ul className="list-disc pl-6">
            <li>2.5x increase in social media-driven sales</li>
            <li>60% higher engagement through WhatsApp interactions</li>
            <li>Faster customer response and query resolution</li>
            <li>Increased conversion through conversational commerce</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            Marketplace Integration & Expansion
          </h2>

          <p><strong>Business Context</strong></p>

          <p>
            The brand wanted to expand its digital reach through online marketplaces but faced 
            challenges managing multiple sales channels.
          </p>

          <p><strong>Challenges</strong></p>

          <ul className="list-disc pl-6">
            <li>Manual product listing across marketplaces</li>
            <li>Inventory mismatch between channels</li>
            <li>Difficulty managing orders from multiple platforms</li>
            <li>Lack of centralized reporting</li>
          </ul>

          <p><strong>Fuworx Marketplace Integration Solution</strong></p>

          <ul className="list-disc pl-6">
            <li>Integrating with platforms like <strong>Amazon, Flipkart, and Myntra</strong></li>
            <li>Automating<strong> product catalog and listing management</strong></li>
            <li>Synchronizing <strong>inventory across all sales channels</strong></li>
            <li>Centralizing <strong>order processing and fulfillment workflows</strong></li>
            <li>Implementing unified <strong>performance dashboards</strong></li>
          </ul>

          <p><strong>Business Impact</strong></p>

          <ul className="list-disc pl-6">
            <li>2X increase in multi-channel online sales</li>
            <li>Expanded brand reach to new customer segments</li>
            <li>Reduced operational complexity</li>
            <li>Improved inventory and order accuracy</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            Key Business Outcomes
          </h2>

          <p>
            Through its digital commerce transformation initiative,<strong> Fuworx Innovations Pvt Ltd </strong>
            helped the fashion retailer build a scalable and customer-centric e-commerce 
            ecosystem.
          </p>

          <ul className="list-disc pl-6">
            <li>Accelerated online revenue growth</li>
            <li>Improved digital customer experience</li>
            <li>Increased operational efficiency</li>
            <li>Strengthened brand loyalty and customer retention</li>
            <li>Built a strong social commerce and omnichannel retail strategy</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Conclusion</h2>

          <p>
            By combining technology, marketing, and analytics, Fuworx enabled the fashion brand 
            to transform from a traditional retailer into a digitally driven, customer-centric 
            commerce business—unlocking sustainable growth and competitive advantage.
          </p>

        </div>
      </div>

      <div className="w-full flex">
        <Connect />
      </div>

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