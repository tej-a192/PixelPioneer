import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useContext } from 'react'
const Navbar = () => {

    const {user, setShowLogin,credit, logout} = useContext(AppContext)

    const navigate = useNavigate()
  return (
    <div className='py-6 flex items-center justify-between'>
        <Link to='/home' className='flex items-end justify-center sm:max-w-6/12 md:max-wd-6/12 lg:max-w-6/12'>
            <img src= {assets.logo} className='w-10 md:w-12 lg:w-14'/>
            <h1 className='text-5xl'>PixelPioneer.</h1>
        </Link>
      <div>
        {
            user ?
            <div className='flex items-center gap-4 sm:gap-5 md:gap-10 lg:gap-24'>
                <button onClick={()=> navigate('./buy')} className='flex items-center gap-2 bg-slate-300 px-3 rounded sm:px-5 py-1 hover:scale-105 transition-all duration-500'>
                    <img src={assets.credit_star} alt="" className='w-5 md:w-7 lg:w-10' />
                    <p>Credits left :{credit}</p>
                </button>
                <p>Hi, {user.name}!</p>
                <div className='relative group'>
                    <img src={assets.profile} className='w-10 cursor-pointer'></img>
                    <div className='absolute hidden group-hover:block top-15 right-0 z-10 text-black rounded pt-4'>
                        <ul className='list-none bg-white py-2 px-3 border'>
                            <li className='cursor-pointer' onClick={()=> logout()}>Logout</li>
                        </ul>
                    </div>

                </div>
            </div>
            :
            <div className='flex items-center gap-4 sm:gap-3 md:gap-10 lg:gap-24'>
               <p onClick={()=> navigate('/buy')} className='cursor-pointer text-3xl sm:text-xl md:text-2xl lg:text-3xl'>Pricing</p>
               <button onClick={()=> {setShowLogin(true)}} className='bg-slate-950 text-white px-14 py-2 text-3xl rounded-full hover:bg-slate-900 active:bg-white active:text-black sm:text-xl md:text-2xl lg:text-3xl'>Login</button>
            </div>
        }
      </div>
    </div>
  )
}

export default Navbar
