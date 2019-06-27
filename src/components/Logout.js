import React from 'react'
import firebase from 'firebase'
import './Logout.css'

const logOutUser = () => {
 firebase.auth().signOut();
};

const Logout = () => {
 return <button onClick={logOutUser} type="submit" className="btn btn-secondary">Log Out</button>;
};

export default Logout;
