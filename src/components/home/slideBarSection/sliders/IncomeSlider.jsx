import React, { useState } from "react";
import { formatCurrency } from "@/utils/formattedCurrency";
import { FaPlus } from "react-icons/fa";

const IncomeSlider = () => {
  const [sliderValue, setSliderValue] = useState("150,000");

  const handleSliderChange = (event) => {
    const { value } = event.target;
    setSliderValue(value)
      
  };

  return (
    <div className="flex flex-col justify-center gap-2 w-[90%] sm:w-[65%] md:w-[70%]">
      <div className="flex justify-between ">
        <label htmlFor="slider">What is your monthly income?</label>
        <output className="font-semibold flex items-center gap-1">
          ₦{formatCurrency(sliderValue)}
          {sliderValue === "5000000" ? <FaPlus className="font-medium" /> : ""}
        </output>
      </div>
      <input
        type="range"
        min={"0"}
        max={"5000000"}
        onChange={handleSliderChange}
        className="appearance-none bg-transparent rounded-lg accent-scheme-grey in-range:bg-scheme-blue outline-none h-3 cursor-pointer opacity-70 transition-opacity "
        value={sliderValue}
      />
    </div>
  );
};

export default IncomeSlider;
