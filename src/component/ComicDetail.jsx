import React from 'react';
import {Link, useParams} from 'react-router-dom';
import {useSelector} from 'react-redux';


const ComicDetail = (props) => {
  const comics = useSelector(store => store);
  const key = props.match.params.key;
  console.log(comics);
  return (
  <section>
    <div>
      <h2>{ comics[key].title }</h2>
      <div>
        <p> { comics[key].description} </p>
        <div>
          <span> Issue number: {comics[key].issueNumber} </span>
          <ul> Characters that appear on this comic:  </ul>
        </div>
      </div>
    </div>
    <div>
      <img alt="no img yet" src={comics[key].images[0].path.concat("/portrait_incredible.").concat(comics[key].images[0].extension)}/>
    </div>
    <Link to="/">Go back</Link>
  </section>
  );
};

export default ComicDetail;