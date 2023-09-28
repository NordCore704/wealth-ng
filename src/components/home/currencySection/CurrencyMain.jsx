import React from 'react'
import { CurrencyText, CurrencyImage } from '@/exports'

const CurrencyMain = () => {
  return (
    <section className='bg-scheme-grey flex flex-col-reverse md:flex-row-reverse items-center justify-center w-full px-5 lg:px-10 py-5 gap-10'>
        <CurrencyText />
        <CurrencyImage />
    </section>
  )
}

export default CurrencyMain