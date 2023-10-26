import React from 'react';
import './App.css'
import Header from "./componets/Header.jsx";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar.jsx";


function App() {

  return (

    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element= {<Header/>}/>

      </Routes>
      
       

    </Router>
  )
}
import { formatPostcssSourceMap } from 'vite';

export default App
