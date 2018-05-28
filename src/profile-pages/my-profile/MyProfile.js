import React from 'react'
import { withGangsters } from "../../contexts/Gangsters";
import { withUser} from "../../contexts/User";
import '../profile.css'
import firebase from 'firebase'
import MyProfileForm from "./MyProfileForm";
import MyProfileEdit from "./MyProfileEdit"


class MyProfile extends React.Component {
  state = {
    gangster: {id: 0},
    waitingToUpdate: false,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const gangsters = nextProps.gangsters.data
    const currentGangster = gangsters.find(gangster => gangster.id.toString() === firebase.auth().currentUser.uid)
    if (typeof (currentGangster) !== 'undefined') {
      return {
        gangster: gangsters.find(gangster => gangster.id.toString() === firebase.auth().currentUser.uid),
        }
      } else {
      return {
        gangster: {id: 0},
      }
    }
  }

  waitingForFirebaseToSave = () => {
    this.setState({
      waitingToUpdate: true
    })
  }

  markProfileAsCompleted = () => {
    this.setState({
      waitingToUpdate: false
    })
  }

  updateGangster = (userId, gangsterData) => {
    this.setState({
      gangster: {id: userId, ...gangsterData}
    })
  }


render() {
    return (
      <div>
        {this.props.gangsters.fetching
          ? <div>Fetching data...</div>

          : (this.state.gangster.id === 0 ?
            ( this.state.waitingToUpdate ?
              <div>We're updating your profile data...</div>
              :
                <MyProfileForm
                gangster={this.state.gangster}
                waitingForFirebaseToSave={this.waitingForFirebaseToSave}
                markProfileAsCompleted={this.markProfileAsCompleted}
                updateGangster={this.updateGangster}
              />)
          :
              <MyProfileEdit
                gangster={this.state.gangster}
              />
            )
        }
      </div>
      )
  }
}


export default withUser(withGangsters(MyProfile))
