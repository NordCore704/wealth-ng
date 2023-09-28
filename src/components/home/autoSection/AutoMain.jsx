import React from "react";
import { AutoText, AutoImage } from "@/exports";

const AutoMain = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center md:flex-row px-5 lg:px-10 py-5 gap-10">
      <AutoImage />
      <AutoText />
    </section>
  );
};

export default AutoMain;
