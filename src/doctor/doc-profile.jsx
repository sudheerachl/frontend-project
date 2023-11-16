import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Successdoctor = () => {
  return (
    <div >
        <h1>Login Success Page</h1>
        <Link to='/Homepage'>Logout</Link>
        <Link to='/delete-doctor'>     delete</Link>
        <Link to='/update-doctor'>     edit</Link>
    </div>
  )
}

export default Successdoctor
