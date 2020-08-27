import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comic from '../component/Comic';
import apidata from '../API/apidata';
import { UPDATE_DATA, CHANGE_FILTER } from '../actions/actions';
import ComicFilter from '../component/Filter';
import styles from '../style/ComicList.module.css';

const ComicList = props => {
  // HOOK INIT
  const dispatch = useDispatch();
  const data = useSelector(state => state.comicReducer);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState('');

  // ON FIRST RENDER
  React.useEffect(() => {
    if (data.length === 0) {
      const init = ( async() => {
        setLoading(true);
        const result = await apidata.fetchData();
        let i = 0;
        let aux = [];
        while (i < 4) {
          aux = aux.concat(result[i].data.results)
          i += 1;
        }
        dispatch(UPDATE_DATA(aux));
        setLoading(false);
      })();
    }
  }, []);

  let filter = ''; // dummy variable, I don't really need this hook / state call here.

  const filterCategory = event => {
    let aux = {filter: event.target.value}
    if (aux.filter === 'All' || filter === 'Category') {
      aux = {filter: ''};
    }
    dispatch(CHANGE_FILTER(aux))
  };
  
  const comicSet = (i) => {
    return (<Comic key={i} item={data[i]} id={i} /> );
  };
  
  function comicMap() {
    let answer = [];
    let i = 0
    while (i < data.length) {
       answer[i] = (comicSet(i));
       i += 1;
    }
    return answer;
  }

  return (
    <div key='2s' className={`${styles.red} ${styles.padding}`}>
      <ComicFilter filterCategory={filterCategory}/>
      { loading ? <p>Loading! wait a sec...</p> :
        data.length === 0 ? <p> No comics to be found! </p> : <div className={`${styles.flex} ${styles.width}`}>{ comicMap() }</div>
      }
    </div>
  );
};

export default ComicList;