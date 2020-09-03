import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import styles from '../style/ComicDetail.module.css';
import NotFound from './NotFound';
import PropTypes from 'prop-types';

const ComicDetail = (props) => {
  const comics = useSelector(store => store.comicReducer); // safeguard for getting straight to the route
  const key = props.match.params.key;
  const comic = props.location.state === undefined ? comics[key] : props.location.state.comic;
  if (comic === undefined) {
    return (<NotFound />);
  }
  
  const mprices = (prices) => {
    let i = 0;
    let answer = [];
    while (i < prices.length){
      let aux_type = prices[i].type.replace(/Price/i, '').concat(' edition: ');
      answer = <p className={styles.prow}> <strong>{aux_type}</strong> u${prices[i].price} </p>
      i += 1
    }
    return answer;
  }

  return (
    <div className = {`${styles.mainContainer} ${styles.flex} ${styles.justifycenter} ${styles.aligncenter}`}>
      <h1 className = {`${styles.title}`}>{ comic.title }</h1>
      <div className = {`${styles.flex} ${styles.justifycenter} ${styles.aligncenter} ${styles.imgContainer}`}>
        <img className={styles.img} alt=" " src={comic.images.length ?comic.images[0].path.replace(/^http+s?:\/\//i, 'https://').concat(".").concat(comic.images[0].extension) :''}/>
      </div>
      <div className = {`${styles.flex} ${styles.justifycenter} ${styles.alignstart} ${styles.content}`}>
         <p className={`${styles.p}`}>{comic.description === null || comic.description === "" ? "Wow, they didn't even add a description. Rude." : comic.description}</p>
          <p className={styles.prow}> <strong>Issue number:</strong> {comic.issueNumber} </p>
          <p className={styles.prow}> <strong>Format:</strong> { comic.format } </p>
          <div className={`${styles.flexcol} ${styles.flexcol}`}>
            { mprices(comic.prices) }
          </div>
          <p className={`${styles.prow} ${styles.edge}`}> <strong>{ comic.urls.length === 0 ? <a className={styles.a} href="http://marvel.com">Visit site</a> : <a className={styles.a} href={comic.urls[0].url}>Visit site</a> }</strong> </p>
      </div>
      <div className={`${styles.flexcol} ${styles.containerlinks} `}>
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
    urls: PropTypes.array.isRequired,
    prices: PropTypes.array.isRequired
  })
};

ComicDetail.defaultProps = {
  key: 0,
  comic: {title: "not found", images:["not found"], description: "not found", issueNumber: -1, urls: ['google.com'], prices:[]}
};

export default ComicDetail;