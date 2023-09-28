import Link from "next/link";
import React from "react";

const HeroText = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-1/2 md:h-full gap-6 text-scheme-black">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center md:text-left font-bold capitalize self-center md:self-start">
        All your investments in one place
      </h1>
      <div className="flex flex-col self-center md:self-start gap-3">
        <p className="font-semibold text-lg text-center md:text-left">
          Access multiple investment opportunities on Wealth.ng
        </p>
        <p className="md:text-left text-center">
          You no longer have to manage each investment type on a different
          platform. We offer you investment options, with competitive returns,
          across a wide range of asset classes.
        </p>
      </div>
      <div className="md:self-start flex gap-4 items-center justify-center">
        <Link
          href={"/login"}
          className="border-2 border-scheme-blue p-2 hover:border-scheme-yellow hover:text-scheme-yellow w-36 rounded-md text-center text-scheme-blue font-semibold"
        >
          Login
        </Link>
        <Link
          href={"/login"}
          className="bg-scheme-yellow hover:bg-scheme-blue hover:text-scheme-white p-2 w-36 rounded-md text-center text-scheme-black font-semibold"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default HeroText;
