import React from 'react'
import { Link } from 'react-router-dom'

const Style = {
  width: '80%',
  fontSize: '1.2rem',
  marginLeft: '100px',
}

class ThankYouPage extends React.Component {
  render() {
    return (
      <div style={Style}>
        <div>
        </div>}
      <h1>Thank You!</h1>
      <h2>You have successfully submitted your order.</h2>
        <div>
          <Link to=""><button>Book this gangster again</button></Link>
          <Link to=""><button>See a summary of your orders</button></Link>
        </div>}
      </div>
    )
  }
}

export default ThankYouPage