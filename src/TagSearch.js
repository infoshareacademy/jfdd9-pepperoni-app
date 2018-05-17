import React from 'react'
import firebase from "firebase";

const tagStyle = {
  width: '150px',
  display: 'inline-block',
  margin: '8px',
  minHeight: '50px',
  padding: '5px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#4b5062',
  cursor: 'pointer',
  outline: 'inherit',
  fontFamily: 'Quattrocento, serif',
  color: 'white',
  fontWeight: 'bold'
};

const divTagStyle = {
  width: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '10px',
}

class TagSearch extends React.Component {
  state = {
    tags: [],
  }

  componentDidMount() {
    firebase.database().ref('/gangsters').once('value').then(
      gangsters =>  this.setState({
        tags: Array.from(new Set(Object.entries(gangsters.val() || {}).map(([, {tags} ]) => tags).reduce((prev, next) => prev.concat(next))))
      })
    )
  }

  render() {
    return (
      <div style={divTagStyle}>
        {this.state.tags.map(tag =>
          <button
            name={tag}
            style={{...tagStyle, backgroundColor: this.props.selectedTags.includes(tag) ? '#E2083C' : tagStyle.backgroundColor }}
            key={tag}
            onClick={(event) => this.props.selectTag(event.currentTarget.name)}>
            {tag}
            </button>)}
      </div>

    )
  }
}

export default TagSearch