import React from 'react'
import '../profile.css'
import firebase from "firebase";
import closeIcon from "./closeIcon.png"
import { withUser} from "../../contexts/User";


class MyProfileEditImage extends React.Component {

  state = {
    file: null,
    imagePreviewUrl: '',
    processingImage: false,
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
    const that = this
    photoRef.put(photo).then(function(){
      const imageRef = firebase.storage().ref('/photos/' + email)
      imageRef.getDownloadURL().then(function(url){
        that.props.updateData('image', url)
        that.setState({
          processingImage: false,
        })
      })
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
      <div className="containerInEditMode">
        <img className="closeButton" src={closeIcon} alt="Cancel" onClick={this.props.exitEditMode}/>
        <form>
          <p>Update your image</p>
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
        {
          (this.state.processingImage === true)
            ? (<button
                className="myProfileNextButton"
                style={{backgroundColor: '#4b5062'}}>
                Save
            </button>)
            : (<button
                onClick={this.props.exitEditMode}
                className="myProfileNextButton"
                style={{backgroundColor: '#E2083C'}}>
                Save
            </button>)
        }
        <div className="clear"></div>
      </div>

    )
  }
}

export default withUser(MyProfileEditImage)