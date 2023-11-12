import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <div className="links">
        <a href="https://frontend-project-aeu2oc4vl-cherukuri-lakshmi-sudheeras-projects.vercel.app/login-doctor">Login as Doctor</a>
        <Link to="/login-user">Login user</Link>
      </div>
    </div>
  );
};

export default HomePage;
