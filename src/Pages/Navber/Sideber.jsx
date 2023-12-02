import React from 'react';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { NavLink } from 'react-router-dom';

const Sideber = () => {
    return (
        <div>
            <ul className="menu p-2 w-30 w-full  bg-[#171717] ">
                        {/* Sidebar content here */}
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

        <NavLink
          to="/upcomming"
          className={({ isActive }) =>
            isActive ? 'btn btn-sm btn-ghost btn-outline text-white bg-[#1f2937] border-none' : 'btn btn-ghost btn-sm'
          }
        >
          Upcomming Meals
        </NavLink>
        <NavLink className="flex justify-center items-center text-xl bg-yellow-400 rounded-full w-12 p-1">
          <IoIosNotificationsOutline />
        </NavLink>

        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? 'btn btn-sm btn-ghost btn-outline text-white bg-[#1f2937] border-none' : 'btn btn-ghost btn-sm'
          }
        >
          JoinUs
        </NavLink>



        {/* <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="btn btn-ghost"
        id="dropdown-toggle"
        aria-haspopup="true"
        aria-expanded={dropdownOpen ? 'true' : 'false'}
      >
        JoinUs
      </button>

      {dropdownOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-toggle"
          id="dropdown-menu"
        >
          <div className="py-1" role="none">
            <div className="text-gray-700 px-4 py-2 text-sm" role="none">
              User Name: John Doe
            </div>
            <a
              href="/dashboard"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={closeDropdown}
            >
              Dashboard
            </a>
            <a
              href="/logout"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={closeDropdown}
            >
              Logout
            </a>
          </div>
        </div>
      )}
    </div> */}
                    </ul>
        </div>
    );
};

export default Sideber;