import React from "react";
import { DownloadImage, DownloadText } from "@/exports";

const DownloadMain = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center w-full px-5 lg:px-10 py-5 gap-10">
      <DownloadText />
      <DownloadImage />
    </section>
  );
};

export default DownloadMain;
