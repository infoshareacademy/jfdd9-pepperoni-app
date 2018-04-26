import React from 'react'

class SearchResults extends React.Component {

  state = {
    gangsters: null
  }

  static defaultProps = {
    hometown: 'Gdańsk'
  }

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/gangsterDatabase.json').then(
      response => response.json()
    ).then(
      gangsters => this.setState({ gangsters: gangsters })
    )
  }
  render() {
    debugger
    return (
        <div >
          <h2>Client 1</h2>
          {
            this.state.gangsters === null
              ? 'Ładuję gangusów'
              : this.state.gangsters.filter(
                gangster => gangster.hometown === this.props.hometown
              ).map(
                gangster => <p>{gangster.first_name}</p>
              )
          }
        </div>
    )
  }
}

export default SearchResults

