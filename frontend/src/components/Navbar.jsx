import React from "react";
import {NavLink} from "react-router-dom";


export default function Navbar() {
  
	return (
    <div className="navbar">
        <ul className="navMenu">
            <h3>Monitoring IOT  </h3>
            <NavLink   key  = 'Home' exact="true"  to="/Home" className="navItems">
                <li>Home</li>
            </NavLink>      
            <NavLink key  = 'Module' exact="true"  to="/Module" className="navItems">
                <li>Module</li>
            </NavLink>
            
            <NavLink   key  = 'Layout' exact="true"  to="/Layout" className="navItems">
                <li>Layout List</li>
            </NavLink>
        </ul>
    </div>
	);

  
}