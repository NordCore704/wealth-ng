import React from "react";
import { ola } from "@/exports/images";
import Image from "next/image";

const MeetOlaImage = () => {
  return (
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex  flex-col gap-3 justify-center items-center">
      <div className="w-[70%] flex items-center justify-center rounded-full bg-scheme-yellow border-scheme-blue border ">
        <Image src={ola} alt="ola" className="w-full" />
      </div>
    </div>
  );
};

export default MeetOlaImage;
