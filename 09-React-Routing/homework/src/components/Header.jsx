import React from "react";
import './Header.css';
import { Link } from 'react-router-dom'

let url = 'https://d31uz8lwfmyn8g.cloudfront.net/Assets/logo-henry-white-lg.png'

export default function Header () {
    return(
        <Link to='/'>
            <div className='title'>
                <img src={url} alt='logo Henry'></img>
                <h3 >Weather App</h3>
            </div>
         </Link>
    )
}