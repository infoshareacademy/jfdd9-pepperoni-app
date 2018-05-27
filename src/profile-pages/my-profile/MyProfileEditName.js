import React from 'react'
import '../profile.css'

class MyProfileEditName extends React.Component {
  state = {
    firstName: this.props.firstName,
    error: null,
  }


  handleChange = (event) => {
    this.setState({
      firstName: event.target.value,
      error: null,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.firstName === '') {
      this.setState({
        error: new Error('Please specify your name')
      })
      return
    }

    this.props.updateData('firstName', this.state.firstName)
    this.props.exitEditMode()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        { this.state.error && <p>{this.state.error.message}</p>}
        <br/>
        <br/>
        <input
          className="myProfileInput"
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
        />
        <br/>
        <button style={{width: '150px'}}>Save</button>
      </form>
    )
  }
}

export default MyProfileEditName