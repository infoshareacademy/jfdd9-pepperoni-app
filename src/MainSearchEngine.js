import React from 'react'
import LocationSearch from "./LocationSearch";
import SearchResults from "./SearchResults";
import TagSearch from "./TagSearch";

const mainSearchEngineStyle = {
  width: '80%',
  margin: '2px auto'
}

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
    if (newSelectedTags.includes(tagName)) {
      newSelectedTags.splice(tagIndex, 1)
    };
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
      <div style={mainSearchEngineStyle}>
        <h1>Find your gangster</h1>
          <LocationSearch addCity={this.addCity}/>
          <TagSearch selectTag={this.selectTag} selectedTags={this.state.selectedTags}/>
        <SearchResults hometown={this.state.hometown} selectedTags={this.state.selectedTags}/>
      </div>
    )
  }
}

export default MainSearchEngine