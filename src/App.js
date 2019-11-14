import React from 'react';
import Items from './containers/Items';
import { Route, BrowserRouter as Router, } from 'react-router-dom';
import Navbar from './components/Navbar';

import './App.scss';

const App = () => (
  <Router>
    <div className="page">
      <Navbar>Demo App</Navbar>
      <Route path="/:id?">
          <Items />
      </Route>
    </div>
  </Router>
)
export default App;
