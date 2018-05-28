import React from 'react'
import firebase from 'firebase'
import {withJobs} from "./contexts/Jobs";
import {withGangsters} from "./contexts/Gangsters";
import {withUser} from "./contexts/User";
import ReactTable from "react-table";
import moment from 'moment';
import 'react-table/react-table.css';
import './react-table-ND.css'

const Style = {
  width: '80%',
  fontSize: '1.2rem',
  margin: '2px auto',
}

const h2 = {
  margin: '30px auto',
  textAlign: 'center',
}

const formSectionLayer = {
  maxWidth: '60rem',
  margin: '0 auto',
  padding: '1rem',
  textAlign: 'center',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  flexDirection: 'column',
  lineHeight: '2rem',
  border: 'solid 1px rgba(255, 255, 255, 0.3)',
  borderRadius: '10px',
  backgroundColor: 'rgba(15, 15, 15, 0.83)',
  marginTop: '2rem',
}

class MyOrders extends React.Component {

  handleClick = (event, data) => {
    console.log(event, data);

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


    const myOrdersAfterFiltering = jobs !== null && jobs.filter(job => job.employer === this.props.user.email.trim())
    const myJobsAfterFiltering = jobs !== null && jobs.filter(job => (job.gangster === this.props.user.email.trim()) && (job.gangster !== job.employer))


    console.log('myjobs', myJobsAfterFiltering);

    const columns1 = [{
      Header: 'Job type',
      accessor: 'jobType',
    },
      {
        Header: 'Gangster',
        accessor: 'gangster',
      },
      {
        Header: 'Date of job',
        accessor: 'dateOfJob',
        Cell: row => {
          // console.log(row)
          // console.log(moment(Date(row.value)))
          return (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "2px"
              }}>
              {moment(Date(row.value)).format("YYYY-MM-DD")}
            </div>
          )
        }
      },
      {
        Header: 'Done',
        accessor: 'done',
        Cell: row => {
          console.log('komórka', row, this.props)
          if (this.props.user.email === row.original.employer) {
            return (
              <div>
                {row.original.done ? 'Yes' : 'No'}
              </div>
            )
          }
          return (
            <div>
              <input type="checkbox" checked={row.original.done} onClick={((event) => this.handleClick(event, row))}/>
            </div>
          )
        }
      },
      {
        Header: 'Accepted',
        accessor: 'accepted',
        Cell: row => {
          console.log('komórka', row, this.props)
          if (this.props.user.email === row.original.employer) {
            return (
              <div>
                {row.original.accepted ? 'Yes' : 'No'}
              </div>
            )
          }
          return (
            <div>
              <input type="checkbox" checked={row.original.accepted}
                     onClick={((event) => this.handleClick(event, row))}/>
            </div>
          )
        }// String-based value accessors!
      }, {
        Header: 'Date of order',
        accessor: 'dateOfOrder',
        Cell: row => {
          console.log(row)
          return (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "2px"
              }}
            >
              {moment(Date(row.value)).format("YYYY-MM-DD")}
            </div>
          )
        }
      },
      {
        Header: 'Message',
        accessor: 'message',
      }
    ]
    const columns2 = [{
      Header: 'Job type',
      accessor: 'jobType',
    },
      {
        Header: 'Employer',
        accessor: 'employer',
      },
      {
        Header: 'Date of job',
        accessor: 'dateOfJob',
        Cell: row => {
          // console.log(row)
          // console.log(moment(Date(row.value)))
          return (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "2px"
              }}>
              {moment(Date(row.value)).format("YYYY-MM-DD")}
            </div>
          )
        }
      },
      {
        Header: 'Done',
        accessor: 'done',
        Cell: row => {
          console.log('komórka', row, this.props)
          if (this.props.user.email === row.original.employer) {
            return (
              <div>
                {row.original.done ? 'Yes' : 'No'}
              </div>
            )
          }
          return (
            <div>
              <input type="checkbox" checked={row.original.done} onClick={((event) => this.handleClick(event, row))}/>
            </div>
          )
        }
      },
      {
        Header: 'Accepted',
        accessor: 'accepted',
        Cell: row => {
          console.log('komórka', row, this.props)
          if (this.props.user.email === row.original.employer) {
            return (
              <div>
                {row.original.accepted ? 'Yes' : 'No'}
              </div>
            )
          }
          return (
            <div>
              <input type="checkbox" checked={row.original.accepted}
                     onClick={((event) => this.handleClick(event, row))}/>
            </div>
          )
        }// String-based value accessors!
      }, {
        Header: 'Date of order',
        accessor: 'dateOfOrder',
        Cell: row => {
          console.log(row)
          return (
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "2px"
              }}
            >
              {moment(Date(row.value)).format("YYYY-MM-DD")}
            </div>
          )
        }
      }
    ]
    return (
      <div style={Style}>
        {error && <p>{error.message}</p>}
        {fetching && <p>Loading jobs...</p>}

        {!fetching && myOrdersAfterFiltering.length === 0 &&
        <h2>You don't have any jobs or orders</h2>}

        {/*{jobsAfterFiltering && gangsters && ....}*/}
        <h2 style={h2}>MY ORDERS </h2>
        <ReactTable
          style={formSectionLayer}
          data={myOrdersAfterFiltering}
          columns={columns1}
          pageSize={5}
        />
        <h2 style={h2}>MY JOBS </h2>
        <ReactTable
          style={formSectionLayer}
          data={myJobsAfterFiltering}
          columns={columns2}
          pageSize={5}
        />
      </div>
    )
  }
}

export default withJobs(withUser(withGangsters(MyOrders)))
