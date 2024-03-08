// eslint-disable-next-line no-unused-vars
import React, {useContext, useState} from "react";
import * as FaIcons from "react-icons/fa";
import { IoMdLogIn } from "react-icons/io";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import {AuthContext} from "./AuthContext.jsx";
import Logout from "./Logout.jsx";
import {sidebarData} from "./NavbarSideData.jsx";
import Login from  "./Login.jsx";

const Navbar = () => {
    const { loggedIn, user } = useContext(AuthContext);
    const [sidebar, setSidebar] =useState(false);
    const showSidebar =() =>setSidebar(!sidebar); //If sidebar is true, it becomes false, and vice versa. it switches the value of sidebar between true and false.
    console.log("sidebar",sidebar)

    const [sidebarMypage, setSidebarMypage] =useState(false);
    const showSidebarMypage =() =>setSidebarMypage(!sidebarMypage);

    return (
    <>
      <nav className={styles.navbar} >

            <div className={styles.title}>
                <Link to="#" onClick={showSidebar}>
                    <FaIcons.FaBars />
                </Link>
                <Link to="/">
                    AM-GIGANTEN
                </Link>
            <input type="text" placeholder="Sök efter produkt, kategori eller artikel" className={styles.searchInput} />
            </div>

            <div className={styles.rightLinks}>
                <ul>
                    {/* <li><Link to="/">Home</Link></li> */}
                    {/* Show these links only if the user is not logged in */}
                    {!loggedIn && (
                        <>
                            <li>
                                <Link to="#" onClick={showSidebarMypage}>
                                <IoMdLogIn />
                                Login
                                </Link></li>
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

        {/*sidebar left  */}
        <div className={sidebar? `${styles.sidebar} ${styles.active}`: `${styles.sidebar}`}>
         <ul className={styles.sidebarItems} onClick={showSidebar}>
          <li className={styles.sidebarToggle}>
          <Link to="#">
            <FaIcons.FaRegWindowClose onClick={showSidebar}/>
          </Link>
          </li>
          {sidebarData.map((item , index)=>{
            return(
                <li key={index} className={item.cName}>
                    <Link to={item.path} className={styles.sidebarText}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                </li>
            )
          })}
         </ul>
        </div>

        {/*sidebar right login  */}
        {/*If login success navigate Home. Just now sidebar does not close.  */}
        <div className={sidebarMypage? `${styles.sidebar_mypage} ${styles.active}`: `${styles.sidebar_mypage}`}>
         <ul className={styles.sidebarItems} >
          <li className={styles.sidebar_mypageToggle}>
          <Link to="#">
            <FaIcons.FaRegWindowClose onClick={showSidebarMypage}/>
          </Link>
          </li>

          
              <Login/>
            

        </ul>
        </div>

        </>
        
    )

}
export default Navbar;