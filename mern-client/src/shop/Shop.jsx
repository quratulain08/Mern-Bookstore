import React, { useEffect, useState } from 'react';
import { Card } from 'flowbite-react';

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/all-books');
        if (!response.ok) {
          throw new Error('Failed to fetch books');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="px-4 mt-28 lg:px-24">
      <h2 className="text-5xl font-bold text-center">Shop your Favourite books now!</h2>
      <div className="grid grid-cols-1 gap-8 my-12 mt-12 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
        {books.map((book) => (
          <Card>
  
             <img src={book.cover_image_url } alt='' className='h-96'/>
        
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
    <p>   
            {book.title}
             </p> 
            </h5>
            <p className="mb-5 font-normal text-gray-700 dark:text-gray-400">
              {book.author}
            </p>
            <button className='py-2 font-semibold text-white bg-blue-700 rounded'>Buy Now</button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Shop;
