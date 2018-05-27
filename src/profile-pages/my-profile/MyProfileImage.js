import React from 'react'
import '../profile.css'

class MyProfileImage extends React.Component {

  render() {
    return (
      <div>
        <img
          className="image editableImage"
          src={this.props.image}
          alt={'face'}
          onClick={() => this.props.editField("image")}
        />
      </div>

    )
  }
}

export default MyProfileImage