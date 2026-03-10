

"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import Connect from "./Connect";

export default function FlowBlog() {
  const router = useRouter();

  const blogs = [
    {
      title: "D2C E-Commerce: How Brands Are Redefining Digital Commerce ",
      image: "/Blog 1 main.png",
      link: "/Blog1",
    },
    {
      title: "The Complete Digital Transformation Roadmap for Modern Businesses ",
      image: "/Blog 2 main.png",
      link: "/Blog2",
    },
    {
      title: "The Hidden Cost of Manual Operations Many businesses",
      image: "/Blog 3 main.png",
      link: "/Blog3",
    },
    {
      title: "Omnichannel Commerce: Why Businesses Must Sell Everywhere ",
      image: "/Blog 4 main.png",
      link: "/Blog4",
    },
    {
      title: "Top Digital Transformation Trends Businesses Should Watch",
      image: "/Blog 5 main.png",
      link: "/Blog5",
    },
    {
      title: "Smart Manufacturing: The Future of Industry Operations ",
      image: "/Blog 6 main.png",
      link: "/Blog6",
    },
  ];

  const navigateToContact = () => {
    router.push("/contact");
  };

  return (
    <div className="relative min-h-screen bg-white">

      {/* Background Image */}
      <div
        className="absolute top-[77px] left-0 w-full h-[325px] bg-cover bg-center z-0"
        style={{
          backgroundImage:
            "url('/46d981b42179b415df8f52b0cef0882b81324b31.jpg')",
        }}
      />

      {/* Light Blue Overlay */}
      <div className="absolute top-[77px] left-0 w-full h-[325px] bg-blue-200/50"></div>


      {/* Content Wrapper (normal flow) */}
      <div className="relative pt-[188px] max-w-[1200px] mx-auto px-9 z-0">

        {/* Heading */}
        <h2
          className="font-extrabold text-[50px] text-center leading-[70px] tracking-[-0.6px] text-black"
          style={{ fontFamily: "Literata" }}
        >
          Case Study
        </h2>

        {/* Image */}
        <div className="mt-[60px]">
          <img
            src="/a7f9b473f8bc16917d797110e141b1b3b2014671 (1).jpg"
            alt="Case Study"
            className="w-full h-[380px] object-cover rounded-[17px]"
          />
        </div>


        {/* Title */}
        <a
          href="#"
          className="block mt-4 text-[32px] leading-[44px] tracking-[-0.4px] font-bold hover:underline bg-white"
          style={{ fontFamily: "Literata" }}
        >
          Intelligent AP Invoice Automation for a Global Mining Enterprise
        </a>

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
                className="w-[380px] h-[290px] bg-white rounded-[16px] border border-[#666D803D] p-4 flex flex-col gap-4 hover:shadow-lg transition duration-300 cursor-pointer"
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
                <h3 className="text-lg font-semibold text-gray-900 leading-snug">
                  {blog.title}
                </h3>

                {/* Bottom Row */}
                <div className="flex justify-between items-center pt-2">

                  {/* Learn More */}
                  <span className="text-blue-600 font-medium text-sm">
                    Learn More →
                  </span>

                  {/* Share */}
                  <span className="font-medium text-black">
                    Share 🔗
                  </span>

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