import React from 'react'
import img1 from '../../../assets/imgi_16_about.jpg'

export default function AboutHero() {
  return (
    <div className="relative h-[60vh] md:h-[75vh] w-full overflow-hidden">

      {/* Image */}
      <img
        className="h-full w-full object-cover scale-150"
        src={img1}
        alt=""
      />

      {/* Overlay + Text */}
      <div className="absolute inset-0 bg-black/50 z-20 flex justify-center items-center">
        <div className="text-white w-[80%] ">
          <h1 className="text-5xl   md:text-6xl lg:text-8xl  font-bold">Blog</h1>

          <div className="flex items-center gap-2  mt-3 ">
            <div className="border-b border-orange-400 w-12"></div>
            <h1 className=' text-orange-400 font-extrabold '>HOME / PRODUCT</h1>
          </div>
        </div>
      </div>

    </div>
  )
}
