import React, { useContext } from 'react'
import { plansData } from '../assets/assets'
import {AppContext} from '../context/AppContext'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const BuyCredit = () => {

  const {user,setShowLogin} = useContext(AppContext)
  
  const navigate = useNavigate();
  return (
    <motion.div className='flex flex-col w-full justify-center items-center mt-24 space-y-5 md:max-w-full lg:max-w-full xl:max-w-full' initial={{opacity:0.2, y:100}} transition={{duration:0.5}} whileInView={{opacity:1, y:0}}>
      <p className='bg-white/20 rounded-full px-6 py-1 outline-none border border-gray-500 text-2xl'>Our Plans</p>
      <h2 className='text-2xl'>Choose the Plans</h2>
      <div className='flex w-full max-w-full p-6 gap-10 items-center justify-center'>
        {
          plansData.map((item, index)=>(
            <div className='bg-white w-full max-w-sm rounded-lg p-6 shadow-md hover:scale-105 transition-all duration-300'>
              <img src={item.icon} alt="" />
              <div className='space-y-2 mt-6 text-xl'>
                <h2>{item.title}</h2>
                <p className='text-gray-500 text-lg'>{item.description}</p>
              </div>

              <div className='flex mt-10 items-end'>
                <h1 className='text-5xl'>{item.price}</h1>
                <p className='ml-2 text-xl text-gray-500'>/{item.credits} credits</p>
              </div>

              <button type='submit' onClick={user ? ()=> navigate('/') : ()=>setShowLogin(true)} className='mt-20 w-full bg-zinc-900 text-white px-10 py-1 text-xl rounded-full hover:scale-105 transition-all duration-300'>{user ? 'Buy now' : 'Get Started'}</button>
            </div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default BuyCredit
