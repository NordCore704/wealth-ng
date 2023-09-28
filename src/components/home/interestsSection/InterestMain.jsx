import React from 'react'
import { InterestText, InterestsIllustration } from '@/exports'

const InterestMain = () => {
  return (
    <section className="flex flex-col-reverse w-full items-center justify-center md:flex-row px-5 lg:px-10 py-5 gap-10 ">
        <InterestText />
        <InterestsIllustration />
    </section>
  )
}

export default InterestMain