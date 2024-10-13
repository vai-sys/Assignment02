import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="flex h-screen">
     
      <div className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-xl font-bold text-center bg-gray-900">Dashboard</div>
        <nav className="mt-4 flex-grow">
          <ul>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">
              <Link to="home">Dashboard</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">
              <Link to="profile">Profile</Link>
            </li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">
              <Link to="settings">Settings</Link>
            </li>
           
          </ul>
        </nav>
      </div>

     
      <div className="flex flex-col flex-grow bg-gray-100">
        <header className="bg-white shadow p-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Welcome!</h1>
          <button className="flex items-center justify-center w-32 h-12 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 ease-in-out">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            Profile
          </button>
        </header>




     

        <main className="p-6 flex-grow">

              


          <Outlet /> 
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
