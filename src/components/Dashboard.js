import React from 'react';
import {  FaTicketAlt, FaBell, FaCog, FaSignOutAlt, FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Dashboard({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 text-white">
      {/* Sidebar */}
      <aside className="w-1/3 max-w-s bg-white bg-opacity-90 p-8 shadow-2xl flex flex-col items-center rounded-tr-3xl rounded-br-3xl">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mb-4 shadow-lg transition-transform transform hover:scale-110 border-4 border-pink-500"
        />
        <h2 className="text-2xl font-extrabold text-gray-800">Hi {user.name}!</h2>

        <div className="space-y-4 w-full">
          <button className="flex items-center justify-start w-full px-5 py-4 text-left bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
            <FaUserPlus className="mr-3" /> Add a traveller
          </button>
          <button className="flex items-center justify-start w-full px-5 py-4 text-left bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
            <FaTicketAlt className="mr-3" /> Your bookings
          </button>
          <button className="flex items-center justify-start w-full px-5 py-4 text-left bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
            <FaBell className="mr-3" /> Price Alerts
          </button>
          <button className="flex items-center justify-start w-full px-5 py-4 text-left bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
            <FaCog className="mr-3" /> Account
          </button>
        </div>

        <button
          onClick={handleLogout}
          className="mt-10 bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-full shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
        >
          <FaSignOutAlt className="mr-2" /> Log out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10 text-gray-100">
        <h1 className="text-4xl font-extrabold mb-8">Account</h1>

        {/* General Info Section */}
        <section className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg mb-8 transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">General Info</h2>
          <div className="text-gray-700">
            <p className="font-semibold text-lg">Email</p>
            <p className="text-xl font-bold text-gray-900 mt-2">{user.email}</p>
          </div>

          <div className="text-gray-700">
            <p className="font-semibold text-lg">Name</p>
            <p className="text-xl font-bold text-gray-900 mt-2">{user.name}</p>
          </div>
        </section>

        {/* Subscriptions Section */}
        <section className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg mb-8 transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Subscriptions</h2>
          <label className="flex items-center text-gray-700 text-lg font-semibold">
            <input type="checkbox" className="mr-3 w-6 h-6 text-purple-500 focus:ring-purple-500" />
            I'd like to get the latest travel deals, news, and inspiration sent straight to my inbox.
          </label>
        </section>

        {/* Preferred Airports Section */}
        <section className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preferred departure airports</h2>
          <p className="text-gray-700 font-semibold">
            Add your preferred airports to help us find the best deals and inspiration for you.
          </p>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;
