"use client";

import Connect from "@/components/Connect"
import FlowBlog from "@/components/FlowBlog"
import { ArrowUp, Home } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react";

export default function SmartManufacturingTheFuture() {


  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowArrow(true);
      } else {
        setShowArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (

    <div>

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

          <span className="text-gray-200">Smart Manufacturing: The Future</span>

        </div>

      </div>


      <div className="mx-auto text-xl px-20 py-1 bg-white leading-relaxed ">

        <div className="w-full   text-xl mx-auto px-6 py-10">

          <h1 className="text-4xl font-bold leading-tight mb-6">
            Smart Manufacturing: The Future of Industry Operations
          </h1>

          <div className="relative w-full h-[420px] ">
            <Image
              src="/blog6-sub.png"
              alt="Blog 6"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>

     

        <p className=" mb-1">
          <span className="font-semibold">Reading Time:</span> 6–7 minutes
        </p>

        <p className=" mb-1">
          <span className="font-semibold">Category:</span> Digital Transformation | Manufacturing | Industry Innovation
        </p>

        <p className=" mb-8">
          <span className="font-semibold">Author:</span> Fuworx Insights Team
        </p>

        <p className="mb-6">
          Manufacturing industries across the world are undergoing a significant transformation
          driven by digital technologies. Traditional manufacturing processes that rely heavily
          on manual operations, disconnected systems, and limited data visibility are gradually
          being replaced by intelligent and connected production environments.
        </p>

        <p className="mb-6">
          This transformation is often referred to as Smart Manufacturing an approach that
          integrates advanced technologies, automation, and data analytics into industrial
          operations to improve efficiency, productivity, and decision-making.
        </p>

        <p className="mb-6">
          As industries face increasing pressure to improve operational efficiency, reduce costs,
          and adapt to changing market demands, smart manufacturing is emerging as a critical
          strategy for future-ready industrial organizations.
        </p>

        <p className="mb-8">
          Businesses that embrace digital transformation in manufacturing are better positioned
          to innovate, optimize production processes, and remain competitive in an increasingly
          technology-driven industrial landscape.
        </p>

        {/* Key Highlights */}
        <h2 className="text-2xl font-semibold mb-4">Key Highlights</h2>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li><strong>Smart manufacturing integrates digital technologies, automation, and data analytics to improve industrial operations.</strong></li>
          <li><strong>Connected systems provide real-time visibility into production processes, enabling faster and more informed decision-making.</strong></li>
          <li><strong>Automation and intelligent workflows help manufacturers reduce operational inefficiencies and improve productivity.</strong></li>
          <li><strong>Advanced analytics allow businesses to predict maintenance needs and optimize production planning.</strong></li>
          <li><strong>Integrated digital platforms connect production, inventory, supply chain, and operational data.</strong></li>
          <li><strong>Manufacturers adopting digital transformation strategies gain a significant competitive advantage in modern industrial markets.</strong></li>
        </ul>

        {/* Understanding Smart Manufacturing */}
        <h2 className="text-2xl font-semibold mb-4">
          Understanding Smart Manufacturing
        </h2>

        <p className="mb-6">
          Smart manufacturing refers to the use of advanced technologies and connected
          systems to improve manufacturing operations and decision-making.
        </p>

        <p className="mb-6">
          Unlike traditional manufacturing environments, which often operate through
          isolated systems and manual processes, smart manufacturing relies on integrated
          digital platforms that connect machines, processes, and operational data.
        </p>

        <p className="mb-6">
          These connected systems enable manufacturers to monitor production performance
          in real time, identify inefficiencies, and optimize operations across the entire
          production cycle.
        </p>

        <p className="mb-4">Smart manufacturing combines technologies such as:</p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>automation systems</li>
          <li>industrial IoT (Internet of Things)</li>
          <li>advanced data analytics</li>
          <li>digital platforms and integrations</li>
          <li>intelligent monitoring systems</li>
        </ul>

        <p className="mb-8">
          Together, these technologies create a more efficient, responsive, and scalable
          manufacturing environment.
        </p>

        {/* Limitations */}
        <h2 className="text-2xl font-semibold mb-4">
          The Limitations of Traditional Manufacturing Systems
        </h2>

        <p className="mb-6">
          Many manufacturing businesses still operate with legacy systems and manual
          processes that limit operational visibility and efficiency.
        </p>

        <p className="mb-4">
          Common challenges in traditional manufacturing environments include:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>limited visibility into production performance</li>
          <li>disconnected systems across departments</li>
          <li>inefficient manual workflows</li>
          <li>difficulty tracking inventory and production data</li>
          <li>delayed decision-making due to lack of real-time insights</li>
        </ul>

        <p className="mb-8">
          These limitations can lead to production delays, increased operational costs,
          and reduced competitiveness in the market.
        </p>

        <p className="mb-8">
          Smart manufacturing addresses these challenges by introducing connected digital
          systems that provide greater transparency and control over industrial operations.
        </p>

        {/* Real Time Monitoring */}
        <h2 className="text-2xl font-semibold mb-4">
          Real-Time Production Monitoring
        </h2>

        <p className="mb-6">
          One of the most important advantages of smart manufacturing is the ability to
          monitor production processes in real time.
        </p>

        <p className="mb-6">
          Connected digital systems allow manufacturers to track production metrics such
          as machine performance, output levels, and operational efficiency.
        </p>

        <p className="mb-6">
          Real-time monitoring enables organizations to quickly identify operational
          issues and take corrective action before they impact production schedules.
        </p>

        <p className="mb-8">
          This improved visibility helps manufacturers maintain consistent quality
          standards while optimizing production efficiency.
        </p>

        {/* Automation */}
        <h2 className="text-2xl font-semibold mb-4">
          Automation and Intelligent Workflows
        </h2>

        <p className="mb-6">
          Automation plays a central role in modern manufacturing environments.
        </p>

        <p className="mb-6">
          By automating repetitive tasks and operational workflows, manufacturers can
          reduce manual errors, improve productivity, and accelerate production cycles.
        </p>

        <p className="mb-4">
          Automation technologies can be applied across multiple areas of manufacturing
          operations, including:
        </p>

        <ul className="list-disc pl-6 mb-8 space-y-2">
          <li>production scheduling</li>
          <li>inventory management</li>
          <li>quality control processes</li>
          <li>supply chain coordination</li>
          <li>equipment monitoring</li>
        </ul>

        <p className="mb-8">
          Intelligent workflows ensure that production processes operate smoothly and
          efficiently while minimizing operational disruptions.
        </p>

        {/* CTA */}
        <h2 className="text-2xl font-semibold mb-4">
          Build or Digitalize Your Manufacturing Operations with Fuworx Innovations
        </h2>

        <p className="mb-6">
          At Fuworx Innovations, we help businesses modernize their operations by
          implementing scalable digital infrastructures and integrated technology
          solutions.
        </p>

        <p className="mb-6">
          As a digital transformation partner, we work with organizations to design
          connected digital ecosystems that improve operational efficiency and
          enable smarter decision making.
        </p>

        <p className="mb-4">Our capabilities include:</p>

        <ul className="list-disc pl-6 mb-10 space-y-2">
          <li>Digital transformation strategy and consulting</li>
          <li>System integrations and automation frameworks</li>
          <li>Manufacturing process digitalization</li>
          <li>Data analytics and operational reporting solutions</li>
          <li>Mobile application development for business operations</li>
          <li>Scalable technology architecture for modern enterprises</li>
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