import React from 'react'
import '../profile.css'

class MyProfileEditName extends React.Component {
  state = {
    firstName: this.props.firstName
  }


  handleChange = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.updateData('firstName', this.state.firstName)
    this.props.exitEditMode()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
        <button className="modalButton">Save</button>
      </form>
    )
  }
}

export default MyProfileEditName