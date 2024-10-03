import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/service">Service</Link>
            </li>
        </ul>
    </nav>


    </div>
  )
}

export default Navbar