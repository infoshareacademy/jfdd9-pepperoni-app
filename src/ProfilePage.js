import React from 'react'
import moment from 'moment'

class ProfilePage extends React.Component {


  state = {
    gangster: null
  }

  static defaultProps = {
    hometown: 'Gdańsk'
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/gangsterDatabase.json').then(
      response => response.json()
    ).then(
      gangsters => this.setState({gangster: gangsters.find(gangster => gangster.id.toString() === this.props.match.params.gangsterId)})
    )
  }

  /* state = {
     id: '',
     first_name: '',
     rating: '',
     gender: '',
     email: '',
     image: '',
     hometown: '',
     availability: '',
     tags: '',
     description: '',
     experience: '',
     opinions: '',
   } */

  render() {
    const update = function() {
      document.getElementById("datetime")
        .innerHTML = dt.format('MMMM Do YYYY, h:mm:ss a');
    }();
    setInterval(update, 1000);
    const dt = moment().format()
    const gangster = this.state.gangster
    return (
      <div>
        <h2>Profile
        </h2>
        {
          this.state.gangster === null
            ? 'Ładuję gangusa'
            : (
              <div>
                <p>{dt}</p>
                <p>{gangster.first_name}</p>
                <img src={gangster.image} alt={'face'}/>
                <p>Raiting</p>
                <p>{gangster.rating}</p>
                <p>{gangster.gender}</p>
                <p>{gangster.email}</p>
                <p>{gangster.hometown}</p>
                <p>{gangster.availability.join(', ')}</p>
                <p>{gangster.tags.join(', ')}</p>
                <p>{gangster.description}</p>
                <p>{gangster.experiance}</p>
                <p>{gangster.opinions}</p>
              </div>
            )
        }
      </div>

    )
  }
}

export default ProfilePage