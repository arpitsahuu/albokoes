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
      <div className='bg-[#00a69c] w-[40%] h-[652px] hidden md:block'>
        
      </div>
    </div>
  )
}

export default Newsupdate
