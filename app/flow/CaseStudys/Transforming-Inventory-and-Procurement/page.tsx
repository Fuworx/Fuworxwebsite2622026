


"use client";

import Connect from "@/components/Connect";
import { ArrowUp, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function ManufacturingCaseStudy() {

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
          <span> Transforming Inventory and Procurement</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto text-xl px-20 py-1 bg-white leading-relaxed font-openSans">
        <div className="w-full mx-auto px-6 py-10 font-openSans">

          <h1 className="text-4xl font-bold mb-6">
            Transforming Inventory and Procurement 
            Operations for a Manufacturing Company 
            through Digital Automation
          </h1>

          <div className="relative w-full h-[420px] mb-8">
            <Image
              src="/casestudy6-sub.png"
              alt="Case Study"
              fill
              className="object-cover rounded-[20px]"
            />
          </div>

          <p className="font-semibold">Case Study Details</p>

          <ul className="list-disc pl-6 mb-6">
            <li><strong>Industry:</strong> Manufacturing (Industrial Components)</li>
            <li><strong>Region:</strong> India</li>
            <li>
            <strong>  Services / Technology: </strong>Inventory Management System, Procurement 
              Automation, ERP Integration, Barcode Systems, Demand Forecasting (MRP), 
              Analytics Dashboards, Vendor Management Systems
            </li>
          </ul>

          <p className="font-semibold mb-2">About the Client</p>

          <p className="mb-4">
            A mid-sized manufacturing company specializing in the production of industrial 
            components, supplying to distributors, OEMs, and B2B clients across multiple regions.
          </p>

          <p className="mb-4">
            The company operates with a complex supply chain involving multiple vendors, raw 
            material dependencies, warehouse locations, and production cycles.
          </p>

          <p className="mb-4">
            With growing demand and expansion into new markets, the organization faced 
            increasing challenges in managing inventory accuracy, procurement planning, and 
            vendor coordination.
          </p>

          <p className="mb-6">
            To improve operational efficiency and reduce wastage, the company partnered with 
            Fuworx Innovations to implement a digitally integrated inventory and procurement 
            management system.
          </p>

          <p className="font-semibold">Key Business Challenges</p>

          <ul className="list-disc pl-6 mb-6">
            <li>Lack of real-time visibility into inventory across warehouses</li>
            <li>Frequent stockouts and overstocking issues</li>
            <li>Manual procurement processes leading to delays</li>
            <li>Inefficient vendor management and tracking</li>
            <li>No demand forecasting or material planning system</li>
            <li>Errors in stock reconciliation and reporting</li>
            <li>Disconnected systems between procurement, inventory, and production</li>
          </ul>

          <p className="font-semibold">Solution Overview</p>

          <p className="mb-4">
            Fuworx Innovations implemented a centralized inventory and procurement management 
            system, integrated with business workflows to enable real-time visibility, automation, 
            and data-driven decision-making.
          </p>

          <p className="mb-4">The solution focused on:</p>

          <ul className="list-disc pl-6 mb-6">
            <li>Inventory digitization and tracking</li>
            <li>Procurement workflow automation</li>
            <li>Vendor and purchase management</li>
            <li>Demand forecasting and material planning</li>
            <li>Real-time dashboards and reporting</li>
          </ul>

          {/* SECTION 1 */}
          <p className="font-semibold">1. Inventory Digitization & Real-Time Tracking</p>

          <p className="font-semibold mt-4">Challenges</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Manual inventory tracking using spreadsheets</li>
            <li>No visibility into stock levels across locations</li>
            <li>Frequent mismatches in physical vs system stock</li>
            <li>Delays in identifying low-stock or excess inventory</li>
          </ul>

          <p className="font-semibold">Solution</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Implemented centralized inventory management system</li>
            <li>Enabled real-time stock tracking across warehouses</li>
            <li>Introduced SKU-level tracking with batch and lot management</li>
            <li>Integrated barcode-based inventory operations</li>
            <li>Automated stock updates for inward, outward, and transfers</li>
          </ul>

          <p className="font-semibold">Results</p>
          <ul className="list-disc pl-6 mb-8">
            <li>95% improvement in inventory accuracy</li>
            <li>Real-time visibility across all warehouse locations</li>
            <li>Reduction in stock mismatches and manual errors</li>
            <li>Faster stock reconciliation and audit processes</li>
          </ul>

          {/* SECTION 2 */}
          <p className="font-semibold">2. Procurement Workflow Automation</p>

          <p className="font-semibold mt-4">Challenges</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Manual purchase request and approval processes</li>
            <li>Delays in raising purchase orders (POs)</li>
            <li>Lack of standardization in procurement workflows</li>
            <li>Difficulty tracking procurement status</li>
          </ul>

          <p className="font-semibold">Solution</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Automated end-to-end procurement workflows</li>
            <li>Digitized purchase requests, approvals, and PO generation</li>
            <li>Configured approval hierarchies and workflows</li>
            <li>Enabled real-time tracking of procurement lifecycle</li>
            <li>Integrated notifications and alerts for pending approvals</li>
          </ul>

          <p className="font-semibold">Results</p>
          <ul className="list-disc pl-6 mb-8">
            <li>60–70% reduction in procurement processing time</li>
            <li>Faster purchase order generation and approvals</li>
            <li>Improved process standardization</li>
            <li>Increased transparency in procurement operations</li>
          </ul>

        {/* SECTION 3 */}
<p className="font-semibold">3. Vendor Management & Optimization</p>

<p className="font-semibold mt-4">Challenges</p>
<ul className="list-disc pl-6 mb-4">
  <li>No centralized vendor database</li>
  <li>Difficulty tracking vendor performance and pricing</li>
  <li>Lack of historical procurement insights</li>
  <li>Inconsistent vendor communication</li>
</ul>

<p className="font-semibold">Solution</p>
<ul className="list-disc pl-6 mb-4">
  <li>Built centralized vendor management system</li>
  <li>Maintained vendor profiles with pricing, lead time, and history</li>
  <li>Enabled vendor comparison and selection workflows</li>
  <li>Implemented performance tracking metrics (delivery time, quality, cost)</li>
  <li>Automated communication and documentation</li>
</ul>

<p className="font-semibold">Results</p>
<ul className="list-disc pl-6 mb-8">
  <li>Improved vendor selection and negotiation</li>
  <li>Reduced procurement costs through better vendor comparison</li>
  <li>Enhanced vendor accountability and performance tracking</li>
  <li>Streamlined vendor communication</li>
</ul>

{/* SECTION 4 */}
<p className="font-semibold">4. Demand Forecasting & Material Planning</p>

<p className="font-semibold mt-4">Challenges</p>
<ul className="list-disc pl-6 mb-4">
  <li>No forecasting mechanism for raw material demand</li>
  <li>Production delays due to material shortages</li>
  <li>Excess inventory due to poor planning</li>
  <li>Reactive procurement instead of planned purchasing</li>
</ul>

<p className="font-semibold">Solution</p>
<ul className="list-disc pl-6 mb-4">
  <li>Implemented demand forecasting based on historical data</li>
  <li>Integrated material requirement planning (MRP)</li>
  <li>Automated reorder level and safety stock calculations</li>
  <li>Enabled production-linked procurement planning</li>
  <li>Provided predictive insights for inventory optimization</li>
</ul>

<p className="font-semibold">Results</p>
<ul className="list-disc pl-6 mb-8">
  <li>30–40% reduction in stockouts</li>
  <li>Optimized inventory holding levels</li>
  <li>Improved production planning efficiency</li>
  <li>Reduced excess inventory and carrying costs</li>
</ul>

{/* SECTION 5 */}
<p className="font-semibold">5. Warehouse Operations & Stock Movement Automation</p>

<p className="font-semibold mt-4">Challenges</p>
<ul className="list-disc pl-6 mb-4">
  <li>Manual tracking of stock movement between warehouses</li>
  <li>Inefficient handling of inward and outward logistics</li>
  <li>Lack of traceability for materials</li>
</ul>

<p className="font-semibold">Solution</p>
<ul className="list-disc pl-6 mb-4">
  <li>Digitized warehouse operations and stock transfers</li>
  <li>Implemented barcode scanning for stock movement</li>
  <li>Enabled real-time tracking of material movement</li>
  <li>Integrated warehouse workflows with inventory system</li>
  <li>Created audit trails for all stock transactions</li>
</ul>

<p className="font-semibold">Results</p>
<ul className="list-disc pl-6 mb-8">
  <li>Improved warehouse efficiency and accuracy</li>
  <li>Faster stock movement and processing</li>
  <li>Complete traceability of inventory</li>
  <li>Reduced operational delays</li>
</ul>

{/* SECTION 6 */}
<p className="font-semibold">6. Analytics, Reporting & Operational Visibility</p>

<p className="font-semibold mt-4">Challenges</p>
<ul className="list-disc pl-6 mb-4">
  <li>Limited reporting capabilities</li>
  <li>No real-time insights into inventory or procurement</li>
  <li>Difficulty in decision-making</li>
</ul>

<p className="font-semibold">Solution</p>
<ul className="list-disc pl-6 mb-4">
  <li>Built real-time dashboards for inventory and procurement</li>
  <li>Enabled reporting on stock levels, procurement cycles, vendor performance</li>
  <li>Integrated data across systems for unified visibility</li>
  <li>Automated reporting workflows</li>
</ul>

<p className="font-semibold">Results</p>
<ul className="list-disc pl-6 mb-10">
  <li>Real-time visibility into operations</li>
  <li>Faster and data-driven decision-making</li>
  <li>Improved operational planning and control</li>
  <li>Enhanced management reporting</li>
</ul>

{/* BUSINESS IMPACT */}
<p className="font-semibold">Business Impact Summary</p>
<ul className="list-disc pl-6 mb-10">
  <li>95% improvement in inventory accuracy</li>
  <li>60–70% faster procurement processes</li>
  <li>30–40% reduction in stockouts</li>
  <li>Significant reduction in excess inventory and carrying costs</li>
  <li>Improved vendor performance and cost optimization</li>
  <li>Enhanced production planning and operational efficiency</li>
  <li>End-to-end visibility across inventory and procurement lifecycle</li>
</ul>

          <p className="font-semibold">Conclusion</p>
          <p className="mb-10">
            Fuworx Innovations enabled the manufacturing company to transition from manual, 
            fragmented operations to a fully integrated and automated inventory and procurement 
            ecosystem.
          </p>

          <p>
            By combining real-time tracking, workflow automation, and predictive planning, the 
            organization achieved greater efficiency, cost control, and scalability, while building a 
            strong foundation for future growth.
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