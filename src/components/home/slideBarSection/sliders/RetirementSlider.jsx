import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';

const RetirementSlider = () => {
    const [sliderValue, setSliderValue] = useState(40);

    const handleSliderChange = (event) => {
      const { value } = event.target;
      setSliderValue(value);
    };
    return (
      <div className="flex flex-col justify-center gap-2 w-[90%] sm:w-[65%] md:w-[70%]">
       
        <div className="flex justify-between ">
        <label htmlFor="slider" >What age would you like to retire?</label>
          <output className="font-semibold flex gap-1 items-center">{sliderValue}years{sliderValue === '75' ? <FaPlus className='font-medium'/> : ''}</output>
        </div>
        <input
            type="range"
            min={40}
            max={75}
            onChange={handleSliderChange}
            className="appearance-none bg-transparent rounded-lg accent-scheme-grey in-range:bg-scheme-blue outline-none h-3 cursor-pointer opacity-70 transition-opacity "
            value={sliderValue}
          />
      </div>
    );
}

export default RetirementSlider