import React from 'react'
import { assets, descriptionData } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div className='flex flex-col justify-center items-center my-10 p-6 md:px-28' initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      <h1 className='text-3xl sm:text-4xl font-semibold'>Create AI Images</h1>
      <p className='text-gray-500 mt-2'>Turn your imagination into visuals</p>

      <div className='flex flex-col lg:flex-row gap-10 mt-20 items-center'>
        <img 
          className='w-full max-w-md lg:w-96 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer' 
          src={assets.description_waterfall} 
          alt="" 
          title='' 
        />
        <div className="text-center lg:text-left">
            {descriptionData.map((item, index)=>(
                <div key={index} className='space-y-6'>
                    <h1 className='text-2xl text-black font-semibold'>{item.title}</h1>
                    <p>{item.para1}</p>
                    <p>{item.para2}</p>
                </div>
            ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Description