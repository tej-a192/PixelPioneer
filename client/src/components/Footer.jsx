import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-4 mt-20 md:mt-32 lg:mt-56 p-6'>
        
        <Link to='/home' className='flex items-end justify-center'>
            <img src= {assets.logo} className='w-10 md:w-12 lg:w-14'/>
            <h1 className='text-3xl lg:text-4xl text-gray-500'>PixelPioneer.</h1>
        </Link>

        <div className='flex gap-8 lg:gap-10'>
           <a href='mailto:pavanteja.batthula@sasi.ac.in' target='_blank'><img src={assets.mail_icon} alt="" title='Mail us' className='w-6 cursor-pointer hover:scale-125 transition-all duration-300'/></a>
           <a href='https://www.linkedin.com/in/pavantejab/'><img src={assets.linkedin_icon} alt="" title='Lets connect'className='w-6 cursor-pointer hover:scale-125 transition-all duration-300' /></a>
           <a href='https://www.instagram.com/t3j4x_'><img src={assets.instagram_icon} alt="" title='Follow our instagram page'className='w-6 cursor-pointer hover:scale-125 transition-all duration-300' /></a>
        </div>
        
        <h2 className='text-xs lg:text-base text-gray-500 text-center'>All Rights Reserved. Copyright@ PixelPioneer</h2>

    </div>
  )
}

export default Footer