import React from 'react'
import favBook from '../assets/favoritebook.jpg'
import { Link } from 'react-router-dom'

const FavoriteBooks = () => {
  return (
    <div className=' px-4 lg:px-24 my-20 flex flex-col sm:flex-row justify-between gap-12 items-center '>
        <div className='md:w-1/2'>
            <img src={favBook}  className='rounded md:w10/12'/>
        </div>
        <div className='md:w-1/2 space-y-6'>
            <h2 className='text-5xl font-bold my-5 md:w-3/4 leading-snug'>Your Favorite
             <span className='text-blue-700'> Book Here</span></h2>
             <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia vero,
                 amet esse repudiandae et nulla tempore est ducimus autem sint 
                 aspernatur ab corporis error ipsa laudantium excepturi nisi dolor nihil.</p>
            <div className='flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14'>
                <div>
                    <h3 className='text-3xl font-bold '>800+</h3>
                    <p className='text-base'>Book Listing</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold '>550+</h3>
                    <p className='text-base'>Register Users</p>
                </div>
                <div>
                    <h3 className='text-3xl font-bold '>1200+</h3>
                    <p className='text-base'>PDF Downloads</p>
                </div>

            </div>

            <Link to= "/shop" className='mt-12 block'>
                <button className='bg-blue-700 hover:bg-black 
                transition-all duration-300 text-white font-semibold py-2 px-5 
                rounded'>Explore More</button></Link>
        </div>

    </div>
  )
}

export default FavoriteBooks