import React from 'react'
import img1 from '../../../assets/david_1.png'
import img2 from '../../../assets/david_2.png'


export default function Section8() {
    return (
        <div>
            <section className='font-[Poppins] mt-12 mb-12 '>

                <div className=' text-[#0E132A] mb-11 w-[90%] m-auto sm:w-[500px] md:w-[700px] lg:w-[940px] xl:w-[1180px]'>
                <h1 className=' text-4xl md:text-5xl lg:text-6xl   font-extrabold'>LATEST NEWS</h1>
                </div>

                <div className='flex flex-wrap md:w-max m-auto gap-7'>

{/* -----------------------------------------Card 1 -------------------------------------- */}
                <div className=' relative w-[90%] sm:w-[500px] md:w-[340px] lg:w-[460px] xl:w-[580px] m-auto md:m-0' >
                    <div className='w-[70px] absolute top-0 h-[70px] bg-orange-400 flex flex-col justify-center items-center text-white font-bold'>
                        <p>24</p>
                        <p className='font-light'>Now</p>
                    </div>

                    <img className='w-full' src={img1} alt="" />
                    <div className="bg-[#00235B] text-white p-4 space-y-1">
                        <p className="text-sm opacity-80">Properties</p>

                        <h1 className="text-2xl font-semibold leading-snug">
                            FootPrints in Time is perfect House in kurashiki
                        </h1>

                        <p className="text-sm font-medium text-orange-400 cursor-pointer">
                            READ MORE
                        </p>
                    </div>
                </div>

{/*------------------------------- Card 2 ------------------------------------------- */}

 <div className=' relative w-[90%] sm:w-[500px] md:w-[340px] lg:w-[460px] xl:w-[580px] m-auto md:m-0' >
                    <div className='w-[70px] absolute top-0 h-[70px] bg-orange-400 flex flex-col justify-center items-center text-white font-bold'>
                        <p>24</p>
                        <p className='font-light'>Now</p>
                    </div>

                    <img className='w-full' src={img2} alt="" />
                    <div className="bg-[#00235B] text-white p-4 space-y-1">
                        <p className="text-sm opacity-80">Properties</p>

                        <h1 className="text-2xl font-semibold leading-snug">
                            FootPrints in Time is perfect House in kurashiki
                        </h1>

                        <p className="text-sm font-medium text-orange-400 cursor-pointer">
                            READ MORE
                        </p>
                    </div>



                </div>


</div>

            </section>
        </div>
    )
}
