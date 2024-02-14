// App.js
import './App.css';
import {Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar.jsx";
import Home from "./componets/Home.jsx";
import Login from "./componets/Login.jsx";
import Logout from "./componets/Logout.jsx";
import Signup from "./componets/Signup.jsx";
import Footer from './componets/Footer';
import Computers from './componets/products/Computers.jsx';
import Appliances from './componets/products/Appliances.jsx';
import TvSoundHome from './componets/products/TvSoundHome.jsx';
import Game from './componets/products/Game.jsx';
import Menu from "./componets/Menu.jsx";


function App() {
    return (
        <div>            
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/computers' element={<Computers/>}/>
                <Route path='/appliances' element={<Appliances/>}/>
                <Route path='/tv_sound_home' element={<TvSoundHome/>}/>
                <Route path='/game' element={<Game/>}/>
                <Route path='/menu' element={<Menu/>}/>
            </Routes>
            <Footer/>           
        </div>
    );
}

export default App;
