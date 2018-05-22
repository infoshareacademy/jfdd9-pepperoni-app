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
      <div>
        {error && <p>{error.message}</p>}
        {fetching && <p>Loading jobs...</p>}

        {!fetching && jobsAfterFiltering.length === 0 &&
        <h2>We're sorry, there are no job at the moment for you</h2>}
      </div>
    )
  }
}

export default withJobs(withUser(withGangsters(MyOrders)))
