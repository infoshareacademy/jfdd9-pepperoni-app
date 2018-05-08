import React from 'react'
import LocationSearch from "./LocationSearch";
import SearchResults from "./SearchResults";
import TagSearch from "./TagSearch";

class MainSearchEngine extends React.Component {

  state = {
    hometown: '',
    selectedTags: []
  }

  addCity = (cityName) => {
    this.setState({
      hometown: cityName
      }
    )
  }

  selectTag = (tagName) => {
    this.setState({
      selectedTags: this.state.selectedTags.includes(tagName) ? this.state.selectedTags : this.state.selectedTags.concat(tagName),
    })
  }

  render() {
    return (
      <React.Fragment>
      <h2>Search for gangsters...
      </h2>
        <LocationSearch addCity={this.addCity}/>
        <TagSearch selectTag={this.selectTag}/>
        <SearchResults hometown={this.state.hometown} selectedTags={this.state.selectedTags}/>
      </React.Fragment>
    )
  }
}

export default MainSearchEngine