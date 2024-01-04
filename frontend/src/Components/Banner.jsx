
import BannerCard from '../Home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100'>
        <div className='flex w-full flex-col md:flex-row justify-between item-center gap-12 py-40'>
            {/* {left side } */}
            <div className=' space-y-8 md:w-1/2'>
                <h2 className='text-6xl font-bold leading-snug text-black'>Buy and Sell your books 
                 <span className='text-blue-700'> For the best prizes</span></h2>
                <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab eum ducimus placeat fuga 
                    magni, debitis minus.
                       </p>
                <div>
                    <input type="search" placeholder='Search' id='search' className=' py-2 px-2 rounded-s-sm outline-none' />
                    <button className='bg-blue-700 text-white px-6 py-2 rounded-e-sm font-medium hover:bg-black
                     transition-all ease-in duration-200'>Search</button>
                </div>

            </div>

            {/* {right side } */}
            <div>
                <BannerCard />
            </div> 
        </div>
    </div>
  )
}

export default Banner