import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from 'framer-motion'

const GenerateBtn = () => {

  const {user, setShowLogin} = useContext(AppContext)

  return (
    <motion.div className='flex flex-col m-20 justify-center items-center text-center' initial={{opacity:0.2, y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}} viewport={{once:true}}>
      
      <h1 className='text-3xl sm:text-4xl md:text-5xl'>See the <span className='text-blue-500'>magic</span>. Try now</h1>

      <div>
              <button onClick={()=> setShowLogin(true)} className='flex items-center mt-14 px-4 py-2 bg-black text-white rounded-full gap-3 cursor-pointer hover:scale-105 transition-all duration-500'>
                  <p>Generate Images</p>
                  <img src={assets.star} alt="" />
              </button>
            </div>
    </motion.div>
  )
}

export default GenerateBtn