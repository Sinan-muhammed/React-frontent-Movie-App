import React from "react";
import Navbar from '../navbar/navbar'
import { FaSearch } from "react-icons/fa";
import Poster from '../../../public/Series-posters/GOT_1.jpeg'
import Poster2 from '../../../public/Series-posters/Breaking_Bad.jpeg'
import Poster3 from '../../../public/Series-posters/MONEY_HEIST.jpeg'
import Poster4 from '../../../public/Series-posters/PEAKY_BLINDERS.jpeg'
import Poster5 from '../../../public/Series-posters/movie.jpeg'


const Series = ()=>{
    return (
        <>
        <Navbar className='nav'/>
        <div className="input-wrapper relative  top-[50px]">
            <FaSearch id="search-icon"/> 
            <input type="search" className="search-input"  placeholder="Search Movies and Series"/>
        </div>
        <div className=' text-white relative top-[80px]'>
        <h2 className='font-bold ml-5'>Title</h2>
        <div className="posters flex p-5 overflow-scroll">
            <img src={Poster} alt="poster"  className='max-h-60 mr-5  '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster} alt="poster"  className='max-h-60 mr-5 '/>
        </div>
      </div>
        <div className=' text-white relative top-[80px]'>
        <h2 className='font-bold ml-5'>Title</h2>
        <div className="posters flex p-5 overflow-scroll">
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5  '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster2} alt="poster"  className='max-h-60 mr-5 '/>
        </div>
      </div>
        <div className=' text-white relative top-[80px]'>
        <h2 className='font-bold ml-5'>Title</h2>
        <div className="posters flex p-5 overflow-scroll">
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5  '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster3} alt="poster"  className='max-h-60 mr-5 '/>
        </div>
      </div>
        <div className=' text-white relative top-[80px]'>
        <h2 className='font-bold ml-5'>Title</h2>
        <div className="posters flex p-5 overflow-scroll">
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5  '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster4} alt="poster"  className='max-h-60 mr-5 '/>
        </div>
      </div>
        <div className=' text-white relative top-[80px]'>
        <h2 className='font-bold ml-5'>Title</h2>
        <div className="posters flex p-5 overflow-scroll">
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5  '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
            <img src={Poster5} alt="poster"  className='max-h-60 mr-5 '/>
        </div>
      </div>
        </>
    )
}

export default Series