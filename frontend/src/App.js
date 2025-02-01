import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Navbar from './components/Navbar'; // Import the Navbar component
import './style.css'; // Ensure your styles are imported

const App = () => {
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Navbar setToken={setToken} token={token} />
      <div className="container">
        <Routes>
          {!token ? (
            <>
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login setToken={setToken} />} />
              <Route path="/" element={<div><h1>Welcome!</h1></div>} />
              {/* Home view for unauthenticated users */}
            </>
          ) : (
            <Route path="/home" element={<Home setToken={setToken} />} />
          )}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
