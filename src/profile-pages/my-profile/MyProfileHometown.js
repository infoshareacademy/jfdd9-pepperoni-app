import React from 'react'
import '../profile.css'
import editIcon from './editIcon.png'

class MyProfileHometown extends React.Component {


  render() {
    return (

      <div className="lineSeparated">
        <img
          className="editIcon"
          src={editIcon}
          alt="Edit field"
          onClick={() => this.props.editField("hometown")}/>
        <h3 style={{display: 'inline-block'}}>City: {this.props.gangster.hometown}</h3>
      </div>

    )
  }
}

export default MyProfileHometown