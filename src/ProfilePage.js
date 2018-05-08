import React from 'react'
import moment from 'moment'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

class ProfilePage extends React.Component {


  state = {
    gangster: null
  }

  static defaultProps = {
    hometown: 'Gdańsk'
  }

  tick = () => {
    const dt = moment();
    this.setState({currentTime: dt.format('MMMM Do YYYY, h:mm:ss ')});
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/gangsterDatabase.json').then(
      response => response.json()
    ).then(
      gangsters => this.setState({gangster: gangsters.find(gangster => gangster.id.toString() === this.props.match.params.gangsterId)})
    )


    this.tick();
    this.interval = setInterval(this.tick, 1000);
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

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  render() {
    const gangster = this.state.gangster
    const sorter = {
      "monday": 1,
      "tuesday": 2,
      "wednesday": 3,
      "thursday": 4,
      "friday": 5,
      "saturday": 6,
      "sunday": 7,

    }


    const ava = {gangster: availability.join(', ')}
    ava.sort(function sortByDay(a, b) {
        var day1 = a.day.toLowerCase();
        var day2 = b.day.toLowerCase();
        return sorter[day1] > sorter[day2];
      })



    return (
      <div>
        <h2>Profile
        </h2>
        {
          this.state.gangster === null
            ? 'Ładuję gangusa'
            : (
              <div>
                <p>{this.state.currentTime}</p>
                <p>{gangster.first_name}</p>
                <img src={gangster.image} alt={'face'}/>
                <p>Raiting</p>
                <p>{gangster.rating}</p>
                <p>{gangster.gender}</p>
                <p>{gangster.email}</p>
                <p>{gangster.hometown}</p>
                <p>{ava
                  //days.map(
                   // day => <p>{gangster.availability.includes(day) ? <strong>{day}</strong> : day}</p>
                 // )
                }
                </p>
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

/*.sort(function sortByDay(a, b) {
  var day1 = a.day.toLowerCase();
  var day2 = b.day.toLowerCase();
  return sorter[day1] > sorter[day2];
})*/;
