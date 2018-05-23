import React from 'react'
import {withGangsters} from "../../contexts/Gangsters";
import '../profile.css'
import { Link } from 'react-router-dom'

class MyProfileStepAvailability extends React.Component {
  state = {
    availability: []
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


  render() {

    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    return (
      <div>
        <h2>3. When are you available?</h2>
        <form>
          {weekdays.map(day =>
            <label key={day}>
              {day}
              <input
                name={day}
                type="checkbox"
                checked={this.state.availability.includes(day)}
                onChange={this.handleCheckboxChange} />
              <br/>
            </label>
          )}
        </form>


      </div>
    )
  }
}


export default withGangsters(MyProfileStepAvailability)