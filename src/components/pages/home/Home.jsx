import React from 'react';
import Hero from '../../../assets/h1_hero.jpg';

export default function Home() {
  return (
    <div className="w-full h-[60vh]  md:h-full overflow-hidden flex justify-center relative">
      <img
        src={Hero}
        alt="hero"
        className="w-full h-full object-cover"
      />
      <div className="absolute  bg-[#0b2c4cac] top-0 flex flex-col justify-center items-center w-full h-full z-30">

        <div className="flex items-center  w-[90%] mb-4">
          <div className="w-[23px] h-1 border-b-2 border-orange-400 mr-2"></div>
          <p className="text-[12px] font-bold text-white">HAND CAR WASH AND DETAILING SERVICE</p>
        </div>

        <div className=' w-[70%]'>
          <h1 className="text-orange-400 text-4xl sm:text-6xl  tracking-wide md:text-7xl lg:text-8xl font-bold  mb-2">ADVANCED</h1>
        </div>

        <svg
          className="w-[70%] "
          viewBox="0 0 1200 200"
          preserveAspectRatio="xMidYMid meet"
        >
          <defs>
            {/* Clip text */}
            <clipPath id="text-clip-react">
              <text
                x="50%"
                y="50%"
                dominantBaseline="middle"
                textAnchor="middle"
                fontSize="150"
                fontWeight="700"
                fill="black"
              >
                CONSTRUCTION
              </text>
            </clipPath>

            {/* Wave animation styles */}
            <style>
              {`
                .wave {
                  animation: wave-horizontal 4s linear infinite, wave-vertical 2s ease-in-out infinite;
                }

                .wave-secondary {
                  animation: wave-horizontal 4s linear infinite reverse, wave-vertical-secondary 2s ease-in-out infinite;
                }

                @keyframes wave-horizontal {
                  0% { transform: translateX(0); }
                  100% { transform: translateX(-400px); }
                }

                @keyframes wave-vertical {
                  0% { transform: translateY(0); }
                  50% { transform: translateY(12px); }
                  100% { transform: translateY(0); }
                }

                @keyframes wave-vertical-secondary {
                  0% { transform: translateY(0); }
                  50% { transform: translateY(-4px); }
                  100% { transform: translateY(0); }
                }
              `}
            </style>
          </defs>


          <g clipPath="url(#text-clip-react)">

            <path
              d="M0 100 C300 80 300 120 600 100 S900 120 1200 100 V200 H0 Z"
              className="wave fill-orange-400 "
            />

            {/* Secondary wave with opposite vertical motion */}
            <path
              d="M0 100 C300 120 300 80 600 100 S900 80 1200 100 V200 H0 Z"
              className="wave-secondary fill-orange-400 "
            />
          </g>

          {/* Text outline */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            className="fill-none stroke-white stroke-[2px]"
            fontSize="150"
            fontWeight="700"
          >
            CONSTRUCTION
          </text>
        </svg>

        <div className="flex items-center  w-[90%] mt-7 ">
          <div className="w-[23px] h-1 border-b-2 border-orange-400 mr-2"></div>
          <p className="text-[14px] font-bold text-white">OUR SERVICE</p>
        </div>


      </div>
    </div>
  );
}
