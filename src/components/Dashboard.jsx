import React from "react";
import { Link, Outlet } from "react-router-dom";


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
          <button className="flex items-center justify-center w-12 h-12 bg-gray-400 rounded-full overflow-hidden hover:opacity-90 transition duration-300 ease-in-out">
  <img
    src="https://tse4.mm.bing.net/th?id=OIP.shbZSUEaJasMbATldeGfowHaHa&pid=Api&P=0&h=180" 
    alt="Profile"
    className="w-full h-full object-cover"
  />

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
