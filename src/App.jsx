// App.js
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from "./componets/Navbar.jsx";
import Home from "./componets/Home.jsx";
import Login from "./componets/Login.jsx";
import Logout from "./componets/Logout.jsx";
import Signup from "./componets/Signup.jsx";
import Footer from './componets/Footer';


function App() {
    return (
        <div>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/logout' element={<Logout/>}/>
                <Route path='/signup' element={<Signup/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
