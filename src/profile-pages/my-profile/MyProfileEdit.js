import React from 'react'
import { withGangsters } from "../../contexts/Gangsters";
import { withUser} from "../../contexts/User";
import '../profile.css'
import firebase from 'firebase'
import MyProfileName from "./MyProfileName";
import MyProfileEditName from "./MyProfileEditName";
import MyProfileEditImage from "./MyProfileEditImage";
import MyProfileImage from "./MyProfileImage";
import MyProfileEditTags from "./MyProfileEditTags";
import MyProfileTags from "./MyProfileTags";
import MyProfileGender from "./MyProfileGender";
import MyProfileEditGender from "./MyProfileEditGender";
import MyProfileHometown from "./MyProfileHometown";
import MyProfileEditHometown from "./MyProfileEditHometown";
import MyProfileDescription from "./MyProfileDescription";
import MyProfileEditDescription from "./MyProfileEditDescription";
import MyProfileExperience from "./MyProfileEditExperience";
import MyProfileEditExperience from "./MyProfileExperience";
import MyProfileAvailability from "./MyProfileAvailability";
import MyProfileEditAvailability from "./MyProfileEditAvailability";
import StarsRatingStatic from "../../StarsRatingStatic";

class MyProfileEdit extends React.Component {
  state = {
    gangster: this.props.gangster,
    editField: null,
    selectedTags: this.props.gangster.tags
  }

  editField = (fieldName) => {
    this.setState({
      editField: fieldName
    })
  }

  updateData = (dataName, updatedData) => {
    const gangsterRef = firebase.database().ref('/gangsters/' + this.props.user.uid)
    const newGangster = this.state.gangster

    if (dataName === 'firstName') {
      dataName = 'first_name'
    }

    gangsterRef.update({
      [dataName]: updatedData,
    })

    newGangster[dataName] = updatedData;

    this.setState({
      gangster: newGangster
    })

  }

  exitEditMode = () => {
    this.setState({
      editField: null,
    })
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


  render() {

    const gangster = this.props.gangster

    return (
      <div className="profilePage">
        {
          this.props.gangster === null || this.props.gangster === undefined
            ? 'Loading details'
            : (
              <div>
                <div className="headerContainer">

                  {this.state.editField !== 'name' ?
                    <MyProfileName
                      editField={this.editField}
                      gangster={this.props.gangster}
                    />
                    :
                    <MyProfileEditName
                      updateData={this.updateData}
                      firstName={this.state.gangster.first_name}
                      exitEditMode={this.exitEditMode}
                    />}
                    <div className="stars">
                      <StarsRatingStatic
                        rating={gangster.avgRating}
                        gangsterId={gangster.id}
                      />
                    </div>
                </div>

                {this.state.editField !== 'image' ?
                  <MyProfileImage
                    editField={this.editField}
                    image={this.state.gangster.image}
                  />
                  :
                  <MyProfileEditImage
                    exitEditMode={this.exitEditMode}
                    updateData={this.updateData}
                  />
                }

                {this.state.editField !== 'tags' ?
                  <MyProfileTags
                    tags={this.state.gangster.tags}
                    editField={this.editField}
                  />
                  :
                  <MyProfileEditTags
                    updateTagsData={this.updateData}
                    handleNewTagSubmit={this.handleNewTagSubmit}
                    selectAvailableTag={this.selectAvailableTag}
                    selectedTags={this.state.selectedTags}
                    exitEditMode={this.exitEditMode}
                    updateData={this.updateData}
                  />
                }

                {this.state.editField !== 'gender' ?
                  <MyProfileGender
                    editField={this.editField}
                    gangster={this.props.gangster}
                  />
                  :
                  <MyProfileEditGender
                    updateData={this.updateData}
                    gender={this.state.gangster.gender}
                    exitEditMode={this.exitEditMode}
                  />}

                <h3>Email: <a className="link" href={"mailto:" + gangster.email}>{gangster.email}</a></h3>


                {this.state.editField !== 'hometown' ?
                  <MyProfileHometown
                    editField={this.editField}
                    gangster={this.props.gangster}
                  />
                  :
                  <MyProfileEditHometown
                    updateData={this.updateData}
                    hometown={this.state.gangster.hometown}
                    exitEditMode={this.exitEditMode}
                  />}


                {this.state.editField !== 'availability' ?
                  <MyProfileAvailability
                    editField={this.editField}
                    gangster={this.props.gangster}
                  />
                  :
                  <MyProfileEditAvailability
                    updateData={this.updateData}
                    availability={this.state.gangster.availability}
                    exitEditMode={this.exitEditMode}
                  />}




                {this.state.editField !== 'description' ?
                  <MyProfileDescription
                    editField={this.editField}
                    gangster={this.props.gangster}
                  />
                  :
                  <MyProfileEditDescription
                    updateData={this.updateData}
                    description={this.state.gangster.description}
                    exitEditMode={this.exitEditMode}
                  />}


                {this.state.editField !== 'experience' ?
                  <MyProfileExperience
                    editField={this.editField}
                    gangster={this.props.gangster}
                  />
                  :
                  <MyProfileEditExperience
                    updateData={this.updateData}
                    experience={this.state.gangster.experience}
                    exitEditMode={this.exitEditMode}
                  />}

              </div>
            )
        }
      </div>

    )
  }

}

export default withUser(withGangsters(MyProfileEdit))