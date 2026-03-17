"use client";

import Connect from "@/components/Connect"
import FlowBlog from "@/components/FlowBlog"
import { ArrowUp, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function TopDigitalTransformationTrends() {


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
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // ✅ Share Links
  const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
    shareUrl
  )}`;

  const whatsapp = `https://wa.me/?text=${encodeURIComponent(
    shareUrl
  )}`;
  return (

    <div>

      {/* ✅ RIGHT SIDE SHARE BAR */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-[#0A1F44] rounded-l-xl flex flex-col items-center py-4 px-3 gap-4 shadow-lg">
          <a href={linkedIn} target="_blank">
            <FaLinkedin className="text-white hover:text-green-400" size={20} />
          </a>

          <a href={whatsapp} target="_blank">
            <FaWhatsapp
              className="text-white hover:text-green-400"
              size={20}
            />

         
          </a>
        </div>
      </div>

      <div className="w-full bg-[#0A1F44] h-[80px] flex items-center relative mt-[120px]">

        <div className="w-full max-w-[1440px] mx-auto px-25 flex items-center text-white text-base gap-3">

          <a
            href="/"
            className="flex items-center gap-2 hover:text-green-400 cursor-pointer"
          >
            < Home size={18} />
          </a>

          <Link
            href="/flow/Blogs"
            className="hover:text-green-400"
          >
            Blogs
          </Link>

          <span className="text-gray-300 ">{">"}</span>

          <span className="text-gray-200">Top Digital Transformation Trends</span>

        </div>

      </div>


      <div className="mx-auto text-xl px-20 py-1 bg-white leading-relaxed ">

        <div className="w-full   text-xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold leading-tight mb-6">
            Top Digital Transformation Trends Businesses Should Watch
          </h1>

          <div className="relative w-full h-[420px] ">
            <Image
              src="/blog5-sub.png"
              alt="Blog 5"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>


          <p className="text-gray-600 mb-2">Reading Time: 6–7 minutes</p>
          <p className="text-gray-600 mb-2">
            Category: Digital Transformation | Business Technology | Innovation
          </p>
          <p className="text-gray-600 mb-8">Author: Fuworx Insights Team</p>

          <p className="mb-6">
            Digital transformation continues to reshape how businesses operate, compete, and deliver value to customers.
            As technology evolves, organizations must constantly adapt their strategies to keep pace with changing market
            demands and technological innovation.
          </p>

          <p className="mb-6">
            Businesses that stay informed about emerging digital transformation trends are better positioned to improve
            efficiency, enhance customer experiences, and unlock new growth opportunities.
          </p>

          <p className="mb-6">
            From artificial intelligence and automation to data-driven decision making and connected digital ecosystems,
            several key trends are defining the future of digital transformation.
          </p>

          <p className="mb-8">
            Understanding these trends can help organizations prepare for the next phase of digital business innovation.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>
              <strong>  Artificial Intelligence is transforming business operations</strong> by enabling smarter decision-making, automation,
              and personalized customer experiences.
            </li>
            <li>
              <strong>Automation technologies are streamlining workflows, reducing manual tasks and improving operational</strong>
              efficiency across industries.
            </li>
            <li>
              <strong>  Data-driven strategies are becoming central to business success,</strong> allowing companies to make more informed
              and strategic decisions.
            </li>
            <li>
              <strong>Cloud-based platforms are enabling scalable and flexible digital infrastructures</strong> for modern organizations.
            </li>
            <li>
              <strong>  Connected digital ecosystems and system integrations are improving operational visibility and collaboration.</strong>
            </li>
            <li>
              <strong>  Customer experience is emerging as a key driver of digital transformation initiatives.</strong>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">
            The Growing Importance of Digital Transformation
          </h2>

          <p className="mb-6">
            Digital transformation is no longer limited to large enterprises. Businesses of all sizes are adopting digital
            technologies to modernize their operations and remain competitive in an increasingly digital economy.
          </p>

          <p className="mb-6">
            Organizations are shifting from traditional business models toward technology-enabled operations, where data,
            automation, and digital platforms play a central role in decision making and customer engagement.
          </p>

          <p className="mb-8">
            Companies that embrace digital transformation early are able to innovate faster, operate more efficiently,
            and respond quickly to evolving market conditions.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Artificial Intelligence and Intelligent Automation
          </h2>

          <p className="mb-6">
            Artificial Intelligence (AI) is one of the most influential technologies shaping modern digital transformation.
          </p>

          <p className="mb-6">
            AI systems enable businesses to analyze large volumes of data, identify patterns, and automate complex
            processes. These capabilities allow organizations to improve decision making, enhance operational efficiency,
            and deliver more personalized customer experiences.
          </p>

          <p className="mb-4">
            AI-powered solutions are being used in areas such as:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>predictive analytics and forecasting</li>
            <li>intelligent customer support systems</li>
            <li>marketing personalization</li>
            <li>fraud detection and risk analysis</li>
            <li>operational automation</li>
          </ul>

          <p className="mb-8">
            As AI technologies continue to evolve, they will play an increasingly important role in helping businesses
            operate smarter and more efficiently.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            The Rise of Automation and Intelligent Workflows
          </h2>

          <p className="mb-6">
            Automation is rapidly becoming a core component of digital transformation strategies.
          </p>

          <p className="mb-6">
            Businesses are adopting automation technologies to reduce manual tasks, improve accuracy, and increase
            operational efficiency. Intelligent workflows allow organizations to streamline processes across departments
            such as operations, finance, customer service, and logistics.
          </p>

          <p className="mb-4">
            Examples of automation in modern businesses include:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>automated order processing</li>
            <li>workflow automation for internal operations</li>
            <li>automated customer communication</li>
            <li>intelligent inventory management</li>
            <li>process automation across departments</li>
          </ul>

          <p className="mb-8">
            Automation allows businesses to focus more on strategic activities while technology handles repetitive
            operational tasks.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Data-Driven Business Strategies
          </h2>

          <p className="mb-6">
            Data has become one of the most valuable assets for modern organizations.
          </p>

          <p className="mb-6">
            Digital platforms generate vast amounts of operational and customer data that can be analyzed to gain
            meaningful insights. Businesses that leverage data analytics are able to make more informed decisions,
            identify market trends, and improve customer engagement strategies.
          </p>

          <p className="mb-4">Data-driven organizations can:</p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>understand customer behavior</li>
            <li>track operational performance</li>
            <li>optimize marketing campaigns</li>
            <li>forecast demand more accurately</li>
          </ul>

          <p className="mb-8">
            As businesses continue to invest in analytics capabilities, data-driven decision making will become a
            fundamental component of digital transformation.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Cloud-Based Digital Infrastructure
          </h2>

          <p className="mb-6">
            Cloud computing has become a foundational technology for modern digital businesses.
          </p>

          <p className="mb-6">
            Cloud platforms allow organizations to store, manage, and access data through scalable digital environments
            without relying on traditional on-premise infrastructure.
          </p>

          <p className="mb-4">
            The benefits of cloud-based systems include:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>improved scalability and flexibility</li>
            <li>reduced infrastructure costs</li>
            <li>remote accessibility and collaboration</li>
            <li>faster technology deployment</li>
          </ul>

          <p className="mb-8">
            Cloud technologies allow businesses to adapt quickly to changing operational needs and support growing
            digital ecosystems.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Connected Digital Ecosystems and System Integration
          </h2>

          <p className="mb-6">
            Modern businesses operate across multiple digital platforms and systems.
          </p>

          <p className="mb-6">
            Without proper integration, these systems can create data silos that limit visibility and efficiency.
            System integration connects different platforms, allowing information to flow seamlessly across
            departments and applications.
          </p>

          <p className="mb-4">
            Connected digital ecosystems enable organizations to:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>improve operational coordination</li>
            <li>enhance data visibility</li>
            <li>streamline workflows</li>
            <li>create unified digital experiences</li>
          </ul>

          <p className="mb-8">
            Businesses that invest in integrated technology infrastructures can operate more efficiently and
            make better strategic decisions.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Customer Experience as a Transformation Driver
          </h2>

          <p className="mb-6">
            Customer expectations have evolved significantly in the digital era.
          </p>

          <p className="mb-6">
            Today’s customers expect fast, seamless, and personalized interactions with brands across multiple
            digital channels. As a result, improving customer experience has become a major driver of digital
            transformation initiatives.
          </p>

          <p className="mb-4">Businesses are focusing on delivering:</p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>personalized digital interactions</li>
            <li>seamless online and mobile experiences</li>
            <li>faster customer support responses</li>
            <li>consistent brand experiences across channels</li>
          </ul>

          <p className="mb-8">
            Organizations that prioritize customer-centric digital strategies are more likely to build long-term
            loyalty and increase customer lifetime value.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Preparing for the Future of Digital Business
          </h2>

          <p className="mb-6">
            Digital transformation is an ongoing journey rather than a one-time initiative.
          </p>

          <p className="mb-6">
            Businesses that continuously adapt to emerging technologies and evolving customer expectations
            will be better positioned to thrive in the digital economy.
          </p>

          <p className="mb-8">
            By embracing innovation, investing in scalable technology infrastructures, and leveraging data-driven
            insights, organizations can create more resilient and future-ready business models.
          </p>

          <p className="mb-8">
            Companies that stay ahead of digital transformation trends today will be the leaders of tomorrow’s
            digital marketplace.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Build or Digitalize Your Business with Fuworx Innovations
          </h2>

          <p className="mb-6">
            At Fuworx Innovations, we help businesses design and implement modern digital ecosystems that
            enable smarter operations and sustainable growth.
          </p>

          <p className="mb-6">
            As a digital transformation partner, we work with organizations to modernize their technology
            infrastructure, integrate systems, and unlock the full potential of digital innovation.
          </p>

          <p className="mb-4">Our capabilities include:</p>

          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Digital transformation strategy and consulting</li>
            <li>Digital commerce platform development</li>
            <li>System integrations and automation frameworks</li>
            <li>Data analytics and reporting solutions</li>
            <li>Mobile application development</li>
            <li>Scalable technology architecture for modern businesses</li>
          </ul>
        </div>


      </div>

      <div className="w-full h-auto flex">
        <Connect />
      </div>
      {/* Arrow Button */}
      {showArrow && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#59e023] hover:bg-orange-500 text-white p-4 rounded-full shadow-lg transition duration-300"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}