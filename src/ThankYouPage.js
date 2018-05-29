import React from 'react'
import { Link, withRouter } from 'react-router-dom'


const Style = {
  width: '80%',
  fontSize: '1.2rem',
  margin: '2px auto'
}

class ThankYouPage extends React.Component {

  goBackToGangster = () => {
    this.props.history.go(-2)
  }

  render() {
    return (
      <div style={Style}>
        <div>
          <br/>
          <h2>You have successfully submitted your order.</h2>
          <br/>
          <button style={{maxWidth: '200px', marginRight: '3%'}} onClick={this.goBackToGangster}>Book this gangster again</button>
          <Link to="/myorder"><button style={{maxWidth: '200px'}}>See a summary of your orders</button></Link>
         </div>
      </div>
    )
  }
}

export default withRouter(ThankYouPage)