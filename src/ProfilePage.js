import React from 'react'
import moment from 'moment'
import Calendar from "./Calendar";
import StarsRating from "./StarsRating";

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const profilePageStyle = {
  width: '80%',
  margin: '0 auto',
}

const profileStyle = {
  display: 'block',
  verticalAlign: 'middle',
}

const headerStyle = {
  margin: '10px',
  display: 'inline-block',
}


const calendarStyle = {
  float: 'right',
  marginRight: '5%',
  textAlign: 'center',
  padding: '50px',
  marginTop: '0',
  border: 'solid 1px rgba(31, 31, 31, 0.83)',
  borderRadius: '10px',
  backgroundColor: 'rgba(15, 15, 15, 0.83)',
}

const starsStyle ={
  display: 'inline',
  fontSize: '32px',
}

const imageStyle = {
    borderRadius: '50%',
    margin: '10px',
    height: '200px',
}

const lineSeparated = {
  paddingBottom: '20px',
  borderBottom: 'solid 1px rgba(31, 31, 31, 0.83)',
}

const divTagStyle = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '10px',
  textAlign: 'center',
  alignItems: 'center',
}

const smallTagStyle = {
  margin: '8px',
  minHeight: '30px',
  width: '150px',
  fontSize: '14px',
  padding: '5px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#E2083C',
  textShadow: 'none',
  outline: 'inherit',
  fontFamily: 'Quattrocento, serif',
  color: 'white',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const linkStyle = {
  textDecoration: 'none',
  color: 'inherit',
  cursor: 'pointer',
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
    this.setState({currentTime: dt.format('MMMM Do YYYY')});
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
            ? 'Loading gangster details'
            : (
              <div>
                <div style={calendarStyle}>
                  <Calendar availability={gangster.availability} gangsterId={this.state.gangster.id}/>
                </div>

                <div style={profileStyle}>
                  <h1 style={headerStyle}>{gangster.first_name}</h1>
                  <div style={starsStyle}><StarsRating rating={gangster.rating}/></div>
                </div>

                <img style={imageStyle} src={process.env.PUBLIC_URL + gangster.image} alt={'face'}/>

                <div style={divTagStyle}>
                  {gangster.tags.map(tag => <p key={tag} style={smallTagStyle}>{tag}</p>)}
                </div>

                <h3>{gangster.gender}</h3>

                <h3>Email: <a style={linkStyle} href={"mailto:" + gangster.email}>{gangster.email}</a></h3>

                <h3 style={lineSeparated}>City: {gangster.hometown}</h3>

                <h3>Availability: </h3>
                <p style={lineSeparated}>{gangster.availability.join(', ')}</p>


                <h2>About me</h2>
                <p style={lineSeparated}>{gangster.description}</p>

                <h2>My experience</h2>
                <p style={lineSeparated}>{gangster.experience}</p>

                <h2>They recommend me</h2>
                <p style={lineSeparated}>{gangster.opinions}</p>


              </div>
            )
        }
      </div>

    )
  }
}

export default ProfilePage

