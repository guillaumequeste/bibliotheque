import * as firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "AIzaSyDMFgMTa7za6tTo_Hhz6M1ORxtSNPXdc9k",
  authDomain: "react-firestore-5021d.firebaseapp.com",
  databaseURL: "https://react-firestore-5021d.firebaseio.com",
  projectId: "react-firestore-5021d",
  storageBucket: "react-firestore-5021d.appspot.com",
  messagingSenderId: "1070317056319",
  appId: "1:1070317056319:web:438afdbbf233414e"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;