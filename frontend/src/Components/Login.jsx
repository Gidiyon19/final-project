import  { useState } from 'react';
import axios from 'axios';
import './Login.css';
// import Nav from './Nav';
// eslint-disable-next-line no-unused-vars

// eslint-disable-next-line no-unused-vars
// import user from "./Asserts/user.png";
// import NavBar from './navbar';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  

  
  
  const handleSubmit = async(e) => {
    e.preventDefault();
   try{
    const response=await axios.post('http://localhost:8080/api/v1/auth/authenticate',{
        email,
        password
      });
      console.log(response.data);
      if(email==='admin@gmail.com' && password==='admin@123' ){
       
        navigate('/AdminPage');
      }
      else{
        window.alert("Invalid credentials");
      }
    }
    catch(error){
      console.error('Login failed',error);
    }
  };
  return (
    <div>
      {/* <Nav/> */}
    <div className='bod-log'>
      <div className="login-container">
        {/* <NavBar /> */}
        <div className="login-card">
          <div className="login">
            <h2>Admin Login</h2>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              placeholder='Enter your Email'
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <input
              type="password"
              id="password"
              placeholder='Enter your Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

           
             <center>
              <button className='butt-user' type="submit" >
                Log In
                
              </button></center>
          
         
            <br></br>
           
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;