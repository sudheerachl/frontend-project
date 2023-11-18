import React, { useState } from 'react';
import axios from 'axios';

const DeleteUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const handleSubmit = async (event) => {
  event.preventDefault();

  try {
    const response = await axios.delete('https://backend-user-bms6.onrender.com/delete-user', {
      data: {
        username,
        password,
      },    });
    
    if (response.data.message === 'User deleted successfully') {
      alert('User deleted successfully!');
      setUsername('');
      setPassword('');
    } else if (response.data.message === 'User not found') {
      alert('User not found!');
    } else if (response.data.message === 'Incorrect password') {
      alert('Incorrect password or username. Please try again.');
    } else {
      alert('An error occurred while deleting the doctor. Please try again.');
    }
  } catch (error) {
    console.error('Error deleting user:', error);
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

export default DeleteUser;
