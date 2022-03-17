import React from 'react'
import '../../src/';
import { Link } from 'react-router-dom';
 

export default function Navbar() {

    return (
        <nav>
            <Link to='/' className='navbar-logo' >
                Monitoring IOT

            </Link>

            <ul className="list">
                <li className="items">Home</li>
                <li className="items">Services</li>
                <li className="items">Contact</li>
            </ul>
            )
 
        </nav>
    )
}