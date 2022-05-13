import './Nav.css';
import React from 'react';
import SearchBar from './SearchBar.jsx';
import About from './About.jsx';
import { Link } from 'react-router-dom';



// pasamano
function Nav({onSearch}) {
  return (
    <div className='nav'>
      <SearchBar onSearch={onSearch}/>
      <Link to='/about'>
        <span className='about' >About</span>
      </Link>
      {/* <h3 className="textPubl">TEMPERATURA actualizada de  todas las ciudades DEL MUNDO</h3> */}
    </div>
  );
};

export default Nav;
