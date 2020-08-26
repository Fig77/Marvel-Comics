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
        <Route exact path="/" render={props => <ComicList {...props}/>}/>
        <Route exact path="/comic/:key" render={props=> <ComicDetail {...props}/>}/>
     </div>
  </Router>
  );
}
export default App;
