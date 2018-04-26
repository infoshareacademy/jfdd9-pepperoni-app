import React from 'react'

class ProfilePage extends React.Component {
  render() {
    return (
      <h2>Profile
      </h2>
  )
  }
  state = {
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
  }

}

export default ProfilePage