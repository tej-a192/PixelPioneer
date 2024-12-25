import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'
import Login from './components/Login'
import { AppContext } from './context/AppContext'
import NotFound from './components/NotFound';

const App = () => {
  const { user, showLogin } = useContext(AppContext)
  
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-60 min-h-screen bg-teal-50'>
      <ToastContainer position='bottom-right'/>
      <Navbar />
      {showLogin && <Login /> }
      <Routes>
        <Route path="/home" element={user ? <Result /> : <Navigate to="/" />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/result" element={user ? <Result /> : <Navigate to="/" />} />
        <Route path="/" element={user ? <Navigate to="/result" /> : <Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
