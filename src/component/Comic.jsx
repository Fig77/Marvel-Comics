import PropTypes from 'prop-types';
import React from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from '../style/Comic.module.css';

const Comic = (props) => {
 const {
    item, id, filterOn
  } = props;
  if (filterOn === '' || filterOn === item.format) {
    return (
     <div key={id} className = {`${styles.container} ${styles.border}`}>
      <img className={styles.img} alt=" " src={ item.images[0] !== undefined ?item.images[0].path.concat(".").concat(item.images[0].extension) : <p>woops</p>}/>
      <span className={styles.span}><Link data-testid={id} id={id} to={{pathname:`/comic/${id}`, state:{comic: item}}}>{ item.title }</Link></span>
     </div>
   );
  } else {
    return null;
  }
};

Comic.propTypes = {
  item: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

Comic.defaultProps = {
  item: {"images":[undefined], "title": ""},
  id: 0
};

export default Comic;