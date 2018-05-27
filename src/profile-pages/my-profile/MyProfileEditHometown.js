import React from 'react'
import '../profile.css'

class MyProfileEditHometown extends React.Component {
  state = {
    hometown: this.props.hometown,
    error: null
  }


  handleChange = (event) => {
    this.setState({
      hometown: event.target.value,
      error: null,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.state.hometown === '') {
      this.setState({
        error: new Error('Please specify your hometown')
      })
      return
    }

    this.props.updateData('hometown', this.state.hometown)
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
          name="hometown"
          value={this.state.hometown}
          onChange={this.handleChange}
        />
        <br/>
        <button style={{width: '150px'}}>Save</button>
      </form>
    )
  }
}

export default MyProfileEditHometown