import React from 'react'
import firebase from 'firebase'

const stars = Array(5).fill('☆')


class StarsRatingStatic extends React.Component {
  gangsterRatings = firebase.database().ref('/gangsters/'+ this.props.gangsterId+'/ratings');

  render() {
    return (
      stars.map((star, index) => index < this.props.rating
        ? <span key={index}>★</span>
        : <span key={index}>☆</span>)
    )
  }
}

export default StarsRatingStatic