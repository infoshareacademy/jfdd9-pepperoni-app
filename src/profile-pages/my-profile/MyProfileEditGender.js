import React from 'react'
import '../profile.css'

class MyProfileEditGender extends React.Component {
  state = {
    gender: this.props.gender,
    error: null
  }


  handleGenderChange = event => {
    this.setState({
      gender: event.target.value,
      error: null,
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    let isError = false;

    if (this.state.gender === '') {
      this.setState({
        error: new Error('Please specify your gender')
      })
      isError = true;
    }
    if (isError) {
      return
    }

    this.props.updateData('gender', this.state.gender)

    this.setState({
      error: null,
    })

    this.props.exitEditMode()
  }

  render() {
    return (
      <div>
        <br/>
          <div className="divWithSelect">
            <form id="personal-details-form" onSubmit={this.handleSubmit}>
            <strong><label htmlFor="genderSelect">Update your gender</label></strong>
            <br/>
            <br/>
            <select
              value={this.state.gender}
              id="genderSelect"
              className="select"
              onChange={this.handleGenderChange}
              name="gender"
              form="personal-details-form">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
              <button style={{width: '150px'}}>Save</button>
            </form>
          </div>
        <br/>
      </div>
    )
  }
}

export default MyProfileEditGender