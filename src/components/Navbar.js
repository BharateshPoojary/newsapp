import React from "react";
import { Outlet, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" bg-gray-200 ">
      <div className=" mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div>
              <h2 className="text-4xl text-gray-200">NewsBazaar</h2>
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  className="bg-gray-900 text-white rounded-md px-3 py-2 text-xl font-medium"
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                  to="/entertainment"
                >
                  Entertainment
                </NavLink>
                <NavLink
                  className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                  to="/general"
                >
                  General
                </NavLink>
                <NavLink
                  className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                  to="/health"
                >
                  Health
                </NavLink>
                <NavLink
                  className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                  to="/science"
                >
                  Science
                </NavLink>
                <NavLink
                  className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                  to="/sports"
                >
                  Sports
                </NavLink>
                <NavLink
                  className="text-gray-800 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-xl font-medium"
                  to="/technology"
                >
                  Technology
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </nav>
  );
};
export default Navbar;
