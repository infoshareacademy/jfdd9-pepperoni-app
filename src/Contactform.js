import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const emailInputStyle = {
  width: '40%',
  padding: '5px',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: 'solid 1px rgba(31, 31, 31, 0.83)',
  outline: 'none',
  color: 'white',
  fontFamily: 'inherit',
  fontSize: '1.1rem',
}

const inputStyle = {
  boxShadow: 'none',
  overflow: 'auto',
  width: '40%',
  padding: '5px',
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: 'solid 1px rgba(31, 31, 31, 0.83)',
  outline: 'none',
  color: 'white',
  fontFamily: 'inherit',
  fontSize: '1.1rem',
}

const divSelectStyle = {
  backgroundColor: '#090909',
  fontFamily: 'inherit',
  fontSize: '1.1rem',
  color: 'white',
  overflow: 'hidden',
  width: '40%',
  border: 'none',
}

const selectStyle = {
  backgroundColor: '#090909',
  padding: '5px',
  fontFamily: 'inherit',
  fontSize: '1.1rem',
  color: '#6c7267',
  width: '100%',
  border: 'none',
}

class ContactForm extends Component {

 handleSubmit = event =>{
   event.preventDefault();
 };

  render() {
    return (
      <div>
        <br/>
        <div style={divSelectStyle}>
          <label htmlFor="tagSelect">Select the job you need to get done:</label>
          <br/>
          <br/>
          <select id="tagSelect" style={selectStyle} onChange={this.props.handleTagChange} name="job" form="orderForm">
            {this.props.tags.map(tag => <option value={tag} key={tag}>{tag}</option>)}
          </select>
        </div>
        <form id="orderForm" onSubmit={this.handleSubmit}>
          <br/>
          <input style={emailInputStyle} name="email" placeholder="Type in your email"/>
          <br/>
          <br/>
          <textarea style={inputStyle} placeholder="Add details about your order"/>
          <br/>
          <Link to={'/thank-you'}><button>Send</button></Link>

        </form>
      </div>
    )
  }
}

export default ContactForm;