import React from 'react'
import Logo from  '../logo/image (1).png'

import { Outlet, Link } from "react-router-dom";

 const navbar = () => {
  return (
    <>
      <nav >
        <div className='bg-black h-[70px] flex gap-[50%] align-middle w-[100%] '>
         <div className='static w-60 ml-[15px]'> 
            <img src={Logo} alt="logo" />
        </div>
        <div className='relative top-6 left-[95px]'>

        <ul className='static flex  gap-10  text-white '>
            <li className='hover:text-amber-300'><Link to='/'>Home</Link></li>
            <li className='hover:text-amber-300'><Link to='/movies'>Movies</Link></li>
            <li className='hover:text-amber-300'><Link to=''>Series</Link></li>
            <li className='hover:text-amber-300'><Link to='/login'>Login</Link></li>
        </ul>
        </div>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default navbar