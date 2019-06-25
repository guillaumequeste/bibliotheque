import React, { Component } from 'react'
import Navigation from './components/Navigation'
import firebase from './firebase'
import './App.css'

class App extends Component {
  state = {
    authenticated: false,
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
            authenticated: true,
          }))
        : this.setState(() => ({
            authenticated: false,
          }));
    });
  }

  render() {
    return <Navigation authenticated={this.state.authenticated} />;
  }
 }

 export default App;

 /* mail: demo@demo.fr
    mot de passe : demo123 */