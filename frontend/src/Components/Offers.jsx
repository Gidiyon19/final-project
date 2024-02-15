// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Room.css';
import {Link} from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
import Nav from './Nav';
const offers = [
  {
    id: 1,
    title: 'Agadmator',
    description: 'Crotian Youtuber,Chess Player and the person with the most subscribers on youtube for chess channel',
    // price: '$19',
    imageUrl:'https://pbs.twimg.com/profile_images/1290225415118782465/NoCWx8L1_400x400.jpg'
  },
  {
    id: 2,
    title: 'GothamChess',
    description: 'Chess International Master,Commentator and Youtuber',
    // price: '$100',
    imageUrl: 'https://yt3.googleusercontent.com/ytc/AIf8zZSbti718-54Kziom_kiMDEEcRF2s2cSgwq8jl50fw=s900-c-k-c0x00ffffff-no-rj'
  },
  {
    id: 3,
    title: 'Eric Rosen',
    description: 'American Professional Chess International Master and Youtuber',
    // price: '$350',
    imageUrl: 'https://media.licdn.com/dms/image/C4E03AQHCDZIPzyuHXg/profile-displayphoto-shrink_800_800/0/1644865503570?e=2147483647&v=beta&t=tIZzaN2vJys6x6cgUOJXS5YSLzctJNqHPcFauOgXw54'
  },
  {
    id: 4,
    title: 'BotezLive ',
    description: 'American-Canadian chess player and commentator, Twitch streamer, and YouTuber. ',
    // price: '$250',
    imageUrl: 'https://ayo.news/wp-content/uploads/2020/12/Botez-scaled-e1608715168772.jpg'
  },
  {
    id: 5,
    title: 'Chess Talk',
    description: 'Jeetendra Advani Founder of Chess Talk,Indian Youtuber',
    // price: '$500',
    imageUrl: 'https://images.chesscomfiles.com/uploads/v1/user/86025208.82fb870f.160x160o.f7d4e747d7bb.png'
  },
  {
    id: 6,
    title: 'Magnus Carlsen ',
    description: 'World No 1 Chess champion and the founder of Magnus Carlsen Youtube Channel',
    // price: '$980',
    imageUrl: 'https://oberlinreview.org/wp-content/uploads/2022/09/Magnus-Carlsen-courtesy-of-Eric-Rosen.jpg'
  },
  
  {
    id: 7,
    title: 'Saint Louis Chess Club',
    description: 'If you or a loved one were abused, the Saint Louis Chess Club is offering free, confidential counseling services.',
    // price: '$765',
    imageUrl: 'https://www.economist.com/cdn-cgi/image/width=1424,quality=80,format=auto/sites/default/files/20170429_BLP535.jpg'
  },
  
  {
    id: 8,
    title: 'AlexandraChess',
    description: 'Chess Woman Candidate Master,Content Creator,Streamer',
    // price: '$435',
    imageUrl: 'https://static.wixstatic.com/media/9e6b00_2ec1a712a0d34ffc9a345c9064ab4aca~mv2.jpg/v1/fill/w_640,h_670,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9e6b00_2ec1a712a0d34ffc9a345c9064ab4aca~mv2.jpg'
  },
  
  {
    id: 9,
    title: 'Motel',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$210',
    imageUrl: 'https://avatars.mds.yandex.net/i?id=06efb01e6b875999987491321d9b8a985ab3ae3b-8411743-images-thumbs&n=13'
  },
  
  {
    id: 10,
    title: 'Retreat',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$800',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRovyghYpGRC7lCN5yCvZBCeMBFWynZUovNZA&usqp=CAU'
  },
  
  
];

const Offers = () => {
  const handleViewClick = (offerId) => {
  
    console.log(`View clicked for offer with ID ${offerId}`);


  };

  const handleSubmitClick = (offerId) => {
   
    
    console.log(`Submit clicked for offer with ID ${offerId}`);

  };

  return (
    <div>
      <Nav/>
    <div className="offers-container">
      {offers.map(offer => (
        <div className="offer" key={offer.id}>
          <img className="offer-image" src={offer.imageUrl} alt={offer.title} />
          <h2 className="offer-title">{offer.title}</h2>
          <p className="offer-description">{offer.description}</p>
          <p className="offer-price">{offer.price}</p>
          <div className="offer-buttons">
         <button className='but' onClick={() => handleViewClick(offer.id)}><Link to='/Resume'>Profile</Link></button>
         {/* <div className="social">
        <a href="https://www.instagram.com/your_instagram_username" target="_blank" rel="noopener noreferrer">
          <img src="https://t4.ftcdn.net/jpg/04/48/05/91/360_F_448059190_Y2reHnfTndMhocoaAX4UlK3AhnY5Iuyt.jpg" alt="Instagram" />
        </a>
        </div> */}
        
          <button className=' but'onClick={() => handleSubmitClick(offer.id)}><a href="https://www.youtube.com/@agadmator">Youtube</a></button>
         {/* <Link to="/PhotoCollage"><button onClick={() => handleViewClick(offer.id)}>View</button></Link>
          <Link to="/RoomBookingPage"><button onClick={() => handleSubmitClick(offer.id)}>Book Now</button></Link> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Offers;