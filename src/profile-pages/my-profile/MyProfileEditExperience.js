import React from 'react'
import '../profile.css'
import editIcon from './editIcon.png'

class MyProfileExperience extends React.Component {


  render() {
    return (

      <div>
        <img
          className="editIcon"
          src={editIcon}
          alt="Edit field"
          onClick={() => this.props.editField("experience")}/>
        <h2 style={{display: 'inline-block'}}>My experience</h2>
        <p className="lineSeparated">{this.props.gangster.experience}</p>
      </div>

    )
  }
}

export default MyProfileExperience