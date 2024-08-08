import React from 'react'
import FavBookImg from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavBook = () => {
  return (
    <div className='flex flex-col items-center justify-between gap-12 px-4 my-20 lg:px-24 md:flex-row'>
        <div className='md:w-1/2'>
        <img src={FavBookImg} alt="" className='rounded md:w-10/12'/>
    </div>
    <div className='space-x-6 md:w-1/2'>
      <h2 className='my-5 text-5xl font-bold leading-snug md:w-3/4'> Find Your Favorite <span className='text-blue-700'>Book Here!</span></h2>
<p className='mb-10 text-lg md:w-5/6'>Books are timeless treasures that open doors to new worlds and possibilities. They have the power to educate,
 inspire, and transform us by expanding our understanding of the world and ourselves. Each book is a gateway to knowledge and imagination, offering stories that entertain and provoke thought.
  Through the pages of a book, we can explore diverse cultures, historical events, and futuristic visions, all from the comfort of our own space. 
  Whether it’s fiction or non-fiction, poetry or prose, books provide an escape and a chance to grow, making them invaluable companions on our life’s journey..

</p>
<div className='flex flex-col justify-between gap-6 sm:flex-row md:w-3/4 my-14'>
    <div>
    <h3 className='text-3xl font-bold'>800+</h3>
    <p className='text-base'>Book Listing</p>
    </div>
    <div>
    <h3 className='text-3xl font-bold'>550+</h3>
    <p className='text-base'>Register Users</p>
    </div>
    <div>
    <h3 className='text-3xl font-bold'>1200+</h3>
    <p className='text-base'>PDF downloads</p>
    </div>
    
</div>

<Link to ="/shop" className='block mt-12'>
<button className='px-5 py-2 font-semibold text-white transition-all duration-300 bg-blue-700 rounded hover:bg-black'>Explore More</button></Link>
    </div>
    </div>
  )
}

export default FavBook