import React, { useContext, useState } from 'react'
import {assets} from '../assets/assets'
import { AppContext } from '../context/AppContext'
import {motion} from "framer-motion"

const Result = () => {

    const [image, setImage] = useState(assets.home_snowhouse)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')
  
    const {generateImage} = useContext(AppContext)

    const onSubmitHandler = async (e)=> {
      e.preventDefault()
      setLoading(true)
      if(input) {
        const newImage = await generateImage(input)
        if(newImage) {
          setIsImageLoaded(true)
          setImage(newImage)
        }
      }
      setLoading(false)
  }
  return (
    <motion.form onSubmit={onSubmitHandler} className='flex flex-col min-h-[80vh] justify-center items-center' initial={{opacity:0,y:100}} transition={{duration:1}} whileInView={{opacity:1, y:0}}>
      <div>
          <div className='relative'>
            <img src={image} alt="" className='w-full max-w-md rounded-lg' />
            <span className={`absolute bg-blue-500 h-1 bottom-0 left-0 rounded-lg ${loading ? 'w-full max-w-md transition-all duration-[10s]' : 'w-0'}`}/>
          </div>

          <p className={!loading ? 'hidden' : ''}>Loading....</p> 

          {
            !isImageLoaded ?
              <div className='flex w-full max-w-2xl bg-neutral-500 text-white mt-10 rounded-full text-md'>
                <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder='Enter the prompt to generate image' className='flex-1 bg-transparent outline-none ml-8 p-3'/>
                <button type='submit' className='px-8 bg-neutral-950 text-white rounded-full hover:bg-gray-600 duration-300'>Generate</button>
              </div>
            :
              <div className='flex justify-between gap-10 mt-10 items-center'>
                <p onClick={()=> {setIsImageLoaded(false); setImage(assets.home_snowhouse)}} className='bg-transparent p-3 rounded-lg border border-black cursor-pointer hover:scale-105 transition-all duration-300'>Generate another</p>
                <a href={image} download="download.png" className='px-12 py-3 bg-neutral-950 text-white rounded-lg hover:bg-gray-600 hover:scale-105 transition-all duration-300'>Download</a>
              </div>
          }
      </div>
    </motion.form>
  )
}

export default Result
