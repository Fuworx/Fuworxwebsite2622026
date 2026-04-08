import Link from "next/link";

const PartnerColl = () => {
  return (
    <div className="w-full h-auto grid bg-white">
      <div className=" flex flex-col lg:grid lg:grid-cols-3 gap-5 text-white px-10 py-5">
        {/* <Link
          
        href="#partner-cards" id = "partner-cards"
          className="w-full h-[300px] pt-10 pl-10 text-2xl font-semibold font-head b11 cursor-pointer flex items-start"

            >
       Our Services
          
     </Link>  */}

        <Link
          href="/partners"
          className="w-full h-[300px] pt-10 pl-10 text-2xl font-semibold font-head b11 cursor-pointer flex items-start"
        >
          Our Partners
        </Link>

        <Link
          href="/product"
          className="w-full h-[300px] pt-10 pl-10 text-2xl font-semibold font-head b12 cursor-pointer flex items-start"
        >
          Our Product
        </Link>

        <Link
          href="/flow"
          className="w-full h-[300px] pt-10 pl-10 text-2xl font-semibold font-head b13 cursor-pointer flex items-start"
        >
          Flow
        </Link>
      </div>
    </div>
  );
};

export default PartnerColl;
