import React from 'react';
import '../style/App.css';
import ComicList from '../container/ComicList';
import ComicDetail from '../component/ComicDetail';
import Navbar from '../container/Navbar';
import { BrowserRouter as Router, Route,  Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/"  component={ComicList} />
        <Route exact path="/comic/:key" component={ComicDetail}/>
     </div>
  </Router>
  );
}
export default App;
