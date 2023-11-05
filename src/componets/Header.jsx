import {useState} from 'react';
import styles from './Home.module.css';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        "Meny",
        "Datorer & Kontor",
        "Mobiler, Tablets & Smartklockor",
        "TV, Ljud & Smart Hem",
        "Gaming",
        "Epoq Kök & Tvättstuga",
        "Vitvaror",
        "Hem, Hushåll & Trädgård",
        "Personvård, Hälsa & Skönhet",
        "Sport & Fritid",
        "Tjänster & Tillbehör",
        "Outlet",
        "Kampanjer",
        "Elgiganten Kundklubb",
        "Elgiganten Företag",
        "Jobba hos oss"
    ];
    return (
        <header className={styles.headerContainer}>
            <div className={styles.topNav}>
                <span>Kundtjänst</span>
                <span>Privatkund</span>
                <span>Företagskund</span>
            </div>
            <div className={styles.mainNav}>
                <div className={styles.logoContainer}>
                    <img src="path_to_logo_image" alt="ELGIGANTEN" className={styles.logo} />
                </div>

                <button className={styles.menuButton} onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? '✖' : '☰'}  {/* Hamburger icon when closed and 'X' icon when opened */}
                </button>

                {menuOpen && (
                    <div className={styles.dropdownMenu}>
                        {menuItems.map((item, index) => (
                            <div key={index} className={styles.menuItem}>{item}</div>
                        ))}
                    </div>
                )}

                <input type="text" placeholder="Sök efter produkt, kategori eller artikel" className={styles.searchInput} />
                <div className={styles.iconsContainer}>
                    <button>Hitta butik</button>
                    <button>Logga in</button>
                    <button>Kundvagn</button>
                </div>
            </div>
        </header>
    );
}

export default Header;
