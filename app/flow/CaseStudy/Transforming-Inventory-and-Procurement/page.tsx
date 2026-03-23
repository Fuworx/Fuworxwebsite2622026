// "use client";

// import Connect from "@/components/Connect";
// import { ArrowUp, Home } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";

// export default function TransformingInventoryandProcurement() {

//   const [showArrow, setShowArrow] = useState(false);
//   const [shareUrl, setShareUrl] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowArrow(window.scrollY > 200);
//     };

//     window.addEventListener("scroll", handleScroll);

//     if (typeof window !== "undefined") {
//       setShareUrl(window.location.href);
//     }

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   const linkedIn = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
//   const whatsapp = `https://wa.me/?text=${encodeURIComponent(shareUrl)}`;

//   return (
//     <div>

//       {/* SHARE BAR */}
//       <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
//         <div className="bg-[#0A1F44] rounded-l-xl flex flex-col items-center py-4 px-3 gap-4 shadow-lg">
//           <a href={linkedIn} target="_blank">
//             <FaLinkedin className="text-white hover:text-green-400" size={20} />
//           </a>

//           <a href={whatsapp} target="_blank">
//             <FaWhatsapp className="text-white hover:text-green-400" size={20} />
//           </a>
//         </div>
//       </div>

//       {/* BREADCRUMB */}
//       <div className="w-full bg-[#0A1F44] h-[80px] flex items-center mt-[120px]">
//         <div className="max-w-[1440px] mx-auto px-10 flex items-center text-white gap-3">
//           <Link href="/" className="hover:text-green-400">
//             <Home size={18} />
//           </Link>
//           <Link href="/flow/casestudies" className="hover:text-green-400">
//             Case Studies
//           </Link>
//           <span>{">"}</span>
//           <span>Fashion Growth Case Study</span>
//         </div>
//       </div>

//       {/* CONTENT */}
//       <div className="mx-auto text-xl px-20 py-10 bg-white leading-relaxed">

//         <h1 className="text-4xl font-bold mb-6">
//           How a Fashion Brand Achieved 2X Growth with Digital & Social Commerce
//         </h1>

//         <div className="relative w-full h-[420px] mb-6">
//           <Image
//             src="/casestudy6-sub.png"
//             alt="Case Study"
//             fill
//             className="object-cover rounded-[20px]"
//           />
//         </div>

//         <p><strong>Case Study Details</strong></p>
//         <p> <strong>Industry:</strong> Fashion & Apparel Retail</p>
//         <p><strong>Region:</strong> India / Global</p>
//         <p><strong>Technology:</strong> Shopify, CRM, Marketing Automation, Meta</p>

//         <h2 className="text-2xl font-semibold mt-6 mb-2">About the Client</h2>
//         <p>
//           A fast-growing fashion and apparel retailer with both offline stores and an emerging online presence wanted to scale its digital commerce operations and improve customer engagement.
//         </p>

//         {/* ================= POINT 2 ================= */}
//         <h2 className="text-2xl font-semibold mt-10">2. Omnichannel Customer Journey Integration</h2>

//         <h3 className="font-semibold mt-4">Challenges</h3>
//         <ul className="list-disc pl-6">
//           <li>Offline store customers not connected to digital ecosystem</li>
//           <li>No unified customer view across platforms</li>
//           <li>Missed opportunities for cross-channel engagement</li>
//         </ul>

//         <h3 className="font-semibold mt-4">Solution</h3>
//         <ul className="list-disc pl-6">
//           <li>Integrated POS and e-commerce customer data</li>
//           <li>Built unified customer profiles across online and offline channels</li>
//           <li>Implemented QR-based and WhatsApp-based store engagement</li>
//           <li>Enabled retargeting of offline customers via digital channels</li>
//           <li>Created omnichannel campaigns (online → store & store → online)</li>
//         </ul>

//         <h3 className="font-semibold mt-4">Results</h3>
//         <ul className="list-disc pl-6">
//           <li>30% increase in repeat purchases</li>
//           <li>Improved customer lifetime value (CLTV)</li>
//           <li>Higher engagement across both online and offline channels</li>
//           <li>Better tracking of customer journeys</li>
//         </ul>

//         {/* ================= POINT 3 ================= */}
//         <h2 className="text-2xl font-semibold mt-10">3. WhatsApp & Lifecycle Marketing Automation</h2>

//         <h3 className="font-semibold mt-4">Challenges</h3>
//         <ul className="list-disc pl-6">
//           <li>No structured follow-up for abandoned carts or inactive users</li>
//           <li>Limited direct communication with customers</li>
//           <li>Manual customer engagement processes</li>
//         </ul>

//         <h3 className="font-semibold mt-4">Solution</h3>
//         <ul className="list-disc pl-6">
//           <li>Implemented WhatsApp automation for:</li>
//           <li>Abandoned cart recovery</li>
//           <li>Order updates and confirmations</li>
//           <li>Promotional campaigns and offers</li>
//           <li>Set up email and SMS automation workflows</li>
//           <li>Built customer lifecycle journeys (new user → repeat → loyal customer)</li>
//           <li>Enabled personalized messaging based on user behavior</li>
//         </ul>

