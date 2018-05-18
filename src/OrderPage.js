import React from 'react'
import ContactForm from "./Contactform";
import moment from 'moment';
import {withGangsters} from "./contexts/Gangsters";

const orderPageStyle = {
  width: '80%',
  margin: '0 auto'
}

class OrderPage extends React.Component {
  state = {
    gangster: null,
    selectedTag: ''
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const gangsters = nextProps.gangsters.data
    return {
      gangster: gangsters.find(gangster => gangster.id.toString() === nextProps.match.params.gangsterId)
    }
  }

  handleTagChange = event => {
    this.setState({
      selectedTag: event.target.value
    })
  }


  render() {
    var date = moment.unix((this.props.match.params.selectedDate/1000)).format("DD/MM/YYYY");
    return (
      <div style={orderPageStyle}>
        {
          this.state.gangster === null || this.state.gangster === undefined
          ? 'Loading order'
          : (
            <div>
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

export default withGangsters(OrderPage)