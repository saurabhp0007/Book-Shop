
import Banner from '../Components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavoriteBooks from './FavoriteBooks'
import PromoBanner from './PromoBanner'
import OtherBooks from './otherBooks'


const Home = () => {
  return (
    <div className=''> 
     <Banner/>
     <BestSellerBooks />
     <FavoriteBooks/>
     <PromoBanner/>
     <OtherBooks />
   
   
    </div>
  )
}

export default Home