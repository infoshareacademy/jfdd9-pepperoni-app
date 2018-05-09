import React from 'react'
import StarsRating from "./StarsRating";
import {Link} from "react-router-dom";

const listStyle = {
  fontSize: '18px',
  display: 'inline-block',
}
const contenerStyle = {
  border: 'solid 1px rgba(31, 31, 31, 0.83)',
  borderRadius: '10px',
  backgroundColor: 'rgba(15, 15, 15, 0.83)',
  marginTop: '10px',
  padding: '20px'
}



class SearchResults extends React.Component {

  state = {
    gangsters: null,
    fetching: false,
    error: null
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null
    })

    fetch(process.env.PUBLIC_URL + '/gangsterDatabase.json').then(
      response => response.json()
    ).then(
      gangsters => this.setState({gangsters: gangsters, fetching: false})
    ).catch(
      error => this.setState({
        error,
        fetching: false
      })
    )
  }

  render() {
    const {gangsters, error, fetching} = this.state
    return (
      <div>
        { error && <p>{error.message}</p>}
        { fetching && <p>Loading gangsters...</p>}
        {
          gangsters !== null && gangsters.filter(
            gangster => gangster.hometown.toLowerCase().startsWith(this.props.hometown.toLowerCase())
          ).filter(
            gangster => this.props.selectedTags.every(tag => gangster.tags.includes(tag))
          ).map(
            gangster =>

              <div style={contenerStyle} key={gangster.id}>
                <Link to={'profile/' + gangster.id}>
                  <img src={gangster.image} alt={'face'}/>
                  <p style={listStyle}>{gangster.first_name} </p>
                </Link>
                <StarsRating rating={gangster.rating}/>
                <p style={listStyle}>{gangster.hometown} </p>
                <p>{gangster.tags.join(', ')}</p>
              </div>
          )
        }
      </div>
    )
  }
}

export default SearchResults

