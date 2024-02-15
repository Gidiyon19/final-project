// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Room.css';
import {Link} from 'react-router-dom';
import RegistrationForm from './RegistrationForm';
// import Nav from './Nav';
const offers = [
  {
    id: 1,
    title: 'Summer Getaway',
    description: 'Enjoy a relaxing summer vacation at our luxurious hotel.',
    price: '$199',
    imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBo7XdNS-y-4BVDWzIC_6CoMN-vuxjHNQOXg&usqp=CAU'
  },
  {
    id: 2,
    title: 'Standard Room',
    description: 'Affordable and comfortable for a pleasant stay.',
    price: '$100',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkn2YGgnBYQ9IBQxf8bDybwQiX-dy5TNk1NU2OaGExVJyDuGoSkd5aESC38UBCzdTNwjI&usqp=CAU'
  },
  {
    id: 3,
    title: 'Penthouse Suite',
    description: 'Indulge in luxury with our exclusive penthouse suite.',
    price: '$350',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzQ8sCyuDXDoevpQGgkIerkvHa6nWr7GEq0xWVyjGnWp84Jq9VoA82gJCaRpL4JRNrBs&usqp=CAU'
  },
  {
    id: 4,
    title: 'Ocean View Villa',
    description: 'Experience breathtaking views in our beachfront villa.',
    price: '$250',
    imageUrl: 'https://129958440.cdn6.editmysite.com/uploads/1/2/9/9/129958440/s254803549462867385_p61_i1_w799.jpeg'
  },
  {
    id: 5,
    title: 'Weekend Retreat',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$500',
    imageUrl: 'https://ananthichessacademy.com/wp-content/uploads/2019/11/download-8.jpg'
  },
  {
    id: 6,
    title: 'Cabana',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$980',
    imageUrl: 'https://previews.123rf.com/images/dskabelev/dskabelev1812/dskabelev181200025/127377906-russia-vladivostok-12-01-2018-kids-play-chess-during-chess-competition-in-chess-club-education-chess.jpg'
  },
  
  {
    id: 7,
    title: 'Lanai',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$765',
    imageUrl: 'https://www.chessjournal.com/wp-content/uploads/2020/10/Magnus-Carlsen-Chess-Player-Profile-750x422.jpg'
  },
  
  {
    id: 8,
    title: 'Beach Resort',
    description: 'Escape the hustle and bustle with a weekend retreat at our peaceful hotel.',
    price: '$435',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBo7XdNS-y-4BVDWzIC_6CoMN-vuxjHNQOXg&usqp=CAU'
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
         <button className='but' onClick={() => handleViewClick(offer.id)}>View</button>
          <button className=' but'onClick={() => handleSubmitClick(offer.id)}><Link to='/Register'>Enroll</Link></button>
         {/* <Link to="/PhotoCollage"><button onClick={() => handleViewClick(offer.id)}>View</button></Link>
          <Link to="/RoomBookingPage"><button onClick={() => handleSubmitClick(offer.id)}>Book Now</button></Link> */}
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Images;