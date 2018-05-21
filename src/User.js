import React, { Component } from 'react'
import firebase from 'firebase'

const UserContext = React.createContext()

export const UserConsumer = UserContext.Consumer

export class UserProvider extends Component {
  state = {
    signInError: null,
    user: null,
    userData: null,
    signIn: (username, password) => {
      firebase.auth().signInWithEmailAndPassword(username, password).then(user => {
        //firebase.database().ref('/gangsters/' + user.uid).once()
      } ).catch(
        error => this.setState({
          signInError: error
        })
      )
    },
    signOut: () => firebase.auth().signOut(),
    signUp: (username, password) => {
      return firebase.auth().createUserWithEmailAndPassword(username, password).then(
        (data) => {
          console.log(data.user.uid, data.user.email);
          firebase.database().ref('/gangsters/' + data.user.uid).set({
            email: data.user.email,
            tags: ['newbe']
          })
          return data
        }
      )
    }
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(
      user => this.setState({ user: user })
    )
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }

  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    )
  }
}

export function withUser(Component) {
  function UserAwareComponent(props) {
    return (
      <UserConsumer>
        {
          state => <Component {...props} {...state}/>
        }
      </UserConsumer>
    );
  }

  UserAwareComponent.displayName = `UserAware(${Component.displayName || Component.name || 'Component'})`

  return UserAwareComponent
}