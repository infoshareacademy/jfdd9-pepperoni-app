import React from 'react'
import {withUser} from "../../contexts/User";
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'
import MyProfileStepTags from './MyProfileStepTags'
import MyProfileStepPersonalDetails from './MyProfileStepPersonalDetails'
import MyProfileStepAvailability from './MyProfileStepAvailability'

import { BrowserRouter as Router, Route } from "react-router-dom";


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
      };
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

  // handleSubmit = event => {
  //   event.preventDefault()
  //
  //   if (this.state.taskName.trim() === '') {
  //     this.setState({
  //       formError: new Error('Task name cannot be empty')
  //     })
  //     return
  //   }
  //
  //   this.setState({
  //     taskName: '',
  //     taskDescription: ''
  //   })
  // }
  //
  // handleChange = event => {
  //   this.setState({
  //     [event.target.name]: event.target.value,
  //     formError: null
  //   })
  // }



  render() {
    return (
      <Router>
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
            return (<MyProfileStepAvailability
            />)}
          }/>


      </div>
      </Router>
    )
  }


}

export default withGangsters(MyProfileForm)