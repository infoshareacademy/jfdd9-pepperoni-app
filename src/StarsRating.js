import React from 'react'
import firebase from 'firebase'

const BLACK_STAR = '<div>★</div>'
const WHITE_STAR = '☆'
const stars = Array(5).fill('☆')


class StarsRating extends React.Component {
  gangsterRatings = firebase.database().ref('/gangsters/'+ this.props.gangsterId+'/ratings');
  onClickHandler(index, gangsterId) {
    const newRating = this.gangsterRatings.push()
     newRating.set({value: index +1})

    console.log(index, gangsterId)
  }

  render() {
    return (
     stars.map((star, index) => index < this.props.rating ? <div onClick={() => this.onClickHandler(index, this.props.gangsterId)}>★</div> : <div onClick={() =>this.onClickHandler(index, this.props.gangsterId)}>☆</div>)
    )
  }
}

export default StarsRating