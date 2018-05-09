import React from 'react'
import moment from 'moment'
import './Calendar.css'
import BookingCalendar from 'react-booking-calendar';


class Calendar extends React.Component {


  render() {

    const bookings = this.props.availability;

    const MyBookingCalendar = () => (
      <BookingCalendar bookings={bookings} clickable={true} />
    );

    return (
      <div className="calendar-container">{MyBookingCalendar()}</div>

    )
  }
}

export default Calendar