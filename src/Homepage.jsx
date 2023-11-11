import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <div className="links">
        <Link to="/login-doctor">Login 1</Link>
        <Link to="/login-user">Login 2</Link>
      </div>
    </div>
  );
};

export default HomePage;
