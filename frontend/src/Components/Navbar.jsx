import  { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaBlog } from "react-icons/fa";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { AuthContext } from '../Contects/AuthProvider';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isStickey, setIsStickey] = useState(false);
    const {user} = useContext(AuthContext)
    console.log(user);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsStickey(!isStickey);
    }
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsStickey(true);
            } else {
                setIsStickey(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    //nav items here 
    const navItems = [
       {
        link: 'Home',
        path: '/'
       },
       {
        link: 'About',
        path: '/about'
       },
       {
        link: 'Blog',
        path: '/blog'
       },
       {
        link: 'Shop',
        path: '/shop'
       },
       {
        link: 'Sell your book',
        path: '/admin/dashboard'
       }
    ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300'>
        <nav className={`py-4 lg:px-24 px-4  ${isStickey ? 'top-0 left-0 sticky right-0' : ''}`}>
            <div className=' flex justify-between items-center text-base gap-8 '>
                {/* {logo} */}
                <Link to='/'className='text-3xl font-bold text-blue-800 flex items-center'>
                    <FaBlog className=' inline-block'/>Books</Link>

                {/* {nav item for large device} */}
                <ul className='md:flex space-x-12 hidden'>
                    {navItems.map(({link, path})=> <Link key={path} to={path} 
                    className=' block text-base text-black uppercase px-4 py-2 cursor-pointer hover:text-blue-700
                    '>{link}</Link>)}
                </ul>

                {/* {btn for long devices} */}
                <div className='hidden space-x-12 lg:flex items-center'>
                <button><FaBarsStaggered className='hover:text-blue-700 w-5'/></button>
                {
                    user?  <Link to='/admin/dashboard' className='text-black hover:text-blue-700'>Dashboard</Link> : <Link to='/login' className='text-black hover:text-blue-700'>Login</Link>
                }
                </div>

                {/* {menu for small devices} */}
                <div className='md:hidden'>
                    <button  onClick={toggleMenu} className='text-black focus:outline-none'>{
                        isMenuOpen ? <FaXmark className='hover:text-black w-5  h-5 '/> : <FaBarsStaggered className='hover:text-black w-5 h-5 '/>
                    }
                    
                    </button>
                </div>


            </div>

            {/* {navitem for small devices} */}
              <div className={`space-y-4 px-4 mt-16 py-7 bg-blue-700 text-white ${isMenuOpen ? 'block fixed top-0 right-0 left-0' : 'hidden'}`}>
              {navItems.map(({link, path})=> <Link key={path} to={path} 
                    className=' block text-base text-black uppercase px-4 py-2 cursor-pointer
                    '>{link}</Link>)}
              </div>
        </nav>
    </header>
  )
}

export default Navbar