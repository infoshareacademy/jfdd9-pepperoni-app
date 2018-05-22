import React from 'react'
import firebase from 'firebase'
import {withJobs} from "./contexts/Jobs";
import {withGangsters} from "./contexts/Gangsters";
import {withUser} from "./contexts/User";


class MyOrders extends React.Component {

  render() {

    const error = this.props.gangsters.error
    const fetching = this.props.gangsters.fetching
    const jobs = this.props.jobs.data

    const jobsAfterFiltering = jobs !== null && jobs.filter(job => job.employer === this.props.user.email)

    console.log(jobsAfterFiltering)


    return (
      <div></div>
    )
  }
}

export default withJobs(withUser(withGangsters(MyOrders)))
