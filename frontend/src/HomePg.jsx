// HomePage.jsx

// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HomePg.css';

const HomePg = () => {
  return (
    <div className="home-page">
      <header>
        <h1>Chess Academy</h1>
      </header>
      <main>
        <section className="about-section">
          <h2>About Us</h2>
          <p>Welcome to Chess Academy, where we strive to promote the art and science of chess.</p>
        </section>

        <section className="courses-section">
          <h2>Our Courses</h2>
          <ul>
            <li>Beginner's Chess</li>
            <li>Intermediate Chess Strategy</li>
            <li>Advanced Opening Techniques</li>
          </ul>
        </section>
      </main>

      <footer>
        <p>Contact us at: info@chessacademy.com</p>
      </footer>
    </div>
  );
};

export default HomePg;
