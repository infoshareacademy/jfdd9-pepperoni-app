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
  color: '#fff',
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
  backgroundColor: 'rgb(75, 80, 98)',
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


class SignUpForm extends Component {

  state = {
    username: '',
    password: '',
    error: null
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.signUp(this.state.username, this.state.password).catch(
      error => this.setState({ error })
    )
  }

  render() {
    return (
      <div style={formSectionLayer}>
        <h2 style={header}>JOIN GANGBOOK</h2>
        {this.state.error && <p style={{color: '#fff'}}>{this.state.error.message}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            style={formEmail}
            value={this.state.username}
            name="username"
            type="text"
            placeholder="Your email"
            onChange={this.handleChange}
          />
          <input
            style={formEmail}
            value={this.state.password}
            name="password"
            type="password"
            placeholder="Password"
            onChange={this.handleChange}
          />
          <button
            style={formButton}
          >Sign up</button>
        </form>
      </div>
    )
  }
}

export default withUser(SignUpForm)