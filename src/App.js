import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MainSearchEngine from "./MainSearchEngine";
import SearchResults from "./SearchResults";
import OrderPage from "./OrderPage";
import ProfilePage from "./ProfilePage";
import ThankYouPage from "./ThankYouPage";
import NavBar from "./NavBar";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar/>
          <Route exact path="/" component={MainSearchEngine}/>
          <Route path="/search-results" component={SearchResults}/>
          <Route path="/profile/:gangsterId" component={ProfilePage}/>
          <Route path="/order/:gangsterId/:selectedDate" component={OrderPage}/>
          <Route path="/thank-you" component={ThankYouPage}/>
        </div>
      </Router>
    );
  }
}

export default App;
