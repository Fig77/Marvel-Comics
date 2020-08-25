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
      const result = await apidata.fetchData();
      dispatch(UPDATE_DATA(result.data.results)); // is duispatcing but aint updating.
      setLoading(false);
    })();
  }, []);
  
  const comicMap = () => {
    return (<Comic title = {data[0].title}/> );
  };
  
  return (
    <> 
      { loading ? <p>Loading! wait a sec...</p> :
        data.length === 0 ? <p> No comics to be found! </p> : <Comic title = {data[0].title}/>
      }
    </>
  );
};

export default ComicList;