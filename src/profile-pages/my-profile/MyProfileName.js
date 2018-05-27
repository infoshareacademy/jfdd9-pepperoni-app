import React from 'react'
import '../profile.css'
import editIcon from './editIcon.png'

class MyProfileName extends React.Component {


  render() {
    return (

      <div>
        <img
          className="editIcon"
          src={editIcon}
          alt="Edit field"
          onClick={() => this.props.editField("name")}/>
        <h1 className="header">
          {this.props.gangster.first_name}
        </h1>
      </div>

    )
  }
}

export default MyProfileName