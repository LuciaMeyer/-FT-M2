import './Nav.css';
import React from 'react';
import SearchBar from './SearchBar.jsx';
import { Link } from 'react-router-dom';



// pasamano
function Nav({onSearch}) {
  return (
    <div className='nav'>
      <SearchBar onSearch={onSearch}/>
      <Link to='/about'>
        <span className='about' >About</span>
      </Link>
      <h5 className="textPubl">TEMPERATURA actualizada de  todas las ciudades DEL MUNDO</h5>
    </div>
  );
};

export default Nav;
