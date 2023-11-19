import React, { useState, useEffect } from 'react';
import { useToken } from './useToken';
import axios from 'axios';

const Infodoctor = () => {
  const [userData, setUserData] = useState({});
  const { token } = useToken();

  useEffect(() => {
    if (!token) {
      return;
    }

    const fetchProfileData = async () => {
      try {
        const response = await axios.get('https://backend-user-bms6.onrender.com', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = response.data;
        setUserData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfileData();
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