// import Logo from '../logoHenry.png'
import React from 'react';
import SearchBar from './SearchBar.jsx';
import About from './About.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';



// pasamano
function Nav({onSearch}) {
  return (
    <div className='nav'>
    {/* <img src={Logo} alt='Henry' />
    <h3>Henry Weather App</h3> */}
    <Link to='/about'>
      <span>About</span>
    </Link>
    <SearchBar onSearch={onSearch}/>
  </div>
  );
};

export default Nav;
