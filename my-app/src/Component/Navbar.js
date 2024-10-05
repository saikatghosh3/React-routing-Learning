import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <nav>
        <div>
            <h2>Logo</h2>
        </div>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/about">about</NavLink>
            </li>
            <li>
                <NavLink to="/service">Service</NavLink>
            </li>
            <li>
                <NavLink to="/geturl">URl Params</NavLink>
            </li>
            {/* <li>
                <NavLink to="/user">UserList</NavLink>
            </li> */}
        </ul>
    </nav>


    </div>
  )
}

export default Navbar