import React from 'react'

const InterestText = () => {
  return (
    <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center items-center gap-5'>
        <p className="font-semibold text-xl md:self-start text-center md:text-left">
            It's all about returns!
        </p>
        <h2 className="md:self-start md:text-left text-center text-2xl sm:text-3xl font-bold ">
            Earn  interest up to 18%
        </h2>
        <p className="md:self-start text-center md:text-left">
            Access high-yield investments options like Fixed Income and Agriculture
        </p>
        <button className="md:self-start text-center rounded-md bg-scheme-yellow p-2 w-40 font-semibold hover:bg-scheme-blue hover:text-scheme-white">
            Start Earning
        </button>
    </div>
  )
}

export default InterestText