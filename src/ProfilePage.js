import React from 'react'
import moment from 'moment'

import BookingCalendar from 'react-booking-calendar';

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
    const bookings = [
      new Date(2016, 7, 1),
      new Date(2016, 7, 2),
      new Date(2016, 7, 3),
      new Date(2016, 7, 9),
      new Date(2016, 7, 10),
      new Date(2016, 7, 11),
      new Date(2016, 7, 12),
    ];

    const MyBookingCalendar = () => (
      <BookingCalendar bookings={bookings} />
    );



    return (
      <div>

        {
          this.state.gangster === null
            ? 'Ładuję gangusa'
            : (
              <div>
                <p>{this.state.currentTime}</p>
                <h2>{gangster.first_name}</h2>
                <img src={gangster.image} alt={'face'}/>
                <p>Raiting</p>
                <p>{gangster.rating}</p>
                <p>{gangster.gender}</p>
                <p>{gangster.email}</p>
                <p>{gangster.hometown}</p>
                <p>{
                  days.map(
                    day => <p>{gangster.availability.includes(day) ? <strong>{day}</strong> : day}</p>
                  )
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





/* day sorter function
var data = [
  { day: "Friday", },
  { day: "Wednesday" },
  { day: "Sunday" },
  { day: "Thursday" },
  { day: "Saturday" }
];

var sorter = {

  "monday": 1,
  "tuesday": 2,
  "wednesday": 3,
  "thursday": 4,
  "friday": 5,
  "saturday": 6,
  "sunday": 7
}

data.sort(function sortByDay(a, b) {
  var day1 = a.day.toLowerCase();
  var day2 = b.day.toLowerCase();
  return sorter[day1] > sorter[day2];
});
*/
