"use client";

import Connect from "@/components/Connect";
import { ArrowUp, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function DrivingOperationalExcellenceinHealthTech() {

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

          <span>Driving Operational Excellence in HealthTech</span>

        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto text-xl px-20 py-1 bg-white leading-relaxed font-openSans">

        <div className="w-full text-l mx-auto px-6 py-10 font-openSans">

          <h1 className="text-4xl font-bold mb-6">
            Driving Operational Excellence in HealthTech with HMS
          </h1>

          {/* <div className="relative w-full h-[420px] mb-6">
            <Image
              src="/casestudy2-sub.png"
              alt="Case Study"
              fill
              className="object-cover rounded-[20px]"
            />
          </div> */}


           <div className="relative w-full h-[420px] mb-6">
            <img
              src="/casestudy2-sub.png"
              alt="Case Study"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>

          <p><strong>Industry:</strong> HealthTech</p>
          <p><strong>Domain:</strong> Hospital Management System (HR & CRM)</p>
          <p><strong>Region:</strong> India</p>
          <p><strong>Technology:</strong> Odoo, Python, React.js, AWS</p>

          <h2 className="text-2xl font-semibold mt-6">About the Client</h2>

          <p>
           <strong> Prime Hospital </strong> is a multi-specialty healthcare provider offering comprehensive medical 
            services including OPD, IPD, diagnostics, and pharmacy.
          </p>

          <p>
            Serving a high volume of patients daily, the hospital focuses on delivering quality care 
            while maintaining operational efficiency across departments. With a growing workforce 
            and increasing patient inflow, the hospital required a scalable system to streamline 
            internal operations and enhance patient engagement.
          </p>

          <p>
            As administrative processes and patient management workflows expanded, several 
            critical functions relied heavily on manual processes. To improve efficiency, accuracy, 
            and scalability, the hospital implemented a Hospital Management System (HMS) with a 
            focus on HR and CRM automation.
          </p>

          <h2 className="text-2xl font-semibold mt-6">
            1. Workforce Management (HR) Automation
          </h2>

          <p><strong>Challenges</strong></p>

          <p>Hospital workforce operations were largely manual and fragmented. </p>

          <ul className="list-disc pl-6">
            <li>Manual attendance and shift scheduling</li>
            <li>Payroll processing errors and delays</li>
            <li>Lack of centralized employee data</li>
            <li>Difficulty tracking doctor and staff performance</li>
            <li>Inefficient recruitment and onboarding processes</li>
          </ul>

          <p><strong>Solution</strong></p>
<p>A comprehensive HR module was implemented within HMS to automate workforce 
management. </p>
          <ul className="list-disc pl-6">
            <li>Centralized employee database with role-based access</li>
            <li>Automated attendance and shift scheduling system</li>
            <li>Payroll automation with compliance and reporting</li>
            <li>Performance tracking dashboards for doctors and staff</li>
            <li>Digital onboarding and document management</li>
          </ul>

          <p><strong>Results</strong></p>
<p>The HR automation significantly improved operational efficiency. </p>
          <ul className="list-disc pl-6">
            <li>Up to<strong> 45% reduction in administrative workload</strong></li>
            <li><strong>100% accuracy in payroll processing</strong></li>
            <li>Improved workforce planning and scheduling</li>
            <li>Enhanced visibility into staff performance</li>
            <li>Faster onboarding and reduced manual intervention</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            2. Patient Relationship Management (CRM) Automation
          </h2>

          <p><strong>Challenges</strong></p>
<p>Patient management and engagement processes lacked structure and automation.</p>
          <ul className="list-disc pl-6">
            <li>No centralized patient database</li>
            <li>Missed follow-ups and appointment gaps</li>
            <li>Lack of automated communication with patients</li>
            <li>Poor tracking of patient journey</li>
            <li>Low patient retention and engagement</li>
          </ul>

          <p><strong>Solution</strong></p>
<p>A healthcare CRM module was implemented to streamline patient lifecycle 
management. </p>
          <ul className="list-disc pl-6">
            <li>Centralized patient registration and database</li>
            <li>Appointment scheduling and follow-up tracking</li>
            <li>Automated SMS/WhatsApp reminders</li>
            <li>Patient interaction and history tracking</li>
            <li>Feedback and engagement management system</li>
          </ul>

          <p><strong>Results</strong></p>
<p>CRM automation improved patient experience and retention. </p>
          <ul className="list-disc pl-6">
            <li><strong>35% increase in patient retention</strong></li>
            <li><strong>60% reduction in missed appointments</strong></li>
            <li>Improved patient communication and engagement</li>
            <li>Enhanced visibility into patient lifecycle</li>
            <li>Higher patient satisfaction and service quality</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            3. Integrated Operations & Data Visibility
          </h2>

          <p><strong>Challenges</strong></p>
<p>Lack of integration between HR and patient management systems impacted decision
making. </p>
          <ul className="list-disc pl-6">
            <li>Limited visibility into hospital operations</li>
            <li>Disconnected systems across departments</li>
            <li>No real-time reporting or analytics</li>
          </ul>

          <p><strong>Solution</strong></p>
          <p>An integrated HMS platform was deployed to unify operations. </p>

          <ul className="list-disc pl-6">
            <li>Centralized dashboards for HR and patient data</li>
            <li>Real-time reporting and analytics</li>
            <li>Seamless integration across departments</li>
            <li>Role-based access for operational control</li>
          </ul>

          <p><strong>Results</strong></p>
<p>Integrated systems improved decision-making and efficiency. </p>
          <ul className="list-disc pl-6">
            <li>Real-time operational insights</li>
            <li>Improved coordination across departments</li>
            <li>Faster and data-driven decision-making</li>
            <li>Increased overall hospital efficiency</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            Overall Business Impact
          </h2>

          <ul className="list-disc pl-6">
            <li>Streamlined hospital operations</li>
            <li>Improved workforce productivity</li>
            <li>Enhanced patient experience and engagement</li>
            <li>Reduced operational costs</li>
            <li>Increased efficiency and scalability</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">
            Fuworx Value Delivered
          </h2>

          <ul className="list-disc pl-6">
            <li>End-to-end HMS implementation</li>
            <li>Customized HR and CRM automation</li>
            <li>Scalable and integrated healthcare solution</li>
            <li>Continuous support and optimization</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-6">Conclusion</h2>

          <p>
            By implementing a unified HMS with HR and CRM automation, Prime Hospital 
            successfully transformed its internal operations and patient engagement processes, 
            achieving measurable improvements in efficiency, accuracy, and overall service delivery.
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