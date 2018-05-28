import React from 'react'
import '../profile.css'
import editIcon from './editIcon.png'

class MyProfileAvailability extends React.Component {


  render() {
    return (

      <div>
        <img
          className="editIcon"
          src={editIcon}
          alt="Edit field"
          onClick={() => this.props.editField("availability")}/>
        <h2 style={{display: 'inline-block'}}>Availability</h2>
        <p className="lineSeparated">{this.props.gangster.availability.join(', ')}</p>
      </div>

    )
  }
}

export default MyProfileAvailability