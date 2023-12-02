import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { AuthContext } from '../../Authintication/AuthProvider';
import UseMeals from '../../Hook/UseMeals';
import imgg from '../../assets/6596121.png'


const Layout = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
    handlelogout();
  };

  const { user, logout } = useContext(AuthContext);



  const handlelogout = () => {
    logout()
      .then(result => {
        console.log(result);
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='text-white'>
      <ul className="menu menu-horizontal gap-3 items-center ">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'btn btn-sm btn-ghost btn-outline text-white bg-[#1f2937] border-none' : 'btn btn-ghost btn-sm'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/meals"
          className={({ isActive }) =>
            isActive ? 'btn btn-sm btn-outline bg-[#1f2937] border-none text-white' : 'btn btn-ghost btn-sm'
          }
        >
          Meals
        </NavLink>



        <NavLink to="/upcomming" className="flex justify-center items-center text-xl bg-yellow-400 rounded-full w-12 p-1">
          <IoIosNotificationsOutline />
        </NavLink>






        {user ? (
          <>
            <button onClick={toggleDropdown}>
              {user.photoURL ? (
                <img className='w-8 rounded-full' src={user.photoURL} alt="" />
              ) :
                <img className='w-12 rounded-full' src={imgg} alt="" />
              }

            </button>
          </>

        ) : (
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? 'btn btn-sm btn-ghost btn-outline text-white bg-[#1f2937] border-none' : 'btn btn-ghost btn-sm'
            }
          >
            JoinUs
          </NavLink>
        )}
        <div className="relative inline-block text-left">
          {dropdownOpen && (
            <div
              className="origin-top-right absolute right-0 mt-8 bg-[#171717] w-48 rounded-md shadow-lg text-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="dropdown-toggle"
              id="dropdown-menu"
            >
              <div className="py-1" role="none">
                <div className="px-4 py-2 text-sm" role="none">
                  {user && <p className='text-white text-center'>{user.displayName}</p>}
                </div>



                <Link to="/dashboard">
                  <button

                    className="block btn btn-outline text-white w-full border-none px-4 py-2 text-sm  "
                    role="menuitem"

                  >
                    Dashboard
                  </button>
                </Link>

                <button
                  className="block px-4 py-2 btn btn-outline text-white border-none w-full text-sm bg-red-700  hover:bg-blue-700 hover:text-gray-900"
                  role="menuitem"
                  onClick={() => {
                    closeDropdown();
                    handlelogout();
                  }}
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Layout;
