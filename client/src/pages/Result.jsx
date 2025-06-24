import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import { motion } from "framer-motion"

const Result = () => {

    const [image, setImage] = useState(assets.home_snowhouse)
    const [isImageLoaded, setIsImageLoaded] = useState(false)
    const [loading, setLoading] = useState(false)
    const [input, setInput] = useState('')

    const { generateImage } = useContext(AppContext)

    const onSubmitHandler = async (e) => {
        e.preventDefault()
        setLoading(true)
        if (input) {
            const newImage = await generateImage(input)
            if (newImage) {
                setIsImageLoaded(true)
                setImage(newImage)
            }
        }
        setLoading(false)
    }
    
    return (
        <motion.form onSubmit={onSubmitHandler} className='flex flex-col min-h-[80vh] justify-center items-center py-8' initial={{ opacity: 0, y: 100 }} transition={{ duration: 1 }} whileInView={{ opacity: 1, y: 0 }}>
            <div className='w-full max-w-md'>
                <div className='relative'>
                    <img src={image} alt="" className='w-full rounded-lg' />
                    <span className={`absolute bg-blue-500 h-1 bottom-0 left-0 rounded-lg ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`} />
                </div>

                <p className={!loading ? 'hidden' : 'text-center mt-2'}>Loading....</p>

                {
                    !isImageLoaded ?
                        <div className='flex w-full bg-neutral-500 text-white mt-10 rounded-full text-sm sm:text-md'>
                            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter a prompt...' className='flex-1 bg-transparent outline-none ml-4 sm:ml-6 p-2 sm:p-3' />
                            <button type='submit' className='px-4 sm:px-8 bg-neutral-950 text-white rounded-full hover:bg-gray-600 duration-300'>Generate</button>
                        </div>
                        :
                        <div className='flex flex-col sm:flex-row justify-center sm:justify-between items-stretch sm:items-center gap-4 mt-10'>
                            <p onClick={() => { setIsImageLoaded(false); setImage(assets.home_snowhouse) }} className='bg-transparent p-3 text-center rounded-lg border border-black cursor-pointer hover:scale-105 transition-all duration-300 w-full sm:w-auto'>Generate another</p>
                            <a href={image} download="download.png" className='px-8 sm:px-12 py-3 text-center bg-neutral-950 text-white rounded-lg hover:bg-gray-600 hover:scale-105 transition-all duration-300 w-full sm:w-auto'>Download</a>
                        </div>
                }
            </div>
        </motion.form>
    )
}

export default Result