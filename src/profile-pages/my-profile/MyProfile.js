import React from 'react'
import { withGangsters } from "../../contexts/Gangsters";
import { withUser} from "../../contexts/User";
import '../profile.css'
import firebase from 'firebase'
import MyProfileForm from "./MyProfileForm";
import MyProfileEdit from "./MyProfileEdit"


class MyProfile extends React.Component {
  state = {
    gangster: null,
    isProfileComplete: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const gangsters = nextProps.gangsters.data
    return {
      gangster: gangsters.find(gangster => gangster.id.toString() === firebase.auth().currentUser.uid),
    }
  }


render() {

    return (
      <div>
        {typeof(this.state.gangster) === 'undefined' ?
          <div>Fetching data...</div>
          :

          (this.state.gangster.description === null || this.state.gangster.description === '' || typeof(this.state.gangster.description) === 'undefined'?
            <MyProfileForm
              gangster={this.state.gangster}
            />
            :
            <MyProfileEdit
              gangster={this.state.gangster}/>
            )
        }
      </div>
      )
  }
}


export default withUser(withGangsters(MyProfile))
