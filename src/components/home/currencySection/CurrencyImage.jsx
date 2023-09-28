import React from 'react'
import Image from 'next/image'
import { location, payCard } from '@/exports/images'

const CurrencyImage = () => {
  return (
    <div className='w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center gap-2 py-5'>
        <Image src={location} alt='location' className='w-1/2'/>
        <Image src={payCard} alt='card' className='w-1/2'/>
    </div>
  )
}

export default CurrencyImage