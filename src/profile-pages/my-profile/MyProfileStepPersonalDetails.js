import React from 'react'
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'
import { Link } from 'react-router-dom'

class MyProfileStepPersonalDetails extends React.Component {
  state = {
    firstName: '',
    hometown: '',
    gender: '',

  }

  render() {
    return (
      <div>
        <h2>2. Fill in your personal details</h2>
        <br/>
        <form onSubmit={this.handleSubmit}>
          <h3>Name: {this.state.firstName}</h3>
          Name
          <br/>
          <input
          type="text"
          name="firstName"
          value={this.state.firstName}
          onChange={this.handleChange}
          />
          <br/>
          Gender
          <br/>
          <input
            type="text"
            name="gender"
            value={this.state.gender}
            onChange={this.handleChange}
          />
          <br/>
          Hometown
          <br/>
          <input
            type="text"
            name="hometown"
            value={this.state.hometown}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }

}

export default withGangsters(MyProfileStepPersonalDetails)