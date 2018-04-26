import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainSearchEngine from "./MainSearchEngine";
import SearchResults from "./SearchResults";
import OrderPage from "./OrderPage";
import ProfilePage from "./ProfilePage";
import ThankYouPage from "./ThankYouPage";


class App extends Component {
  render() {
    return (
      <Router>
        <div>


          <Route exact path="/" component={MainSearchEngine}/>
          <Route path="/search-results" component={SearchResults}/>
          <Route path="/profile" component={ProfilePage}/>
          <Route path="/order" component={OrderPage}/>
          <Route path="/thank-you" component={ThankYouPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
