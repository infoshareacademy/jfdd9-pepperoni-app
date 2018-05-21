import React from 'react'
import StarsRating from "./StarsRating";
import { withGangsters } from "./contexts/Gangsters";
import { withUser} from "./User";
import './profile.css'
import firebase from 'firebase'
import MyProfileForm from "./MyProfileForm";

class MyProfile extends React.Component {
  state = {
    gangster: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const gangsters = nextProps.gangsters.data
    return {
      gangster: gangsters.find(gangster => gangster.id.toString() === firebase.auth().currentUser.user.uid)
    }
  }

render() {

  <MyProfileForm/>

    return
}



}


export default withUser(withGangsters(MyProfile))
