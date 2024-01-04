
import {
    createBrowserRouter
  } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import Shop from "../shop/Shop";
import About from "../Components/About";
import Blog from "../Components/Blog";
import SingBook from "../shop/SingBook";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBooks from "../dashboard/UploadBooks";
import ManageBooks from "../dashboard/ManageBooks";
import EditBooks from "../dashboard/EditBooks";
import Signup from "../Components/Signup";
import Login from "../Components/Login";
import PrivateRouter from "../PrivateRouter/PrivateRouter";
import LogOut from "../Components/LogOut";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/",
          element: < Home />,
        },
        {
          path: "/shop",
          element: < Shop />,
        },
        {
          path: "/about",
          element: <About/>,
        },
        {
          path: "/blog",
          element: <Blog/>,
        },
        {
          path: "/book/:id",
          element: <SingBook/>,
          loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
        }
       

      ],
    },
    {
      path: "/admin/dashboard",
      element: <DashboardLayout/>,
      children: [
        {
          path: "/admin/dashboard",
          element: <PrivateRouter><Dashboard/></PrivateRouter>,
        },
        {
          path: "/admin/dashboard/upload",
          element: <UploadBooks/>,
        },
        {
          path: "/admin/dashboard/manage",
          element: <ManageBooks/>,
        },
        {
          path: "/admin/dashboard/edit-books/:id",
          element: <EditBooks/>,
          loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`),
        }
      ]
    },
    {
      path: "sign-up",
      element: <Signup/>,
    },
    {
      path: "login",
      element: <Login/>,
    },
    {
      path: "logout",
      element: <LogOut/>,
    }
  ]);

  export default router;

