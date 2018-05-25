import React from 'react'
import ContactForm from "./Contactform";
import firebase from 'firebase'
import {withGangsters} from "./contexts/Gangsters";
import {withUser} from "./contexts/User";

const orderPageStyle = {
  width: '80%',
  margin: '0 auto'
}

class OrderPage extends React.Component {
  state = {
    gangster: null,

  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      gangster: nextProps.gangsters.data && nextProps.gangsters.data.find(
        gangster => gangster.id.toString() === nextProps.match.params.gangsterId
      )
    }
  }

  addNewJob = (jobType, dateOfOrder, message) => {
    const dateOfJob = Math.floor(this.props.match.params.selectedDate/1000)
    const jobsRef = firebase.database().ref('/jobs')

    console.log(dateOfJob, dateOfOrder, this.props.user.email, this.state.gangster.email, jobType, message)

    const newJob = jobsRef.push()
    newJob.set({
      'accepted': false,
      'dateOfJob': dateOfJob,
      'dateOfOrder': dateOfOrder,
      'done': false,
      'employer': this.props.user.email,
      'gangster': this.state.gangster.email,
      'jobType': jobType,
      'message': message,
    })
  }

  render() {

    return (
      <div style={orderPageStyle}>
        {
          this.state.gangster === null
          ? 'Loading order'
          : (
              <ContactForm gangster={this.state.gangster} addNewJob={this.addNewJob}/>
            )
        }
      </div>
    )
  }
}

export default withUser(withGangsters(OrderPage))