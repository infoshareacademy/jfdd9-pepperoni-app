import React, { Component } from 'react'

class ContactForm extends Component {
  render() {
    return (
      <div>
        <input name="email"/>
        <button>Send</button>
      </div>
    )
  }
}

export default ContactForm