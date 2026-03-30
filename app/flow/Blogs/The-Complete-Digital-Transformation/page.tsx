

"use client";

import Connect from "@/components/Connect"
import FlowBlog from "@/components/FlowBlog"
import { ArrowUp, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function TheCompleteDigitalTransformation() {


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

          <span className="text-gray-200"> The Complete Digital Transformation</span>

        </div>

      </div>


      <div className="mx-auto text-xl px-20 py-1 bg-white leading-relaxed ">

        <div className="w-full   text-xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold leading-tight mb-6">
            The Complete Digital Transformation Roadmap for Modern Businesses
          </h1>


          {/* <div className="mx-auto px-10 py-12 bg-white leading-relaxed" > */}

          {/* <div className="relative w-full h-[420px] ">
            <Image
              src="/blog2-sub.png"
              alt="Blog 2"
              fill
              className="object-cover rounded-[20px]"
            />
          </div> */}


           <div className="relative w-full h-[420px] ">
            <img
              src="/blog2-sub.png"
              alt="Blog 2"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>



          <p className="text-gray-600 mb-2 text-xl">
            Reading Time: 7–8 minutes
          </p>

          <p className="text-gray-600 mb-2 text-xl">
            Category: Digital Transformation | Business Innovation | Technology Strategy
          </p>

          <p className="text-gray-600 mb-10 text-xl">
            Author: Fuworx Insights Team
          </p>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Digital transformation has become a critical priority for businesses across industries.
            Organizations are increasingly adopting digital technologies to improve operational efficiency,
            enhance customer experiences, and remain competitive in a rapidly evolving marketplace.
          </p>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            However, many businesses struggle with digital transformation because they approach it as
            a technology upgrade rather than a strategic business transformation.
          </p>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Successful digital transformation requires a structured roadmap that aligns technology with
            business objectives, processes, and customer needs.
          </p>

          <p className="mb-10 text-gray-700 leading-8 text-xl">
            This guide outlines a practical roadmap that businesses can follow to begin and scale
            their digital transformation journey.
          </p>

          {/* KEY HIGHLIGHTS */}

          <h2 className="text-2xl font-semibold mb-4">
            Key Highlights
          </h2>

          <ul className="list-disc pl-6 space-y-3 mb-10 text-gray-700 text-xl">
            <li>
              <strong> Digital transformation is not just about technology adoption—it requires redesigning
                business processes and strategies.</strong>
            </li>

            <li>
              <strong> Organizations must begin with a clear understanding of their current operations
                and digital maturity.</strong>
            </li>

            <li>
              <strong>  Automation, system integrations, and cloud platforms enable businesses to streamline
                workflows and scale operations.</strong>
            </li>

            <li>
              <strong>  Data and analytics allow companies to make smarter decisions and improve
                customer engagement.</strong>
            </li>

            <li>
              <strong> Customer experience and digital channels play a central role in modern
                digital businesses.</strong>
            </li>

            <li>
              <strong> A phased transformation roadmap helps organizations adopt technology effectively
                while minimizing risk.</strong>
            </li>
          </ul>

          {/* UNDERSTANDING DIGITAL TRANSFORMATION */}

          <h2 className="text-2xl font-semibold mb-4 ">
            Understanding Digital Transformation
          </h2>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Digital transformation involves integrating digital technologies into core business
            operations to improve efficiency, agility, and customer experience.
          </p>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Rather than simply digitizing existing processes, digital transformation focuses on
            reimagining how businesses operate in a digital-first environment.
          </p>

          <p className="mb-4 text-gray-700 text-xl ">
            Key elements of digital transformation include:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700 text-xl">
            <li>process automation</li>
            <li>integrated technology systems</li>
            <li>data-driven decision making</li>
            <li>improved digital customer experiences</li>
            <li>scalable technology infrastructure</li>
          </ul>

          <p className="mb-10 text-gray-700 leading-8 text-xl">
            Organizations that successfully implement these capabilities can operate more
            efficiently and respond faster to market changes.
          </p>

          {/* STEP 1 */}

          <h2 className="text-2xl font-semibold mb-4 ">
            Step 1: Assess Your Digital Maturity
          </h2>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Before implementing new technologies, businesses must evaluate their current digital capabilities.
          </p>

          <p className="mb-4 text-gray-700 text-xl">
            This involves analyzing:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700 text-xl">
            <li>existing business processes</li>
            <li>current technology systems</li>
            <li>data management practices</li>
            <li>operational inefficiencies</li>
            <li>customer experience gaps</li>
          </ul>

          <p className="mb-10 text-gray-700 leading-8 text-xl">
            A digital maturity assessment helps organizations understand where they stand
            and identify areas that require improvement.
          </p>

          {/* STEP 2 */}

          <h2 className="text-2xl font-semibold mb-4 ">
            Step 2: Define a Clear Transformation Strategy
          </h2>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Digital transformation initiatives must align with the organization’s long-term business goals.
          </p>

          <p className="mb-4 text-gray-700 text-xl">
            A well-defined strategy should outline:
          </p>
          xl
          <ul className="list-disc pl-6 space-y-2 text-xl mb-10 text-gray-700">
            <li>key business objectives</li>
            <li>technology priorities</li>
            <li>operational improvements</li>
            <li>customer experience goals</li>
            <li>expected outcomes</li>
          </ul>

          <p className="mb-10 text-gray-700 leading-8 text-xl">
            Without a clear strategy, businesses risk implementing disconnected tools
            that fail to deliver meaningful results.
          </p>

          {/* STEP 3 */}

          <h2 className="text-2xl font-semibold mb-4 text-">
            Step 3: Modernize Technology Infrastructure
          </h2>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Outdated systems often limit an organization’s ability to innovate.
          </p>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Modern digital businesses rely on flexible and scalable technology infrastructures
            that support integration, automation, and data analytics.
          </p>

          <p className="mb-4 text-gray-700 text-xl">
            Key components of modern digital infrastructure include:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700 text-xl">
            <li>cloud-based platforms</li>
            <li>integrated business systems</li>
            <li>digital commerce platforms</li>
            <li>data analytics and reporting tools</li>
            <li>secure and scalable technology architecture</li>
          </ul>

          <p className="mb-10 text-gray-700 leading-8 text-xl">
            Upgrading technology infrastructure creates the foundation for future innovation.
          </p>

          {/* STEP 4 */}

          <h2 className="text-2xl font-semibold mb-4">
            Step 4: Integrate Systems and Automate Processes
          </h2>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Many organizations operate with fragmented systems that create inefficiencies and data silos.
          </p>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            System integration connects different business platforms so that information flows seamlessly
            across departments.
          </p>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Automation further improves efficiency by reducing repetitive manual tasks.
          </p>

          <p className="mb-4 text-gray-700 text-xl">
            Examples of automation include:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700 text-xl">
            <li>automated order processing</li>
            <li>workflow automation</li>
            <li>customer communication automation</li>
            <li>inventory and supply chain automation</li>
          </ul>

          {/* STEP 5 */}

          <h2 className="text-2xl font-semibold mb-4">
            Step 5: Leverage Data for Better Decision Making
          </h2>

          <p className="mb-6 text-gray-700 leading-8 text-xl ">
            Modern businesses generate large volumes of data from digital platforms and operations.
          </p>

          <p className="mb-6 text-gray-700 leading-8 text-xl">
            Data analytics enables organizations to transform this information into actionable insights.
          </p>

          <p className="mb-4 text-gray-700 text-xl">
            Businesses can use analytics to:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-10 text-gray-700 text-xl">
            <li>understand customer behavior</li>
            <li>track business performance</li>
            <li>optimize marketing campaigns</li>
            <li>improve operational efficiency</li>
          </ul>


          <p className="mb-8 text-xl" >
            Data-driven organizations are able to make faster and more informed decisions.
          </p>

          <h2 className="text-2xl font-semibold mb-4 ">
            Step 6: Enhance Digital Customer Experiences
          </h2>

          <p className="mb-6 text-xl">
            Customer experience has become a central component of digital transformation.
          </p>

          <p className="mb-6 text-xl">
            Modern customers expect seamless interactions across digital channels such as
            websites, mobile applications, and social platforms.
          </p>

          <p className="mb-4 text-xl">
            Businesses must focus on delivering:
          </p>

          <ul className="list-disc pl-6 space-y-2 mb-8 text-xl">
            <li>personalized digital experiences</li>
            <li>fast and intuitive user interfaces</li>
            <li>seamless online purchasing journeys</li>
            <li>responsive customer support systems</li>
          </ul>

          <p className="mb-8 text-xl">
            Improving digital customer experiences strengthens brand loyalty and increases long-term customer value.
          </p>

          <h2 className="text-2xl font-semibold mb-4  ">
            Step 7: Build a Culture of Continuous Innovation
          </h2>

          <p className="mb-6 text-xl">
            Digital transformation is not a one-time project. It is an ongoing process that requires
            continuous improvement and innovation.
          </p>

          <p className="mb-6 text-xl">
            Organizations must encourage experimentation, adopt emerging technologies, and
            continuously optimize their digital systems.
          </p>

          <p className="mb-8 text-xl">
            Companies that build a culture of innovation are better positioned to adapt to evolving
            market conditions and customer expectations.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            The Future of Digital Businesses
          </h2>

          <p className="mb-6 text-xl">
            The future of business will increasingly depend on digital capabilities.
          </p>

          <p className="mb-6 text-xl">
            Organizations that successfully integrate technology, data, and automation into their
            operations will be able to operate more efficiently and deliver superior customer
            experiences.
          </p>

          <p className="mb-6 text-xl">
            Digital transformation enables businesses to become more agile, scalable, and resilient
            in an increasingly competitive environment.
          </p>

          <p className="mb-8 text-xl">
            Companies that start their transformation journey today will be better prepared for the
            challenges and opportunities of tomorrow.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Build or Digitalize Your Business with Fuworx Innovations
          </h2>

          <p className="mb-6 text-xl">
            At Fuworx Innovations, we help businesses design and implement modern digital
            ecosystems that support scalable growth and operational efficiency.
          </p>

          <p className="mb-6 text-xl">
            As a digital transformation partner, we work with organizations to connect platforms,
            automate processes, and enable data-driven decision making.
          </p>

          <p className="mb-4 text-xl">Our capabilities include :</p>

          <ul className="list-disc pl-6 space-y-2 mb-8 text-xl">
            <li>Digital transformation strategy and consulting</li>
            <li>Digital commerce platform development</li>
            <li>System integrations and automation frameworks</li>
            <li>Data analytics and reporting solutions</li>
            <li>Mobile application development</li>
            <li>Scalable technology architecture for modern businesses</li>
          </ul>

          <p className="mb-8 text-xl ">
            Whether you are launching a new digital initiative or modernizing your existing
            operations, the right technology strategy can unlock significant growth opportunities.
          </p>


        </div>
        {/* </div> */}
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