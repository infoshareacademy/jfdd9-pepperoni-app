import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Link } from 'react-router-dom'

import 'react-datepicker/dist/react-datepicker.css';

import './Calendar.css'


class Calendar extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            selectedDate: moment(),
            currentWeekDay: moment().format('dddd'),
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(date) {
        this.setState({
            selectedDate: date
        });
    }

  render() {
        return (
          <div>
            <h2>When do you want to get your job done?</h2>
          <DatePicker
            selected={this.state.selectedDate}
            onChange={this.handleChange}
            includeDates={this.props.availability.map(weekday => moment()
              .add(7,'day').day(weekday))
              .concat(this.props.availability
                .map(weekday => moment().day(weekday))
                .filter(date => date.isAfter(moment().subtract(1, 'day'))))}
            placeholderText="Click to book your gangster" />

            <Link to={'/order/' + this.props.gangsterId + '/' + this.state.selectedDate}><button>Book this guy</button></Link>

          </div>
        );
    }
}

export default Calendar