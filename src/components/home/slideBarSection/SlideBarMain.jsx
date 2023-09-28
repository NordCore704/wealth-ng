import React from "react";
import { SlideBar, SlideBarText } from "@/exports";

const SlideBarMain = () => {
  return (
    <section className="flex flex-col justify-center items-center w-full bg-scheme-grey px-5 lg:px-10 py-5 gap-10">
        <div className="flex flex-col w-full items-center justify-center md:flex-row gap-10">
        <SlideBar />
      <SlideBarText />
        </div>
     
      <button className="text-center rounded-md bg-scheme-yellow p-2 w-40 md:w-52 lg:w-64 font-semibold hover:bg-scheme-blue hover:text-scheme-white">
            Let's Do This
        </button>
    </section>
  );
};

export default SlideBarMain;
