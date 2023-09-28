import React from 'react'
import { AgeSlider, IncomeSlider, RetirementSlider, } from '@/exports'

const SlideBar = () => {
  return (
    <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-3 justify-center items-center'>
      <AgeSlider />
      <IncomeSlider />
      <RetirementSlider />
    </div>
  )
}

export default SlideBar