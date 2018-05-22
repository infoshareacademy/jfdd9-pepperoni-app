import React, {Component} from 'react'
import firebase from 'firebase'


const JobsContext = React.createContext()

const JobsConsumer =JobsContext.Consumer

export class JobsProvider extends Component {
  state = {
    data: [],
    fetching: false,
    error: null,
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null
    })


    firebase.database().ref('/jobs').once('value').then(
      snapshot => this.setState({
        data: Object.entries(snapshot.val() || {}).map(([id, other ]) => ({id, ...other})),
        fetching: false
      })
    ).catch(
      error => this.setState({
        error,
        fetching: false
      })
    )
  }

  render() {
    return (
      <JobsContext.Provider value={this.state}>
        {this.props.children}
      </JobsContext.Provider>
    )
  }
}

export function withJobs(Component) {
  function JobsAwareComponent(props) {
    return (
      <JobsConsumer>
        {jobs => <Component {...props} jobs={jobs}/>}
      </JobsConsumer>
    );
  }

  JobsAwareComponent.displayName = `JobsAware(${Component.displayName || Component.name || 'Component'})`

  return JobsAwareComponent
}