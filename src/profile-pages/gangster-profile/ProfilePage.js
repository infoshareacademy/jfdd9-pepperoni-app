import React from 'react'
import Calendar from "../Calendar";
import StarsRating from "../../StarsRating";
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'

// const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

class ProfilePage extends React.Component {
  state = {
    gangster: null,
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const gangsters = nextProps.gangsters.data
    return {
      gangster: gangsters.find(gangster => gangster.id.toString() === nextProps.match.params.gangsterId)
    }
  }

  // tick = () => {
  //   const dt = moment();
  //   this.setState({currentTime: dt.format('MMMM Do YYYY')});
  // }

  componentDidMount() {
    window.scrollTo(0, 0)
    // this.tick();
    // this.interval = setInterval(this.tick, 1000);
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
      <div className="profilePage">
        {
          this.state.gangster === null || this.state.gangster === undefined
            ? 'Loading gangster details'
            : (
              <div>
                <div className="calendar">
                  <Calendar availability={gangster.availability} gangsterId={this.state.gangster.id}/>
                </div>

                <div className="headerContainer">
                  <h1 className="header">{gangster.first_name}</h1>
                  <div className="stars"><StarsRating rating={gangster.rating}
                                                      gangsterId={gangster.id}
                  /></div>
                </div>

                <img className="image" src={gangster.image} alt={'face'}/>

                <div className="tagsContainer">
                  {gangster.tags.map(tag => <p key={tag} className="smallTag">{tag}</p>)}
                </div>

                <h3>{gangster.gender}</h3>

                <h3>Email: <a className="link" href={"mailto:" + gangster.email}>{gangster.email}</a></h3>

                <h3 className="lineSeparated">City: {gangster.hometown}</h3>

                <h3>Availability: </h3>
                <p className="lineSeparated">{gangster.availability.join(', ')}</p>


                <h2>About me</h2>
                <p className="lineSeparated">{gangster.description}</p>

                <h2>My experience</h2>
                <p className="lineSeparated">{gangster.experience}</p>

              </div>
            )
        }
      </div>

    )
  }
}

export default withGangsters(ProfilePage)

