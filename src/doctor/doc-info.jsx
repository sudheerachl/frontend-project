import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Infodoctor = () => {
  const [userDetails, setUserDetails] = useState(null);
  const username = localStorage.getItem('username');

  useEffect(() => {
    if (username) {
      axios.get(`https://backend-user-bms6.onrender.com/${username}`)
        .then((response) => {
          console.log(response.data);
          setUserDetails(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [username]);

  if (!userDetails) {
    return <div>Loading user details...</div>;
  }

  return (
    <div>
      <h2>User Details</h2>
      <p>Username: {userDetails.username}</p>
      <p>Email: {userDetails.email}</p>
      <p>Name: {userDetails.name}</p>
      <p>Gender: {userDetails.gender}</p>
    </div>
  );
};

export default Infodoctor;
