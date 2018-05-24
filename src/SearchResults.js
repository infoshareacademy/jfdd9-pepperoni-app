import React from 'react'
import StarsRating from "./StarsRating";
import {Link} from "react-router-dom";
import {withGangsters} from "./contexts/Gangsters";

const listStyle = {
  fontSize: '25px',
  width: '80%',
  display: 'inline-block',
  textDecoration: 'none',
  marginTop: '26px',
  marginBottom: '0px',
  verticalAlign: 'top',
  color: '#ececec',
}

const name = {
  fontSize: '30px',
  color: '#ececec',
  textDecoration:'none',
}

const imageStyle = {
  borderRadius: '50%',
  margin: '10px',
  height: '120px',

}
const contenerStyle = {
  border: 'solid 1px rgba(31, 31, 31, 0.83)',
  borderRadius: '10px',
  backgroundColor: 'rgba(15, 15, 15, 0.83)',
  marginTop: '10px',
  marginBottom: '0px',
  padding: '20px'
}

const divTagStyle = {
  textDecoration: 'none',
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '0px',
  textAlign: 'center',
  alignItems: 'center',

}
const smallTagStyle = {
  margin: '8px',
  minHeight: '15px',
  width: '110px',
  fontSize: '13px',
  padding: '4px',
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
  textDecoration: 'none'
};

class SearchResults extends React.Component {
  render() {

    const error = this.props.gangsters.error
    const fetching = this.props.gangsters.fetching
    const gangsters = this.props.gangsters.data

    function compareRatings(a,b) {
      return b.rating - a.rating
    }
    console.log(gangsters);
const gangstersAfterFiltering = gangsters !== null && gangsters.filter(
  gangster => gangster.hometown.toLowerCase().startsWith(this.props.hometown.toLowerCase())
).sort(compareRatings).filter(
  gangster => this.props.selectedTags.every(tag => gangster.tags.includes(tag))
)
    return (

      <div>
        {error && <p>{error.message}</p>}
        {fetching && <p>Loading gangsters...</p>}

        { !fetching && gangstersAfterFiltering.length === 0 && <h2>We're sorry, there are no gangsters that meet your search criteria</h2>}

        {
          gangstersAfterFiltering.map(
            gangster =>
              <div style={contenerStyle} key={gangster.id}>
                  <div>
                    <Link to={'profile/' + gangster.id}><img style={imageStyle} src={gangster.image} alt={'face'}/></Link>
                    <p style={listStyle}>
                      <Link to={'profile/' + gangster.id} style={name}><strong >{gangster.first_name} </strong>
                      </Link>
                      <StarsRating rating={gangster.rating}/>
                      <br/>{gangster.hometown}
                      <br/>
                      <span style={divTagStyle}>
                      {gangster.tags.map(tag =>
                          <Link
                            to={'/gangsters-for-tag/' + tag}
                            key={tag}
                            style={smallTagStyle}>
                            {tag}
                          </Link>
                        )}
                    </span>
                      </p>
                  </div>
              </div>
          )
        }
      </div>
    )
  }
}

export default withGangsters(SearchResults)

