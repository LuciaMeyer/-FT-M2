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
      <SearchBar onSearch={onSearch}/>
      <Link className='about' to='/about'>
        <span>About</span>
      </Link>
      <h3 className="textPubl">TEMPERATURA actualizada de <br/> todas las ciudades DEL MUNDO</h3>
  </div>
  );
};

export default Nav;
