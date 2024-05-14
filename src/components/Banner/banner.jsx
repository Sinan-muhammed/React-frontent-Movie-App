import React from 'react';
import './banner.css';

const Banner = () => {
    return (
        <>
            <div className='banner'>
                <div className='content pt-36 pl-6'>
                    <h1 className='title text-4xl font-extrabold pb-1.5'>Movie Name</h1>
                    <div className='banner-buttons'>
                        <button className='button min-h-1'>Play</button>
                        <button className='button'>My List</button>
                    </div>
                    <h1 className='description'>CSS gradients also support transparency, which can be used to create fading effects.</h1>
                </div>
                <div className='fade-bottom'></div>
            </div>
        </>
    );
};

export default Banner;
