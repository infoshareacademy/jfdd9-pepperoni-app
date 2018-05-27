import React from 'react'
import '../profile.css'
import closeIcon from './closeIcon.png'

class MyProfileEditAvailability extends React.Component {
  state = {
    availability: this.props.availability
  }

  unselectDay = (day) => {
    const newSelectedDays = [...this.state.availability];
    const dayIndex = newSelectedDays.indexOf(day);
    if (newSelectedDays.includes(day)) {
      newSelectedDays.splice(dayIndex, 1)
    };
    this.setState({
      availability: newSelectedDays
    })
  }

  handleCheckboxChange = event => {
    const target = event.target;
    const name = target.name;

    if (this.state.availability.includes(name)) {
      this.unselectDay(name)
    } else {
      this.setState({
        availability: this.state.availability.concat(name)
      })
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    this.props.updateData('availability', this.state.availability)
    this.props.exitEditMode()
  }

  render() {

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (

      <div className="containerInEditMode">
        <img className="closeButton" src={closeIcon} alt="Cancel" onClick={this.props.exitEditMode}/>
        <form onSubmit={this.handleSubmit}>
          {weekdays.map(day =>
            <label key={day} className="container">
              {day}
              <input
                name={day}
                type="checkbox"
                checked={this.state.availability.includes(day)}
                onChange={this.handleCheckboxChange} />
              <span className="checkmark"></span>
              <br/>
            </label>
          )}
          <button style={{width: '150px'}}>Add</button>
        </form>
        <h3>Your working days: {this.props.availability.join(", ")}</h3>
        <br/>

        {
          (this.props.availability.length === 0)
            ? (<button
              className="myProfileNextButton"
              style={{backgroundColor: '#4b5062'}}>
              Save
            </button>)
            : (<button onClick={this.handleSubmit}
                       className="myProfileNextButton"
                       style={{backgroundColor: '#E2083C'}}>
              Save
            </button>)
        }
        <div className="clear"></div>
      </div>

    )
  }
}

export default MyProfileEditAvailability