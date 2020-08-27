import PropTypes from 'prop-types';
import React from 'react';
import styles from '../style/Navbar.module.css'

const Navbar = () => {
  return(
    <nav className ={`${styles.size} ${styles.dark} ${styles.margin}`}>
      <img src= { require('../assets/marvel-logo-1.png') } width='170px' height='95.6px'/>
    </nav>
  )
};

export default Navbar;