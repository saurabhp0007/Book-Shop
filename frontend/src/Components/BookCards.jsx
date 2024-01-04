import React, { useRef, useState } from 'react';
import {Link} from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
//import 'swiper/css';
//import 'swiper/css/pagination';
import './BookCards.css';
import { FaCartShopping } from 'react-icons/fa6'


// import required modules
import { Pagination } from 'swiper/modules';

const BookCards = ({books, headline}) => {
  return (
  <div className="my-16 px-4 lg:px-24">
    <h2 className="text-5xl font-bold text-center text-black my-5">{headline}</h2>

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
        className="abc"
      >
        {books.map((book) => (
          <SwiperSlide key={book._id}>
            <Link to={`/book/${book._id}`}>
              <div className=' relative'>
                <img src={book.imageURL} className='w-full' /> 
                <div className=' bg-blue-600 hover:bg-black p-2 rounded absolute top-3 right-3'>
                    <FaCartShopping className='w-4 h-4 text-white'/>
                </div>
              </div>
              <div className=' bg-white text-black'>
                 <h3>{book.bookTitle}</h3>
                 <p>{book.authorName}</p>
              </div>
              <div className=' bg-white text-black'>
              <p>Rs.100</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </div>
);
}

export default BookCards