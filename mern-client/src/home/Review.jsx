import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa6";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Avatar } from "flowbite-react";

import profile from '../assets/profile.jpg';

// import required modules
import { Pagination } from 'swiper/modules';

const Review = () => {
  return (
    <div className='px-4 my-12 lg:px-24'>
      <h2 className='mb-10 text-5xl font-bold leading-snug text-center'>Our Customers</h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500' >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>
                  "Shopping for books on this site has been an amazing experience. I found titles that aren't available anywhere else, and the delivery was super quick! I highly recommend it to all book lovers."
                </p>
                <Avatar
                  img={profile} alt="avatar of Ali"
                  rounded
                  className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Qurat Ul Ain</h5>
                <p className='text-base'>A university Student</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500' >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>
                  "I recently bought 'The Forty Rules of Love' and was amazed by the packaging and delivery time. The website is user-friendly, and I love the selection of Islamic literature available."
                </p>
                <Avatar
                  img={profile} alt="avatar of Fatima"
                  rounded
                  className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Fatima Zahra</h5>
                <p className='text-base'>Teacher</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500' >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>
                  "This bookstore offers the best deals and discounts! I found some rare books on Islamic history here that I've been searching for. Delivery was swift, and the books were in perfect condition."
                </p>
                <Avatar
                  img={profile} alt="avatar of Ahmad"
                  rounded
                  className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Anila</h5>
                <p className='text-base'>Sports</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500' >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>
                  "I love how easy it is to find books on this platform. The variety is fantastic, and I was able to get some great recommendations for my next read. Shipping was fast and the service excellent."
                </p>
                <Avatar
                  img={profile} alt="avatar of Eman"
                  rounded
                  className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Eman Ali</h5>
                <p className='text-base'>Student</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500' >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>
                  "As a book collector, I appreciate the quality and selection available on this site. The customer service is friendly and always ready to help. I have recommended this bookstore to all my friends."
                </p>
                <Avatar
                  img={profile} alt="avatar of Sara"
                  rounded
                  className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Sara Ahmed</h5>
                <p className='text-base'>Book Collector</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500' >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>
                  "The best part about this bookstore is its vast collection of both fiction and non-fiction. I've discovered some amazing authors here. The delivery is always on time, and the books arrive in excellent condition."
                </p>
                <Avatar
                  img={profile} alt="avatar of Hassan"
                  rounded
                  className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Hassan Raza</h5>
                <p className='text-base'>Freelancer</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500' >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>
                  "This is my go-to online bookstore for all my reading needs. The website is easy to use, and I always find what I'm looking for. The delivery is quick, and the books are always in perfect shape."
                </p>
                <Avatar
                  img={profile} alt="avatar of Aisha"
                  rounded
                  className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Aisha Noor</h5>
                <p className='text-base'>Researcher</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className='px-4 py-8 bg-white border rounded-lg shadow-2xl md:m-5'>
            <div className='space-y-6'>
              <div className='flex gap-2 text-amber-500' >
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <div className='mt-7'>
                <p className='mb-5'>
                  "I have been shopping here for a while now, and the service keeps getting better. The selection is vast, and the prices are competitive. The customer support is also top-notch, always ready to assist."
                </p>
                <Avatar
                  img={profile} alt="avatar of Zain"
                  rounded
                  className='w-10 mb-4' />
                <h5 className='text-lg font-medium'>Zain Ali</h5>
                <p className='text-base'>Entrepreneur</p>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  )
}

export default Review;
