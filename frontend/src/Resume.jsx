
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume">
      <div className="profile">
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ee/Agadmator.jpg" alt="Profile" className="profile-pic" />
        <div className="profile-details">
          <h2 className="name">Adagmator</h2>
          <p className="occupation">Chess Player</p>
          <p className="location">Croatia</p>
        </div>
      </div>
      <div className="resume-details">
        
        <h3 className='cls1'>Education</h3>
        <p className='cls2'>Antonio Radić (born 16 June 1987), better known as agadmator (Serbo-Croatian pronunciation: [agad'mator̩][2]), is a Croatian YouTuber and chess player. He has one of the most popular chess channels on YouTube, and he previously had the most subscribers of any YouTube chess channel from 2018 until late 2021 when he was surpassed by GothamChess.[3][4] Although he does not participate in many international chess tournaments, he is active on various online chess platforms, including Lichess and Chess.com,[3][5] surpassing 1,000,000 subscribers on 7 February 2021, the first chess channel to do so</p>
        <h3 className='cls3'>Background</h3>
        <p className='cls4'>Radić is a resident of Križevci, Croatia,[10][11] and was introduced to chess at the age of four by his grandfather Anto Krnjić, a FIDE Master. He later stopped playing and did not return to chess until he was 17 years old.[3] Radić's peak FIDE rating of 2010 was achieved in July 2010</p>
        <h3 className='cls5'>Youtube information</h3>
        <ul className='dpprofile'>
          <li>Channel : Agadmator</li>
          <li>Years active : 2016 - Present</li>
          <li>Subscribers : 1.3 Million</li>
          <li>Total view : 663 Million</li>
          {/* Add more skills as needed */}
        </ul>
        <div className="contact-container">
      <h2>Contact</h2>
      <div className="social-links">
        <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="Instagram" />
        </a>
        <a href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png" alt="Facebook" />
        </a>
        <a href="https://www.facebook.com/your_facebook_username" target="_blank" rel="noopener noreferrer">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png" alt="Twitter" />
        </a>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Resume;
