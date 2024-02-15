// RegistrationForm.jsx

// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './RegistrationForm.css';
import Nav from './Nav';
import axios from 'axios';
const RegistrationForm = () => {
  const [firstname,setfirstname]=useState('');
  const [lastname,setlastname]=useState('');
  const [fathername,setfathername]=useState('');
  const [mothername,setmothername]=useState('');
  // const [email,setemail]=useState('');
  const [age,setage]=useState('');
  const [phonenumber,setphonenumber]=useState('');
  const [gender,setgender]=useState('');
  const [address,setaddress]=useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const response=await axios.post(
        "http://localhost:8080/reg",{
          firstname,
          lastname,
          fathername,
          mothername,
          age,
          phonenumber,
          gender,
          address
        }
      )
      console.log("success");
      console.log(response.data);
      window.alert("Success");
    }
    catch(error){
      console.error("failed");
      console.error(error)
    }
  };

  return (
      <div>
    <div className="lp">
      <div className="registration-form-container">
        <h1>Registration Form</h1>
        <form >
          <label>
            First Name:
            <input className="m1"type="text" name="firstName" value={firstname} onChange={(e)=>setfirstname(e.target.value)} required />
          </label>

          <label>
            Last Name:
            <input className="m2"type="text" name="lastName" value={lastname} onChange={(e)=>setlastname(e.target.value)} required />
          </label>

          <label>
            Father's Name:
            <input className="m3"type="text" name="fathersName" value={fathername} onChange={(e)=>setfathername(e.target.value)} required />
          </label>

          <label>
            Mother's Name:
            <input className="m4"type="text" name="mothersName" value={mothername} onChange={(e)=>setmothername(e.target.value)} required />
          </label>

          <label>
            Age:
            <input className="m5"type="number" name="age" value={age} onChange={(e)=>setage(e.target.value)} required />
          </label>

          <label>
            Phone Number:
            <input className="m6"type="tel" name="phoneNumber" value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} required />
          </label>

          <label>
            Gender:
            <input className='m1' type="text" placeholder="Male/Female" value={gender} onChange={(e)=>setgender(e.target.value)}required/>
          </label>

          <label>
            Address:
            <textarea  name="address" value={address} onChange={(e)=>setaddress(e.target.value)} required />
          </label>

          <button onClick={handleSubmit} type="submit">
            Enroll
          </button>
        </form>
        {/* <Image/> */}
      </div>
    </div>
    </div>
  );
};

export default RegistrationForm;
