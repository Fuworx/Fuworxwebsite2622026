import react from "react";

export default function Partner() {
  return (
    //  <div className="relative w-full h-screen flex b0 px-5 justify-center overflow-hidden">

    // <div className="relative w-full h-screen flex  bg-top justify-center overflow-hidden  ">
    // <div className="absolute inset-0 b0 bg-cover bg-top"></div>
    //  <div className="absolute inset-0 bg-black opacity-15"></div>
    //   <div className="text-6xl text-center text-white lg:text-6xl mt-[40%] lg:mt-[10%] font-head font-semibold">
    //           Our Partner Ecosystem
    //         </div>
    //  <div className="relative w-full h-screen flex b0 bg-[#0A1F44]/15  bg-top justify-center overflow-hidden   ">
    <div className="relative w-full h-screen flex  bg-top justify-center overflow-hidden  ">
      <div className="absolute inset-0 b0 bg-cover bg-top"></div>

      {/* Dark Overlay 15% */}
      <div className="absolute inset-0 bg-black opacity-15"></div>

      <div
        className="relative z-10 text-white w-[816px]  
                      h-[74px]  mt-[40%] lg:mt-[10%] mt-253px font-head lg:text-5xl font-extrabold font-literata text-center text-5xl py-20 tracking-normal  text-[50px] leading-[63.11px]  "
      >
        Our Partner Ecosystem
      </div>
      {/* ----  back-groud white  */}
      {/* <div className="absolute -bottom-[50%] -mb-[50px] lg:m-0 rotate-[173deg] -left-[20%] w-[1000px] h-[900px] sm:w-[180%] sm:h-[80%] lg:h-[80%] bg-[#6CC24A]" />
 <div className="absolute -bottom-[50%] rotate-[4deg] -left-[20%] w-[1000px] h-[800px] sm:w-[180%] lg:h-[80%] bg-white" /> */}
      {/* ------------ */}
      {/* ----------------edit-------------------------------- */}

      {/* <div className="absolute -bottom-[50%] -mb-[50px] lg:m-0 rotate-[173deg] -left-[20%] w-[1000px] h-[900px] sm:w-[180%] sm:h-[80%] lg:h-[80%] bg-[#6CC24A]" />
  <div className="absolute -bottom-[50%] rotate-[4deg] -left-[20%] w-[1000px] h-[600px] sm:w-[180%] sm:h-[70%] lg:h-[80%]    bg-white" />  */}

      <div
        className="absolute -bottom-[50%] -mb-[50px] lg:m-0 
rotate-[173deg] -left-[20%] 
w-[1000px] h-[700px] 
sm:w-[180%] sm:h-[80%] 
lg:h-[80%] 
bg-[#91B706]"
      />

      <div
        className="absolute -bottom-[50%] 
rotate-[4deg] -left-[20%] 
w-[1000px] h-[700px] 
sm:w-[180%] sm:h-[70%] 
lg:h-[80%] 
bg-white"
      />

      <div className="absolute left-0 md:text-lg bottom-0 w-full mb-[4%] flex flex-col px-10">
        <div className="text-center text-[#0A1F44] font-body font-semibold max-w-[75ch] mx-auto"></div>
        <div className="text-center text-[#0A1F44] max-w-[80ch] mx-auto">
          Fuworx partners with technology product companies as their solutions,
          implementation, and reseller partner. We help bring products to
          market, implement them for customers, and ensure successful adoption
          creating value for both our partners and end customers.
        </div>
      </div>
    </div>
  );
}
