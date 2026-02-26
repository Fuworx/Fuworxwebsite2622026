import WorkInProgress from "@/components/WorkInProgress";
import react from "react";
import Collections from "@/components/Collections";
import Partner from "@/components/Partner";
import Connect from "@/components/Connect";
import PartnerCards from "@/components/PartnerCards";
import Partnersus from "@/components/Partnersus";
import PartnerForm from "@/components/PartnerForm";

const Partners = () => {
  return (
    <div className="w-full h-auto flex flex-col">
      
      {/* <WorkInProgress /> */}
       <Partner/>
       {/* -------------- */}
       <PartnerCards />
        {/* -------------- */}
       <div className="w-full h-auto flex">
       < PartnerForm/>
       </div>
 {/* -------------- */}
       <div className="w-full h-auto flex">
      <Collections/>
      </div>
     {/* -------------- */}
      <div className="w-full h-auto flex">
       <Partnersus />
        </div>
     </div>
   

    
  );
};

export default Partners;
