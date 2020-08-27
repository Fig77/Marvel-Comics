import PropTypes from 'prop-types';
import React from 'react'
import { Link, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from '../style/Comic.module.css';

const Comic = (props) => {
 const {
    item, id
  } = props;
  const filter = useSelector(state => state.filterReducer)
  if (filter.filter === '' || filter.filter === item.format) {
    return (
     <div key={id} className = {`${styles.container} ${styles.border}`}>
     <img alt="no img yet" src={ item.images[0] !== undefined ?item.images[0].path.concat(".").concat(item.images[0].extension) : <p>woops</p>}/>
     <span><Link to={`/comic/${id}`}>{ item.title }</Link></span>
    </div>
   );
  } else {
    return null;
  }
};

export default Comic;