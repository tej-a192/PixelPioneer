import React from 'react'
import { testiMonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div className='flex flex-col mt-20 items-center' initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}} >
      <h1 className='text-2xl md:text-4xl font-semibold'>Customer Testimonials</h1>
      <p className='text-gray-500 text-xl'>What our users say</p>

      <div className='flex flex-col lg:flex-row gap-8 lg:gap-6 w-full max-w-6xl mt-10'>
         {testiMonialsData.map((item, index)=>(
            <div key={index} className='flex flex-col justify-center items-center text-white text-center bg-black w-full p-10 rounded-lg hover:scale-105 transition-all duration-300 shadow-md border cursor-pointer'>
                <img  width={90} src={item.icon} alt="" />
                <h2 className='mt-5'>{item.name}</h2>
                <p className='text-gray-500'>{item.role}</p>
                <div className='flex gap-2 m-6'>
                    <img src={item.rating} alt="" />
                    <img src={item.rating} alt="" />
                    <img src={item.rating} alt="" />
                    <img src={item.rating} alt="" />
                    <img src={item.rating} alt="" />
                </div>
                <p className='text-gray-400'>{item.comment}</p>
            </div>
         ))}
      </div>
    </motion.div>
  )
}

export default Testimonials