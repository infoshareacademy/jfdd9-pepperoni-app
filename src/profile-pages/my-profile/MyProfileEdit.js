import React from 'react'
import StarsRating from "../../StarsRating";
import { withGangsters } from "../../contexts/Gangsters";
import { withUser} from "../../contexts/User";
import '../profile.css'
import firebase from 'firebase'

class MyProfileEdit extends React.Component {


  render() {
    return(
      <div></div>
    )
  }

}

export default withUser(withGangsters(MyProfileEdit))