

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Connect from "./Connect";
import { FaWhatsapp, FaLinkedin, FaShareAlt } from "react-icons/fa";
import { Link } from "lucide-react";

export default function FlowBlog() {
  const router = useRouter();

  const blogs = [
    {
      title: "D2C E-Commerce: How Brands Are Redefining Digital Commerce ",
      image: "/blog1-main.png",
      link: "/flow/Blogs/The-Future-of-D2C-E-Commerce",



    },
    {
      title: "The Complete Digital Transformation Roadmap for Modern Businesses ",
      image: "/blog2-main.png",
      link: "/flow/Blogs/The-Complete-Digital-Transformation",
    },
    {
      title: "The Hidden Cost of Manual Operations Many businesses",
      image: "/blog3-main.png",
      link: "/flow/Blogs/The-Hidden-Cost-of-Manual-Operations",
    },
    {
      title: "Omnichannel Commerce: Why Businesses Must Sell Everywhere ",
      image: "/blog4-main.png",
      link: "/flow/Blogs/Omnichannel-Commerce",
    },
    {
      title: "Top Digital Transformation Trends Businesses Should Watch",
      image: "/blog5-main.png",
      link: "/flow/Blogs/Top-Digital-Transformation-Trends",
    },
    {
      title: "Smart Manufacturing: The Future of Industry Operations ",
      image: "/blog6-main.png",
      link: "/flow/Blogs/Smart-Manufacturing-The-Future",
    },
  ];
  {
    blogs.map((blog, index) => (
      <Link key={index} href={'/flow/Blogs/Blog'}>
        <div>{blog.title}</div>
      </Link>
    ))
  }
  const navigateToContact = () => {
    router.push("/contact");
  };

  const shareUrl =
    typeof window !== "undefined" ? window.location.href : "";

  return (
    <div className="relative min-h-screen bg-white">

      {/* Background Image */}

      <div
        className="absolute top-[77px] left-0 w-full h-[455px] bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/46d981b42179b415df8f52b0cef0882b81324b31.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#0A2540]/80"></div>
      </div>


      {/* Content Wrapper (normal flow) */}
      <div className="relative pt-[188px] max-w-[1200px] mx-auto px-9 z-0">

        {/* Heading */}
        <h2
          className="font-extrabold text-[50px] text-center leading-[70px] tracking-[-0.6px] text-black"
          style={{ fontFamily: "Literata" }}
        >
          Blogs
        </h2>

        {/* Image */}
        <div className="mt-[60px]">
          <img
            src="/a7f9b473f8bc16917d797110e141b1b3b2014671 (1).jpg"
            alt="Case Study"
            className="w-full h-[380px] object-cover rounded-[17px]"
          />
        </div>




        {/* Categories Button */}
        <div className="flex justify-end mt-10">
          <button className="flex items-center gap-3 border border-[#1e2b4a] text-[#1e2b4a] px-10 py-4 rounded-full text-lg font-medium hover:bg-[#1e2b4a] hover:text-white transition bg-white" >
            Categories
            <div className="grid grid-cols-2 gap-1">
              <span className="w-2 h-2 border border-current rounded-sm"></span>
              <span className="w-2 h-2 border border-current rounded-sm"></span>
              <span className="w-2 h-2 border border-current rounded-sm"></span>
              <span className="w-2 h-2 border border-current rounded-sm"></span>
            </div>
          </button>
        </div>

      </div>


      {/* Blog Cards Section */}

      <section className="bg-white py-10 mt-10">

        <div className="max-w-6xl mx-auto ">

          <div className="grid md:grid-cols-3 gap-14 ">

            {blogs.map((blog, index) => (
              <div
                key={index}
                onClick={() => router.push(blog.link)}
                className="w-[380px] h-[290px] bg-white rounded-[16px] border  p-4 flex flex-col gap-4 hover:shadow-lg transition duration-300   hover:text-blue-400 cursor-pointer"
              >

                {/* Image */}
                <div className="relative w-full h-[140px] rounded-xl overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Title */}
                {/* <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h3> */}

                <a href={blog.link}>
                  <h3 className="text-lg font-semibold text-gray-900 cursor-pointer">
                    {blog.title}
                  </h3>
                </a>

                {/* Bottom Row */}
                <div className="flex justify-between items-center pt-2">

                  {/* Learn More */}
                  <span className=" text-black  hover:underline font-medium text-sm">
                    Learn More →
                  </span>

                  {/* <a href="/flow/blogs/blog1/d2c-e-commerce-how-brands-are-redefining">
  Learn More →
</a> */}




                  <div className="relative  flex items-center group">

                    {/* Icons (hidden by default) */}
                    <div className="flex items-center gap-3 mr-2 opacity-0 translate-x-4 
                        group-hover:opacity-100 group-hover:translate-x-0 
                        transition-all duration-300">

                      {/* LinkedIn */}
                      <a
                        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          shareUrl
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0A1F44] text-white p-3 rounded-full hover:bg-blue-700"
                      >
                        <FaLinkedin />
                      </a>

                      {/* WhatsApp */}
                      <a
                        href={`https://wa.me/?text=${encodeURIComponent(shareUrl)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#0A1F44] text-white p-3 rounded-full hover:bg-green-600"
                      >
                        <FaWhatsapp />
                      </a>

                    </div>

                    {/* Share Button */}
                    <span className="flex items-center gap-2 hover:underline  text-black font-medium">
                      Share
                      <FaShareAlt />
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      <div className="w-full h-auto flex">
        <Connect />
      </div>


    </div>
  );
}



