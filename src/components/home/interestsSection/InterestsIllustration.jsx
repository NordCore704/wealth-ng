import React from "react";

const InterestsIllustration = () => {
  return (
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center flex-col gap-5">
      <div className="flex gap-5">
        <div className="bg-gradient-to-br from-scheme-blue to-[#4d68ae] p-2 w-32 h-32 rounded-lg flex shadow-sm flex-col items-center justify-center gap-1 text-scheme-grey">
          <p className="uppercase text-xl">up to</p>
          <p className="uppercase text-3xl font-bold">15%</p>
          <p className="capitalize">stocks</p>
        </div>
        <div className="bg-gradient-to-bl shadow-sm from-scheme-yellow to-[#ffc152] p-2 w-32 h-32 rounded-lg flex flex-col items-center justify-center gap-1 text-scheme-grey">
          <p className="uppercase text-xl">up to</p>
          <p className="uppercase text-3xl font-bold">10%</p>
          <p className="capitalize text-lg font-semibold">even cash!</p>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="shadow-sm bg-gradient-to-tr from-scheme-orange to-[#ff727d] p-3 w-32 h-32 rounded-lg flex flex-col items-center justify-center  gap-1 text-scheme-grey">
          <p className="uppercase text-xl">up to</p>
          <p className="uppercase text-3xl font-bold">13%</p>
          <p className="capitalize">fixed income</p>
        </div>
        <div className="bg-gradient-to-br from-scheme-black to-[#303236] shadow-sm p-3 w-32 h-32 rounded-lg flex flex-col items-center justify-center gap-1 text-scheme-grey">
          <p className="uppercase text-xl">up to</p>
          <p className="uppercase text-3xl font-bold">22%</p>
          <p className="capitalize">agriculture</p>
        </div>
      </div>
    </div>
  );
};

export default InterestsIllustration;
