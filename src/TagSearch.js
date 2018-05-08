import React from 'react'

const tagStyle = {
  display: 'inline-block',
  margin: '2px',
  padding: '5px',
  borderRadius: '5px',
  backgroundColor: '#FFB0CB'
};


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
      <React.Fragment>
        {this.state.tags.map(tag =>
          <button
            name={tag}
            style={{...tagStyle, backgroundColor: this.props.selectedTags.includes(tag) ? '#e2083c' : tagStyle.backgroundColor }}
            key={tag}
            onClick={(event) => this.props.selectTag(event.currentTarget.name)}>
            {tag}
            </button>)}
      </React.Fragment>

    )
  }
}

export default TagSearch