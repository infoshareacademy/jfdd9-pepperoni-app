import React from 'react'
import '../profile.css'
import editIcon from './editIcon.png'

class MyProfileDescription extends React.Component {


  render() {
    return (

      <div>
        <img
          className="editIcon"
          src={editIcon}
          alt="Edit field"
          onClick={() => this.props.editField("description")}/>
        <h2 style={{display: 'inline-block'}}>About me</h2>
        <p className="lineSeparated">{this.props.gangster.description}</p>
      </div>

    )
  }
}

export default MyProfileDescription