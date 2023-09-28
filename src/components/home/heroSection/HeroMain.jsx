import React from "react";
import { HeroImage, HeroText } from "@/exports";

const HeroMain = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row px-5 lg:px-10 items-center justify-center gap-5 py-5">
      <HeroText />
      <HeroImage />
    </section>
  );
};

export default HeroMain;
