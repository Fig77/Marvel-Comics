import PropTypes from 'prop-types';
import React from 'react'
import { Link, Route } from 'react-router-dom';
import {useSelector} from 'react-redux';

const Comic = (props) => {
 const {
    item, id
  } = props;
  
  const filter = useSelector(state => state.filterReducer)

  if (filter.filter === '' || filter.filter === item.format) {
    return (
     <div key={id}>
     <Link to={`/comic/${id}`}>{ item.title }</Link>
     <img alt="no img yet" src={item.thumbnail.path.concat("/landscape_amazing.").concat(item.thumbnail.extension)}/>
    </div>
   );
  } else {
    return null;
  }
};

export default Comic;