import React from 'react'
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'
import { withRouter } from 'react-router-dom'
import firebase from 'firebase'
import {withUser} from "../../contexts/User";

class MyProfileStepAdditionalInformation extends React.Component {
  state = {
    experience: '',
    description: '',
    experienceFormError: null,
    descriptionFormError: null,
    file: null,
    imagePreviewUrl: '',
    processingImage: false,
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
        imagePreviewUrl: reader.result,
        processingImage: true,
      });
    }

    reader.readAsDataURL(file);

    this.uploadPhotoToFirebase(file)
  }

  uploadPhotoToFirebase = photo => {
    const storageRef = firebase.storage().ref('/photos');
    const email = this.props.user.email
    const photoRef = storageRef.child(email)
    const updateStateURL = this.props.updateStateURL
    const that = this


    photoRef.put(photo).then(function(){
      const imageRef = firebase.storage().ref('/photos/' + email)
      imageRef.getDownloadURL().then(function(url){
        updateStateURL(url)
        that.setState({
          processingImage: false,
        })
      })
    })
  }

  finishUpdatingProfile = () => {
    this.props.sendDataToFirebase()
    this.props.history.push('/myprofile/')
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
    let {imagePreviewUrl} = this.state
    let imagePreview = null
    if (imagePreviewUrl) {
      imagePreview = (<img src={imagePreviewUrl} alt="Preview" className="previewedImage"/>)
    } else {
      imagePreview = (<p className="imagePreviewText">Please upload your image</p>)
    }

    return (
      <div>
        <h2>4. Additional information</h2>
        <form onSubmit={this.handleSubmit}>
          <strong>Experience: {this.props.experience}</strong>
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
          <strong>Description: {this.props.description}</strong>
          <br/>
          <textarea
            className="textareaStyle"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          { this.state.descriptionFormError && <p>{this.state.descriptionFormError.message}</p>}
          <br/>
          <button style={{width: '150px'}}>Add</button>
          <br/>
          <br/>
          <strong>Add your photo</strong>
          <br/>
          <br/>
          <input
            type="file"
            id="input"
            onChange={this.getPhoto}/>
          <br/>
        </form>
        <br/>
        <div className="imgPreview">
          {imagePreview}
        </div>

        <button onClick={() => this.props.history.goBack()}
                className="myProfileBackButton"
                style={{backgroundColor: '#4b5062'}}>
          Go back
        </button>
        {
          (this.props.experience === '' || this.state.processingImage === true)
            ? (<button
              className="myProfileNextButton"
              style={{backgroundColor: '#4b5062'}}>
              Update your profile
            </button>)
            : (<button onClick={this.finishUpdatingProfile}
              className="myProfileNextButton"
              style={{backgroundColor: '#E2083C'}}>
             Update your profile
            </button>)
        }
      </div>
    )
  }

}


export default withRouter(withUser(withGangsters(MyProfileStepAdditionalInformation)))