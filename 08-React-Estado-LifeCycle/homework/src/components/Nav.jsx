// import Logo from '../logoHenry.png'
import React from 'react';
import SearchBar from './SearchBar.jsx';
import './Nav.css';


// pasamano
function Nav({onSearch}) {
  return (
    <div className='nav'>
    {/* <img src={Logo} alt='Henry' />
    <h3>Henry Weather App</h3> */}
    <SearchBar onSearch={onSearch}/>
  </div>
  );
};

export default Nav;
