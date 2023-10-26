// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.navbar}>
            <div className={classes.leftLinks}>
            </div>
            <div className={classes.title}>
                <h1>AM-GIGANTEN</h1>
            </div>
            <div className={classes.rightLinks}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                </ul>
            </div>

        </nav>
    )

}
export default Navbar;