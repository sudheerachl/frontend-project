import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signupuser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
     const [username, setUsername] = useState();
    const [gender, setGender] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        
      axios.post('https://backend-user-bms6.onrender.com/signup-user', { name, username, phoneNumber, gender, email, password })
  .then(result => {
    console.log(result);

    if (result.data === 'Username already registered') {
      alert('Username already registered! Please try a different username.');
      return;
    }

    if (result.data === 'Email already registered') {
      alert('E-mail already registered! Please try a different email address.');
      return;
    }

    alert('Registered successfully! Please Login to proceed.');
    navigate('/login-user');
  })
  .catch(err => console.log(err));



    return (
        <div>
            <div >
                <div >
                    <h2 >Register</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3 text-start">
                            <label htmlFor="exampleInputEmail1">
                                <strong >Name</strong>
                            </label>
                            <input 
                                type="text"
                                placeholder="Enter Name"
                                className="form-control" 
                                id="exampleInputname" 
                                onChange={(event) => setName(event.target.value)}
                                required
                            /> 
                        </div>
                        <div >
                            <label htmlFor="exampleInputEmail1">
                                <strong>Email Id</strong>
                            </label>
                            <input 
                                type="email" 
                                placeholder="Enter Email"
                                className="form-control" 
                                id="exampleInputEmail1" 
                                onChange={(event) => setEmail(event.target.value)}
                                required
                            /> 
                        </div>
                        <div >
                            <label htmlFor="exampleInputPassword1" >
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
                        <button type="submit" >Register</button>
                    </form>

                    <p >Already have an account ?</p>
                    <Link to='/login-user' >Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Signupuser
