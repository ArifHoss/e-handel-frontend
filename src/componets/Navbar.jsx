// eslint-disable-next-line no-unused-vars
import React, {useContext} from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import {AuthContext} from "./AuthContext.jsx";
import Logout from "./Logout.jsx";

const Navbar = () => {
    const { loggedIn, user } = useContext(AuthContext);
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
                    {/* Show these links only if the user is not logged in */}
                    {!loggedIn && (
                        <>
                            <li><Link to="/login">Login</Link></li>
                            {/*<li><Link to="/signup">SignUp</Link></li>*/}
                        </>
                    )}
                    {/* Show this link only if the user is logged in */}
                    {loggedIn &&
                    <>
                        <li>Välkommen, {user.username}</li>
                        <li><Logout/></li>
                        </>
                    }
                </ul>
            </div>

        </nav>
    )

}
export default Navbar;