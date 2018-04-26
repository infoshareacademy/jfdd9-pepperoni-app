import React from 'react'
import LocationSearch from "./LocationSearch";

class MainSearchEngine extends React.Component {
  render() {
    return (
      <React.Fragment>
      <h2 >Main Search Engine
      </h2>
        <LocationSearch/>
      </React.Fragment>
    )
  }
}

export default MainSearchEngine