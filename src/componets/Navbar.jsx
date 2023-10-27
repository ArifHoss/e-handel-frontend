// eslint-disable-next-line no-unused-vars
import React from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
// import styles from "./Header.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftLinks}>
            </div>
            <div className={styles.title}>
                <h3>AM-GIGANTEN</h3>
            <input type="text" placeholder="Sök efter produkt, kategori eller artikel" className={styles.searchInput} />
            </div>

            <div className={styles.rightLinks}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/logout">Logout</Link></li>
                    <li><Link to="/signup">SignUp</Link></li>
                </ul>
            </div>

        </nav>
    )

}
export default Navbar;