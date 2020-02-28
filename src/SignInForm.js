import React, { Component } from 'react'
import { withUser } from './contexts/User';

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
  marginTop: '2rem',
}
const header = {
  color: '#ececec',
fontFamily: 'Quattrocento, serif',
  fontSize: '1,5em',
  fontWeight: 'bold',
}
  const formEmail = {
  padding: '1rem',
    boxSizing: 'border-box',
  width: '70%',
  border: 'solid 2px black',
    borderRadius: '10px',
}

  const formButton = {
  height: '3rem',
  width: '70%',
  backgroundColor: '#E2083C',
  border: 'none',
  color: '#fff',
  fontWeight: 'bolder',
  fontSize: '1.2rem',
  marginTop: '0.5rem',
  cursor: 'pointer',
  boxSizing: 'border-box',
    borderRadius: '10px',
    marginBottom: '1rem',
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
        <h2 style={header}>SIGN IN</h2>
        {this.props.signInError && <p style={{color: '#fff'}}>{this.props.signInError.message}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            style={formEmail}
            value={this.state.userName}
            name="userName"
            type="text"
            placeholder="Your email"
            onChange={this.handleChange}
          /><br/>
          <input
            style={formEmail}
            value={this.state.password}
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          /><br/>
          <button
            style={formButton}
          >Sign in</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignInForm)