import React from 'react'
import ContactForm from "./Contactform";


class OrderPage extends React.Component {


  render() {
    return (
      <div>
      <h2>Order Page
      </h2>
        <ContactForm/>
        <h2>{this.props.params.selectedDate}</h2>
      </div>
    )
  }
}

export default OrderPage