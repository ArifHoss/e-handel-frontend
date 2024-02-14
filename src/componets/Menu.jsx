import {useState} from "react";
import styles from './Menu.module.css';

const Menu = () => {
    const [isActive, setActive] = useState(false);

    const openHam = () => {
        setActive(!isActive);
    };

    const closeMenu = () => {
        setActive(false);
    };

    return (
        <>
            <div
                className={`${styles.hamburger} ${isActive ? styles.hamburgerActive : ""}`}
                onClick={openHam}
            >
                <span className={styles.hamburger__icon}>☰</span>

            </div>
            <div className={`${styles.headerLinksContainer} ${isActive ? styles.change : ""}`}>
                <div className={styles.headerLinks}>
                    <a href="/appliances" onClick={closeMenu}>
                        Appliances
                    </a>
                    <a href="/computers" onClick={closeMenu}>
                        Laptops
                    </a>
                    <a href="/tv_sound_home" onClick={closeMenu}>
                        Tv and Sound
                    </a>
                </div>
            </div>
        </>
    );
};

export default Menu;
