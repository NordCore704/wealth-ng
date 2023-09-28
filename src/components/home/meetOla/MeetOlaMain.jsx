import React from "react";
import { MeetOlaText, MeetOlaImage } from "@/exports";

const MeetOlaMain = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center md:flex-row bg-scheme-grey px-5 lg:px-10 py-5 gap-10">
      <MeetOlaImage />
      <MeetOlaText />
    </section>
  );
};

export default MeetOlaMain;
