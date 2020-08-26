import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comic from '../component/Comic';
import apidata from '../API/apidata';
import { UPDATE_DATA } from '../actions/actions';

const ComicList = props => {
  const dispatch = useDispatch();
  const data = useSelector(state => state);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    const init = ( async() => {
      setLoading(true);
      console.log('NO')
      const result = await apidata.fetchData();
      dispatch(UPDATE_DATA(result.data.results)); // is duispatcing but aint updating.
      setLoading(false);
    })();
  }, []);

  const comicSet = (i) => {
    return (<Comic key={data[i].id} thumbnail={ data[i].thumbnail } title={data[i].title} id={i}/> );
  };

  function comicMap() {
    let answer = [];
    let i = 0;
    while (i < data.length) {
       answer[i] = (comicSet(i));
       i += 1;
    }
    return answer;
  }
  return (
    <> 
      { loading ? <p>Loading! wait a sec...</p> :
        data.length === 0 ? <p> No comics to be found! </p> : <div>{ comicMap() }</div>
      }
    </>
  );
};

export default ComicList;