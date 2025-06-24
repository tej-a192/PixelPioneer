import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {
    const { user, setShowLogin, credit, logout } = useContext(AppContext)
    const navigate = useNavigate()

    return (
        <div className='py-4 md:py-6 flex items-center justify-between'>
            {/* Brand Logo and Name */}
            <Link to='/home' className='flex items-end justify-center'>
                <img src={assets.logo} className='w-8 sm:w-10 md:w-12 lg:w-14' alt="logo" />
                <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl'>PixelPioneer.</h1>
            </Link>

            <div>
                {user ? (
                    /* --- Logged-In View --- */
                    <div className='flex items-center gap-3 sm:gap-5 md:gap-8'>
                        <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-slate-300 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base hover:scale-105 transition-all duration-500'>
                            <img src={assets.credit_star} alt="" className='w-4 md:w-5' />
                            <p>Credits left: {credit}</p>
                        </button>
                        <p className='hidden sm:block text-sm md:text-base'>Hi, {user.name}!</p>
                        <div className='relative group'>
                            <img src={assets.profile} className='w-8 md:w-10 cursor-pointer' alt="profile"></img>
                            <div className='absolute hidden group-hover:block top-15 right-0 z-10 text-black rounded pt-4'>
                                <ul className='list-none bg-white py-2 px-3 border'>
                                    <li className='cursor-pointer' onClick={logout}>Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ) : (
                    /* --- Logged-Out View --- */
                    <div className='flex items-center gap-4 md:gap-6 lg:gap-8'>
                        <p onClick={() => navigate('/buy')} className='cursor-pointer text-sm sm:text-base md:text-lg'>Pricing</p>
                        <button onClick={() => { setShowLogin(true) }} className='bg-slate-950 text-white px-4 py-1 sm:px-6 md:px-8 md:py-2 text-sm sm:text-base rounded-full hover:bg-slate-900 active:bg-white active:text-black'>
                            Login
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar