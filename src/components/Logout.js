import React from 'react'
import firebase from 'firebase'

const logOutUser = () => {
 firebase.auth().signOut();
};

const Logout = () => {
 return <button onClick={logOutUser} type="submit">Log Out</button>;
};

export default Logout;
