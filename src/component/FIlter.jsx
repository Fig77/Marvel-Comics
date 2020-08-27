import React from 'react';
import styles from '../style/Filter.module.css';

const ComicFilter = (props) => {
  const { filterCategory } = props
  const FORMAT_COMICS = ['All','Comic', 'Hardcover', 'Magazine', 'Graphic Novel'];
  
  const formatOption = (e, index) => {
    return (<option key={index}>{e}</option>);
  }

  return (
    <div >
    <select className={styles.filter} onChange = {(event)=>filterCategory(event)} name="Category">
      {FORMAT_COMICS.map((x, index) => formatOption(x, index))}
    </select>
    </div>
  );
};

export default ComicFilter;