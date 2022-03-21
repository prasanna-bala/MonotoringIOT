import { BrowserRouter, Routes, Route } from "react-router-dom"
 
import Home from "../src/components/Home";
import Module from "../src/components/Module1";
import ModuleLog from '../src/components/Modulelog'; 
import Navbar from "../src/components/Navbar";

import "./App.css"; 


export default function App() {
	return (
 
 	  <BrowserRouter>
	  	<Navbar />
		<Routes>
		 	<Route exact="true" path="/Home" element={<Home />}/>
			<Route exact="true" path="/Module" element={<Module />} /> 
			<Route exact="true" path="/ModuleLog" element={<ModuleLog />} /> 
			
			<Route exact="true" path="/ModuleLog/:id" element={<ModuleLog />} /> 
		</Routes>
	  </BrowserRouter> 
	);
  }
  