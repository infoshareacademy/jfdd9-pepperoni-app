import React from 'react'
import {withUser} from "../../contexts/User";
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'
import MyProfileStepTags from './MyProfileStepTags'
import MyProfileStepPersonalDetails from './MyProfileStepPersonalDetails'
import MyProfileStepAvailability from './MyProfileStepAvailability'
import MyProfileStepAdditionalInformation from './MyProfileStepAdditionalInformation'
import { Route } from "react-router-dom";
import firebase from "firebase";


class MyProfileForm extends React.Component {
  state = {
    firstName: '',
    selectedTags: [],
    gender: '',
    hometown: '',
    image: 'https://firebasestorage.googleapis.com/v0/b/pepperoni-app.appspot.com/o/photos%2Fdefault-gangster-photo.jpg?alt=media&token=dc8e6397-dbee-4055-8721-3eb94a35875a',
    availability: [],
    description: '',
    experience: '',
    addedTag: '',
  }

  selectAvailableTag = (tagName) => {
    if (this.state.selectedTags.includes(tagName)) {
      const newSelectedTags = this.state.selectedTags;
      const tagIndex = newSelectedTags.indexOf(tagName);
      if (newSelectedTags.includes(tagName)) {
        newSelectedTags.splice(tagIndex, 1)
      }

      this.setState({
        selectedTags: newSelectedTags
      })
    } else {
      this.setState({
        selectedTags: this.state.selectedTags.concat(tagName)
      })
    }
  }

  handleNewTagSubmit = (tagName) => {
    this.setState({
      selectedTags: this.state.selectedTags.concat(tagName),
    })
  }

  addPersonalDetails = (firstName, hometown, gender) => {
    this.setState({
      firstName: firstName,
      gender: gender,
      hometown: hometown,
    })
  }

  addAvailability = (availability) => {
    this.setState({
      availability: availability
    })
  }

  addAdditionalInformation = (experience, description) => {
    this.setState({
      experience: experience,
      description: description,
    })
  }

  updateStateURL = (url) => {
    this.setState({
      image: url,
    })
}

  sendDataToFirebase = () => {
    const gangsterRef = firebase.database().ref('/gangsters/' + this.props.user.uid)
    gangsterRef.set({
      'availability': this.state.availability,
      'description': this.state.description,
      'experience': this.state.experience,
      'first_name': this.state.firstName,
      'gender': this.state.gender,
      'hometown': this.state.hometown,
      'image': this.state.image,
      'tags': this.state.selectedTags,
      'rating': 0,
      'opinions': '',
    })

  }

  render() {
    return (
      <div className="profilePage">
        <h1>Complete your profile to become a gangster</h1>
            <Route exact path={'/myprofile/'} render={() => {
              return (<MyProfileStepTags
              selectedTags={this.state.selectedTags}
              handleNewTagSubmit={this.handleNewTagSubmit}
              selectAvailableTag={this.selectAvailableTag}
            />)}
            }/>

            <Route path={'/myprofile/personal-details'} render={() => {
              return (
                <MyProfileStepPersonalDetails
                  firstName={this.state.firstName}
                  hometown={this.state.hometown}
                  gender={this.state.gender}
                  addPersonalDetails={this.addPersonalDetails}
              />)}
            }/>

            <Route path={'/myprofile/availability'} render={() => {
              return (
                <MyProfileStepAvailability
                addAvailability={this.addAvailability}
                availability={this.state.availability}
              />)}
            }/>

          <Route path={'/myprofile/additional-information'} render={() => {
            return (
              <MyProfileStepAdditionalInformation
                addAdditionalInformation={this.addAdditionalInformation}
                experience={this.state.experience}
                description={this.state.description}
                image={this.state.image}
                sendDataToFirebase={this.sendDataToFirebase}
                updateStateURL={this.updateStateURL.bind(this)}
              />)}
          }/>
      </div>
    )
  }


}

export default withUser(withGangsters(MyProfileForm))