import React from 'react'
import ContactForm from "./Contactform";


class OrderPage extends React.Component {


  render() {
    return (
      <div>
      <h2>Order Page
      </h2>
        <ContactForm/>
        <h2>{this.props.match.params.gangsterId}</h2>
      </div>
    )
  }
}

export default OrderPage