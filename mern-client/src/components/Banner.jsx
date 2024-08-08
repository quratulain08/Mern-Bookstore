import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className="flex items-center px-4 bg-teal-100 lg:px-24">
        <div className='flex flex-col items-center justify-between w-full gap-12 py-40 md:flex-row'>
            {/* left side */}
            <div className='space-y-8 md:w-1/2'>
                <h2 className='text-5xl font-bold leading-snug text-black'>
                    Trade your Books &<br/>
                    <span className='text-blue-700'>Find new stories.</span>
                </h2>
                <p className='md:w-4/5'>Explore our vast collection of books and discover your next favorite read.
                     From thrilling fiction to insightful non-fiction,
                     we have something for everyone.Dive into new worlds, gain fresh perspectives,
                     and get lost in the pages. Happy reading!</p>
            <div>
                <input type='search' name='search' id='search' placeholder='Search a Book' className='px-2 py-2 outline-none rounded-s-sm'></input>
                <button className='px-6 py-2 font-medium text-white transition-all duration-200 ease-in bg-blue-700 hover:bg-black'>
                    Search
                </button>
            </div>
            </div>
            

            {/* right side */}
            <div>
               <BannerCard />
                
            </div>

        </div>
    </div>
  )
  

}

export default Banner

