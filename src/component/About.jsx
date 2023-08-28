import React from 'react'
import { Bio } from '../assets/data/mockData'

const About = () => {
    return (
        <div id='About' className='w-full backgroundColors clip-path-aboutpolygon py-32'>
            <div className='flex flex-col items-center justify-center z-0'>
                <div className='text-white text-center font-semibold text-[43px] sm:text-2xl md:text-2xl'>
                    Hello! It's me {Bio.name} <span className='h-[40px] w-[40px]'>🖖</span>
                </div>
            </div>
        </div>
    )
}

export default About