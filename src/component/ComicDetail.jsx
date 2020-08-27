import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from '../style/ComicDetail.module.css';


const ComicDetail = (props) => {
  const comics = useSelector(store => store.comicReducer);
  const key = props.match.params.key;
  return (
  <div className={`${styles.flexcolumn} ${styles.w100}`}>
  <div className ={styles.container}>
    <h2 className = {styles.title}>{ comics[key].title }</h2>
    <div className = "">
      <img className={styles.img} alt=" " src={comics[key].images[0] ? comics[key].images[0].path.concat(".").concat(comics[key].images[0].extension) : <p></p>}/>
    </div>
    <div className = "">
      <div>
        <p className={`${styles.p} ${styles.prow}`}> { comics[key].description === "" ? "Wow, they didn't even add a description. Rude." : comics[key].description} </p>
        <div>
          <p className={styles.prow}> <strong>Issue number:</strong> {comics[key].issueNumber} </p>
          <p className={styles.prow}> <strong>Format:</strong> { comics[key].format } </p>
          <p className={styles.prow}> <strong>{ comics[key].urls.length === 0 ? <a href="http://marvel.com">Visit site</a> : <a href={comics[key].urls[0].url}>Visit site</a> }</strong>  </p>
        </div>
      </div>
    </div>
    <div className={styles.goback}><h1><Link className={styles.a} to="/">Go back</Link></h1></div>
  </div>
  </div>
  );
};
 
export default ComicDetail;