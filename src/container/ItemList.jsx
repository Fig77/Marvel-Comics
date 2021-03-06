// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'; 
import { useSelector, useDispatch } from 'react-redux';
import Comic from '../component/Comic';
import apidata from '../API/apidata';
import { UPDATE_DATA, CHANGE_FILTER } from '../actions/actions';
import ComicList from './ComicList';

const ItemList = () => {

const dispatch = useDispatch();
const data = useSelector(state => state.comicReducer);
const currentFilter = useSelector(state => state.filterReducer)
const [loading, setLoading] = useState(false);
const [err, setError] = useState('null')
// Hooks approach for this particular case, for the regular componentDidMount
React.useEffect(() => {
  if (data.length === 0 && err === 'null') {
    setLoading(true);
    // eslint-disable-next-line no-unused-vars
    const init = (async () => {
      const result = await apidata.fetchData();
      let i = 0;
      let aux = [];
      while (i < 4) {
        if (result[i].data === undefined) {
          setError("Error ".concat(result[i].code));
          break;
        }
        aux = aux.concat(result[i].data.results)
        i += 1;
      }
      dispatch(UPDATE_DATA(aux));
      setLoading(false);
    })();
  }
}, [data, dispatch, err]);

let filter = ''; // dummy variable, I don't really need this hook / state call here.

const filterCategory = event => {
  let aux = {filter: event.target.value}
  if (aux.filter === 'All' || filter === 'Category') {
    aux = {filter: ''};
  }
  dispatch(CHANGE_FILTER(aux))
};
  
const comicSet = (i) => {
  return (<Comic key={i} item={data[i]} id={i} filterOn={currentFilter.filter}/> );
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
  return (<ComicList err = {err} filter = {filterCategory} loading={loading} dataSafe={err !== 'null' ? true : false} comicMap = {comicMap}/>);
}

export default ItemList;