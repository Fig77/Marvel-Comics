import React from 'react';
import '../style/App.css';
import ItemList from '../container/ItemList';
import ComicDetail from '../component/ComicDetail';
import Navbar from '../container/Navbar';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from '../component/Footer';
import ScrollTop from './ScrollTop';
import NotFound from './NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <ScrollTop>
          <Switch>
            <Route exact path="/"  component={ItemList} />
            <Route exact path="/comic/:key" component={ComicDetail}/>
            <Route component={NotFound} />
          </Switch>
        </ScrollTop>
        <Footer />
     </div>
  </Router>
  );
}
export default App;