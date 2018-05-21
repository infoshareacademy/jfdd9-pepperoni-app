import React, { Component } from 'react'
import { withUser } from './User';

// const listStyle = {
//   fontSize: '25px',
//   width: '80%',
//   display: 'inline-block',
//   textDecoration: 'none',
//   marginTop: '26px',
//   marginBottom: '0px',
//   verticalAlign: 'top',
//   color: '#ececec',
// }

const formSectionLayer = {
  maxWidth: '40rem',
  margin: '0 auto',
  padding: '1rem',
  textAlign: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  flexDirection: 'column',
  lineHeight: '2rem',
  border: 'solid 1px rgba(31, 31, 31, 0.83)',
  borderRadius: '10px',
  backgroundColor: 'rgba(15, 15, 15, 0.83)',
}

class SignInForm extends Component {

  state = {
    username: '',
    password: '',
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signIn(this.state.username, this.state.password)
  }

  render() {
    return (
      <div style={formSectionLayer}>
        <h2>Welcome text</h2>
        {this.props.signInError && <p>{this.props.signInError.message}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.username}
            name="username"
            type="text"
            placeholder="Username"
            onChange={this.handleChange}
          /><br/>
          <input
            value={this.state.password}
            name="password"
            type="password"
            placeholder="Your Email"
            onChange={this.handleChange}
          /><br/>
          <button>sign in</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignInForm)