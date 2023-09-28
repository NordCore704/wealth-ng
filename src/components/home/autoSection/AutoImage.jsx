import React from 'react'
import Image from 'next/image'
import { auto } from '@/exports/images'

const AutoImage = () => {
  return (
    <div className='w-full md:w-1/2 h-1/2 md:h-full flex py-5'>
        <Image src={auto} alt='auto' />
    </div>
  )
}

export default AutoImage