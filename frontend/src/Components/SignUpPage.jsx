import { GiChessKing } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import './SignUpPage.css';
import Nav from "./Nav";

import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React,{useState} from "react";
import { useNavigate } from 'react-router-dom';


const SignUpPage = () => {
  const navigate=useNavigate();
  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevents the default form submission behavior
  //   alert("Registration Successful!");
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
    
      // mobileNumber: '',
      // gender: '',
      // dateOfBirth: '',
    });
    // eslint-disable-next-line no-unused-vars
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };


    const handleSubmit = async(e) => {
      e.preventDefault();
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/register', formData);
  
        if (response.status === 200) {
          // Registration successful
          console.log('Registration successful:', formData);
          navigate('/SignInPage')
        } else {
          // Handle registration failure
          console.error('Registration failed');
        }
      } catch (error) {
        console.error('Error during registration:', error);
      }
    };


  return (
    <div className="signup-page">
      <Nav />
      <div className="ok">
        <div className='wrappe'>
          <form onSubmit={handleSubmit}>
            <h1>Hey New Broskii!!</h1>
            <br></br>
            {/* <label htmlFor="Role">Choose a Role:</label> */}
            {/* <select name="Role" id="Role">
              <option value="Admin">Admin</option>
              <option value="Competitor">Competitor</option>
            </select> */}
            <div className='input-boxi'>
              <GiChessKing className="icon" />
              <input 
              type='text' 
              placeholder='name'name="name" required 
              value={formData.name}
              onChange={handleChange}
              />
            </div>
            <div className='input-boxi'>
              <IoIosMail className="icon" />
              <input type='email'name="email" placeholder='Email Id' 
               value={formData.email}
               onChange={handleChange}required />
            </div>
            <div className='input-boxi'>
              <MdOutlinePassword className="icon" />
              <input type='password' name="password" placeholder='Password' 
               value={formData.password}
               onChange={handleChange}required />
            </div>
            {/* <div className='input-boxi'>
              <MdOutlinePassword className="icon" />
              <input type='password' placeholder='Confirm-Password' required />
            </div> */}
            <button type='submit'>SignIn</button>
            <div className='register-link'></div>
            <br></br>
            {/* <p>Already have an account?<Link to='/SignIn'>Login</Link></p> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
