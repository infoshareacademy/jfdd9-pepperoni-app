import React from 'react'

const BLACK_STAR = '★'
const WHITE_STAR = '☆'
const stars = Array(5).fill('☆')

class StarsRating extends React.Component {
  render() {
    return (
     stars.map((star, index) => index < this.props.rating ? BLACK_STAR : WHITE_STAR)
    )
  }
}

export default StarsRating