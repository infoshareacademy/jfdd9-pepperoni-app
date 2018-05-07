import React from 'react'

class SearchResults extends React.Component {

  state = {
    gangsters: null
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/gangsterDatabase.json').then(
      response => response.json()
    ).then(
      gangsters => this.setState({ gangsters: gangsters })
    )
  }
  render() {
    return (
        <div >
          {
            this.state.gangsters === null
              ? 'Ładuję gangusów'
              : this.state.gangsters.filter(
                gangster => gangster.hometown.toLowerCase().includes(this.props.hometown.toLowerCase())
              ).map(
                gangster => <p key={gangster.id}>{gangster.first_name}</p>
              )
          }
        </div>
    )
  }
}

export default SearchResults

