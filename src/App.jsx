// eslint-disable-next-line no-unused-vars
import React from 'react';
import './App.css'
import Home from "./componets/Home.jsx";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./componets/Navbar.jsx";
import Login from "./componets/Login.jsx";
import Logout from "./componets/Logout.jsx";
import Signup from "./componets/Signup.jsx";
import Header from "./componets/Header.jsx";


function App() {

    return (

        <Router>
            {/*<Header/>*/}
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
        </Router>
    )
}


export default App
