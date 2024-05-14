import React from 'react'
import Image from './1.png'
import Logo from '../logo/Movies.Hub.png'
import './Intro.css'


const Intro = () => {
  return (
    <>
     <div className='Main  '>
        <div className='Main-One h-[100%] w-[100%] '>
            <img src={Logo} alt="Logo" className='w-96'/>
            <h1 className='text-1xl font-bold text-center mt-7 text-white ml-5'>Unlimited movies,<br/> TV shows, and more.</h1>
            <p className='text-sm text-white text-center mt-8 ml-5'>Watch anywhere. Cancel anytime. Tap <br/>the link below to sign up.</p>
            <div className='mt-20 ml-5'>
              <button className='button-intro h-10 w-40 bg-blue-800 text-white'> <a href="/signup">Sign In</a></button>
             
            </div>
        </div>
     </div>
    </>
  )
}

export default Intro