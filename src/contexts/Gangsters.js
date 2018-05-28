import React, {Component} from 'react'
import firebase from 'firebase'


const GangstersContext = React.createContext()

const GangstersConsumer = GangstersContext.Consumer

export class GangstersProvider extends Component {
  state = {
    data: [],
    fetching: false,
    error: null,
    uniqueTags: []
  }

  componentDidMount() {
    this.setState({
      fetching: true,
      error: null
    })

    firebase.database().ref('/gangsters').once('value').then(
      snapshot => this.setState({
        data: Object.entries(snapshot.val() || {}).map(([id, other ]) => ({id, ...other})),
        uniqueTags: Array.from(new Set(Object.entries(snapshot.val() || {}).map(([, {tags} ]) => tags).reduce((prev, next) => prev.concat(next || [])))),
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