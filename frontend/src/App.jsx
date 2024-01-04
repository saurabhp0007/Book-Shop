import {Outlet} from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import MyFooter from './Home/Footer'


function App() {


  return (
    <>
        <Navbar/>
        <div className='min-h-screen'>
        <Outlet />
        </div>

        <MyFooter/>
    </>
  )
}

export default App
