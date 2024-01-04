import  { useContext } from 'react'
import { AuthContext } from '../Contects/AuthProvider'
import {  useLocation , useNavigate } from 'react-router-dom'


const LogOut = () => {
    const {logout} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'
    const handleClick = () => {
        logout().then(
            () => {
                alert('Logout successfully')
                navigate(from, {replace: true})
            }
        ).catch()
    }
  return (
    <div className="flex items-center justify-center h-screen">
    <button
      onClick={handleClick}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
    >
      Logout
    </button>
  </div>
  )
}

export default LogOut