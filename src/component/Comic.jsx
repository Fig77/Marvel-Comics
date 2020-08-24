import PropTypes from 'prop-types';
import React from 'react'

const Comic = (props) => {
 const {
    id, title
  } = props;

  return (
   <div>
      <h1>{ title }</h1>
      <image alt="no img yet"></image>
   </div>
  );
  
};

export default Comic;