import React from 'react'

const Home = () => {
  return (
    <div>

        
          <h2 className="text-2xl font-bold mb-4">Dashboard Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Statistics</h3>
              <p className="text-gray-700">Some statistics here...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">User Data</h3>
              <p className="text-gray-700">Some user data here...</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-lg font-semibold">Recent Activity</h3>
              <p className="text-gray-700">Recent activity details here...</p>
            </div>
          </div>
        
      
    </div>
  )
}

export default Home
