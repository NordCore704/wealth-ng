import React from 'react'
import { TechImage, TechText } from '@/exports'

const TechMain = () => {
  return (
    <section className="flex flex-col w-full items-center justify-center md:flex-row px-5 lg:px-10 py-5 gap-10">
      <TechText />
      <TechImage />
    </section>
  )
}

export default TechMain