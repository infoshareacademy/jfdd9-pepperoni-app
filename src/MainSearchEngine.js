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
      hometown: cityName,
      selectedTags: this.state.selectedTags
      }
    )
  }

  unselectTag = (tagName) => {
    const newSelectedTags = this.state.selectedTags;
    const tagIndex = newSelectedTags.indexOf(tagName);
    newSelectedTags.includes(tagName) ? newSelectedTags.splice(tagIndex) : newSelectedTags;
    this.setState({
      hometown: this.state.hometown,
      selectedTags: newSelectedTags
    })
  }

  selectTag = (tagName) => {
    if (this.state.selectedTags.includes(tagName)) {
      this.unselectTag(tagName)
    } else {
    this.setState({
      hometown: this.state.hometown,
      selectedTags: this.state.selectedTags.concat(tagName),
    })
    }
  }

  render() {
    return (
      <React.Fragment>
      <h2>Search for gangsters...
      </h2>
        <LocationSearch addCity={this.addCity}/>
        <TagSearch selectTag={this.selectTag} selectedTags={this.state.selectedTags}/>
        <SearchResults hometown={this.state.hometown} selectedTags={this.state.selectedTags}/>
      </React.Fragment>
    )
  }
}

export default MainSearchEngine