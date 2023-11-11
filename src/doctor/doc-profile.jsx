import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Successdoctor = () => {
  return (
    <div >
        <h1>Login Success Page</h1>
        <Link to='/login-doctor'>Logout</Link>
    </div>
  )
}

export default Successdoctor