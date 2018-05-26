import React from 'react'
import StarsRating from "../../StarsRating";
import { withGangsters } from "../../contexts/Gangsters";
import { withUser} from "../../contexts/User";
import '../profile.css'
import firebase from 'firebase'
import editIcon from './editIcon.png'
import closeIcon from './closeIcon.png'
import Popup from "reactjs-popup";

class MyProfileEdit extends React.Component {
  state = {
    showNamePopup: false,
    firstName: ''

  }

  openModal = () => {
    this.setState({ showNamePopup: true });
  };
  closeModal = () => {
    this.setState({ showNamePopup: false });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const gangsterRef = firebase.database().ref('/gangsters/' + this.props.user.uid)

    gangsterRef.update({
      'first_name': this.state.firstName,

    })
  }

  render() {

    const gangster = this.props.gangster

    return (
      <div className="profilePage">
        {
          this.props.gangster === null || this.props.gangster === undefined
            ? 'Loading gangster details'
            : (
              <div>
                <div className="headerContainer">
                  <img className="editIcon" src={editIcon} alt="Edit field" onClick={this.openModal}/><h1 className="header">{gangster.first_name}</h1>

                  <Popup
                    open={this.state.showNamePopup}
                    closeOnDocumentClick
                    onClose={this.closeModal}
                  >
                    <div className="modal">
                      <a className="modalCloseButton" onClick={this.closeModal}><img src={closeIcon} alt="Close modal"/></a>
                      <form onSubmit={this.handleSubmit}>
                        Update your name
                        <br/>
                        <input
                          className="myProfileInput"
                          type="text"
                          name="firstName"
                          value={this.state.firstName}
                          onChange={this.handleChange}
                        />
                        <br/>
                        <button className="modalButton">Save</button>
                      </form>
                    </div>
                  </Popup>

                  <div className="stars"><StarsRating rating={gangster.rating}
                                                      gangsterId={gangster.id}
                  /></div>
                </div>

                <img className="image" src={gangster.image} alt={'face'}/>

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