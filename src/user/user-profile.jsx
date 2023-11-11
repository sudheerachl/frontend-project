import React from 'react';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
const Successuser = () => {
  return (
    <div >
        <h1>Login Success Page</h1>
        <Link to='/user-login'>Logout</Link>
    </div>
  )
}

export default Successuser