import PropTypes from 'prop-types';
import React from 'react'
import { Link, Route } from 'react-router-dom';

const Comic = (props) => {
 const {
    key, title, thumbnail, id
  } = props;
  return (
   <div key={key}>
      <Link to={`/comic/${id}`}>{ title }</Link>
      <img alt="no img yet" src={thumbnail.path.concat("/landscape_amazing.").concat(thumbnail.extension)}/>
   </div>
  );
};

export default Comic;