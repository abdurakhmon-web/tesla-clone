import React from 'react'
import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
        <ul className={styles.footerMenu}>
            <li className={styles.footerMenuList}>
                <a href="#" className={styles.footerMenuLink}>Tesla © 2022</a>
            </li>
            <li className={styles.footerMenuList}>
                <a href="#" className={styles.footerMenuLink}>Privacy & Legal</a>
            </li>
            <li className={styles.footerMenuList}>
                <a href="#" className={styles.footerMenuLink}>Vehicle Recalls</a>
            </li>
            <li className={styles.footerMenuList}>
                <a href="#" className={styles.footerMenuLink}>Contact</a>
            </li>
            <li className={styles.footerMenuList}>
                <a href="#" className={styles.footerMenuLink}>Careers</a>
            </li>
            <li className={styles.footerMenuList}>
                <a href="#" className={styles.footerMenuLink}>News</a>
            </li>
            <li className={styles.footerMenuList}>
                <a href="#" className={styles.footerMenuLink}>Engage</a>
            </li>
            <li className={styles.footerMenuList}>
                <a href="#" className={styles.footerMenuLink}>Locations</a>
            </li>
        </ul>
    </div>
  )
}

export default Footer