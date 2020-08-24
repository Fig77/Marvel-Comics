import React,{ useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Comic from '../component/Comic';
import apidata from '../API/apidata';

const mapStateToProps = state => state;

const ComicList = props => {
  const [data, setData] = useState([props.comics]);
  const [loading, setLoading] = useState(false);
  const init = async () => {
    if (data.length === 0) {
      setLoading(true);
      const comicData = await apidata.fetchData();
      setData(comicData);
      setLoading(false);
    };
  };
  init();
  return (
    <>
      { loading ? <p>Loading! wait a sec...</p> : 
        data.length === 0 ? <p>{ 'No comics to be found!' }</p> : <Comic/> 
      }
    </>
  );
  

};

export default connect(mapStateToProps)(ComicList);