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
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const gangsters = nextProps.gangsters.data
    return {
      gangster: gangsters.find(gangster => gangster.id.toString() === firebase.auth().currentUser.uid),
    }
  }

  updateFirstName = (newName) => {
    const newGangster = this.state.gangster

    newGangster.first_name = newName
    this.setState({
      gangster: newGangster
    })
  }


render() {

    return (
      <div>
        {typeof(this.state.gangster) === 'undefined' ?
          <div>Fetching data...</div>
          :

          (this.state.gangster.description !== '' ?
            <MyProfileEdit
              gangster={this.state.gangster}
              firstName={this.state.firstName}
              updateFirstName={this.updateFirstName}/>
            : <MyProfileForm/>)
        }
      </div>
      )
  }
}


export default withUser(withGangsters(MyProfile))
