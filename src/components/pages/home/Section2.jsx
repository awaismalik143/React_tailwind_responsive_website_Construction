import React from 'react'
import img1 from '../../../assets/servicess1.png'
import img2 from '../../../assets/servicess2.png'
import img3 from '../../../assets/servicess3.png'

import { FaPlus } from "react-icons/fa6";
import underline from '../../../assets/services_icon1.png'
export default function Section2() {
  return (
    <section className='pt-20'>

        <div className='w-[90%] sm:w-[510px] md:w-[690px] lg:w-[960px] xl:w-[1170px]  m-auto'>
        <h1 className='text-4xl md:text-5xl te font-extrabold mb-5 ' >OUR SERVICES</h1>
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
    <p className='text-lg font-bold mt-5'>Engineering techniques & implementation</p>
    <div className='flex w-max gap-4 items-center mt-5'>
      <p className='font-medium'>Read More</p>
      <div className='w-[35px] h-[35px] bg-[#f75910] flex justify-center items-center text-lg'>
        <FaPlus className='text-white' />
      </div>
    </div>
  </div>

  <img className='mt-6 w-full' src={underline} alt="" />

</div>

{/* _______________________________________________2_________________________________________________- */}

         
<div className='bg-white w-[90%] sm:w-[510px] md:w-[330px] lg:w-[300px] xl:w-[370px] m-auto md:m-0  mt-8'>

  <div className='overflow-hidden'>
    <img 
      className='w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105' 
      src={img2} 
      alt="" 
    />
  </div>

  <div className='w-[90%] m-auto'>
    <p className='text-lg font-bold mt-5'>Engineering techniques & implementation</p>
    <div className='flex w-max gap-4 items-center mt-5'>
      <p className='font-medium'>Read More</p>
      <div className='w-[35px] h-[35px] bg-[#f75910] flex justify-center items-center text-lg'>
        <FaPlus className='text-white' />
      </div>
    </div>
  </div>

  <img className='mt-6 w-full' src={underline} alt="" />

</div>
{/* ________________________________________________3__________________________________________________________ */}

<div className='bg-white w-[90%] sm:w-[510px] md:w-[330px] lg:w-[300px] xl:w-[370px] m-auto md:m-0  mt-8'>

  <div className='overflow-hidden'>
    <img 
      className='w-full transform transition-transform duration-300 ease-in-out group-hover:scale-105' 
      src={img3} 
      alt="" 
    />
  </div>

  <div className='w-[90%] m-auto'>
    <p className='text-lg font-bold mt-5'>Engineering techniques & implementation</p>
    <div className='flex w-max gap-4 items-center mt-5'>
      <p className='font-medium'>Read More</p>
      <div className='w-[35px] h-[35px] bg-[#f75910] flex justify-center items-center text-lg'>
        <FaPlus className='text-white' />
      </div>
    </div>
  </div>

  <img className='mt-6 w-full' src={underline} alt="" />

</div>
        </div>
        
    </section>
  )
}
