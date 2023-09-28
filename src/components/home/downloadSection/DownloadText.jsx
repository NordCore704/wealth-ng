import React from "react";
import Image from "next/image";
import { apple, google } from "@/exports/images";

const DownloadText = () => {
  return (
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-3">
      <h2 className="font-bold text-center md:text-left self-center md:self-start text-2xl sm:text-3xl">
        Invest whenever wherever
      </h2>
      <p className="self-center md:self-start text-center md:text-left">
        You can now download the Wealth.ng app for android devices and invest or
        monitor your wealth on the go.
      </p>
      <div className="flex self-center  gap-3 md:self-start">
        <button className="bg-scheme-black rounded-md text-scheme-white flex gap-1 p-1 items-center justify-start w-40">
          <Image src={google} alt="google-logo" />
          <div className="flex flex-col text-sm items-start">
            <p className="uppercase">get it on</p>
            <p className="font-bold capitalize">google play</p>
          </div>
        </button>
        <button className="bg-scheme-black rounded-md text-scheme-white flex gap-1 p-1 justify-start items-center w-40">
          <Image src={apple} alt="apple-logo" className="w-[32px]" />
          <div className="flex flex-col text-sm items-start">
            <p className="">Download on the</p>
            <p className="font-bold capitalize">App Store</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default DownloadText;
