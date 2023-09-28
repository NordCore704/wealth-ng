import React from 'react'
import Image from 'next/image'
import { hero, lilyPad } from '@/exports/images'

const HeroImage = () => {
  return (
    <div className='w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center relative p-5'>
      <div className="z-10">
      <Image src={hero} alt='hero' className=''/>
      </div>
    
      <Image src={lilyPad} alt='blob' className='absolute -bottom-10 w-64 right-0 opacity-70 -rotate-45'/>
    </div>
  )
}

export default HeroImage