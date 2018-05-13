import React from 'react'
import StarsRating from "./StarsRating";
import {Link} from "react-router-dom";

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
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '0px',
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
  backgroundColor: '#4b5062',
  textShadow: 'none',
  outline: 'inherit',
  fontFamily: 'Quattrocento, serif',
  color: 'white',
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

class GangstersForTag extends React.Component {

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

    function compareRatings(a,b) {
      return b.rating - a.rating
    }

    return (
      <div>
        {error && <p>{error.message}</p>}
        {fetching && <p>Loading gangsters...</p>}
        {
          gangsters !== null && gangsters.filter(
            gangster => gangster.tags.includes(this.props.match.params.tagName)
          ).sort(compareRatings).map(
            gangster =>

              <div style={contenerStyle} key={gangster.id}>
                <div>
                  <img style={imageStyle} src={gangster.image} alt={'face'}/>
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

export default GangstersForTag