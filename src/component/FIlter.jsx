import React from 'react';

const ComicFilter = (props) => {
  const { filterCategory } = props
  const FORMAT_COMICS = ['all','Comic', 'Hardcover', 'Trade paperbag', 'Digital comic'];
  
  const formatOption = (e, index) => {
    return (<option key={index}>{e}</option>);
  }

  return (
    <div class="arrow select-input">
    <select className="input-general border-inputs select-input" onChange = {(event)=>filterCategory(event)} name="Category">
      {FORMAT_COMICS.map((x, index) => formatOption(x, index))}
    </select>
    </div>
  );
};

export default ComicFilter;