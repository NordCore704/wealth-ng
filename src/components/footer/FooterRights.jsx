import React from 'react'
import Image from 'next/image'
import { apple, google } from '@/exports/images'

const FooterRights = () => {
    const date = new Date
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-5 w-full'>
        <p>©{date.getFullYear()} WealthTech Limited. All rights reserved.</p>
        <div className="flex md:self-end gap-3">
        <button className="bg-scheme-black rounded-md text-scheme-white flex gap-1 p-1 items-center justify-start w-40">
          <Image src={google} alt="google-logo" />
          <div className="flex flex-col text-sm items-start">
            <p className="uppercase">get it on</p>
            <p className="font-bold capitalize">google play</p>
          </div>
        </button>
        <button className="bg-scheme-black rounded-md text-scheme-white flex gap-1 p-1 justify-start items-center w-40">
          <Image src={apple} alt="apple-logo" className="w-[32px]" />
          <div className="flex flex-col text-sm items-start">
            <p className="">Download on the</p>
            <p className="font-bold capitalize">App Store</p>
          </div>
        </button>
      </div>
    </div>
  )
}

export default FooterRights