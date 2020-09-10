import React from 'react';
import ComicFilter from '../component/Filter';
import styles from '../style/ComicList.module.css';

const ComicList = props => {

const {
  filter, loading, dataSafe, comicMap, err
} = props;

return (
  <div key='2s' className={`${styles.red} ${styles.padding}`}>
    <ComicFilter filterCategory={filter}/>
     {  loading ? <p>Loading! wait a sec...</p> :
        dataSafe ? <p className={styles.error}> No comics to be found! {`${err}`}</p> : <div className={`${styles.flex} ${styles.width}`}>{ comicMap() }</div>
     }
    </div>
  );
};

export default ComicList;