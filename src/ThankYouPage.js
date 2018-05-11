import React from 'react'
import logo from "./police.jpg"

const Style = {
  fontSize: '45px',
  marginLeft: '100px'
  // textAlign: 'center',
}
const policeStyle = {
height: '60px'
}

class ThankYouPage extends React.Component {
  state={
    surprise: false,
  }

  componentDidMount() {
    this.intervalId = setTimeout(()=>{
      this.setState({surprise:true})
    },4000)

  }
  componentWillUnmount() {
    clearTimeout(this.intervalId)
  }
  render() {
    return (
      <div style={Style}>
      <h2 >Thank You Guys!
      </h2>
      <h6>Your order is successful submitted...</h6>
        {this.state.surprise && <h6>...we are going to visit You <img style={policeStyle} className="police" src={logo} alt="Police logo"/></h6> }
      </div>
    )
  }
}

export default ThankYouPage