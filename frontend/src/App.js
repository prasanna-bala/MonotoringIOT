 
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Module from "./pages/Module";
import "./App.css"; 


export default function App() {
	return (
	  <BrowserRouter>
		<Routes>
		 	<Route path="/" element={<Layout />}>
			<Route index element={<Home />} />
			<Route path="Module" element={<Module />} /> 
		  </Route>
		</Routes>
	  </BrowserRouter>
	);
  }
  