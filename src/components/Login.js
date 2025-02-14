import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send login request to the API
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });
      const user = response.data; // Assuming the API returns the user object directly

      // Pass user data to onLogin and navigate to the dashboard
      onLogin(user);
      if(user.role==='user'){
        navigate('/dashboard');
      }else{
        navigate('/dashboardAgent');
      }
      
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{ background: 'linear-gradient(135deg, #ec4899, #764ba2)' }}>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg ">
        <form onSubmit={handleLogin} className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-gray-700">Login</h2>
          {error && <p className="text-red-500 text-center">{error}</p>}
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full py-3 text-white bg-blue-500 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
