import React, { useState } from 'react'
import coma from '../../../assets/download.svg'
import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";

export default function Section7() {



    const testimo = [
        {

            text: 'Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjn.',
            name: "Jessya Inn",
            work: 'CO Founder'
        },
        {

            text: 'Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjn.',
            name: "Jessya Inn",
            work: 'CO Founder'
        }, {

            text: 'Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim. Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjn.',
            name: "Jessya Inn",
            work: 'CO Founder'
        },


    ]
    let [current ,setcurrent] = useState(0)


    let slidenext = ()=>{
        setcurrent(current === testimo.length - 1 ? 0 : current + 1)
    }
    let slideback = ()=>{
        setcurrent(current === 0 ? testimo.length - 1 : current - 1)
    }



    return (
        <div className='bg-[#001F52] mt-6'>
            <section className='pt-15 pb-15   text-white '>
                <div className='w-[90%] font-bold text-3xl md:w-[700px] lg:w-[70%]   m-auto  '>
                    <h1 className=" z-10 text-3xl md:text-6xl font-bold relative">

                        TESTIMONIAL

                        <svg
                            className="absolute    -top-5 w-[70%]"
                            viewBox="0 0 1000 200"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <text
                                x="50%"
                                y="50%"
                                dominantBaseline="middle"
                                textAnchor="middle"
                                className="fill-none stroke-white opacity-20 stroke-[2px]"
                                fontSize="150"
                                fontWeight="700"
                            >
                                FEEDBACK
                            </text>
                        </svg>

                    </h1>
                    <img src={coma} alt="" />
                </div>

                <div className="flex w-[90%] lg:w-[900px]  relative overflow-hidden  m-auto mt-9 ">

                    <div style={{ transform: `translateX(-${current * 100}%)` }}
                    className="flex transition-all duration-300  w-full">
                        {testimo.map((item, index) => (
                            <div
                               key={index} className="min-w-full p-4 rounded-xl"
                            >
                                <p className="text-sm opacity-[0.5] leading-relaxed ">
                                    {item.text}
                                </p>

                                <div className="mt-4 font-semibold">
                                    <h3 className="text-lg">{item.name}</h3>
                                    <p className="opacity-70 text-sm">{item.work}</p>


                   


                                </div>
                            </div>
                        ))}
                    </div>



                   <div className= ' absolute flex text-black  bottom-10 gap-3 right-10'>


                    <button onClick={slideback} className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-50 '><FaLessThan/></button>

                    <button onClick={slidenext} className='w-[30px] h-[30px] rounded-full flex justify-center items-center bg-gray-50 '> <FaGreaterThan/></button>




                   </div>
                </div>
            </section>
        </div>

    )
}
