import React from 'react'
import img1 from '../../../assets/team1.png'
import img2 from '../../../assets/team2.png'
import img3 from '../../../assets/team3.png'

import { FaPlus } from "react-icons/fa6";
import underline from '../../../assets/services_icon1.png'
export default function Section2() {
  return (
    <section className='pt-20 pb-20'>

        <div className='w-[90%] sm:w-[510px] md:w-[690px] lg:w-[960px] xl:w-[1170px]  m-auto'>
        <h1 className='text-4xl md:text-5xl te font-extrabold mb-5 ' >OUR TEAM</h1>
        </div>
       
      

        <div className=' gap-7  justify-center items-center md:grid   md:grid-cols-2 lg:grid-cols-3 md:w-max m-auto'>


            {/* _______________________________________________1_________________________________________________- */}

  <div className='bg-white w-[90%] sm:w-[510px] md:w-[330px] lg:w-[300px] xl:w-[370px]  m-auto md:m-0  group mt-8'>
  <div className='overflow-hidden'>
    <img 
      className='w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105' 
      src={img1} 
      alt="" 
    />
  </div>
  <div className='w-[90%] m-auto'>
    <div className=' flex  items-center gap-3'>
        <div className='h-1 w-10 bg-orange-400 '></div>
      <p className='text-sm '>Ethan Welch</p>
    </div>
    <div className='flex w-max gap-4 items-center mt-2'>
      <p className='text-lg font-bold '>UX Designer</p>
    </div>
  </div>
</div>

{/* _______________________________________________2_________________________________________________- */}
  <div className='bg-white w-[90%] sm:w-[510px] md:w-[330px] lg:w-[300px] xl:w-[370px]  m-auto md:m-0  group mt-8'>
  <div className='overflow-hidden'>
    <img 
      className='w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105' 
      src={img2} 
      alt="" 
    />
  </div>
  <div className='w-[90%] m-auto'>
    <div className=' flex  items-center gap-3'>
        <div className='h-1 w-10 bg-orange-400 '></div>
      <p className='text-sm '>Ethan Welch</p>
    </div>
    <div className='flex w-max gap-4 items-center mt-2'>
      <p className='text-lg font-bold '>UX Designer</p>
    </div>
  </div>
</div>

{/* -----------------------------------3----------------------------------------------------- */}
           <div className='bg-white w-[90%] sm:w-[510px] md:w-[330px] lg:w-[300px] xl:w-[370px]  m-auto md:m-0  group mt-8'>
  <div className='overflow-hidden'>
    <img 
      className='w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105' 
      src={img3} 
      alt="" 
    />
  </div>
  <div className='w-[90%] m-auto'>
    <div className=' flex  items-center gap-3'>
        <div className='h-1 w-10 bg-orange-400 '></div>
      <p className='text-sm '>Ethan Welch</p>
    </div>
    <div className='flex w-max gap-4 items-center mt-2'>
      <p className='text-lg font-bold '>UX Designer</p>
    </div>
  </div>
</div>











        </div>
        
    </section>
  )
}
