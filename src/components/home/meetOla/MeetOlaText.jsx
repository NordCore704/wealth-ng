import React from "react";
import { AiOutlineWhatsApp } from "react-icons/ai";

const MeetOlaText = () => {
  return (
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-3 justify-center items-center">
      <h3 className="font-semibold text-scheme-blue md:self-start">
        Meet <span className="text-xl font-bold">Ola</span> Your Personal Wealth
        Advisor
      </h3>
      <div className="rounded-full self-center md:self-start flex gap-5 bg-scheme-blue text-scheme-white p-2">
        <p className="flex items-center justify-center gap-1 font-semibold">
          <AiOutlineWhatsApp className="text-lg" />
          WhatsApp
        </p>
        <p className="font-semibold">+234 904 444 8652</p>
      </div>
      <div className="md:self-start bg-scheme-white p-3 flex items-center justify-center rounded-md w-64">
        <ul className="font-semibold self-center md:self-start text-left text-scheme-blue list-disc">
          <li className="">Sign Up</li>
          <li className="">Browse Investments</li>
          <li className="">Buy & Sell Stocks</li>
          <li className="">View Your Portfolio</li>
          <li className="">Market Summary</li>
          <li className="">Fund Your Cash Balance</li>
          <li className="">Ask Questions</li>
        </ul>
      </div>
    </div>
  );
};

export default MeetOlaText;
