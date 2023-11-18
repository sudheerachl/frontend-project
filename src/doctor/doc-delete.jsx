import React, { useState } from 'react';
import axios from 'axios';

const DeleteDoctor = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.delete('https://backend-user-bms6.onrender.com/delete-doctor', {
        data: {
          username,
          password,
        },
      });

      if (response.data.status === 'SUCCESS' {
        alert('Doctor deleted successfully!');
        setUsername('');
        setPassword('');
      } else if (response.data.status === 'DOCTOR_NOT_FOUND') {
        alert('Doctor not found!');
      } else if (response.data.status === 'INVALID_CREDENTIALS') {
        alert('Incorrect password or username. Please try again.');
      } else {
        alert('An error occurred while deleting the doctor. Please try again.');
      }
    } catch (error) {
      console.error('Error deleting doctor:', error);
    }
  };

  return (
    <div>
      <h2>Delete User</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          placeholder="Enter username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
        <br />
        <button type="submit">Delete Your Account</button>
      </form>
    </div>
  );
};

export default DeleteDoctor;
