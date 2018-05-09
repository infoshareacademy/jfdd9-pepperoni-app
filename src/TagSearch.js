import React from 'react'

const tagStyle = {
  width: '90px',
  display: 'inline-block',
  margin: '8px',
  minHeight: '40px',
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
  width: '80%',
  display: 'flex',
  flexWrap: 'wrap',
  marginLeft: '10px',

}

class TagSearch extends React.Component {
  state = {
    tags: [],
  }


  componentDidMount() {
    fetch(process.env.PUBLIC_URL + '/gangsterDatabase.json').then(
      response => response.json()
    ).then(
      gangsters => this.setState({
        tags: Array.from(new Set(gangsters.map(gangster => gangster.tags).reduce((prev, next) => prev.concat(next))))
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