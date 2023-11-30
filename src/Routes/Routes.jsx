import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Register from "../Pages/Home/Login/Register/Register";
import Order from "../Components/Order/Order";
import PrivetRoute from "../Route/PrivetRoute";
import Meals from "../Pages/Meals";
import UpcomingMeals from "../Pages/UpcomingMeals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/order',
        element: <PrivetRoute><Order></Order></PrivetRoute>
      },
      {
        path: '/meals',
        element: <Meals></Meals>
      },
      {
        path: '/upcomingmeals',
        element: <UpcomingMeals></UpcomingMeals>
      }
    ],
  },
]);

export default router;
