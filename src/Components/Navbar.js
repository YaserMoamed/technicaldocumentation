import React  from 'react'
import { NavLink } from 'react-router-dom';
import Home from './Home'
import Css from './Css';
import Html from './Html';
import Javascript from './Javascript';
import Navbar from './Navbar';
import './Navbar.css';


export default () => (
    <ul>
     <li>
       <NavLink to="/">
       Home
       </NavLink>
       </li>
       <li>
       <NavLink to="/html">
       HTML
       </NavLink>
       </li>
       <li>
       <NavLink to="/css">
       CSS
       </NavLink>
       </li>
       <li>
       <NavLink to="/javascript">
       Javacript
       </NavLink>
      </li>
    </ul>
)