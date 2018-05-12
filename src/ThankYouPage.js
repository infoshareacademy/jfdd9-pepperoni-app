import React from 'react'
import logo from "./police.jpg"
import logoHead from "./police-head.gif"

const Style = {
  width: '80%',
  fontSize: '1.2rem',
  marginLeft: '100px',
  // textAlign: 'center',
}
const policeStyle = {
  height: '60px',
  margin: '0 auto',
}

const policeHeadStyle = {
  float: 'right',
  margin: '20px 0'
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
        {this.state.surprise &&
        <div>
          <img style={policeHeadStyle} src={logoHead} alt="Police head"/>
          <img style={policeHeadStyle} src={logoHead} alt="Police head"/>
          <img style={policeHeadStyle} src={logoHead} alt="Police head"/>
          <img style={policeHeadStyle} src={logoHead} alt="Police head"/>
          <img style={policeHeadStyle} src={logoHead} alt="Police head"/>
        </div>}
      <h1>Thank You!</h1>
      <h2>You have successfully submitted your order...</h2>
        {this.state.surprise &&
        <div>
          <h2>See you soon</h2> <img style={policeStyle} className="police" src={logo} alt="Police logo"/>
        </div>}
      </div>
    )
  }
}

export default ThankYouPage