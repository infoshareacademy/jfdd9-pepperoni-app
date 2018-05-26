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
    image: '',
    availability: [],
    description: '',
    experience: '',
    addedTag: ''
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

  sendDataToFirebase = () => {
    const gangsterRef = firebase.database().ref('/gangsters/' + this.props.user.uid)
    const imageRef = firebase.storage().ref('/photos/' + this.props.user.email)
    imageRef.getDownloadURL().then(function(url) {
      return url
    }
      gangsterRef.set({
      'availability': this.state.availability,
      'description': this.state.description,
      'experience': this.state.experience,
      'first_name': this.state.firstName,
      'gender': this.state.gender,
      'hometown': this.state.hometown,
      'image': '',
      'tags': this.state.selectedTags,
      'rating': 0,
      'opinions': '',
    })

    // firebase.database().ref('/gangsters/' + this.props.user.uid).set({
    //   email: data.user.email,
    //   tags: ['newbe']
    // })
    //
    // const newGangster = gangstersRef.push()
    // newJob.set({
    //   'accepted': false,
    //   'dateOfJob': dateOfJob,
    //   'dateOfOrder': dateOfOrder,
    //   'done': false,
    //   'employer': this.props.user.email,
    //   'gangster': this.state.gangster.email,
    //   'jobType': jobType,
    //   'message': message,
    // })

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

        {console.log(firebase.storage().ref('/photos/' + this.props.user.email))}
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
                sendDataToFirebase={this.sendDataToFirebase}
              />)}
          }/>
      </div>
    )
  }


}

export default withUser(withGangsters(MyProfileForm))