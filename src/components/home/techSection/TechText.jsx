import React from 'react'

const TechText = () => {
  return (
    <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-5 justify-center items-center'>
        <div className="flex flex-col gap-3 self-center md:self-start">
        <h2 className="md:self-start md:text-left text-center text-2xl sm:text-3xl font-bold ">
            Tech is great, but...

        </h2>
        <p className="md:self-start text-center md:text-left font-semibold">
        Sometimes you just need to talk to a real person and get some quick answers.
        </p>
        <p className="md:self-start text-center md:text-left">
        Our dedicated support team is made up of seasoned advisors, especially reserved to help you with investments advice, inquiries, and requests.
        </p>
        </div>
        <div className="flex flex-col gap-3 self-center md:self-start">
        <p className="md:self-start text-center md:text-left">
        We assign issues to the persons best placed to respond to your needs for quick resolution.
        </p>
        <button className="md:self-start self-center text-center rounded-md bg-scheme-yellow p-2 w-40 font-semibold hover:bg-scheme-blue hover:text-scheme-white">
            Invest Now
        </button>
        </div>
       
    </div>
  )
}

export default TechText