//         <h3 className="font-semibold mt-4">Results</h3>
//         <ul className="list-disc pl-6">
//           <li>20–25% recovery of abandoned carts</li>
//           <li>3X increase in customer engagement rates</li>
//           <li>Higher repeat purchase frequency</li>
//           <li>Reduced manual effort in customer communication</li>
//         </ul>

//         {/* ================= POINT 4 ================= */}
//         <h2 className="text-2xl font-semibold mt-10">4. Social Media & Brand Positioning</h2>

//         <h3 className="font-semibold mt-4">Challenges</h3>
//         <ul className="list-disc pl-6">
//           <li>Inconsistent content strategy across platforms</li>
//           <li>Low engagement on social media</li>
//           <li>Lack of brand storytelling and visual identity</li>
//         </ul>

//         <h3 className="font-semibold mt-4">Solution</h3>
//         <ul className="list-disc pl-6">
//           <li>Developed a structured content calendar for fashion campaigns</li>
//           <li>Created platform-specific content (Instagram, Facebook, reels, stories)</li>
//           <li>Focused on trend-based and seasonal campaigns</li>
//           <li>Collaborated with micro-influencers for brand reach</li>
//           <li>Implemented performance-driven social media strategy</li>
//         </ul>

//         <h3 className="font-semibold mt-4">Results</h3>
//         <ul className="list-disc pl-6">
//           <li>3X growth in social media engagement</li>
//           <li>Significant increase in follower base</li>
//           <li>Improved brand recall and positioning</li>
//           <li>Higher traffic driven to e-commerce channels</li>
//         </ul>

//         {/* ================= POINT 5 ================= */}
//         <h2 className="text-2xl font-semibold mt-10">5. Marketplace & E-commerce Optimization</h2>

//         <h3 className="font-semibold mt-4">Challenges</h3>
//         <ul className="list-disc pl-6">
//           <li>Low visibility and conversion rates on marketplaces</li>
//           <li>Poor product listing optimization</li>
//           <li>Inconsistent pricing and promotions</li>
//         </ul>

//         <h3 className="font-semibold mt-4">Solution</h3>
//         <ul className="list-disc pl-6">
//           <li>Optimized product listings with SEO-driven titles and descriptions</li>
//           <li>Improved catalog quality (images, attributes, keywords)</li>
//           <li>Implemented marketplace advertising strategies</li>
//           <li>Aligned pricing and promotional strategies across channels</li>
//           <li>Enhanced product discovery and visibility</li>
//         </ul>

//         <h3 className="font-semibold mt-4">Results</h3>
//         <ul className="list-disc pl-6">
//           <li>35–50% increase in marketplace sales</li>
//           <li>Improved product ranking and visibility</li>
//           <li>Higher conversion rates across platforms</li>
//           <li>Better inventory movement</li>
//         </ul>

//         {/* ================= POINT 6 ================= */}
//         <h2 className="text-2xl font-semibold mt-10">6. Analytics, Reporting & Decision Intelligence</h2>

//         <h3 className="font-semibold mt-4">Challenges</h3>
//         <ul className="list-disc pl-6">
//           <li>Lack of centralized reporting</li>
//           <li>No real-time visibility into marketing performance</li>
//           <li>Difficulty in decision-making</li>
//         </ul>

//         <h3 className="font-semibold mt-4">Solution</h3>
//         <ul className="list-disc pl-6">
//           <li>Implemented GA4 and advanced analytics dashboards</li>
//           <li>Integrated data from ads, website, and CRM systems</li>
//           <li>Built real-time performance dashboards</li>
//           <li>Enabled campaign-level and product-level insights</li>
//           <li>Automated reporting workflows</li>
//         </ul>

//         <h3 className="font-semibold mt-4">Results</h3>
//         <ul className="list-disc pl-6">
//           <li>Real-time visibility into business performance</li>
//           <li>Faster and data-driven decision-making</li>
//           <li>Improved marketing efficiency</li>
//           <li>Better budget allocation across channels</li>
//         </ul>

//         {/* SUMMARY */}
//         <h2 className="text-2xl font-semibold mt-10">Business Impact Summary</h2>
//         <ul className="list-disc pl-6">
//           <li>2–3X increase in overall digital revenue</li>
//           <li>30% increase in repeat customers</li>
//           <li>40–60% improvement in conversion rates</li>
//           <li>20–25% recovery of abandoned carts</li>
//           <li>Significant growth in omnichannel customer engagement</li>
//           <li>Reduced manual effort through marketing automation</li>
//           <li>Improved ROI across all digital marketing channels</li>
//         </ul>

//       </div>

//       <Connect />

//       {/* SCROLL TOP */}
//       {showArrow && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 bg-[#59e023] text-white p-4 rounded-full shadow-lg"
//         >
//           <ArrowUp size={22} />
//         </button>
//       )}

//     </div>
//   );
// }


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
          <Link href="/" className="flex items-center gap-2 hover:text-green-400">
            <Home size={18} />
          </Link>

          <Link href="/flow/case-studies" className="hover:text-green-400">
            Case Studies
          </Link>

          <span>{">"}</span>
          <span> Transforming Inventory and Procurement</span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto text-xl px-20 py-1 bg-white leading-relaxed">
        <div className="w-full mx-auto px-6 py-10">

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