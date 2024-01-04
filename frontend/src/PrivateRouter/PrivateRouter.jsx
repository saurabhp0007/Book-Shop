import { useContext } from 'react'
import { AuthContext } from '../Contects/AuthProvider'
import {  useLocation , Navigate} from 'react-router-dom'
import { Spinner } from 'flowbite-react';



const PrivateRouter = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
        return <div className='text-center'>
                 <div className="text-center">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>
        </div>
    }
    if(user){
        return children;
    }
  return (
    <Navigate to={'/login'} state={{from: location}} replace></Navigate>
  )
}

export default PrivateRouter