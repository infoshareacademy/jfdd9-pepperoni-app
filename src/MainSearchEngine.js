import React from 'react'
import LocationSearch from "./LocationSearch";
import SearchResults from "./SearchResults";

class MainSearchEngine extends React.Component {

  state = {
    hometown: ''
  }

  addCity = (cityName) => {
    this.setState({
      hometown: cityName
      }
    )
  }

  render() {
    return (
      <React.Fragment>
      <h2>Search for gangsters...
      </h2>
        <LocationSearch addCity={this.addCity}/>
        <SearchResults hometown={this.state.hometown}/>
      </React.Fragment>
    )
  }
}

export default MainSearchEngine