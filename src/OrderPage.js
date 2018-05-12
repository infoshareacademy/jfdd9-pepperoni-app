import React from 'react'
import ContactForm from "./Contactform";
import moment from 'moment';
import { Link } from 'react-router-dom'

const orderPageStyle = {
  width: '80%',
  margin: '0 auto'
}

class OrderPage extends React.Component {
  state = {
    gangster: null,
    selectedTag: ''
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/gangsterDatabase.json').then(
      response => response.json()
    ).then(
      gangsters => this.setState({gangster: gangsters.find(gangster => gangster.id.toString() === this.props.match.params.gangsterId)})
    )
  }

  handleTagChange = event => {
    this.setState({
      selectedTag: event.target.value
    })
  }


  render() {
    var date = moment.unix((this.props.match.params.selectedDate/1000)).format("YYYY-MM-DD");
  console.log(process.env)
    return (
      <div style={orderPageStyle}>
        {
          this.state.gangster === null
          ? 'Ładuję gangusa'
          : (
            <div>
              <img src={process.env.PUBLIC_URL + '/arrowIcon.png'} alt="Go back" />
              <Link to={'/profile/' + this.state.gangster.id}>Go back to gangster profile</Link>
              <h1>Your order</h1>
              <h2>Gangster: {this.state.gangster.first_name}</h2>
              <h2>Date: {date}</h2>
              <h2>Job: {this.state.selectedTag}</h2>
              <ContactForm tags={this.state.gangster.tags} handleTagChange={this.handleTagChange}/>
            </div>
            )
        }
      </div>
    )
  }
}

export default OrderPage