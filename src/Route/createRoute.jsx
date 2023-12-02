
import { createBrowserRouter } from 'react-router-dom';
import Mainlayout from '../Layout/Mainlayout';
import Home from '../Pages/Home/Home'
import Meals from '../Pages/Navber/Meals/Meals';
import Login from '../Authintication/Login';
import Register from '../Authintication/Register';
import MealDetails from '../Pages/Home/MealCategories/MealDetails/MealDetails';
import Dashboard from '../Pages/Dashboard/Dashboard';
import MyProfile from '../Pages/Dashboard/MyProfile/MyProfile';
import RequestedMeals from '../Pages/Dashboard/RequestedMeals/RequestedMeals';
import ManageUser from '../Pages/Dashboard/Admin/ManageUser';
import AddMeals from '../Pages/Dashboard/Admin/AddMeals';
import AllMeals from '../Pages/Dashboard/Admin/AllMeals';
import UpdateAllMeals from '../Pages/Dashboard/Admin/UpdateAllMeals';
import Membership from '../Pages/Membership/Membership';
import CheckOut from '../Pages/Membership/CheckOut';
import UpcommingMeals from '../Pages/Dashboard/Admin/UpcommingMeals';
import UpcommingAdmin from '../Pages/Dashboard/Admin/UpcommingAdmin';
const createRoute =createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            },
            {
                path:'/meals',
                element:<Meals></Meals>,
                
            },
            {
                path:"/meal/:id",
                element:<MealDetails></MealDetails>,
                loader:({params})=>fetch(`https://assigment-12-server-zeta.vercel.app/allmeals/${params.id}`)
            },
            {
                path:'/membership/:id',
                element:<CheckOut></CheckOut>,
                loader:({params})=>fetch(`https://assigment-12-server-zeta.vercel.app/membership/${params.id}`)
            },
            {
                path:'/upcomming',
                element:<UpcommingMeals></UpcommingMeals>
            }
        ],
      
        
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            {
               path:'profile',
               element:<MyProfile></MyProfile>
            },
            {
                path:'RequestedMeals',
                element:<RequestedMeals></RequestedMeals>
            },
            // admin
            {
                path:'ManageUsers',
                element:<ManageUser></ManageUser>
            },
            {
                path:'addmeals',
                element:<AddMeals></AddMeals>
            },
            {
                path:'allmeals',
                element:<AllMeals></AllMeals>
            },
            {
              path:'updatemeal/:id',
              element:<UpdateAllMeals></UpdateAllMeals>,
              loader:({params})=>fetch(`https://assigment-12-server-zeta.vercel.app/allmeals${params.id}`) 
            },
            {
                path:'upcomming',
                element:<UpcommingAdmin></UpcommingAdmin>
            }
        ]
    }

])
   


export default createRoute;