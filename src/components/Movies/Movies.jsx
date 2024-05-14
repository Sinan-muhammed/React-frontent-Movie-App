import React from "react";
import Navbar from '../navbar/navbar'
import { FaSearch } from "react-icons/fa";
import Poster from '../../../public/Movie-posters/Oppenheimer.jpg'
import Poster2 from '../../../public/Movie-posters/fight_club.jpg'
import Poster3 from '../../../public/Movie-posters/a_mill_eye.jpg'
import Poster4 from '../../../public/Movie-posters/Avatar.jpg'
import Poster5 from '../../../public/Movie-posters/joker.jpg'

const Movie = ()=>{
    return (
        <>
        <Navbar className='nav'/>
        <div className="input-wrapper relative left-[50px] top-[50px] ">
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

export default Movie