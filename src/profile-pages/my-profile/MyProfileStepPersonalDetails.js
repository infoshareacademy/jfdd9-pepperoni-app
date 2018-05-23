import React from 'react'
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'
import { Link } from 'react-router-dom'

class MyProfileStepPersonalDetails extends React.Component {
  state = {
    firstName: '',
    hometown: '',
    gender: 'male',
    firstNameFormError: null,
    genderFormError: null,
    hometownFormError: null,

  }

  handleGenderChange = event => {
    this.setState({
      gender: event.target.value,
      genderFormError: null,
    })
  }

  handleChange = event => {
    const targetName = event.target.name
    this.setState({
      [targetName]: event.target.value,
    })

    if (targetName === 'hometown') {
      this.setState({
        hometownFormError: null
      })
    }

    if (targetName === 'firstName') {
      this.setState({
        firstNameFormError: null
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    let isError = false;

    if (this.state.firstName.trim() === '' && !this.props.firstName) {
      this.setState({
        firstNameFormError: new Error('Please specify your first name')
      })
      isError = true;
    }

    if (this.state.gender === '') {
      this.setState({
        genderFormError: new Error('Please specify your gender')
      })
      isError = true;
    }

    if (this.state.hometown.trim() === '' && !this.props.hometown) {
      this.setState({
        hometownFormError: new Error('Please specify where you are based')
      })
      isError = true;
    }

    if (isError) {
      return
    }

    this.props.addPersonalDetails(this.state.firstName, this.state.hometown, this.state.gender)

    this.setState({
      firstNameFormError: null,
      genderFormError: null,
      hometownFormError: null,
    })
  }


  render() {
    return (
      <div>
        <h2>2. Fill in your personal details</h2>
        <br/>

        <div className="divWithSelect">
          <strong><label htmlFor="genderSelect">Gender: {this.props.gender}</label></strong>
          <br/>
          <br/>
          <select value={this.state.gender} id="genderSelect" className="select" onChange={this.handleGenderChange} name="gender" form="personal-details-form">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        { this.state.genderFormError && <p>{this.state.genderFormError.message}</p>}
        <br/>

        <form id="personal-details-form" onSubmit={this.handleSubmit}>
          <strong>Name: {this.props.firstName}</strong>
          <br/>
          <input
          className="myProfileInput"
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          />
          { this.state.firstNameFormError && <p>{this.state.firstNameFormError.message}</p>}
          <br/>
          <br/>
          <strong>Hometown: {this.props.hometown}</strong>
          <br/>
          <input
            className="myProfileInput"
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={this.handleChange}
          />
          { this.state.hometownFormError && <p>{this.state.hometownFormError.message}</p>}
          <br/>
          <button style={{width: '150px'}}>Add</button>

        </form>
        <br/>

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