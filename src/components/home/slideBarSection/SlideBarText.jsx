import React from 'react'

const SlideBarText = () => {
  return (
    <div className='w-full md:w-1/2 h-1/2 md:h-full flex flex-col gap-3 justify-center items-center'>
         <h2 className="md:self-start md:text-left text-center text-2xl sm:text-3xl font-bold ">
            Not sure where you fit?
        </h2>
        <p className="md:self-start text-center md:text-left">
           Start by learning what kind of investor you are. Move the sliders and we'll tell you.
        </p>
    </div>
  )
}

export default SlideBarText