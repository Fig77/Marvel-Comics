import PropTypes from 'prop-types';
import React from 'react'

const Comic = (props) => {
 const {
    id, title, thumbnail
  } = props;

  return (
   <div key={id}>
      <h1>{ title }</h1>
      <img alt="no img yet" src={thumbnail.path.concat("/portrait_xlarge.").concat(thumbnail.extension)}/>
   </div>
  );
};

export default Comic;