import Events from '@/components/events/Events'
import Newslist from '@/components/news/newslist'
import News from '@/components/news/newslist'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className="h-[80vh] flex items-center justify-center">
      <div className="relative w-[80%] h-[80%]"> 
        <Image
          src="/commingsoon1.jpg" // Replace with your image path
          alt="Coming Soon Background"
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Ensures the image covers the area without distortion
          quality={100} // Optional: set image quality for optimization
        />
        
        <div className="absolute inset-0 bg-black opacity-40"></div>
        
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-white">Coming Soon</h1>
        </div>
      </div>

      {/* Optionally Uncomment These Components */}
      {/* <News /> */}
      {/* <Events /> */}
      {/* <Newslist /> */}
    </div>
  )
}

export default page