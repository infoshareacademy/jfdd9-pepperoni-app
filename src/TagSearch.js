import React from 'react'
import {withGangsters} from "./contexts/Gangsters";

const tagStyle = {
  width: '150px',
  display: 'inline-block',
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
  render() {
    const tags = this.props.gangsters.uniqueTags

    return (
      <div style={divTagStyle}>
        {tags.map(tag =>
          <button
            name={tag}
            style={{...tagStyle, backgroundColor: this.props.selectedTags.includes(tag) ? '#E2083C' : tagStyle.backgroundColor, margin: tag=='robbery' ? '8px 8px 8px -100px' : '' }}
            key={tag}
            onClick={(event) => this.props.selectTag(event.currentTarget.name)}>
            {tag}
            </button>)}
      </div>

    )
  }
}

export default withGangsters(TagSearch)