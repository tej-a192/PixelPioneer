import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Steps = () => {
  return (
    <motion.div className='flex flex-col items-center justify-center' initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
        <h1 className='text-5xl font-semibold'>How it Works</h1>

        <div className='space-y-5 w-full max-w-4xl m-10'>
            {stepsData.map((item, index)=>(
                <div key={index} className='flex gap-4 p-5 px-8 items-center bg-white shadow-md border cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg'>
                    <img width={40} src={item.icon} alt="" />

                    <div className='flex flex-col'>
                        <h2 className='text-xl font-medium'>{item.title}</h2>
                        <p className='text-gray-500'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default Steps
