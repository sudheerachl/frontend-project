import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <div className="links">
        <Link to="/login-doctor">Login doctor</Link>
        <Link to="/login-user">Login user</Link>
      </div>
    </div>
  );
};

export default HomePage;
