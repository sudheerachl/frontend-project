import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import useToken from './useToken'; // Import the useToken hook

const Logindoctor = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token, setTokenFromLogin } = useToken(); // Access token and setTokenFromLogin function from the useToken hook
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('https://backend-user-bms6.onrender.com/login-doctor', { username, password })
      .then((result) => {
        console.log(result);
        if (result.data.accessToken) {
          console.log('Login Success');
          alert(`Login successful! Welcome`);
          setTokenFromLogin(result.data.accessToken); // Set the token using the setTokenFromLogin function
          navigate('/profile-doctor');
        } else if (result.data.message === 'Wrong password') {
          alert('Incorrect password! Please try again.');
        } else if (result.data.message === 'User not found') {
          alert('Username not found');
        } else {
          alert('Error occurred!');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div>
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="exampleInputUsername1">
                <strong>Username</strong>
              </label>
              <input
                type="text"
                placeholder="Enter Username"
                className="form-control"
                id="exampleInputUsername1"
                onChange={(event) => setUsername(event.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="exampleInputPassword1">
                <strong>Password</strong>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>
            <button type="submit">Login</button>
          </form>

          <p>Don't have an account?</p>
          <Link to="/signup-doctor">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Logindoctor;
