import React from 'react'
import firebase from 'firebase'
import Popup from "reactjs-popup";

const stars = Array(5).fill('☆')


class StarsRating extends React.Component {
  gangsterRatings = firebase.database().ref('/gangsters/'+ this.props.gangsterId+'/ratings');
  onClickHandler(index, gangsterId) {
    const newRating = this.gangsterRatings.push()
     newRating.set(index +1)
  }

  render() {
    return (

      <Popup trigger={
        <span> {stars.map((star, index) => index < this.props.rating
          ? <span key={index} style={{cursor: 'pointer'}}
                  onClick={() => this.onClickHandler(index, this.props.gangsterId)}>★</span>
          : <span key={index} style={{cursor: 'pointer'}}
                  onClick={() => this.onClickHandler(index, this.props.gangsterId)}>☆</span>)
        }</span>
  } position="bottom center">
        <div>Thanks for voting</div>
      </Popup>)

  }
}

export default StarsRating