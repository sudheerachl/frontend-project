import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <div className="links">
        <Link to="https://frontend-project-l030qlh04-cherukuri-lakshmi-sudheeras-projects.vercel.app/login-doctor">Login 1</Link>
        <Link to="http://localhost:3001/login-user">Login 2</Link>
      </div>
    </div>
  );
};

export default HomePage;
