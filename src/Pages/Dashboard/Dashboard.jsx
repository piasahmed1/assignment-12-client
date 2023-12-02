import React from 'react';
import { FaHome, FaStar, FaUser, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import MyProfile from './MyProfile/MyProfile';
import UseAdmin from '../../Hook/UseAdmin';
import img from '../../assets/image-asset.jpeg'
import RequestedMeals from './RequestedMeals/RequestedMeals';
const Dashboard = () => {


    // const [isadmin]=UseAdmin();


    return (
        <div>
            <div className='flex flex-col md:flex-row h-screen'>
                {/* Dashboard Sidebar */}
                <div className="w-full md:w-64 min-h-full bg-white md:sticky md:top-0">
                    <ul className='menu p-4'>

                        {/* Admin */}
                       
                        <li><NavLink to="/dashboard/ManageUsers">
                            <FaUser /> Manage Users
                        </NavLink></li>
                        <li><NavLink to="/dashboard/addmeals">
                            <FaUser /> Add meal
                        </NavLink></li>
                       
                        <li><NavLink to="/dashboard/allmeals">
                            <FaUser /> All Meals
                        </NavLink></li>
                     
                        <li><NavLink to="/dashboard/upcomming">
                            <FaUser /> Upcoming meals
                        </NavLink></li>

                        {/* Normal People */}
                        <li><NavLink to="/dashboard/profile">
                            <FaUser /> My Profile
                        </NavLink></li>
                        <li><NavLink to="/dashboard/RequestedMeals">
                            <FaUtensils /> Requested Meals
                        </NavLink></li>
                      

                        {/* Shared */}
                        <div className="divider"></div>
                        <li className=''><NavLink to="/">
                            <FaHome />
                            Home
                        </NavLink></li>
                    </ul>
                </div>

                {/* Dashboard Content */}
                <div className='flex-1 bg-[#171717]  text-center'>
                    <div>
                        {/* <img className='w-full h-full' src={img} alt="" /> */}
                    </div>


                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
