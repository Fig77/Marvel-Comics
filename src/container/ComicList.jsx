import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Comic from '../component/Comic';
import apidata from '../API/apidata';

const ComicList = props => {
  const dispatch = useDispatch();
  const data = useSelector(state => state.comics);
  const [loading, setLoading] = useState(false);
  
  React.useEffect(() => {
    const init = ( async() => {
      const result = await apidata.fetchData();
      console.log(result);
    })();

  }, []);
  return (
    <>
      { loading ? <p>Loading! wait a sec...</p> : 
        data.length === 0 ? <p>{ 'No comics to be found!' }</p> : <Comic/> 
      }
    </>
  );
};

export default ComicList;