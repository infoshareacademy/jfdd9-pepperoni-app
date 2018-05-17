import React, {Component} from 'react'
import firebase from 'firebase'


const GangstersContext = React.createContext()

const GangstersConsumer = GangstersContext.Consumer

export class GangstersProvider extends Component {
  state = {
    gangsters: null,
    fetching: false,
    error: null
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null
    })


    firebase.database().ref('/gangsters').once('value').then(
      snapshot => this.setState({
        gangsters: Object.entries(snapshot.val() || {}).map(([id, other ]) => ({id, ...other})),
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
      <GangstersContext.Provider value={this.state}>
        {this.props.children}
      </GangstersContext.Provider>
    )
  }
}

export function withGangsters(Component) {
  function GangstersAwareComponent(props) {
    return (
      <GangstersConsumer>
        {gangsters => <Component {...props} gangsters={gangsters}/>}
      </GangstersConsumer>
    );
  }

  GangstersAwareComponent.displayName = `GangstersAware(${Component.displayName || Component.name || 'Component'})`

  return GangstersAwareComponent
}