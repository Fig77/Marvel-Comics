import React from 'react';
import styles from '../style/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="">
        <i>Data provided by Marvel. © 2014 <a className={styles.a}href="https://www.marvel.com/">Marve</a> • <a className={`${styles.a}`} href="https://github.com/Fig77"><i className={`fa fa-github ${styles.i}`} aria-hidden="true"></i></a></i>
      </div>
    </footer>
  );
  
};

export default Footer;