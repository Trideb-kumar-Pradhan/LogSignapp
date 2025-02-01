import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to backend login endpoint
      const response = await axios.post('${process.env.REACT_APP_BACKEND_URL}/login', {
        username,
        password,
      });

      // Set the token from response
      setToken(response.data.token);

      // Clear form fields
      setUsername('');
      setPassword('');

      // Navigate to home page
      navigate('/home');
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={e => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button className="submit" type="submit">Login</button>
    </form>
  );
};

export default Login;
