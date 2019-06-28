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
    mot de passe : demo123 
    
    deploy firebase :
    npm i -g firebase-tools 
    firebase init
    hosting site
    dossier build
    yes une seule page index.html
    overwrite no (à voir)
    npm run build
    firebase deploy 
    
    si problème, s'adapter et voir les options proposées 
    créer fichier firebase.json à la racine
    refaire tout du début firebase init, npm run build... et firebase deploy
    
    une fois que le projet a été déployé :
    firebase use --add
    select project et donner nom
    firebase use bibliotheque
    npm run build
    firebase deploy */