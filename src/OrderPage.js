import React from 'react'
import ContactForm from "./Contactform";
import moment from 'moment';

const orderPageStyle = {
  width: '80%',
  margin: '0 auto'
}

class OrderPage extends React.Component {
  state = {
    gangster: null,
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/gangsterDatabase.json').then(
      response => response.json()
    ).then(
      gangsters => this.setState({gangster: gangsters.find(gangster => gangster.id.toString() === this.props.match.params.gangsterId)})
    )
  }


  render() {
    var date = moment.unix((this.props.match.params.selectedDate/1000)).format("YYYY-MM-DD");

    return (
      <div style={orderPageStyle}>
        {
          this.state.gangster === null
          ? 'Ładuję gangusa'
          : (
            <div>
              <h1>Your order summary</h1>
              <h2>Name: {this.state.gangster.first_name}</h2>
              <h2>Date: {date}</h2>
              <h2>Job: </h2>
              <ContactForm/>
            </div>
            )
        }
      </div>
    )
  }
}

export default OrderPage