import React from 'react'
import ContactForm from "./Contactform";
import moment from 'moment';
import firebase from 'firebase'
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
    return {
      gangster: nextProps.gangsters.data && nextProps.gangsters.data.find(
        gangster => gangster.id.toString() === nextProps.match.params.gangsterId
      )
    }
  }




  render() {
    return (
      <div style={orderPageStyle}>
        {
          this.state.gangster === null
          ? 'Loading order'
          : (

              <ContactForm gangster={this.state.gangster}/>

            )
        }
      </div>
    )
  }
}

export default withGangsters(OrderPage)