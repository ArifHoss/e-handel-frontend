import styles from './Home.module.css'; // Assume CSS module for styling
import {FaComputer} from "react-icons/fa6"
import {GiWashingMachine} from "react-icons/gi"
import {RiComputerFill} from "react-icons/ri"
import {IoLogoGameControllerB} from "react-icons/io"


const Home = () => {
    return (
        <div className={styles.home}>
            <header className={styles.header}>
                <nav className={styles.navbar}>
                    
                    <div className={styles.navItems}>
                        <a  href="/computers"><FaComputer className={styles.icon}/><span>COMPUTER&OFFICE</span></a>   
                    </div>
                    <div className={styles.navItems}>
                        <a  href="/appliances"><GiWashingMachine className={styles.icon}/>APPLIANCES</a>
                    </div>
                    <div className={styles.navItems}>
                        <a  href="/tv_sound_home"><RiComputerFill className={styles.icon}/>TV,SOUNDS&AMART HOME</a>
                    </div> 
                    <div className={styles.navItems}>
                        <a  href="/game"><IoLogoGameControllerB className={styles.icon}/>GAMING</a>
                    </div>
                </nav>
            </header>
            <main className={styles.mainContent}>
                <section className={styles.featuredProducts}>
                    <h2>Featured Products</h2>
                    <div className={styles.productsGrid}>
                        {/* Map through products and display them */}
                        <div className={styles.productCard}>Product 1</div>
                        <div className={styles.productCard}>Product 2</div>
                        <div className={styles.productCard}>Product 3</div>
                        {/* ... more products */}
                    </div>
                </section>
                <section className={styles.categories}>
                    <h2>Shop by Category</h2>
                    <div className={styles.categoriesGrid}>
                        <div className={styles.categoryCard}>Electronics</div>
                        <div className={styles.categoryCard}>Clothing</div>
                        <div className={styles.categoryCard}>Home & Kitchen</div>
                        {/* ... more categories */}
                    </div>
                </section>
            </main>
            {/* <footer className={styles.footer}>
                <p>© 2023 eShop. All rights reserved.</p>
            </footer> */}
        </div>
    );
};

export default Home;