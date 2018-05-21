import React from 'react'
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'
import { Link } from 'react-router-dom'

class MyProfileStepPersonalDetails extends React.Component {
  state = {
    firstName: '',
    hometown: '',
    gender: '',
    formError: null,

  }

  handleGenderChange = event => {
    this.setState({
      gender: event.target.value,
      formError: null,
    })
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
      formError: null
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    if (this.state.firstName.trim() === '' || this.state.gender === '' || this.state.hometown.trim() === '') {
      this.setState({
        formError: new Error('Please fill in all the fields')
      })
      return
    }

    this.props.addPersonalDetails(this.state.firstName, this.state.hometown, this.state.gender)

    this.setState({
      firstName: '',
      hometown: '',
      gender: '',
      formError: null,
    })
  }


  render() {
    return (
      <div>
        <h2>2. Fill in your personal details</h2>
        <br/>

        <div className="divWithSelect">
          <label htmlFor="genderSelect">Gender: {this.props.gender}</label>
          <br/>
          <br/>
          <select id="genderSelect" className="select" onChange={this.handleGenderChange} name="gender" form="personal-details-form">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <br/>

        <form id="personal-details-form" onSubmit={this.handleSubmit}>
          Name: {this.props.firstName}
          <br/>
          <input
          className="myProfileInput"
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          />
          <br/>
          <br/>
          Hometown: {this.props.hometown}
          <br/>
          <input
            className="myProfileInput"
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={this.handleChange}
          />
          <br/>
          <button style={{width: '150px'}}>Add</button>

        </form>
        <br/>
        { this.state.formError && <h3>{this.state.formError.message}</h3>}
        <br/>
        {
          (this.props.hometown === '')
            ? (<button
              className="myProfileNextButton"
              style={{backgroundColor: '#4b5062'}}>
              Next step
            </button>)
            : (<Link to="/myprofile/availability"><button
              className="myProfileNextButton"
              style={{backgroundColor: '#E2083C'}}>
              Next step
            </button></Link>)
        }
      </div>
    )
  }

}

export default withGangsters(MyProfileStepPersonalDetails)