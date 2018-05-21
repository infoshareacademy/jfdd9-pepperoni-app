import React from 'react'
import {withUser} from "./User";
import {withGangsters} from "./contexts/Gangsters";
import './profile.css'

const divSelectStyle = {
  backgroundColor: '#090909',
  fontFamily: 'inherit',
  fontSize: '1.1rem',
  color: 'white',
  overflow: 'hidden',
  width: '40%',
  border: 'none',
}

const selectStyle = {
  backgroundColor: '#090909',
  padding: '5px',
  fontFamily: 'inherit',
  fontSize: '1.1rem',
  color: '#6c7267',
  width: '100%',
  border: 'none',
}

class MyProfileForm extends React.Component {
  state = {
    firstName: '',
    selectedTags: [],
    gender: '',
    hometown: '',
    image: '',
    availability: [],
    description: '',
    experience: '',
    formError: ''
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.state.taskName.trim() === '') {
      this.setState({
        formError: new Error('Task name cannot be empty')
      })
      return
    }

    this.props.addTask(this.state.taskName, this.state.taskDescription)

    this.setState({
      taskName: '',
      taskDescription: ''
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      formError: null
    })
  }

  handleAvailableTagSelect = event => {
    if (this.state.selectedTags.includes(event.target.name)) {
      const newSelectedTags = this.state.selectedTags;
      const tagIndex = newSelectedTags.indexOf(event.target.name);
      if (newSelectedTags.includes(event.target.name)) {
        newSelectedTags.splice(tagIndex, 1)
      };
      this.setState({
        selectedTags: newSelectedTags
      })
    } else {
      this.setState({
        selectedTags: this.state.selectedTags.concat(event.target.name)
      })
    }
  }


  handleTagChange = event => {
    this.setState({
      addedTag: event.target.value
    })
  }

  handleTagSubmit = event => {
    event.preventDefault()

    this.setState({
      selectedTags: this.state.selectedTags.concat(this.state.addedTag),
      addedTag: ''
    })
  }

  render() {
    const tags = this.props.gangsters.uniqueTags

    return (
      <React.Fragment>
      <h1>Complete your profile to become a gangster</h1>
        <h2>Your abilities:</h2>
        Select from the already-available tags or add your own unique ability
        {tags.map(tag =>
          <button
            name={tag}
            className="smallTag"
            style={{backgroundColor: this.state.selectedTags.includes(tag) ? '#E2083C' : '#4b5062'}}
            key={tag}
            onClick={this.handleAvailableTagSelect}>
            {tag}
          </button>)}

        <form onSubmit={this.handleTagSubmit}>
          <h2>New tag</h2>
          <input
            type="text"
            name="firstName"
            value={this.state.addedTag}
            onChange={this.handleTagChange}
          />
        </form>


        <form onSubmit={this.handleSubmit}>
          <h2>Name</h2>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />


          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
        </form>
      </React.Fragment>
    )
  }


}

export default withGangsters(MyProfileForm)