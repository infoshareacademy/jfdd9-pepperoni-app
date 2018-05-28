import React from 'react'
import firebase from 'firebase'

const BLACK_STAR = '<span>★</span>'
const WHITE_STAR = '☆'
const stars = Array(5).fill('☆')


class StarsRating extends React.Component {
  gangsterRatings = firebase.database().ref('/gangsters/'+ this.props.gangsterId+'/ratings');
  onClickHandler(index, gangsterId) {
    const newRating = this.gangsterRatings.push()
     newRating.set(index +1)

    console.log(index, gangsterId)
  }

  render() {
    return (
     stars.map((star, index) => index < this.props.rating ? <span key={index} onClick={() => this.onClickHandler(index, this.props.gangsterId)}>★</span> : <span key={index} onClick={() =>this.onClickHandler(index, this.props.gangsterId)}>☆</span>)
    )
  }
}

export default StarsRating