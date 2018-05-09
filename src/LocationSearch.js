import React from 'react'

const formStyle = {
  padding: '20px',
  width: '80%',
  border: '#383838 solid 3px',
  color: 'white',
  borderRadius: '5px',
  marginBottom: '10px'
}

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
    }, () => this.props.addCity(this.state.hometown))
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input style={formStyle} type="text" placeholder="Enter city" name="hometown" value={this.state.hometown} onChange={this.handleChange}/>
          </form>
        </div>
      </React.Fragment>
    )
  }
}

export default LocationSearch