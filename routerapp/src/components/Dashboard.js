import React from "react";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>
        <ul>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Orders
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Users
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded">
              Settings
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        {/* Navbar */}
        <nav className="flex items-center justify-between bg-white shadow-md p-4 rounded-lg mb-8">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400">
            Logout
          </button>
        </nav>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Total Products</h3>
            <p className="mt-2 text-gray-600">100 products available.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Total Orders</h3>
            <p className="mt-2 text-gray-600">50 orders pending.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Total Users</h3>
            <p className="mt-2 text-gray-600">200 active users.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
