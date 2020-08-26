import React from 'react';

const ComicDetail = (props) => {
  
  const {
    id,
    image,
    title,
    description,
    thubmnail,
    characters,
    issuenumber
  } = props;

  return (
  <section key={id}>
    <div>
      <h2>{ title }</h2>
      <div>
        <p> {description} </p>
        <div>
          <span> {issuenumber} </span>
          <ul> { characters } </ul>
        </div>
      </div>
    </div>
    <div>
      <img src={thumbnail.path.concat("/portrait_xlarge.")}/>
    </div>
  </section>
  );

};

export default ComicDetail;