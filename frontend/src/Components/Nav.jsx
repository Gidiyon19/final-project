// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Nav.css';
import Logo from './Logo.png';
import { GiChessKing } from "react-icons/gi";
import { Link } from 'react-router-dom';
const Nav = () => {
  return (
    <header>
    <nav>
        <a href='/' className='Logo'>
            <div className='img1'>
                <img src={Logo} width='100px' ></img>
            </div>
        </a>

        <ul>
            <li>
            <Link to="/Offers">  <a href='#'>Resources</a></Link>  
            </li>
            <li>
            <Link to="/Book">  <a href='#'>Book Courses</a></Link>  
            </li>
            <li>
            <Link to="/Booked">  <a href='#'>Booked Courses</a></Link>  
            </li>

            <li>
                <a href='https://www.chess.com/play/computer'>Play Online</a>
            </li>
            <li>
                <a href='About'>About Us</a>
            </li>
            {/* <li>
                <a href='#'>Contact Us</a>
            </li> */}
            <li>
                <a href='#' className='king'><GiChessKing /></a>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Nav