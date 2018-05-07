import React from 'react'
import StarsRating from "./StarsRating";
import {Link} from "react-router-dom";

const listStyle = {
  fontSize: '18px',
  display: 'inline-block',
}
const contenerStyle = {
  border: '1px black solid',

}



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
              ).filter(
                gangster => this.props.selectedTags.every(tag => gangster.tags.includes(tag))
              ).map(
                gangster =>
                  <Link to={'profile/' +  gangster.id } key={gangster.id}>
                  <div style={contenerStyle} >
                    <img src={gangster.image} alt={'face'}/>
                    <p style={listStyle}>{gangster.first_name} </p>
                    <StarsRating rating={gangster.rating}/>
                    <p>{gangster.tags.join(', ')}</p>
                  </div>
                  </Link>
              )
          }
        </div>
    )
  }
}

export default SearchResults

