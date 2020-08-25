import React from 'react';
import '../style/App.css';
import ComicList from '../container/ComicList';
import Navbar from '../container/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar>
      </Navbar>
      <ComicList />
    </div>
  );
}
export default App;
