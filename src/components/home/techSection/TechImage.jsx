import React from "react";
import Image from "next/image";
import { support } from "@/exports/images";

const TechImage = () => {
  return (
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center py-5">
      <Image src={support} alt="support" />
    </div>
  );
};

export default TechImage;
