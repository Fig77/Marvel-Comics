import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';


const ComicDetail = (props) => {
  const comics = useSelector(store => store.comicReducer);
  const key = props.match.params.key;
  return (
  <section>
    <div>
      <h2>{ comics[key].title }</h2>
      <div>
        <p> { comics[key].description} </p>
        <div>
          <span> Issue number: {comics[key].issueNumber} </span>
          <ul> Format: { comics[key].format } </ul>
        </div>
      </div>
    </div>
    <div>
      <img alt="No image for this comic yet!" src={comics[key].images[0] ? comics[key].images[0].path.concat("/portrait_incredible.").concat(comics[key].images[0].extension) : <p></p>}/>
    </div>
    <Link to="/">Go back</Link>
  </section>
  );
};

export default ComicDetail;