import React from 'react'
import firebase from 'firebase'
import {withJobs} from "./contexts/Jobs";
import {withGangsters} from "./contexts/Gangsters";
import {withUser} from "./contexts/User";
import ReactTable from "react-table"
import moment from 'moment'
import 'react-table/react-table.css'

class MyOrders extends React.Component {

  handleClick = (event,data) => {
    console.log(event,data);

    firebase.database().ref('/jobs/' + data.original.id).update({
      accepted: true,

    })
  };

  render() {


    const error = this.props.gangsters.error
    const fetching = this.props.gangsters.fetching
    const jobs = this.props.jobs.data
    const gangsters = this.props.gangsters.data;
    console.log(gangsters)



    const myOrdersAfterFiltering = jobs !== null && jobs.filter(job => job.employer === this.props.user.email)
    const myJobsAfterFiltering = jobs !== null && jobs.filter(job => job.gangster === this.props.user.email)

    console.log('myjobs', myJobsAfterFiltering);

    // const data = [{
    //   accepted:'false',
    //   dateOfJob: 1527170060,
    //   dateOfOrder: 1526997342,
    //   done: false,
    //   employer: "paulina.paulina@paulina.com",
    //   gangster: "jh95bxzx",
    //   jobType: "assault",
    //   message: "siema, zrob to"
    //
    // }]
    const columns = [{
      Header: 'Accepted',
      accessor: 'accepted',
      Cell: row => {
        console.log('komórka', row, this.props)
        if(this.props.user.email === row.original.employer) {
          return (
            <div>
              {row.original.accepted ? 'Yes' : 'No'}
            </div>
          )
        }


        return (
          <div>
            <input type="checkbox" checked={row.original.accepted} onClick={((event) => this.handleClick(event,row))} />
          </div>
        )
      }// String-based value accessors!
    }, {
      Header: 'Date of job',
      accessor: 'dateOfJob',
      Cell: row => {
        console.log(row)
        return (
          <div
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#dadada",
              borderRadius: "2px"
            }}
          >
            {moment(row.value).format()}
          </div>
        )
      }
      //Cell: props => <span className='number'>{props.value}</span> // Custom cell components!
    }, {
      //id: 'Date of order', // Required because our accessor is not a string
      Header: 'Date of order',
      accessor: 'dateOfOrder',
      //accessor: d => d.friend.name // Custom value accessors!
    }, {
      //Header: props => <span>Friend Age</span>, // Custom header components!
      Header: 'Done',
      accessor: 'done',
    },{
      Header: 'Employer',
      accessor: 'employer',
    }, {
      Header: 'Gangster',
      accessor: 'gangster',
    },{
      Header: 'Job type',
      accessor: 'jobType',
    }]


    return (
      <div>
        {error && <p>{error.message}</p>}
        {fetching && <p>Loading jobs...</p>}

        {!fetching && myOrdersAfterFiltering.length === 0 &&
        <h2>We're sorry, there are no job at the moment for you</h2>}

        {/*{jobsAfterFiltering && gangsters && ....}*/}
        <ReactTable
          data={myOrdersAfterFiltering}
          columns={columns}
          pageSize = {5}
        />
        <h2>my jobs </h2>
        <ReactTable
          data={myJobsAfterFiltering}
          columns={columns}
          pageSize = {5}
        />
      </div>
    )
  }
}

export default withJobs(withUser(withGangsters(MyOrders)))
