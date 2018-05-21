import React from 'react'
import StarsRating from "./StarsRating";
import { withGangsters } from "./contexts/Gangsters";
import { withUser} from "./User";
import firebase from 'firebase'

class MyProfilePage extends React.Component {

  render() {
    return (
      <div>
        <h1>{firebase.auth().currentUser.email}</h1>
      </div>
    )
  }


}


export default withUser(withGangsters(MyProfilePage))
