import React from 'react';
import {Link, Redirect } from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from '../style/ComicDetail.module.css';
import PropTypes from 'prop-types';


const ComicDetail = (props) => {
  const comics = useSelector(store => store.comicReducer); // safeguard for getting straight to the route
  const key = props.match.params.key;
  const comic = props.location.state === undefined ? comics[key] : props.location.state.comic;
  if (comic === undefined) {
    return (
      <div className={styles.flexcolumn}>
      <h1>Woops, comic not found!</h1>
        <div className={`${styles.goback}, ${styles.goback_two}`}>
          <h1><Link className={styles} to="/">Go back</Link></h1>
        </div>
      </div>
    )
  }
  return (
  <div className={`${styles.flexcolumn} ${styles.w100}`}>
  <div className ={styles.container}>
    <h2 className = {styles.title}>{ comic.title }</h2>
    <div className = "">
      <img className={styles.img} alt=" " src={comic.images[0] ? comic.images[0].path.concat(".").concat(comic.images[0].extension) : <p></p>}/>
    </div>
    <div className = "">
      <div>
        <p className={`${styles.p} ${styles.prow}`}>{comic.description === "" ? "Wow, they didn't even add a description. Rude." :comic.description}</p>
        <div>
          <p className={styles.prow}> <strong>Issue number:</strong> {comic.issueNumber} </p>
          <p className={styles.prow}> <strong>Format:</strong> { comic.format } </p>
          <p className={styles.prow}> <strong>{ comic.urls.length === 0 ? <a href="http://marvel.com">Visit site</a> : <a href={comic.urls[0].url}>Visit site</a> }</strong>  </p>
        </div>
      </div>
    </div>
    <div className={styles.goback}><h1><Link className={styles.a} to="/">Go back</Link></h1></div>
  </div>
  </div>
  );
};

ComicDetail.propTypes = {
  key: PropTypes.number.isRequired,
  comic: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    issueNumber: PropTypes.number.isRequired,
    images: PropTypes.array.isRequired,
    urls: PropTypes.array.isRequired
  })
};

ComicDetail.defaultProps = {
  key: 0,
  comic: {title: "not found", images:["not found"], description: "not found", issueNumber: -1, urls: ['google.com']}
};

export default ComicDetail;