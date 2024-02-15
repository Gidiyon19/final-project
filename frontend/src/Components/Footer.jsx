// Footer.jsx
// import React from 'react';
import { FaTwitter,FaFacebook,FaLinkedin } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
      <footer className="footer">
  <div className="social-iconss">
  <p>Find us on social media</p>
    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
    <FaTwitter/>
    </a>
    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
     <FaFacebook/>
    </a>
    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
   <FaLinkedin/>
    </a>
  </div>
  

  {/* Party Celebration Management */}
  <div className="party-management">
  Benefits of Our Chess Academy for Kids :
    <ul>
        <div className='ven'>
      <li> Training in chess helps in developing a perspective.</li>
      <li> It boosts the creative level among kids.</li>
      <li>The game also helps in increasing self-awareness.</li>
      <li>Chess deepens focus and improves memory.</li>
      <li>It boosts planning skills and improves academic performance.</li>
      
      </div>
    </ul>
    <p>
	Contact Our experienced team strives to offer a creative and engaging environment for your child to Explore, Enrich, and Excel!
    </p>
    <button className="contact-button">Contact Us</button>
  </div>
  <div className="copyright">
        <p>&copy; 2024 Knights Quest. All rights reserved.</p>
      </div>
</footer>
  );
};

export default Footer;