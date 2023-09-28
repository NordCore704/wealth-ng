import React from "react";
import Image from "next/image";
import { mobile } from "@/exports/images";

const DownloadImage = () => {
  return (
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-3 p-5 items-center justify-center">
      <Image src={mobile} alt="mobile-download" className="w-[80%]"/>
    </div>
  );
};

export default DownloadImage;
