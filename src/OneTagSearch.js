import React from 'react'

class OneTagSearch extends React.Component {


  render() {
    return (
      <div>
        { error && <p>{error.message}</p>}
        { fetching && <p>Loading gangsters...</p>}
        {
          gangsters !== null && gangsters.filter(
            gangster => gangster.tags.toLowerCase().includes(this.props.tags.toLowerCase())
          ).filter(
            gangster => this.props.selectedTags.every(tag => gangster.tags.includes(tag))
          ).map(
            gangster =>

              <div style={contenerStyle} key={gangster.tag}>
                <Link to={'/' + gangster.tag}>
                  <img src={gangster.image} alt={'face'}/>
                  <p style={listStyle}>{gangster.first_name} </p>
                </Link>
                <StarsRating rating={gangster.rating}/>
                <p style={listStyle}>{gangster.tag} </p>
                <p>{gangster.tags.join(', ')}</p>
              </div>
          )
        }
      </div>

    )
  }
}

  export default OneTagSearch