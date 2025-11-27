import React, { useState } from 'react'
import img1 from '../../../assets/project1.png'
import img2 from '../../../assets/project2.png'
import img3 from '../../../assets/project3.png'
import img4 from '../../../assets/project4.png'
import img5 from '../../../assets/project5.png'
import img6 from '../../../assets/project6.png'

export default function Section4() {


const filters = [
  { label: "Show All", value: "all" },
  { label: "Interior", value: "interior" },
  { label: "Recent", value: "recent" },
  { label: "Big Building", value: "building" },
  { label: "Park", value: "park" },
];


    const [category, setCategory] = useState("all");

    const cards = [
        { id: 1, img: img1, cat: "interior" },
        { id: 2, img: img2, cat: "recent" },
        { id: 3, img: img3, cat: "building" },
        { id: 4, img: img4, cat: "park" },
        { id: 5, img: img5, cat: "recent" },
        { id: 6, img: img6, cat: "interior" },
    ];

    return (
        <div>
            <section>

                <h1 className='text-center mt-6 mb-6 text-5xl font-bold'>OUR PROJECTS</h1>

                {/* FILTER BUTTONS */}
                <ul className="flex text-sm gap-9 flex-wrap justify-center items-center m-auto">
                    {filters.map((item) => (
                        <li
                            key={item.value}
                            onClick={() => setCategory(item.value)}
                            className={`cursor-pointer ${category === item.value ? "text-orange-500 font-semibold" : "text-black"
                                }`}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>



                {/* CARDS */}
                <div className='w-[90%] md:w-max m-auto pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                    {cards
                        .filter(card => category === "all" || card.cat === category)
                        .map(card => (
                            <div key={card.id} className='m-auto w-full sm:w-[510px] md:w-[330px] lg:w-[290px] xl:w-[370px]'>
                                <img className='w-full' src={card.img} alt="" />
                                <div className='p-5 bg-white hover:bg-[#00235B] transition-all duration-300'>
                                    <h1 className='text-2xl font-bold text-black hover:text-white'>
                                        Floride Chemicals <br /> Factory
                                    </h1>
                                </div>
                            </div>
                        ))
                    }

                </div>

            </section>
        </div>
    )
}
