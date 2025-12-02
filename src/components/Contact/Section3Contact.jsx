import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { CiMobile4 } from "react-icons/ci";
import { FaRegEnvelope } from "react-icons/fa6";

export default function Section3Contact() {
    return (
        <div className="w-full flex flex-col  gap-6 pb-11 lg:justify-center lg:items-center  lg:flex-row md:p-12 ">

            {/* LEFT FORM SECTION */}
            <div className="w-full lg:w-[610px]  bg-white p-6 rounded-xl">
                <h1 className="text-2xl font-semibold mb-4">Get In Touch</h1>

                <textarea
                    className="w-full h-[190px] border border-gray-300 p-3 rounded-md mb-4 resize-none"
                    placeholder="Enter Your Message"
                ></textarea>


                <div className="grid sm:grid-cols-2    md:grid-cols-3 gap-4">
                    <input className="border border-gray-300 p-3 rounded-md" type="text" placeholder='Enter Your Name' />
                    <input className="border border-gray-300 p-3 rounded-md" type="email" placeholder='Email' />
                    <input className="border border-gray-300 p-3 rounded-md" type="text" placeholder='Enter Subject' />
                </div>

                <button className="mt-5 bg-white border border-orange-400 text-orange-400 py-2 px-6 rounded-md hover:bg-orange-400 hover:text-white transition">
                    SEND
                </button>
            </div>

            {/* RIGHT CONTACT INFO */}
            <div className=" ml-6  md:h-[416px] md:w-1/3 flex flex-col gap-6           ">

                {/* Address */}
                <div className="flex gap-4 items-start mt-16 ">
                    <IoHomeOutline className="text-2xl text-gray-500" />
                    <div>
                        <h6 className="text-lg font-semibold">ButtonWood, California</h6>
                        <p className="text-gray-500 text-sm">Rosemead, CA 91770</p>
                    </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4 items-start">
                    <CiMobile4 className="text-2xl text-gray-500" />
                    <div>
                        <h6 className="text-lg font-semibold">+1 253 565 2365</h6>
                        <p className="text-gray-500 text-sm">Available from 9am - 6pm</p>
                    </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                    <FaRegEnvelope className="text-2xl text-gray-500" />
                    <div>
                        <h6 className="text-lg font-semibold">support@example.com</h6>
                        <p className="text-gray-500 text-sm">Send us your query anytime!</p>
                    </div>
                </div>

            </div>
        </div>
    )
}
