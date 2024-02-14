import {useContext} from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import {AuthContext} from "./AuthContext.jsx";
import Logout from "./Logout.jsx";

const Navbar = () => {
    const {loggedIn, user} = useContext(AuthContext);
    return (
        <nav className={styles.navbar}>
            <div className={styles.leftLinks}>
            </div>
            <div className={styles.title}>
                <Link to="/">AM-GIGANTEN</Link>
                <Link to="/menu">MENU</Link>
                <input type="text" placeholder="Sök efter produkt, kategori eller artikel"
                       className={styles.searchInput}/>
            </div>

            <div className={styles.rightLinks}>
                <ul>
                    {!loggedIn && (
                        <>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    )}
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