import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "../src/components/Layout";
import Home from "../src/components/Home";
import Module from "../src/components/Module";/* 
import Moduledetails from '../src/components/Moduledetails'; */
import Navbar from "../src/components/Navbar";

import "./App.css"; 


export default function App() {
	return (
 
 	  <BrowserRouter>
	  	<Navbar />
		<Routes>
		 	<Route exact="true" path="/Home" element={<Home />}/>
			<Route exact="true" path="/Layout" element={<Layout />}/>
			<Route exact="true" path="/Module" element={<Module />} /> 
		
		</Routes>
	  </BrowserRouter> 
	);
  }
  