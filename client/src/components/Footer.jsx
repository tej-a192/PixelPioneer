import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'
const Footer = () => {
  return (
    <div className='flex mt-56 p-6 justify-between items-end'>
        <Link to='/home' className='flex items-end justify-center'>
            <img src= {assets.logo} className='w-10 md:w-10 lg:w-14'/>
            <h1 className='text-4xl text-gray-500'>PixelPioneer.</h1>
        </Link>

        <h2 className='text-gray-500'>All Rights Reserved. Copyright@ PixelPioneer</h2>

        <div className='flex gap-16'>
           <a href='mailto:pavanteja.batthula@sasi.ac.in' target='_blank'><img src={assets.mail_icon} alt="" title='Mail us' className='cursor-pointer hover:scale-125 transition-all duration-300'/></a>
           <a href='https://www.linkedin.com/in/pavantejab/'><img src={assets.linkedin_icon} alt="" title='Lets connect'className='cursor-pointer hover:scale-125 transition-all duration-300' /></a>
           <a href='https://www.instagram.com/t3j4x_'><img src={assets.instagram_icon} alt="" title='Follow our instagram page'className='cursor-pointer hover:scale-125 transition-all duration-300' /></a>
        </div>
    </div>
  )
}

export default Footer
