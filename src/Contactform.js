import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const emailInputStyle = {
  width: '40%',
  padding: '5px 20px',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'solid 1px rgba(31, 31, 31, 0.83)',
  color: 'white',
  fontFamily: 'inherit',
  fontSize: '1.1rem',
}

const inputStyle = {
  boxShadow: 'none',
  overflow: 'auto',
  width: '40%',
  padding: '20px',
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'solid 1px rgba(31, 31, 31, 0.83)',
  color: 'white',
  fontFamily: 'inherit',
  fontSize: '1.1rem',

}


class ContactForm extends Component {
 handleSubmit = event =>{
   event.preventDefault();
   console.log('submit');
 };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input style={emailInputStyle} name="email" placeholder="Email address"/>
          <br/>
          <textarea style={inputStyle} placeholder="Type in your message"/>
          <br/>
          <Link to={'/thank-you'}><button>Send</button></Link>

        </form>
      </div>
    )
  }
}

export default ContactForm;