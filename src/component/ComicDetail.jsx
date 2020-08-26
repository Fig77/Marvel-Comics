import React from 'react';
import {Link, useParams} from 'react-router-dom';

const ComicDetail = (props) => {
  
//  const {
//    id,
//    image,
//    title,
//    description,
//    thubmnail,
//    characters,
//    issuenumber
//  } = props.location.comicProps;
//
//  return (
//  <section key={id}>
//    <div>
//      <h2>{ title }</h2>
//      <div>
//        <p> {description} </p>
//        <div>
//          <span> {issuenumber} </span>
//          <ul> { characters } </ul>
//        </div>
//      </div>
//    </div>
//    <div>
//      <img src={thumbnail.path.concat("/portrait_xlarge.")}/>
//    </div>
//  </section>
//  );
  const { id } = props;
  return (
    <div key={id}>
      <h1>WOWWWWWW BROOO WTF!!!111!!!</h1>
      <Link to="/"> o go power rangers... na na na na na </Link>
    </div>
  )
};

export default ComicDetail;