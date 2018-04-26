import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainSearchEngine from "./MainSearchEngine";


class App extends Component {
  render() {
    return (
      <Router>
        <div>


          <Route exact path="/" component={MainSearchEngine}/>
          {/*<Route path="/about" component={TasksView}/>*/}
          {/*<Route path="/tasks" component={TasksView}/>*/}
          {/*<Route path="/magic-number/:number" component={MagicNumber}/>*/}
        </div>
      </Router>
    );
  }
}

export default App;
