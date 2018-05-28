import React from 'react'
import '../profile.css'

class MyProfileEditDescription extends React.Component {
  state = {
    description: this.props.description,
    error: null,
  }


  handleChange = (event) => {
    this.setState({
      description: event.target.value,
      error: null,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.description === '') {
      this.setState({
        error: new Error('Please add some description')
      })
      return
    }

    this.props.updateData('description', this.state.description)
    this.props.exitEditMode()
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2 style={{display: 'inline-block'}}>About me</h2>
        { this.state.error && <p>{this.state.error.message}</p>}
        <br/>
        <input
          className="myProfileInput"
          type="text"
          name="description"
          value={this.state.description}
          onChange={this.handleChange}
        />
        <br/>
        <button style={{width: '150px'}}>Save</button>
      </form>
    )
  }
}

export default MyProfileEditDescription