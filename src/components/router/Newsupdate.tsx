"use client"
import React, { useState, useEffect } from 'react'
import { BentoGridSecondDemo } from './Maingrid'

const Newsupdate = () => {
  const [bentoHeight, setBentoHeight] = useState(0)

  useEffect(() => {
    const bentoGridDiv = document.querySelector('.bento-grid') as HTMLElement
    if (bentoGridDiv) {
      setBentoHeight(bentoGridDiv.offsetHeight)
    }
  }, [])

  return (
    <div className='w-full flex gap-3 justify-center '>
      <div className='bento-grid'>
        <BentoGridSecondDemo />
      </div>
      <div className='bg-[#00a69c] w-[40%] h-[652px] hidden md:block  '>
        <div className='w-full h-full flex flex-col justify-center px-10'>
          <h2
            className=" space-x-3 rtl:space-x-reverse "
          >
            <span className="self-center text-sm sm:text-3xl sm:py-3 font-semibold whitespace-nowrap text-white inline-block">
              Albokoes | EnviroSustain
            </span>
          </h2>
          <p className='text-white text-lg'>Your seamless partner in strategic consulting services and innovative solutions for resilient environment, climate change, and sustainable development.</p>

        </div>
      </div>
    </div>
  )
}

export default Newsupdate
