import React from 'react';
import { FaUserPlus, FaTicketAlt, FaUsers, FaBell, FaCog, FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function DashboardAgent({ user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-500 text-white">
      {/* Sidebar */}
      <aside className="w-1/3 max-w-xs bg-white bg-opacity-90 p-8 shadow-2xl flex flex-col items-center rounded-tr-3xl rounded-br-3xl">
        <img
          src="https://via.placeholder.com/100"
          alt="Profile"
          className="rounded-full w-24 h-24 mb-4 shadow-lg transition-transform transform hover:scale-110 border-4 border-blue-500"
        />
        <h2 className="text-2xl font-extrabold text-gray-800">Agent {user.name}</h2>

        <div className="space-y-4 w-full mt-6">
          <button className="flex items-center justify-start w-full px-5 py-4 text-left bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
            <FaUserPlus className="mr-3" /> Add a Traveler
          </button>
          <button className="flex items-center justify-start w-full px-5 py-4 text-left bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
            <FaUsers className="mr-3" /> Manage Travelers
          </button>
          <button className="flex items-center justify-start w-full px-5 py-4 text-left bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
            <FaTicketAlt className="mr-3" /> Manage Bookings
          </button>
          <button className="flex items-center justify-start w-full px-5 py-4 text-left bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
            <FaBell className="mr-3" /> Notifications
          </button>
          <button className="flex items-center justify-start w-full px-5 py-4 text-left bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-indigo-500 hover:to-blue-500 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 text-white font-semibold">
            <FaCog className="mr-3" /> Account Settings
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
        <h1 className="text-4xl font-extrabold mb-8">Agent Dashboard</h1>

        {/* General Info Section */}
        <section className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg mb-8 transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">General Info</h2>
          <div className="text-gray-700">
            <p className="font-semibold text-lg">Agent Name</p>
            <p className="text-xl font-bold text-gray-900 mt-2">{user.name}</p>
          </div>
          <div className="text-gray-700">
            <p className="font-semibold text-lg">Email</p>
            <p className="text-xl font-bold text-gray-900 mt-2">{user.email}</p>
          </div>
        </section>

        {/* Traveler Management Section */}
        <section className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg mb-8 transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Travelers</h2>
          <p className="text-gray-700 font-semibold">View and manage the travelers under your supervision.</p>
        </section>

        {/* Booking Management Section */}
        <section className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg transition-all duration-300 transform hover:scale-105">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage Bookings</h2>
          <p className="text-gray-700 font-semibold">Handle all booking requests and reservations efficiently.</p>
        </section>
      </main>
    </div>
  );
}

export default DashboardAgent;
