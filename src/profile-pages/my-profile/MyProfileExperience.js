import React from 'react'
import '../profile.css'

class MyProfileEditExperience extends React.Component {
  state = {
    experience: this.props.experience,
    error: null,
  }


  handleChange = (event) => {
    this.setState({
      experience: event.target.value,
      error: null,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.experience === '') {
      this.setState({
        error: new Error('Please describe your experience')
      })
      return
    }

    this.props.updateData('experience', this.state.experience)
    this.props.exitEditMode()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 style={{display: 'inline-block'}}>My experience</h2>
        { this.state.error && <p>{this.state.error.message}</p>}
        <br/>
        <input
          className="myProfileInput"
          type="text"
          name="experience"
          value={this.state.experience}
          onChange={this.handleChange}
        />
        <br/>
        <button style={{width: '150px'}}>Save</button>
      </form>
    )
  }
}

export default MyProfileEditExperience