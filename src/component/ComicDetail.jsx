import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from '../style/ComicDetail.module.css';


const ComicDetail = (props) => {
  const comics = useSelector(store => store.comicReducer);
  const key = props.match.params.key;
  return (
    <div>
  <div className = {styles.fix}>
  <div className = {styles.container}>
    <div className = {`${styles.divleft} ${styles.w50}`}>
      <img alt="No image for this comic yet!" src={comics[key].images[0] ? comics[key].images[0].path.concat(".").concat(comics[key].images[0].extension) : <p></p>}/>
    </div>
    <div className = {`${styles.divright} ${styles.w50}`}>
      <h2>{ comics[key].title }</h2>
      <div>
        <p className={styles.p}> { comics[key].description} </p>
        <div>
          <p className={`${styles.p} ${styles.p2}`}> Issue number: {comics[key].issueNumber} </p>
          <p className={`${styles.p} ${styles.p2}`}> Format: { comics[key].format } </p>
        </div>
      </div>
    </div>
    
  </div>
  </div>
    <Link to="/">Go back</Link>
      </div>
  );
};
 
export default ComicDetail;