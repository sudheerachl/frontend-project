import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt from 'jsonwebtoken';

const Infodoctor = () => {
  const [userData, setUserData] = useState({});
  const [token] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (!token) {
      return;
    }

    const decodedToken = jwt.decode(token);
    const { username, email, phoneNumber, name, gender } = decodedToken;
    setUserData({ username, email, phoneNumber, name, gender });
  }, [token]);

  return (
    <div className="profile-container">
      <h2>Profile</h2>
      <p>Username: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>Phone Number: {userData.phoneNumber}</p>
      <p>Name: {userData.name}</p>
      <p>Gender: {userData.gender}</p>
    </div>
  );
};

export default Infodoctor;
