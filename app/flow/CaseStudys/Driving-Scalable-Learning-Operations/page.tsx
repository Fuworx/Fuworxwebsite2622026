"use client";

import Connect from "@/components/Connect";
import { ArrowUp, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function DrivingScalableLearningOperations() {

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
        <div className="w-full max-w-[1440px] mx-auto px-25 flex items-center text-white gap-3">

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

          <span>Driving Scalable Learning Operations</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto text-xl px-20 py-1 bg-white leading-relaxed font-openSans">
        <div className="w-full mx-auto px-6 py-10 font-openSans">

          <h1 className="text-4xl font-bold mb-6">
            Driving Scalable Learning Operations with EdTech SaaS Platform Automation
          </h1>

          {/* <div className="relative w-full h-[420px]">
            <Image
              src="/casestudy3-sub.png"
              alt="Case Study"
              fill
              className="object-cover rounded-[20px]"
            />
          </div> */}


              <div className="relative w-full h-[420px] mb-6">
            <img
              src="/casestudy3-sub.png"
              alt="Case Study"
              className="w-full h-full object-cover rounded-[20px]"
            />
          </div>

          {/* DETAILS */}
          <p className="mt-6">Case Study Details</p>
          <p><strong>Industry:</strong> EdTech</p>
          <p><strong>Domain:</strong> SaaS Learning Management Platform</p>
          <p><strong>Region:</strong> India</p>
          <p><strong>Technology:</strong> Python, PostgreSQL, React.js, REST APIs, AWS</p>

          {/* ABOUT */}
          <h2 className="text-2xl font-semibold mt-8 mb-4">About the Client</h2>

          <p className="mb-4">
            A fast-growing <strong>EdTech company</strong> providing online courses, live classes, and certification programs across multiple domains.
          </p>

          <p className="mb-4">
            Serving thousands of students across India, the organization focuses on delivering high-quality digital learning experiences through structured programs, assessments, and mentorship.
          </p>

          <p className="mb-6">
            As student enrollments, course offerings, and digital content increased, several operational processes relied on manual workflows. To improve scalability, efficiency, and learner engagement, the organization implemented a SaaS-based EdTech platform with automation across learning, sales, and operations.
          </p>

          {/* SECTION 1 */}
          <h2 className="text-2xl font-semibold mb-4">
            1. Student Enrollment & Lead Management Automation (CRM)
          </h2>

          <h3 className="font-semibold mb-2">Challenges</h3>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>No centralized lead management system</li>
            <li>Manual follow-ups leading to missed conversions</li>
            <li>Lack of visibility into student pipeline</li>
            <li>Inefficient counseling and onboarding process</li>
            <li>Low lead-to-student conversion rate</li>
          </ul>

          <h3 className="font-semibold mb-2">Solution</h3>
          <p>A CRM-driven SaaS module was implemented to streamline the student lifecycle.</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Centralized lead and student database</li>
            <li>Automated lead capture from multiple channels</li>
            <li>Follow-up reminders and workflow automation</li>
            <li>Student onboarding and enrollment tracking</li>
            <li>Integrated communication (Email/SMS/WhatsApp)</li>
          </ul>

          <h3 className="font-semibold mb-2">Results</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>40% increase in lead-to-student conversion rate</strong></li>
            <li><strong>60% reduction in manual follow-ups</strong></li>
            <li>Improved visibility into sales pipeline</li>
            <li>Faster and more efficient student onboarding</li>
          </ul>

          {/* SECTION 2 */}
          <h2 className="text-2xl font-semibold mb-4">
            2. Learning Management System (LMS) Automation
          </h2>

          <h3 className="font-semibold mb-2">Challenges</h3>
          <p>Course delivery and learning management lacked structure and scalability. </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Manual course enrollment and access management</li>
            <li>No centralized learning platform</li>
            <li>Difficulty tracking student progress</li>
            <li>Limited engagement and interaction tools</li>
          </ul>

          <h3 className="font-semibold mb-2">Solution</h3>
          <p>A scalable LMS SaaS platform was implemented. </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Centralized course management system</li>
            <li>Automated course enrollment and access control</li>
            <li>Video content, assignments, and assessments</li>
            <li>Progress tracking and performance analytics</li>
            <li>Interactive learning features</li>
          </ul>

          <h3 className="font-semibold mb-2">Results</h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>50% improvement in student engagement</strong></li>
            <li>Real-time tracking of student progress</li>
            <li>Improved learning experience</li>
            <li>Scalable content delivery system</li>
          </ul>

          {/* CONTINUE SAME PATTERN (ALL CONTENT INCLUDED) */}


          {/* SECTION 3 */}
<p className="font-semibold">3. Payment & Subscription Management Automation</p>

<p className="font-semibold mt-4">Challenges</p>
<p className="mb-2">
  Payment processing and subscription handling were manual and error-prone.
</p>

<ul className="list-disc pl-6 mb-4">
  <li>Manual fee tracking and reconciliation</li>
  <li>Delays in payment confirmations</li>
  <li>No subscription or installment management</li>
  <li>Revenue leakage due to lack of tracking</li>
</ul>

<p className="font-semibold">Solution</p>
<p className="mb-2">
  Automated payment and subscription workflows were implemented.
</p>

<ul className="list-disc pl-6 mb-4">
  <li>Integrated payment gateway (UPI, cards, net banking)</li>
  <li>Automated fee tracking and invoicing</li>
  <li>Subscription and installment management</li>
  <li>Payment reminders and alerts</li>
</ul>

<p className="font-semibold">Results</p>
<ul className="list-disc pl-6 mb-8">
  <li><strong>90% reduction in manual payment tracking effort</strong></li>
  <li>Faster payment processing and confirmations</li>
  <li>Improved revenue visibility and control</li>
  <li>Reduced payment-related errors</li>
</ul>

{/* SECTION 4 */}
<p className="font-semibold">4. Faculty & Operations Management</p>

<p className="font-semibold mt-4">Challenges</p>
<p className="mb-2">
  Managing trainers and internal operations lacked efficiency.
</p>

<ul className="list-disc pl-6 mb-4">
  <li>Manual scheduling of classes</li>
  <li>No centralized faculty management</li>
  <li>Lack of performance tracking for trainers</li>
  <li>Coordination issues between teams</li>
</ul>

<p className="font-semibold">Solution</p>
<p className="mb-2">
  An operations module was implemented within the SaaS platform.
</p>

<ul className="list-disc pl-6 mb-4">
  <li>Faculty scheduling and class management</li>
  <li>Trainer performance tracking</li>
  <li>Automated notifications and alerts</li>
  <li>Centralized operations dashboard</li>
</ul>

<p className="font-semibold">Results</p>
<ul className="list-disc pl-6 mb-8">
  <li><strong>40% improvement in operational efficiency</strong></li>
  <li>Better coordination between teams</li>
  <li>Improved faculty utilization and scheduling</li>
  <li>Enhanced visibility into operations</li>
</ul>

{/* SECTION 5 */}
<p className="font-semibold">5. Analytics & Reporting Automation</p>

<p className="font-semibold mt-4">Challenges</p>
<p className="mb-2">
  Decision-making was limited due to lack of real-time data.
</p>

<ul className="list-disc pl-6 mb-4">
  <li>No centralized reporting system</li>
  <li>Manual data collection and analysis</li>
  <li>Limited insights into student performance and revenue</li>
</ul>

<p className="font-semibold">Solution</p>
<p className="mb-2">
  Advanced analytics and dashboards were implemented.
</p>

<ul className="list-disc pl-6 mb-4">
  <li>Real-time dashboards for students, revenue, and operations</li>
  <li>Course performance analytics</li>
  <li>Student engagement and retention insights</li>
  <li>Automated reporting</li>
</ul>

<p className="font-semibold">Results</p>
<ul className="list-disc pl-6 mb-10">
  <li>Real-time business insights</li>
  <li>Data-driven decision-making</li>
  <li>Improved course and marketing strategies</li>
  <li>Better tracking of growth metrics</li>
</ul>

          <h2 className="text-2xl font-semibold mb-4">
            Overall Business Impact
          </h2>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Scalable SaaS platform for EdTech growth</li>
            <li>Improved student acquisition and retention</li>
            <li>Enhanced learning experience</li>
            <li>Streamlined operations and reduced manual effort</li>
            <li>Increased revenue and operational efficiency</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Fuworx Value Delivered</h2>

          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>End-to-end SaaS platform development</li>
            <li>Integrated LMS + CRM solution</li>
            <li>Custom workflows aligned with business needs</li>
            <li>Scalable and secure cloud-based system</li>
            <li>Continuous support and optimization</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Conclusion</h2>

          <p className="mb-6">
            By implementing a unified SaaS-based EdTech platform, the organization successfully transformed its student lifecycle, learning delivery, and operational processes, enabling scalable growth and improved learner outcomes.
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