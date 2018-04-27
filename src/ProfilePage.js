import React from 'react'

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
                <p>{gangster.first_name}</p>
                <p>{gangster.ratinge}</p>
                <p>{gangster.gender}</p>
                <p>{gangster.email}</p>
                <p>{gangster.hometown}</p>
                <p>{gangster.availbility}</p>
                <p>{gangster.tags}</p>
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