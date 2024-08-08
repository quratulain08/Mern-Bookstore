import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6';

const BookCards = ({ headline, books }) => {
  //console.log(books); // Debugging: Check if books array is coming through correctly

  return (
    <div className='px-4 my-16 lg:px-24'>
      <h2 className='my-5 text-5xl font-bold text-center text-black'>{headline}</h2>
      {/* cards */}
      <div className='mt-12'>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="w-full h-full mySwiper"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <div className='relative'>
                  <img src={book.cover_image_url} alt={book.title} className="w-full h-auto" />
                  <div className='absolute p-2 bg-blue-700 rounded top-1 right hover:bg-black'>
                    <FaCartShopping className='w-4 h-4 text-white'/>
                  </div>
                </div>
                <div>
                  <h3>{book.title}</h3>
                  <p>{book.author}</p>
                </div>
                <div>
                  <p>$10.00</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
