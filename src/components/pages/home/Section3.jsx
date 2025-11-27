import React from 'react'
import img1 from '../../../assets/safe_in.png'
export default function Section3() {
  return (
    <div>
      <section className='pt-16 pb-16 xl:grid xl:grid-cols-2 '>

        <div className=" pl-6 text-[#0E132A] md:w-[87%] lg:w-[80%] xl:w-[600px] m-auto xl:m-0">


          <h1 className='text-3xl md:text-7xl font-extrabold '>WHO WE ARE</h1>

          <p className='font-bold  mt-8  text-sm '>Mollit anim laborum duis au dolor in voluptcate velit ess cillum dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</p>


          <p className='mt-8 font-light text-sm  '>
            Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.


          </p>
          <button className='mt-8 pl-12 pr-12 rounded-md pt-4 pb-4 bg-[#f75910] text-white'>READ MORE</button>

        </div>

        <div className="relative mt-20 xl:mt-0 w-full lg:w-[88%] ml-auto">

          <img className='w-full' src={img1} alt="" />

          <div className='h-[140px] w-[100px] md:h-[206px] md:w-[177px] text-white flex flex-col justify-center items-center bg-[#1F2B7B] absolute bottom-0 left-0'>
            <h1 className=' text-4xl md:text-6xl font-extrabold'>1994</h1>
            <p>Since</p>
          </div>

        </div>



      </section>
    </div>
  )
}
