import React from 'react'
import StarsRating from "../../StarsRating";
import { withGangsters } from "../../contexts/Gangsters";
import { withUser} from "../../contexts/User";
import '../profile.css'
import firebase from 'firebase'
import MyProfileName from "./MyProfileName";
import MyProfileEditName from "./MyProfileEditName";
import MyProfileEditImage from "./MyProfileEditImage";
import MyProfileImage from "./MyProfileImage";

class MyProfileEdit extends React.Component {
  state = {
    gangster: this.props.gangster,
    editField: null,

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

  // updateFirebaseUrl = (url) => {
  //   const gangsterRef = firebase.database().ref('/gangsters/' + this.props.user.uid)
  //   gangsterRef.update({
  //     'image': url,
  // }

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

                  <div className="stars"><StarsRating rating={gangster.rating}
                                                      gangsterId={gangster.id}
                  /></div>
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

                <div className="tagsContainer">
                  {gangster.tags.map(tag => <p key={tag} className="smallTag">{tag}</p>)}
                </div>

                <h3>{gangster.gender}</h3>

                <h3>Email: <a className="link" href={"mailto:" + gangster.email}>{gangster.email}</a></h3>

                <h3 className="lineSeparated">City: {gangster.hometown}</h3>

                <h3>Availability: </h3>
                <p className="lineSeparated">{gangster.availability.join(', ')}</p>


                <h2>About me</h2>
                <p className="lineSeparated">{gangster.description}</p>

                <h2>My experience</h2>
                <p className="lineSeparated">{gangster.experience}</p>

                <h2>They recommend me</h2>
                <p className="lineSeparated">{gangster.opinions}</p>


              </div>
            )
        }
      </div>

    )
  }

}

export default withUser(withGangsters(MyProfileEdit))