import { createBrowserRouter } from "react-router-dom";

import Main from "../Layout/Main/Main";
import ErrorPage from "../ErrorPage/ErrorPage";
import Home from "../pages/Home/Home/Home";
import AllServices from "../pages/AllServices/AllServices/AllServices";
import Login from "../pages/LoginRegister/Login/Login";
import Register from "../pages/LoginRegister/Register/Register";
import AllServicesCard from "../pages/AllServices/AllServices/AllServicesCard";
import SingleCard from "../pages/AllServices/SingleCard/SingleCard";
import PrivateRoute from "./PrivateRoute";
import Booking from "../pages/Dashboard/Booking/Booking";
import AddServices from "../pages/Dashboard/AddServices/AddServices";
import UpdateServices from "../pages/Dashboard/UpdateService/UpdateServices";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allServices",
        element: <AllServices></AllServices>,

        // loader: () => fetch(`http://localhost:5000/allProduct `)
      },
      {
        path: "/allServicesCard",
        element: <AllServicesCard></AllServicesCard>,
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <SingleCard></SingleCard>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://home-decorations-server.vercel.app/allServices/${params.id}`
          ),
      },

      {
        path: "/addServices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateServices",
        element: <UpdateServices></UpdateServices>,
      },
      {
        path: "/booking",
        element: (
          <PrivateRoute>
            <Booking></Booking>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
]);

export default router;
