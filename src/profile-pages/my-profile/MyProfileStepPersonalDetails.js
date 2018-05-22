import React from 'react'
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'
import { Link } from 'react-router-dom'

class MyProfileStepPersonalDetails extends React.Component {
  state = {
    firstName: '',
    hometown: '',
    gender: '',
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

  validateInput = (inputName) => {
    const errorFieldName = inputName + 'FormError';
    if (this.state.inputName.trim() === '' && !this.props.inputName) {
      this.setState({
        [errorFieldName]: new Error('Please fill in first name')
      })
      isError = true;
    }
    const firstName = this.state.firstName !== '' ? this.state.firstName : this.props.firstName;
  }

  handleSubmit = event => {
    event.preventDefault()

    let isError = false;

    if (this.state.firstName.trim() === '' && !this.props.firstName) {
      this.setState({
        firstNameFormError: new Error('Please fill in first name')
      })
      isError = true;
    }
    const firstName = this.state.firstName !== '' ? this.state.firstName : this.props.firstName;

    if (this.state.gender === '') {
      console.log("gender error")
      this.setState({
        genderFormError: new Error('Please fill in gender')
      })
      isError = true;
    }

    if (this.state.hometown.trim() === '' && !this.props.hometown) {
      this.setState({
        hometownFormError: new Error('Please fill in hometown')
      })
      isError = true;
    }
    const homeTown = this.state.hometown !== '' ? this.state.hometown : this.props.hometown;

    if (isError) {
      console.log(" jest jakis error")
      return
    }

    this.props.addPersonalDetails(firstName, homeTown, this.state.gender)

    this.setState({
      firstName: '',
      hometown: '',
      gender: '',
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
          { this.state.firstNameFormError && <h3>{this.state.firstNameFormError.message}</h3>}
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
          { this.state.hometownFormError && <h3>{this.state.hometownFormError.message}</h3>}
          <br/>
          <button style={{width: '150px'}}>Add</button>

        </form>
        <br/>
        { this.state.genderFormError && <h3>{this.state.genderFormError.message}</h3>}
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