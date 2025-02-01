import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [deptname, setDeptname] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate(); // For navigation after successful signup
  console.log('Backend URL:', process.env.REACT_APP_BACKEND_URL); // Add this line
  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      // Send POST request to backend for signup
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/signup`, {
        username,
        password,
        deptname,
      });

      // Success: Display success message and reset form
      setSuccessMessage("Signup successful! You can now log in.");
      setErrorMessage('');
      
      // Clear form fields
      setUsername('');
      setPassword('');
      setDeptname('');

      // Optionally, redirect to login page after successful signup
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Redirect after 2 seconds

    } catch (error) {
      // Error: Display error message
      setSuccessMessage('');
      setErrorMessage("Signup failed. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Dept Name"
          value={deptname}
          onChange={(e) => setDeptname(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="submit" type="submit">Signup</button>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default Signup;
