import React from 'react'
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'
import { Link, withRouter } from 'react-router-dom'

class MyProfileStepAdditionalInformation extends React.Component {
  state = {
    experience: '',
    description: '',
    experienceFormError: null,
    descriptionFormError: null,
    file: null,
    imagePreviewUrl: null
  }

  handleChange = event => {
    const targetName = event.target.name
    this.setState({
      [targetName]: event.target.value,
    })

    if (targetName === 'experience') {
      this.setState({
        experienceFormError: null
      })
    }

    if (targetName === 'description') {
      this.setState({
        descriptionFormError: null
      })
    }
  }

  getPhoto = event => {
    event.preventDefault()
    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file);
  }

  handleSubmit = event => {
    event.preventDefault()

    let isError = false;

    if (this.state.experience.trim() === '' && !this.props.experience) {
      this.setState({
        experienceFormError: new Error('Please describe your experience')
      })
      isError = true;
    }

    if (this.state.description === '') {
      this.setState({
        descriptionFormError: new Error('Please add a little bit of information about yourself')
      })
      isError = true;
    }

    if (isError) {
      return
    }

    this.props.addAdditionalInformation(this.state.experience, this.state.description)

    this.setState({
      experienceFormError: null,
      descriptionFormError: null,
    })
  }

  render() {
    return (
      <div>
        <h2>4. Additional information</h2>
        <form onSubmit={this.handleSubmit}>
          <strong>Experience</strong>
          <br/>
          <textarea
            className="textareaStyle"
            name="experience"
            value={this.state.experience}
            onChange={this.handleChange}
          />
          { this.state.experienceFormError && <p>{this.state.experienceFormError.message}</p>}
          <br/>
          <br/>
          <strong>Description</strong>
          <br/>
          <textarea
            className="textareaStyle"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <br/>
          <strong>Add your photo</strong>
          <input
            type="file"
            id="input"
            onChange={this.getPhoto}/>
        </form>
      </div>
    )
  }

}


export default withRouter(withGangsters(MyProfileStepAdditionalInformation))