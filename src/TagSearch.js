import React from 'react'

const tagStyle = {
  width: '90px',
  display: 'inline-block',
  margin: '2px',
  padding: '5px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#FFB0CB'
};

const divTagStyle = {
  width: '70%',
  display: 'flex',
  justifyContent: 'space-around',
  marginLeft: '10px'
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
            style={{...tagStyle, backgroundColor: this.props.selectedTags.includes(tag) ? '#e2083c' : tagStyle.backgroundColor }}
            key={tag}
            onClick={(event) => this.props.selectTag(event.currentTarget.name)}>
            {tag}
            </button>)}
      </div>

    )
  }
}

export default TagSearch