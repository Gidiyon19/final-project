// AboutUsPage.jsx

import React from 'react';
import './AboutUsPage.css';
import Nav from './Nav';

const AboutUsPage = () => {
  return (
    <div>
      <Nav />
    <div className='about-us-page'>
      <div className="about-us-container">
        <h1>About Us</h1>
        <p>
          Welcome to our Chess Academy! We are passionate about chess and committed to providing a
          nurturing environment for chess enthusiasts of all levels. Whether you're a beginner or an
          experienced player, our academy is the perfect place to hone your skills and enjoy the
          strategic game of chess.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to promote the game of chess and its benefits, including critical thinking,
          problem-solving, and strategic planning. We aim to create a community where players can
          learn, practice, and compete in a friendly and supportive atmosphere.
        </p>

        <h2>Why Choose Our Academy?</h2>
        <ul>
          <li>Experienced and dedicated chess instructors</li>
          <li>Structured learning programs for all skill levels</li>
          <li>Frequent chess tournaments and events</li>
          <li>Interactive and engaging chess lessons</li>
          <li>Community-focused and inclusive environment</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          Have questions or want to learn more about our Chess Academy? Feel free to reach out to us
          through the following:
        </p>
        <address>
          Email: <a href="mailto:info@chessacademy.com">info@chessacademy.com</a>
          <br />
          Phone: +1 (123) 456-7890
        </address>
      </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
