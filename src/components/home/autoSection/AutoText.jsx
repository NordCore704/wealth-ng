import React from "react";

const AutoText = () => {
  return (
    <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-3 justify-center items-center">
      <h2 className="text-2xl sm:text-3xl font-bold self-center md:self-start text-center md:text-left">
        Take the reins or cruise on auto
      </h2>
      <p className="self-center md:self-start text-center md:text-left">
        You can get hands-on and manage your investments yourself or fund your
        account and let us make sound investment decisions for you with
        automated invseting. Either way, we're always on hand to guide you
        through.
      </p>
      <button className="md:self-start text-center rounded-md bg-scheme-yellow p-2 w-40 font-semibold hover:bg-scheme-blue hover:text-scheme-white">
        Start Investing
      </button>
    </div>
  );
};

export default AutoText;
