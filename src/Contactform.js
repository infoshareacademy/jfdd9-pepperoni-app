import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import moment from "moment/moment";

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
  state = {
    selectedTag: this.props.gangster.tags[0],
    message: ''
  }

  handleTagChange = event => {
    console.log(event.target.value)
    this.setState({
      selectedTag: event.target.value
    })
  }

  handleMessageChange = event => {
    this.setState({
      message: event.target.value
    })
  }

  handleSubmit = event =>{
    event.preventDefault();

    const dateOfOrder = moment().unix()

    this.props.addNewJob(this.state.selectedTag, dateOfOrder, this.state.message)

    this.props.history.push('/thank-you')
  };

  render() {
    var date = moment.unix((this.props.match.params.selectedDate/1000)).format("DD/MM/YYYY");
    return (
      <div>
        <h1>Your order</h1>
        <h2>Gangster: {this.props.gangster.first_name}</h2>
        <h2>Date: {date}</h2>
        <h2>Job: {this.state.selectedTag}</h2>
        <br/>
        <div style={divSelectStyle}>
          <label htmlFor="tagSelect">Select the job you need to get done:</label>
          <br/>
          <br/>
          <select value={this.state.selectedTag} id="tagSelect" style={selectStyle} onChange={this.handleTagChange} name="job" form="orderForm">
            {this.props.gangster.tags.map(tag => <option value={tag} key={tag}>{tag}</option>)}
          </select>
        </div>
        <form id="orderForm" onSubmit={this.handleSubmit}>
          <br/>
          <br/>
          <textarea style={inputStyle} placeholder="add details about your order" onChange={this.handleMessageChange}/>
          <br/>
          <button type='submit'>Send</button>

        </form>
      </div>
    )
  }
}

export default withRouter(ContactForm);