import React from "react";
import { NavLink } from "react-router-dom";


export default function Navbar() {

	return (
		<ul className="navMenu">

			<NavLink key='#' exact="true" to="/" className="navItem">
				<li>Monitoring IOT</li>
			</NavLink>

			<NavLink key='ModuleLog' exact="true" to="/ModuleLog" className="navItems">
				<li>Module Log</li>
			</NavLink>
			<NavLink key='Module' exact="true" to="/Module" className="navItems">
				<li>Module</li>
			</NavLink>
			*	<NavLink key='Dashboard' exact="true" to="/Dashboard" className="navItems">
				<li>Dashboard</li>
			</NavLink>
		</ul>
	);


}