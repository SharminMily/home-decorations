import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import AllServices from "../pages/AllServices/AllServices/AllServices";
import Login from "../pages/LoginRegister/Login/Login";
import Register from "../pages/LoginRegister/Register/Register";
import AllServicesCard from "../pages/AllServices/AllServices/AllServicesCard";
import SingleCard from "../pages/AllServices/SingleCard/SingleCard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/allServices",
            element: <AllServices></AllServices>, 
                   
            // loader: () => fetch(`http://localhost:5000/allProduct`)  
        },
        {
            path: "/allServicesCard",
            element: <AllServicesCard></AllServicesCard>,        
               
        },
        {
            path: "/service/:id",
            element: <SingleCard></SingleCard>,           
            loader: ({ params }) => fetch(`http://localhost:5000/allServices/${params.id}`)
          },                 
      
      ]
      
    },
    {
        path: "/login",
        element: <Login></Login>
    },
    {
        path: "/register",
        element: <Register></Register>
    },
  ]);

export default router;