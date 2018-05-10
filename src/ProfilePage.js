import React from 'react'
import moment from 'moment'
import Calendar from "./Calendar";
import StarsRating from "./StarsRating";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const profilePageStyle = {
  width: '80%',
  margin: '0 auto'
}

const profileStyle = {
  display: 'flex',
  alignItems: 'center',
}

const calendarStyle = {
  float: 'right',
  marginRight: '5%',
  textAlign: 'right'
}

const headerStyle = {
  display: 'inline-block',
}

const imageStyle = {
    borderRadius: '50%',
    margin: '10px',
    height: '200px',
}

class ProfilePage extends React.Component {
  state = {
    gangster: null,
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

    return (
      <div style={profilePageStyle}>
        {
          this.state.gangster === null
            ? 'Ładuję gangusa'
            : (
              <div>
                <div style={calendarStyle}>
                  <Calendar availability={gangster.availability} gangsterId={this.state.gangster.id}/>
                </div>
                <p>{this.state.currentTime}</p>
                <div style={profileStyle}>
                  <img style={imageStyle} src={process.env.PUBLIC_URL + gangster.image} alt={'face'}/>
                  <h1 style={headerStyle}>{gangster.first_name}</h1>
                  <StarsRating rating={gangster.rating}/>
                  {/*<img style={imageStyle} src={process.env.PUBLIC_URL + gangster.image} alt={'face'}/>*/}
                </div>
                  <br/>
                {/*<img style={imageStyle} src={process.env.PUBLIC_URL + gangster.image} alt={'face'}/>*/}
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

