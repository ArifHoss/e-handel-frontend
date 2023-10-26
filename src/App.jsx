// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import Header from "./componets/Header.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./componets/Navbar.jsx";
import Login from "./componets/Login.jsx";
import Logout from "./componets/Logout.jsx";


function App() {

    return (

        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Header/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
            </Routes>
        </Router>
    )
}


export default App
