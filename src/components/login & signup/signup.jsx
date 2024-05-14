import React from "react"
import Logo from '../logo/Movies.Hub.png'


const Signup = ()=>{
    return (
        <>
         <div className="w-full h-screen flex justify-center relative items-center  bg-black ">
      
         <div className="relative right-56 w-64 ">
              <img src={Logo} alt="logo" className='' />
      </div>
        
      <div className="image-div relative min-w-[40%] h-[80%] flex justify-center items-center align-middle flex-col right-[65px]">
          
          <h1 className="font-mono text-3xl  mb-12 text-white ">Signup</h1>
            <form >
              <div className="flex flex-col  justify-center items-center ">
              <div className="mb-4">
               
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Username" 
                  className="mt-1 placeholder-black pl-6 block min-w-80 min-h-10 border-gray-300  shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div className="mb-6">
                
                <input type="email" id="email" placeholder="Email" className=" min-w-80 min-h-10 placeholder-black pl-6"/>
              </div>
              <div className="mb-6">
                
                <input type="password" id="password" placeholder="Password " className=" min-w-80 min-h-10 placeholder-black pl-6"/>
              </div>
              <div className="mb-6">
                
                <input type="password" id="password" placeholder="Confirm Password" className=" min-w-80 min-h-10 placeholder-black pl-6"/>
              </div>
              </div>
              <div className="min-w-80 min-h-10  flex justify-end items-center gap-32 mt-6">
               
              <button
                type="submit"
                className=" min-w-24 rounded-full bg-indigo-500 text-white py-2 px-4  hover:bg-indigo-600 "
              >
               Signup
              </button>
              </div>
            </form>
              
          </div>
      </div>
    </>
       
    )
}

export default Signup