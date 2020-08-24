import React from 'react';
import { connect } from 'react-redux';
import Comic from '../component/Comic';

const mapStateToProps = state => state;


const ComicList = props => {
  if (props.comics.length === 0) {
    return ( <p> { props.message } </p>);
    }
    else {
      return (<Comic />);
    }
  };

export default connect(mapStateToProps)(ComicList);