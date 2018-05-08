import React, { Component } from 'react'

class ContactForm extends Component {
 handleSubmit = event =>{
   event.preventDefault();
   console.log('submit');
 };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <input name="email" value="email address"/>
        <button>Send</button>
        <div>
          <textarea></textarea>
        </div>
        </form>
      </div>
    )
  }
}

export default ContactForm;