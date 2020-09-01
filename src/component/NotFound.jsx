import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from '../style/ComicDetail.module.css';

const NotFound = () => {
  return (
    <div className={styles.flexcolumn}>
    <h1>Woops, URL or Comic not found!</h1>
      <div className={`${styles.goback}, ${styles.goback_two}`}>
        <h1><Link className={styles} to="/">Go back</Link></h1>
      </div>
    </div>
  )
};

export default NotFound