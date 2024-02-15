import './Homepage.css'; // Make sure to replace 'YourComponent' with the actual name of your React component
import Nav from './Nav';
import Footer from './Footer';
import { Link } from 'react-router-dom';

// Create a functional component
const Homepage = () => {
  return (
    <div>
      <Nav/>
      
      <div className="imgbg">
        <div className="overlay"></div>
      </div>
      <div className="center">
        <div className="title">"Checkmate Your Potential at Our Knights Quests!"</div>
        <div className="sub_title">Choose Your Role !</div>
        <div className="btns">
         <Link to="/Login"> <button>ADMIN</button></Link>
        <Link to="/SignInPage"><button>USER</button></Link> 
        </div>
      </div>
      <div className="down">
        <div className="ev">
          <h2>BLOG</h2>
        </div>
        <div className="dw">
          <h2>Nationals Recap</h2>
          <p>Chess Academy excels nationally, fostering strategic thinking and skill development in chess enthusiasts of all levels. With experienced instructors and a vibrant community, we champion a culture of learning and friendly competition in the realm of chess
.</p>
        </div>
        <div className="dw">
          <h2>School Clubs</h2>
          <p>We'd be excited to have your child join our online academy, where kids ages 5-14 from 48 states and 20+ countries come to learn, have FUN, and play chess!</p>
        </div>
        <div className="dw">
          <h2>Guest Experience</h2>
          <p>Receive personalized coaching from our experienced grandmasters, tailored to your skill level.</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Homepage;