import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <div className="links">
        <Link to="https://frontend-project-3pq2kynq4-cherukuri-lakshmi-sudheeras-projects.vercel.app/login-doctor">Login 1</Link>
        <Link to="/login-user">Login 2</Link>
      </div>
    </div>
  );
};

export default HomePage;
