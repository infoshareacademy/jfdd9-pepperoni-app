import React from 'react'


class LocationSearch extends React.Component {
  state ={
    hometown: ''
  }

  handleSubmit = event => {
    event.preventDefault()

    this.props.addCity(this.state.hometown)
  }

  handleChange = event => {
    this.setState({
      hometown: event.target.value
    })
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Enter city" name="hometown" value={this.state.hometown} onChange={this.handleChange}/>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default LocationSearch