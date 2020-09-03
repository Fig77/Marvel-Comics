import React from 'react';
import styles from '../style/Navbar.module.css'

const Navbar = () => {
  return(
    <nav className ={`${styles.size} ${styles.dark} ${styles.margin}`}>
      <img alt="" className={styles.logo} src= { require('../assets/marvel-logo-1.png') } />
    </nav>
  )
};

export default Navbar;