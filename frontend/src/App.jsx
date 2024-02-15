// import React from 'react'
// import Hello from './Components/Hello'
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Homepage from './Components/HomePage';
import Offers from './Components/Offers';
import AdminPage from "./AdminPage";
import SignInPage from "./Components/SignInPage";
import SignUpPage from "./Components/SignupPage";
import Nav from './Components/Nav';
import RegistrationForm from './Components/RegistrationForm';
import AboutUsPage from './Components/AboutUsPage';
import Login from './Components/Login';
import UpdateAcademy from './Updateacademy';
import Book from './Components/Book';
import Booked from './Components/Booked';
// import Blog from './Blog';
import Resume from './Resume';
// import YouTubeThumbnail from './Components/Youtubethumbnail';
// import ViewDetails from './ViewDetails';
const App = () => {
  return (
    <><>
    {/* <RegistrationForm/> */}
      {/* <SignUpPage/>
    <SignInPage/> */}
      {/* <AdminPage/> */}
    </><Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/UpdateAcademy" element={<UpdateAcademy />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/SignInPage" element={<SignInPage />} />
          <Route path="/Nav" element={<Nav />} />
          <Route path='/Register' element={<RegistrationForm/>}/>
          <Route path='/About' element={<AboutUsPage/>}/>
          <Route path='/AdminPage' element={<AdminPage/>}/>
          <Route path='/Book' element={<Book/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Booked' element={<Booked/>}/>
          {/* <Route path='/Blog' element={<Blog/>}/> */}
          <Route path='/Resume' element={<Resume/>}/>
          {/* <Route path='/YoutubeThumbnail' element={<YouTubeThumbnail/>}/> */}
          {/* <Route path='/ViewDetails' element={<ViewDetails/>}/> */}
        </Routes>
      </Router></>
  );
};

export default App;