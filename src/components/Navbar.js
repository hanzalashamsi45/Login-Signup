// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// function Navbar() {
//   return (
//     <nav className="navbar bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 shadow-lg">
//       <div className="container mx-auto flex justify-between items-center">
//         <Link to="/" className="navbar-brand text-3xl font-extrabold text-white hover:text-yellow-300 transition duration-300">
//           Wanderlust
//         </Link>
//         <div className="navbar-links flex items-center space-x-4">
//           <Link to="/login" className="navbar-link text-lg font-semibold hover:text-yellow-300 transition duration-300">
//             Login
//           </Link>
//           <Link
//             to="/signup"
//             className="signup-button bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
//           >
//             Sign Up
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="navbar-brand text-3xl font-extrabold text-white hover:text-yellow-300 transition duration-300"
        >
          Wanderlust
        </Link>
        <div className="navbar-links flex items-center space-x-4">
          <Link
            to="/login"
            className="navbar-link text-lg font-semibold hover:text-yellow-300 transition duration-300"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="signup-button bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-6 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
