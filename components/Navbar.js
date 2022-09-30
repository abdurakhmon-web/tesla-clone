import React, { useState } from 'react'
import styles from '../styles/Home.module.css';
import { Sidebar } from './Sidebar.js'
import Link from 'next/link'
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

  return (
    <nav className={styles.navbar}>
        <Link href="/">
            <a>
                <img
                    src="/images/logo.svg"
                    className={styles.teslaLogo}
                    alt="tesla logo"
                    loading='lazy'
                />
            </a>
        </Link>
        <ul className={styles.navbarNav}>
            <li className={styles.items}>
                <a href="#" className={styles.itemsLink}>
                    Model S
                </a>
            </li>
            <li className={styles.items}>
                <a href="#" className={styles.itemsLink}>
                    Model 3
                </a>
            </li>
            <li className={styles.items}>
                <a href="#" className={styles.itemsLink}>
                    Model X
                </a>
            </li>
            <li className={styles.items}>
                <a href="#" className={styles.itemsLink}>
                    Model Y
                </a>
            </li>
            <li className={styles.items}>
                <a href="#" className={styles.itemsLink}>
                    Solar Roof
                </a>
            </li>
            <li className={styles.items}>
                <a href="#" className={styles.itemsLink}>
                    Solar Panels
                </a>
            </li>
        </ul>
        <div className={styles.menu}>
            <li className={styles.items}>
                <a href="#" className={styles.itemsLink}>
                    Shop
                </a>
            </li>
            <li className={styles.items}>
                <Link href="/sign_in">
                    <a>
                        Account
                    </a>
                </Link>
            </li>
            <li className={styles.items} onClick={showSidebar}>
                 Menu
            </li>
        </div>
        <div className={sidebar ? 'side-menu active' : 'side-menu'}>
            <CloseIcon className='closeIcon' onClick={showSidebar} />
            <ul className='sideBarNav'>
                {Sidebar.map((item, index) => {
                    return(
                        <li key={index} className="hamburgerLinks">
                            <Link href={item.path}>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navbar