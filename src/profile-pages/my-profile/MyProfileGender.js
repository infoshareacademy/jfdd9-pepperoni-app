import React from 'react'
import '../profile.css'
import editIcon from './editIcon.png'

class MyProfileGender extends React.Component {


  render() {
    return (

      <div>
        <img
          className="editIcon"
          src={editIcon}
          alt="Edit field"
          onClick={() => this.props.editField("gender")}/>
        <h3 className="header">
          {this.props.gangster.gender}
        </h3>
      </div>

    )
  }
}

export default MyProfileGender