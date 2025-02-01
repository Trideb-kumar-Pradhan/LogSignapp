import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setToken, token }) => {
  const handleLogout = () => {
    setToken(null); // Clear the token on logout
  };

  return (
    <div className="navbar">
      <h1>My App</h1>
      <div>
        {!token ? (
          <>
            <Link to="/login">
              <button>Login</button>
            </Link>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/home">
              <button>Home</button>
            </Link>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
