import React from 'react'
import './Row.css'
import Poster from '../loginimage/Avatar.jpg'

const Row = () => {
  return (
    <>
      <div className=' text-white mt-3 '>
        <div className='relative flex gap-6 w-[100%]  justify-center mt-5 '> 
          <button className='category-button' >Most Watched</button>
          <button className='category-button'>Recently add</button>
          <button className='category-button'>Top Rated</button>
          <button className='category-button'>movie Clicks</button>
        </div>
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
      <div className=' text-white'>
        <h2 className=' ml-5 font-bold'>Title</h2>
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
    </>
  )
}

export default Row