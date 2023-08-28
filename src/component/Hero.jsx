import React from 'react'
import { Link } from "react-scroll";

const Hero = () => {
    return (
        <div id='Home' className='relative h-[600px] w-full z-10 flex items-center justify-center top-0 backgroundColors bg-home-background clip-path-heropolygon'>
            <div className='flex flex-col items-center justify-center absolute  gap-8 px-8'>
                <div className='text-white text-center font-semibold text-[43px] sm:text-2xl md:text-2xl' >
                    <span className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                        Crafting Seamless Experiences
                    </span>
                    <br /> One Line of Code and Pixel at a Time.
                </div>
                <div className='text-slate-400 text-center font-medium text-base sm:text-sm md:text-sm' >
                    I'm a <span className='text-blue-dark'>full stack developer </span>
                    and <span className='text-blue-dark'>UI/UX designer</span>,
                    sculpting digital journeys by fusing intricate code
                    <br /> and pixel-perfect design. My work embodies user-centricity,
                    resulting in immersive experiences <br />
                    that <span className='text-blue-dark'>bridge innovation with functionality</span>.
                </div>
                <button className="h-[40x] w-[130px] text-center inline-flex p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    <span className="h-[40x] w-[130px] px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Let's Talk!
                    </span>
                </button>

                <Link spy={true} to="About">
                    <div className='h-[20px] w-[20px] cursor-pointer mt-8 sm:hidden md:hidden' >
                        <svg className="animate-bounce fill-slate-400 dark:hover:fill-white hover:fill-slate-600" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 0C5.832 0 0 5.832 0 13C0 20.168 5.832 26 13 26C20.168 26 26 20.168 26 13C26 5.832 20.168 0 13 0ZM13 2C19.087 2 24 6.913 24 13C24 19.087 19.087 24 13 24C6.913 24 2 19.087 2 13C2 6.913 6.913 2 13 2ZM12 6V16.28L8 12.28L6.594 13.72L12.281 19.406L13.001 20.126L13.721 19.406L19.407 13.719L18 12.28L14 16.28V6H12Z" />
                        </svg>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Hero