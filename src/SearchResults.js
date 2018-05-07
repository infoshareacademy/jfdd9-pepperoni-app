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
              ).map(
                gangster =>

                  <div style={contenerStyle} key={gangster.id}>
                    <Link to={'profile/' +  gangster.id } >
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

