import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainSearchEngine from "./MainSearchEngine";
import SearchResults from "./SearchResults";
import OrderPage from "./OrderPage";
import ProfilePage from "./profile-pages/gangster-profile/ProfilePage";
import ThankYouPage from "./ThankYouPage";
import NavBar from "./NavBar";
import GangstersForTag from "./GangstersForTag"
import {withGangsters} from "./contexts/Gangsters";
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { withUser } from './contexts/User';
import {withJobs} from "./contexts/Jobs";
import MyProfile from "./profile-pages/my-profile/MyProfile";
import MyOrder from "./MyOrders"


class App extends Component {
  render() {
    return (
      <div>
        {
          this.props.user === null ? (
            <div>
              <SignInForm/>
              <SignUpForm/>
            </div>
          ) : (
            <Router>
              <div className="App">
                <NavBar/>
                {/*<p>*/}
                  {/*logged in as: {this.props.user.email}) <button onClick={this.props.signOut}>Sign out</button>*/}
                {/*</p>*/}
                <Route exact path="/" component={MainSearchEngine}/>
                <Route path="/search-results" component={SearchResults}/>
                <Route path="/profile/:gangsterId" component={ProfilePage}/>
                <Route path="/order/:gangsterId/:selectedDate" component={OrderPage}/>
                <Route path="/thank-you" component={ThankYouPage}/>
                <Route path="/gangsters-for-tag/:tagName" component={GangstersForTag}/>
                <Route path="/myprofile" component={MyProfile}/>
                <Route exact path="/myorder" component={MyOrder}/>
                {/*<Route path="/myprofile/name" component={}*/}
              </div>
            </Router>)
        }
      </div>
    )
  }
}

export default withJobs(withUser(withGangsters(App)));

