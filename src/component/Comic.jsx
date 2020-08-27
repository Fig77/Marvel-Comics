import PropTypes from 'prop-types';
import React from 'react'
import { Link, Route } from 'react-router-dom';


const Comic = (props) => {
 const {
    item, id
  } = props;
  return (
   <div key={id}>
      <Link to={`/comic/${id}`}>{ item.title }</Link>
      <img alt="no img yet" src={item.thumbnail.path.concat("/landscape_amazing.").concat(item.thumbnail.extension)}/>
   </div>
  );
};

export default Comic;