import Link from 'next/link'
import React from 'react'

const CurrencyText = () => {
  return (
    <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-5'>
        <p className="font-semibold self-center md:self-start text-center md:text-left">Outside Nigeria? No Problem!</p>
        <h2 className="self-center md:self-start text-center md:text-left text-2xl sm:text-3xl font-bold">Pay for your investments in any currency</h2>

        <p className="text-center md:text-left self-center md:self-start">
            Now you can make payment from any country using your debit or credit card. Your investment is not limited by boundaries!
        </p>

        <Link className='w-36 p-2 text-center font-semibold capitalize text-scheme-black bg-scheme-yellow rounded-md hover:text-white hover:bg-scheme-blue self-center md:self-start' href={'/'}>sign up now</Link>
    </div>
  )
}

export default CurrencyText