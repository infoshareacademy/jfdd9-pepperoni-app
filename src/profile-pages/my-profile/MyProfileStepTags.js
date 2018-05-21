import React from 'react'
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'
import { Link } from 'react-router-dom'

class MyProfileStepTags extends React.Component {
  state= {
    error: null,
    addedTag: ''
  }

  handleNewTagChange = event => {
    this.setState({
      addedTag: event.target.value
    })
  }

  handleNewTagSubmit = event => {
    event.preventDefault()

    if (this.props.selectedTags.includes(this.state.addedTag)) {
      this.setState({
        error: new Error('You have already added this ability')
      })
      return
    }
    this.props.handleNewTagSubmit(this.state.addedTag)

    this.setState({
      addedTag: ''
    })
  }

  handleAvailableTagSelect = event => {
    const tagName = event.target.name
    this.props.selectAvailableTag(tagName)
  }


  render() {
    const tags = this.props.gangsters.uniqueTags

    return (
      <div>
        <h2>1. What you do</h2>
        Select from the already-available tags or add your own unique ability
        <br/>
        <br/>
        <div className="tagsContainer">
          {tags.map(tag =>
            <button
              name={tag}
              className="smallTag"
              style={{backgroundColor: this.props.selectedTags.includes(tag) ? '#E2083C' : '#4b5062'}}
              key={tag}
              onClick={this.handleAvailableTagSelect}>
              {tag}
            </button>)}
        </div>

        <form onSubmit={this.handleNewTagSubmit}>
          <h3>Add another ability</h3>
          <input
            className="myProfileInput"
            type="text"
            name="addedTag"
            value={this.state.addedTag}
            onChange={this.handleNewTagChange}
          />
          { this.state.error && <p>{this.state.error.message}</p>}
        </form>
        <h3>Your abilities: {this.props.selectedTags.join(", ")}</h3>
        {
          (this.props.selectedTags.length === 0)
            ? (<button
              className="myProfileNextButton"
              style={{backgroundColor: '#4b5062'}}>
              Next step
            </button>)
            : (<Link to="/myprofile/personal-details"><button
              className="myProfileNextButton"
              style={{backgroundColor: '#E2083C'}}>
              Next step
            </button></Link>)
        }

      </div>
    )
  }


}

export default withGangsters(MyProfileStepTags)

