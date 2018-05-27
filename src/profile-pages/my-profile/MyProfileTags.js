import React from 'react'
import '../profile.css'
import editIcon from './editIcon.png'

class MyProfileTags extends React.Component {

  render() {
    return (
        <div className="tagsContainer">
          <img
            className="editIcon"
            src={editIcon}
            alt="Edit field"
            onClick={() => this.props.editField("tags")}/>
          {this.props.tags.map(tag => <p key={tag} className="smallTag">{tag}</p>)}
        </div>

    )
  }
}

export default MyProfileTags