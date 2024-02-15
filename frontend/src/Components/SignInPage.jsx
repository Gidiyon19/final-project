import { GiChessKing } from "react-icons/gi";
import { FaLock } from "react-icons/fa";
import './SignInPage.css';
import {useNavigate} from 'react-router-dom';
import Nav from "./Nav";
import axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
// import Nav from "../Navbar/Nav";
// import Role from "../SelectRole/Role";
// import SignUpPage from "./SignUpPage";
const SignInPage = () => {
  const navigate=useNavigate();
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[isButtonDisabled,setIsButtonDisabled]=useState(true);
  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    validateForm(newEmail, password);
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validateForm(email, newPassword);
  };
  const validateForm = (newEmail, newPassword) => {
    // Example validation for email and password
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Basic email and password validation
    const isEmailValid = emailRegex.test(newEmail);
    const isPasswordValid = newPassword.length >= 6;

    // Update the button disabled state
    setIsButtonDisabled(!(isEmailValid && isPasswordValid));
  };
  const handleSubmit= async (e)=>{
    e.preventDefault();
    // dispatch(
    //   login({
    //    name:username
    //   })
    //   )
      // navigate('/Home');
  try{
    const response=await axios.post("http://localhost:8080/api/v1/auth/authenticate",{
        email:email ,
        password:password
    });
    console.log(response.data);
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"));
      navigate("/Book");
      window.alert("Login Successful.");
  }
catch(error){
    window.alert("Invalid Username or Password !!!");
    console.log(error);
}
  
  };
  return (
    <div>
        <Nav/>
    <div className="full">
      {/* <Nav/> */}
      <br></br>
    <div className='wrapper'>
      {/* <Role/> */}
      <form  onSubmit={handleSubmit}>
        <h1>Login into Chess_Academy</h1>
        <div className='input-box'>
        <GiChessKing className="icon" />
          <input type='email' placeholder='Email' onChange={handleEmailChange} value={email} name="email" required />
        </div>
        <div className='input-box'><FaLock className="icon" />

          <input type='password' value={password} onChange={handlePasswordChange} name="password" placeholder='Password' required />
        </div>
        <div className='remember-forgot'>
          <label><input type='checkbox'/>Remember me</label>
          <Link to="/SignUpPage">Register</Link>
        </div>
        {/* <button type='submit'>Login</button> */}
        <button  type="submit" ></button>

      
      </form>
    </div>
    </div>
    </div>
  )
}

export default SignInPage;